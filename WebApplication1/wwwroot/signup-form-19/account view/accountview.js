
//// modified code for the upper one
//const pages = {
//    "profile": "accountview.html",
//    "settings": "settings.html",
//    "progress": "progress.html",
//    "certificates": "certifications.html",
//    "certifications": "certifications.html",
//    "password": "settings.html"
//};

//// search when ENTER
//document.getElementById("searchInput").addEventListener("keypress", function (event) {
//    if (event.key === "Enter") {
//        searchPage();
//    }
//});

//// Search when click button
//document.getElementById("searchButton").addEventListener("click", function () {
//    searchPage();
//});

////search function
//function searchPage() {
//    let searchQuery = document.getElementById("searchInput").value.toLowerCase().trim();
//    if (pages[searchQuery]) {
//        window.location.href = pages[searchQuery];
//    } else {
//        alert("Page not found!");
//    }
//}

//async function fetchUserProfile() {
//    const token = sessionStorage.getItem("token") || localStorage.getItem("token");

//    if (!token) {
//        alert("Session expired, please log in again.");
//        window.location.href = "../signin.html";
//        return;
//    }

//    try {
//        const response = await fetch("https://localhost:7149/api/auth/profile", {
//            method: "GET",
//            headers: {
//                "Authorization": `Bearer ${token}`,
//                "Content-Type": "application/json"
//            }
//        });

//        if (!response.ok) {
//            const errorData = await response.json();
//            console.error("Server error:", errorData);
//            alert(errorData.message || "Failed to fetch user profile");
//            return;
//        }

//        const data = await response.json();
//        console.log("User profile data:", data); // طباعة البيانات للتأكد

//        // تحديث الصفحة بالبيانات المسترجعة
//        document.getElementById("user-name").textContent = data.username || "Guest";
//        document.getElementById("user-card-name").childNodes[0].textContent = data.username + " ";
//    } catch (error) {
//        console.error("Error fetching user profile:", error);
//        //alert("Error loading profile.");
//    }
//}

//// ✅ تشغيل الفنكشن بعد تحميل الصفحة
//document.addEventListener("DOMContentLoaded", function () {
//    fetchUserProfile();

//    const logoutBtn = document.getElementById("logoutButton");
//    if (logoutBtn) {
//        logoutBtn.addEventListener("click", function () {
//            localStorage.removeItem("token");
//            sessionStorage.removeItem("token");
//            window.location.href = "../signin.html";
//        });
//    }
//});



//document.addEventListener("DOMContentLoaded", function () {
//    let notificationBadge = document.getElementById("notificationBadge");
//    let notificationIcon = document.getElementById("notificationIcon");
//    let notificationList = document.getElementById("notificationList");
//    let notificationsUl = document.getElementById("notifications");

//    let notifications = [];

//    // محاكاة وصول إشعارات جديدة بعد وقت معين
//    setTimeout(() => { addNotification("New message from the Founder!"); }, 3000);
//    setTimeout(() => { addNotification("Your progress has been updated."); }, 5000);



//    function addNotification(message) {
//        notifications.push(message);
//        updateNotificationsUI();
//    }

//    // update the ul
//    notificationsUl.innerHTML = ""; // delete older notifications
//    function updateNotificationsUI() {
//        notifications.forEach((msg, index) => {
//            let li = document.createElement("li");
//            li.textContent = msg;
//            notificationsUl.appendChild(li);
//        });

//        // for the red circle
//        if (notifications.length > 0) {
//            showNotification();
//        } else {
//            hideNotification();
//        }
//    }

//    // show the red circle
//    function showNotification() {
//        notificationBadge.style.display = "block";
//    }

//    // hide the red circle
//    function hideNotification() {
//        notificationBadge.style.display = "none";
//    }

//    // when we click the bell
//    notificationIcon.addEventListener("click", function (event) {
//        event.stopPropagation(); // to keep the list open unless...
//        hideNotification() //hide the circle when we click the bell
//        notificationList.style.display = (notificationList.style.display === "block") ? "none" : "block";
//    });

//    // unles...when click anywhere else
//    document.addEventListener("click", function (event) {
//        if (!notificationIcon.contains(event.target) && !notificationList.contains(event.target)) {
//            notificationList.style.display = "none";
//        }
//    });
//});



////document.addEventListener("DOMContentLoaded", function () {
////    loadUserData();
////    document.getElementById("logoutButton").addEventListener("click", logoutUser);
////});

