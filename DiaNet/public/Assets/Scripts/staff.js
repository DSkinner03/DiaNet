function GetUser() {

var NameP = document.getElementById('NameP')
var EmailP = document.getElementById('EmailP')
var PhotoP = document.getElementById('PhotoImg')
var EmailVP = docment.getElementById('EmailVP')
var UidP = document.getElementById('UidP')

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

NameP.innerHTML = user.displayName;
EmailP.innerHTML = user.email;
EmailVP.innerHTML = user.emailVerified;
UidP.innerHTML = user.uid;
}


function Rever(){
  var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
  alert("User has been sent verification email")
}).catch(function(error) {
  // An error happened.
  alert("An error has occured. \nContact Support if error persists")
});

}

function UpdateName(){
  var NewName = document.getElementById('NewName').value

  var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: NewName
}).then(function() {
  // Update successful.
  alert("Name changed")
}).catch(function(error) {
  // An error happened.
  alert("Error \nContact support if error persists")
});
}

function Disable(){
  var user = firebase.auth();

user.disable(user.email).then(function() {
  // User deleted.
  alert("User Disabled")
}).catch(function(error) {
  // An error happened.
  alert("Error \nContact support if error persists")
});
}


function ResertPass(){
  var auth = firebase.auth();
var emailAddress = email;

auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});
}
