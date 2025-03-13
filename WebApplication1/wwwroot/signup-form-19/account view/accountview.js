// const pages = {
//     "profile": "profile.html",
//     "settings": "settings.html",
//     "progress": "progress.html",
//     "certificates": "certifications.html",
//     "certifications": "certifications.html"
    
// };

// document.getElementById("searchInput").addEventListener("keypress", function(event) {
//     if (event.key === "Enter") { 
//         let searchQuery = this.value.toLowerCase().trim();
//         if (pages[searchQuery]) {
//             window.location.href = pages[searchQuery];
//         } else {
//             alert("not found"); 
//         }
//     }
// });

// document.getElementById("searchButton").addEventListener("click" , function() {
//     let searchQuery=document.getElementById("searchInput").value.toLowerCase().trim();
//     if (pages[searchQuery]) {
//         window.location.href =pages[searchQuery];
//     }
//     else{
//         alert("not found")
//     }
// });

// modified code for the upper one
const pages = {
    "profile": "accountview.html",
    "settings": "settings.html",
    "progress": "progress.html",
    "certificates": "certifications.html",
    "certifications": "certifications.html",
    "password":"settings.html"
};

// search when ENTER
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") { 
        searchPage();
    }
});

// Search when click button
document.getElementById("searchButton").addEventListener("click", function() {
    searchPage();
});

//search function
function searchPage() {
    let searchQuery = document.getElementById("searchInput").value.toLowerCase().trim();
    if (pages[searchQuery]) {
        window.location.href = pages[searchQuery];
    } else {
        alert("Page not found!");
    }
}





document.addEventListener("DOMContentLoaded", function () {
    let notificationBadge = document.getElementById("notificationBadge");
    let notificationIcon = document.getElementById("notificationIcon");
    let notificationList = document.getElementById("notificationList");
    let notificationsUl = document.getElementById("notifications");

    let notifications = []; 

    // محاكاة وصول إشعارات جديدة بعد وقت معين
    setTimeout(() => { addNotification("New message from the Founder!"); }, 3000);
    setTimeout(() => { addNotification("Your progress has been updated."); }, 5000);

    //المفروض استبدل المحاكاة ب API
    // دا كود ال فيتش لما الباك يبعته
    // function fetchNotifications() {
    //     fetch("https://example.com/api/notifications") // رابط الـ API
    //         .then(response => response.json()) // تحويل الرد إلى JSON
    //         .then(data => {
    //             notifications = data.notifications; //تخزين الإشعارات في الماتريكس 
    //             updateNotificationsUI();
    //         })
    //         .catch(error => console.error("Error fetching notifications:", error));
    // }
    
    // // فيتش البيانات كل 10 ثوان عشان النوتيفيكشنز الجديدة
    // setInterval(fetchNotifications, 10000);
    

    function addNotification(message) {
        notifications.push(message);
        updateNotificationsUI();
    }

    // update the ul
    notificationsUl.innerHTML = ""; // delete older notifications
    function updateNotificationsUI() {
        notifications.forEach((msg, index) => {
            let li = document.createElement("li");
            li.textContent = msg;
            notificationsUl.appendChild(li);
        });

        // for the red circle
        if (notifications.length > 0) {
            showNotification();
        } else {
            hideNotification();
        }
    }

    // show the red circle
    function showNotification() {
        notificationBadge.style.display = "block";
    }

    // hide the red circle
    function hideNotification() {
        notificationBadge.style.display = "none";
    }

    // when we click the bell
    notificationIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // to keep the list open unless...
        hideNotification() //hide the circle when we click the bell
        notificationList.style.display = (notificationList.style.display === "block") ? "none" : "block";
    });

    // unles...when click anywhere else
    document.addEventListener("click", function (event) {
        if (!notificationIcon.contains(event.target) && !notificationList.contains(event.target)) {
            notificationList.style.display = "none";
        }
    });
});


   
document.addEventListener("DOMContentLoaded", function () {
    loadUserData();
    document.getElementById("logoutButton").addEventListener("click", logoutUser);
});

async function loadUserData() {
    const token = sessionStorage.getItem("token") || localStorage.getItem("token");

    if (!token) {
        alert("Unauthorized! Please log in.");
        window.location.href = "../signin.html";
        return;
    }

    try {
        const response = await fetch("http://localhost:5147/api/auth/profile", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch user data!");
        }

        const userData = await response.json();

        document.getElementById("Username").value = userData.username || "";
        document.getElementById("Email").value = userData.email || "";

    } catch (error) {
        console.error("❌ Error fetching user data:", error);
        //alert("Something went wrong while loading your profile. Check console for details.");
    }
}

function enableEdit(fieldId) {
    document.getElementById(fieldId).removeAttribute("disabled");
}

async function saveChanges() {
    const token = sessionStorage.getItem("token") || localStorage.getItem("token");
    if (!token) {
        alert("Unauthorized! Please log in.");
        return;
    }

    const username = document.getElementById("Username").value.trim();
    const email = document.getElementById("Email").value.trim();

    try {
        const response = await fetch("http://localhost:5147/api/auth/update-profile", {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Username: username, Email: email })
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Failed to update profile");
        }

        alert("Profile updated successfully!");
        window.location.reload();
    } catch (error) {
        console.error("Error updating profile:", error);
        alert("Error updating profile.");
    }
}



//// the user data fetch in the profile welcome coloumn
//        document.getElementById('userNAME').textContent = userData.Username || "Guest";
//        document.getElementById('userLABS').textContent = userData.UserLabs || "Guest";
//        document.getElementById('userLEVEL').textContent = userData.UserLevel || "Guest";

        
        // الاسماء بتاع ال داتا.نيم والحاجات دي ال جوا ال اينر اتش تي ام ال بتتغير ع حسب ال اي بي أي
  
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// start of SETTINGS page

// fetching the place holders of the general info form
// اتاكدي من اسماء محتويات الداتا في ال اي بي اي من الباك

    //document.getElementById('User-Name').placeholder=userData.Username


    //document.getElementById('email').placeholder=userData.Email

// when click change button

function enableEdit(inputId) {
    let inputField = document.getElementById(inputId);
    
    // remove "disabled" attribute
    inputField.removeAttribute("disabled");
    inputField.focus(); 
    
    // عشان هعمل كذا event على نفس الايليمينت
    inputField.onblur = null;
    inputField.onkeydown = null;

    // when out from the field it auto saves
    inputField.onblur = function () {
        saveData(inputId, inputField.value);
        // back to disabled
        inputField.setAttribute("disabled", true); 
    };

    // also autosaves when we click enter
    inputField.onkeydown = function (event) {
        if (event.key === "Enter") {
            // do the same operations as blur funcsion
            inputField.blur(); 
        }
    };
    
        
        
}

// log out button activation 
document.getElementById("logoutButton").addEventListener("click", function () {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    window.location.href = "../signin.html";
});