////async function loadUserData() {
////    const token = sessionStorage.getItem("token") || localStorage.getItem("token");

////    if (!token) {
////        alert("Unauthorized! Please log in.");
////        window.location.href = "../signin.html";
////        return;
////    }

////    try {
////        const response = await fetch("https://localhost:7149/api/auth/profile", {
////            method: "GET",
////            headers: {
////                "Authorization":`Bearer ${ token }`,
////            "Content-Type": "application/json"
////            }
////        });

////if (!response.ok) {
////    throw new Error("Failed to fetch user data!");
////}

////const userData = await response.json();

////document.getElementById("Username").value = userData.Username || "";
////document.getElementById("Email").value = userData.Email || "";

////    } catch (error) {
////    console.error("❌ Error fetching user data:", error);
////    //alert("Something went wrong while loading your profile. Check console for details.");
////}
////}

////function enableEdit(fieldId) {
////    document.getElementById(fieldId).removeAttribute("disabled");
////}

////async function saveChanges() {
////    const token = sessionStorage.getItem("token") || localStorage.getItem("token");
////    if (!token) {
////        alert("Unauthorized! Please log in.");
////        return;
////    }

////    const username = document.getElementById("Username").value.trim();
////    const email = document.getElementById("Email").value.trim();

////    try {
////        const response = await fetch("https://localhost:7149/api/auth/update-profile", {
////            method: "PUT",
////            headers: {
////                "Authorization":`Bearer ${ token }`,
////            "Content-Type": "application/json"
////            },
////    body: JSON.stringify({ Username: username, Email: email })
////});

////const result = await response.json();

////if (!response.ok) {
////    throw new Error(result.message || "Failed to update profile");
////}

////alert("Profile updated successfully!");
////window.location.reload();
////    } catch (error) {
////    console.error("Error updating profile:", error);
////    alert("Error updating profile.");
////}
////}



////// the user data fetch in the profile welcome coloumn
////        document.getElementById('userNAME').textContent = userData.Username || "Guest";
////        document.getElementById('userLABS').textContent = userData.UserLabs || "Guest";
////        document.getElementById('userLEVEL').textContent = userData.UserLevel || "Guest";


//// الاسماء بتاع ال داتا.نيم والحاجات دي ال جوا ال اينر اتش تي ام ال بتتغير ع حسب ال اي بي أي

//// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//// start of SETTINGS page

//// fetching the place holders of the general info form
//// اتاكدي من اسماء محتويات الداتا في ال اي بي اي من الباك

////document.getElementById('User-Name').placeholder=userData.Username


////document.getElementById('email').placeholder=userData.Email

//// when click change button

//function enableEdit(inputId) {
//    let inputField = document.getElementById(inputId);

//    // remove "disabled" attribute
//    inputField.removeAttribute("disabled");
//    inputField.focus();

//    // عشان هعمل كذا event على نفس الايليمينت
//    inputField.onblur = null;
//    inputField.onkeydown = null;

//    // when out from the field it auto saves
//    inputField.onblur = function () {
//        saveData(inputId, inputField.value);
//        // back to disabled
//        inputField.setAttribute("disabled", true);
//    };

//    // also autosaves when we click enter
//    inputField.onkeydown = function (event) {
//        if (event.key === "Enter") {
//            // do the same operations as blur funcsion
//            inputField.blur();
//        }
//    };



//}

//document.addEventListener("DOMContentLoaded", function () {
//    loadUserData();
//    document.getElementById("logoutButton").addEventListener("click", logoutUser);
//});

//async function loadUserData() {
//    const token = sessionStorage.getItem("token") || localStorage.getItem("token");

//    if (!token) {
//        alert("Unauthorized! Please log in.");
//        window.location.href = "../signin.html";
//        return;
//    }

//    try {
//        const response = await fetch("https://localhost:7149/api/auth/profile", {
//            method: "GET",
//            headers: {
//                "Authorization": `Bearer ${token}`,
//                "Content-Type": "application/json"
//            }
//        });

//        if (!response.ok) {
//            throw new Error("Failed to fetch user data!");
//        }

//        const userData = await response.json();

//        document.getElementById("Username").value = userData.username || "";
//        document.getElementById("Email").value = userData.email || "";

//    } catch (error) {
//        console.error("❌ Error fetching user data:", error);
//        //alert("Something went wrong while loading your profile. Check console for details.");
//    }
//}

//function enableEdit(fieldId) {
//    document.getElementById(fieldId).removeAttribute("disabled");
//}

