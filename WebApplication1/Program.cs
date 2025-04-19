
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using GradProject.Data;
using GradProject.Models.Entities;


namespace GradProject
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();


            // Add DbContext
            builder.Services.AddDbContext<AppDbContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


            // Add Identity with int keys
            builder.Services.AddIdentity<User, IdentityRole<int>>()
                .AddEntityFrameworkStores<AppDbContext>()
                .AddDefaultTokenProviders();

            // Configure JWT Authentication
            var jwtSettings = builder.Configuration.GetSection("Jwt");
            var key = Encoding.UTF8.GetBytes(jwtSettings["Key"]);

            builder.Services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = jwtSettings["Issuer"],
                    ValidAudience = jwtSettings["Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(key)
                };
            });
            // Add CORS policy 
            //builder.Services.AddCors(options =>
            //{
            //    options.AddPolicy("AllowFrontend",
            //        policy => policy.WithOrigins("http://localhost:3000", "http://127.0.0.1:3000") // Update with your frontend URL
            //                        .AllowAnyMethod()
            //                        .AllowAnyHeader()
            //                        .AllowCredentials());
            //});


            var app = builder.Build();

            //// Configure the HTTP request pipeline.
            //if (app.Environment.IsDevelopment())
            //{
            //    app.UseSwagger();
            //    app.UseSwaggerUI();
            //}

            app.UseHttpsRedirection();


            // Enable static file serving (e.g., HTML, CSS, JS)
            app.UseDefaultFiles();   // 🔹 لتقديم ملفات مثل index.html تلقائيًا
            app.UseStaticFiles();    // 🔹 للسماح بتحميل ملفات CSS, JS, Images, وغيرها

            app.UseRouting();        // 🔹 يجب أن يكون قبل المصادقة والتفويض

            //app.UseCors("AllowFrontend");  // 🔹 يجب أن يكون قبل UseAuthentication

            app.UseAuthentication();  // 🔹 يجب أن يكون قبل UseAuthorization
            app.UseAuthorization();   // 🔹 يجب أن يكون بعد UseAuthentication

            app.MapControllers();     // 🔹 لتحديد مسارات API

            app.MapFallbackToFile("main.html"); // 🔹 تحويل الطلبات غير المعروفة إلى main.html

            app.Run();

        }
    }
}
