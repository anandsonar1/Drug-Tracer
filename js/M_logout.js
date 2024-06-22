// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = firebase.auth();

// Logout Function
function logout() {
    firebase.auth().signOut().then(() => {
        // Redirect to Login Page
        window.location.replace("/M_login.html");
        alert("logout Succesfully");
    }).catch((error) => {
        console.error(error);
    });
}