//async function saveChanges() {
//    const token = sessionStorage.getItem("token") || localStorage.getItem("token");
//    if (!token) {
//        alert("Unauthorized! Please log in.");
//        return;
//    }

//    const username = document.getElementById("Username").value.trim();
//    const email = document.getElementById("Email").value.trim();

//    try {
//        const response = await fetch("https://localhost:7149/update-profile", {
//            method: "PUT",
//            headers: {
//                "Authorization": `Bearer ${token}`,
//                "Content-Type": "application/json"
//            },
//            body: JSON.stringify({ Username: username, Email: email })
//        });

//        const result = await response.json();

//        if (!response.ok) {
//            throw new Error(result.message || "Failed to update profile");
//        }

//        alert("Profile updated successfully!");
//        window.location.reload();
//    } catch (error) {
//        console.error("Error updating profile:", error);
//        alert("Error updating profile.");
//    }
//}

//document.addEventListener("DOMContentLoaded", fetchUserProfile);
//function enablePasswordInputs() {
//    document.getElementById("oldPassword").disabled = false;
//    document.getElementById("newPassword").disabled = false;
//    document.getElementById("confirmPassword").disabled = false;
//}

//async function submitNewPassword() {
//    const oldPass = document.getElementById("oldPassword").value;
//    const newPass = document.getElementById("newPassword").value;
//    const confirmPass = document.getElementById("confirmPassword").value;
//    const errorMessage = document.getElementById("ERRORmessage");
//    const token = sessionStorage.getItem("token") || localStorage.getItem("token");

//    errorMessage.style.display = "none";

//    if (!oldPass || !newPass || !confirmPass) {
//        errorMessage.textContent = "Please fill in all fields.";
//        errorMessage.style.display = "block";
//        return;
//    }

//    if (newPass !== confirmPass) {
//        errorMessage.textContent = "New passwords do not match.";
//        errorMessage.style.display = "block";
//        return;
//    }

//    try {
//        const response = await fetch("https://localhost:7149/api/auth/change-password", {
//            method: "PUT",
//            headers: {
//                "Authorization": `Bearer ${token}`,
//                "Content-Type": "application/json"
//            },
//            body: JSON.stringify({
//                oldPassword: oldPass,
//                newPassword: newPass
//            })
//        });

//        const result = await response.json();

//        if (!response.ok) {
//            throw new Error(result.message || "Failed to change password.");
//        }

//        alert("Password changed successfully!");

//        // Clear and disable fields again
//        document.getElementById("oldPassword").value = "";
//        document.getElementById("newPassword").value = "";
//        document.getElementById("confirmPassword").value = "";
//        document.getElementById("oldPassword").disabled = true;
//        document.getElementById("newPassword").disabled = true;
//        document.getElementById("confirmPassword").disabled = true;
//    } catch (error) {
//        errorMessage.textContent = error.message;
//        errorMessage.style.display = "block";
//    }
//}

//// log out button activation
//document.getElementById("logoutButton").addEventListener("click", function () {
//    localStorage.removeItem("token");
//    sessionStorage.removeItem("token");
//    window.location.href = "../signin.html";
//});

const pages = {
    "profile": "accountview.html",
    "settings": "settings.html",
    "progress": "progress.html",
    "certificates": "certifications.html",
    "certifications": "certifications.html",
    "password": "settings.html"
};

function searchPage() {
    let searchQuery = document.getElementById("searchInput").value.toLowerCase().trim();
    if (pages[searchQuery]) {
        window.location.href = pages[searchQuery];
    } else {
        alert("Page not found!");
    }
}

async function fetchUserProfile() {
    const token = sessionStorage.getItem("token") || localStorage.getItem("token");
    if (!token) {
        alert("Session expired, please log in again.");
        window.location.href = "../signin.html";
        return;
    }

    try {
        const response = await fetch("https://localhost:7149/api/auth/profile", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Server error:", errorData);
            alert(errorData.message || "Failed to fetch user profile");
            return;
        }

        const data = await response.json();
        console.log("User profile data:", data);

        const userNameEl = document.getElementById("user-name");
        const userCardNameEl = document.getElementById("user-card-name");

        if (userNameEl) userNameEl.textContent = data.username || "Guest";
        if (userCardNameEl && userCardNameEl.childNodes[0])
            userCardNameEl.childNodes[0].textContent = data.username + " ";

    } catch (error) {
        console.error("Error fetching user profile:", error);
        alert("Error loading profile.");
    }
}

