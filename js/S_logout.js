// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Logout Function
function logout() {
    firebase.auth().signOut().then(() => {
        // Redirect to Login Page
        window.location.replace("/S_login.html");
        alert("logout Succesfully");
    }).catch((error) => {
        console.error(error);
    });
}
