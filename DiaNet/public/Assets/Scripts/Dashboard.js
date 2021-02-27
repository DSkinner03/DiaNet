function Check(){
  var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}

alert(`Welcome ${user.displayName} , \n You are successfully signed into the beta of DiaNet.`)
  } else {
    // No user is signed in.
    alert("You are not signed into DiaNet, please note that this service requires a valid login.")
    window.location.href = "https://dia-net.web.app"
  }
});
}