async function loadUserData() {
    const token = sessionStorage.getItem("token") || localStorage.getItem("token");

    if (!token) {
        alert("Unauthorized! Please log in.");
        window.location.href = "../signin.html";
        return;
    }

    try {
        const response = await fetch("https://localhost:7149/api/auth/profile", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) throw new Error("Failed to fetch user data!");

        const userData = await response.json();

        document.getElementById("Username").value = userData.username || "";
        document.getElementById("Email").value = userData.email || "";

    } catch (error) {
        console.error("❌ Error fetching user data:", error);
    }
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
        const response = await fetch("https://localhost:7149/api/auth/update-profile", {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Username: username, Email: email })
        });

        const result = await response.json();

        if (!response.ok) throw new Error(result.message || "Failed to update profile");

        alert("Profile updated successfully!");
        window.location.reload();
    } catch (error) {
        console.error("Error updating profile:", error);
        alert("Error updating profile.");
    }
}

async function submitNewPassword() {
    const oldPass = document.getElementById("oldPassword").value;
    const newPass = document.getElementById("newPassword").value;
    const confirmPass = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("ERRORmessage");
    const token = sessionStorage.getItem("token") || localStorage.getItem("token");

    errorMessage.style.display = "none";

    if (!oldPass || !newPass || !confirmPass) {
        errorMessage.textContent = "Please fill in all fields.";
        errorMessage.style.display = "block";
        return;
    }

    if (newPass !== confirmPass) {
        errorMessage.textContent = "New passwords do not match.";
        errorMessage.style.display = "block";
        return;
    }

    try {
        const response = await fetch("https://localhost:7149/api/auth/change-password", {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                oldPassword: oldPass,
                newPassword: newPass
            })
        });

        const result = await response.json();

        if (!response.ok) throw new Error(result.message || "Failed to change password.");

        alert("Password changed successfully!");
        document.getElementById("oldPassword").value = "";
        document.getElementById("newPassword").value = "";
        document.getElementById("confirmPassword").value = "";
        enablePasswordInputs(false);

    } catch (error) {
        errorMessage.textContent = error.message;
        errorMessage.style.display = "block";
    }
}

function enableEdit(inputId) {
    let inputField = document.getElementById(inputId);
    inputField.removeAttribute("disabled");
    inputField.focus();

    inputField.onblur = () => {
        saveData(inputId, inputField.value);
        inputField.setAttribute("disabled", true);
    };

    inputField.onkeydown = (event) => {
        if (event.key === "Enter") inputField.blur();
    };
}

function enablePasswordInputs(enable = true) {
    document.getElementById("oldPassword").disabled = !enable;
    document.getElementById("newPassword").disabled = !enable;
    document.getElementById("confirmPassword").disabled = !enable;
}

function saveData(inputId, value) {
    console.log(`Saving ${inputId}: ${value}`);
}

function logoutUser() {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    window.location.href = "../signin.html";
}

function initializeNotifications() {
    let notificationBadge = document.getElementById("notificationBadge");
    let notificationIcon = document.getElementById("notificationIcon");
    let notificationList = document.getElementById("notificationList");
    let notificationsUl = document.getElementById("notifications");
    let notifications = [];

    setTimeout(() => addNotification("New message from the Founder!"), 3000);
    setTimeout(() => addNotification("Your progress has been updated."), 5000);

    function addNotification(message) {
        notifications.push(message);
        updateNotificationsUI();
    }

    function updateNotificationsUI() {
        notificationsUl.innerHTML = "";
        notifications.forEach((msg) => {
            let li = document.createElement("li");
            li.textContent = msg;
            notificationsUl.appendChild(li);
        });
        notifications.length > 0 ? showNotification() : hideNotification();
    }

    function showNotification() {
        notificationBadge.style.display = "block";
    }

    function hideNotification() {
        notificationBadge.style.display = "none";
    }

    notificationIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        hideNotification();
        notificationList.style.display = (notificationList.style.display === "block") ? "none" : "block";
    });

    document.addEventListener("click", (event) => {
        if (!notificationIcon.contains(event.target) && !notificationList.contains(event.target)) {
            notificationList.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    fetchUserProfile();
    loadUserData();
    initializeNotifications();

    const logoutBtn = document.getElementById("logoutButton");
    if (logoutBtn) logoutBtn.addEventListener("click", logoutUser);

    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") searchPage();
        });
    }

    const searchBtn = document.getElementById("searchButton");
    if (searchBtn) searchBtn.addEventListener("click", searchPage);
});
