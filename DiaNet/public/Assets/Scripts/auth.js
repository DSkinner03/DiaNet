var email = document.getElementById('fb_email').value
var password = document.getElementById('fb_password').value

function LogMeIn(){
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      window.location.href="/dashboard.html"
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(`${errorCode} \n ${errorMessage}`)
    });
}


function LogOut(){
  // [START auth_sign_out]
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    window.location.href = "https://dia-net.web.app"
    document.getElementById('NewMessage').innerHTML = "Successfully Signed Out"
  }).catch((error) => {
    // An error happened.
    alert("YOU ARE NOT SIGNED OUT \nContact Support Immediately.")
  });
  // [END auth_sign_out]
}


function authStateListener() {
  // [START auth_state_listener]
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
      window.location.href = "https://dia-net.web.app"
      document.getElementById('NewMessage').innerHTML = "You are not Logged in."
    }
  });
  // [END auth_state_listener]
}
