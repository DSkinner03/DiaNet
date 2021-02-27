var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}

document.getElementById('user_email').innerHTML = user.email
document.getElementById('user_name').innerHTML = user.displayName
document.getElementById('user_Verified').innerHTML = user.emailVerified
document.getElementById('user_uid').innerHTML = user.uid
