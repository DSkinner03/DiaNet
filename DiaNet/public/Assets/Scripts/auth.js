
var emailAddress = email
var message = document.getElementById('message')

function Login(){
  var email = document.getElementById('fb_email').value;
  var password = document.getElementById('fb_pass').value;
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {

    // Signed in
    // ...

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        // ...
        window.location.href="https://dia-net.web.app/dashboard.html"
      } else {
        // User is signed out
        // ...
      }
    });

  })
  .catch((error) => {
    // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // Edge cases
            if (!email || email.length==0) {
                document.getElementById('message').innerHTML = '⚠️ Enter your email!'
                return;
            }
            if (!password || password.length==0) {
                document.getElementById('message').innerHTML = '⚠️ Enter a password!'
                return;
            }
            if (errorCode == 'auth/wrong-password') {
                alert('Incorrect username, or password.')
                document.getElementById('password').value='';
            } else if (errorCode == 'auth/user-disabled') {
                document.getElementById('message').innerHTML = "⚠️ Account Disabled"
            } else if (errorCode == 'auth/user-not-found') {
                document.getElementById('message').innerHTML = "⚠️ This user doesn't exist"
            } else {
                document.getElementById('message').innerHTML = "⚠️ " + errorMessage;
            }
            console.log(error);
        });

}


function ResetPass(){
  var auth = firebase.auth();
      var emailAddress = document.getElementById('fb_email').value;
      auth.sendPasswordResetEmail(emailAddress).then(function() {
          document.getElementById("message").innerHTML = "✅ Sent"
      }).catch(function(error) {
          document.getElementById("message").innerHTML = "⚠️ Error | Contact support if persists"
      });
};

function NewUser(){
  var user = firebase.auth().currentUser;

  user.updateProfile({

  }).then(function() {
    // Update successful.
  }).catch(function(error) {
    // An error happened.
  });
}

function LogOut(){
  firebase.auth().signOut().then(() => {
  // Sign-out successful.
  window.location.href="https://dia-net.web.app"
  document.getElementById('message').innerHTML = '✅ Signed out successfully'
}).catch((error) => {
  // An error happened.
});
}

function ChangeName(){
  var user = firebase.auth().currentUser;
var fb_name = document.getElementById('fb_name').value
user.updateProfile({
  displayName: fb_name,
}).then(function() {
  // Update successful.
  alert('Name successfully changed.')
}).catch(function(error) {
  // An error happened.
  alert("Error, please contact support.")
});
}

function ChangePass(){
  var user = firebase.auth().currentUser;
var newPassword = document.getElementById('fb_pass').value

user.updatePassword(newPassword).then(function() {
  // Update successful.
  alert('Password Changes successfully')
}).catch(function(error) {
  // An error happened.
  alert('Error occured, please contact support.')
});
}

function CheckStaff(){
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    if (user.email === "service@dia-net.web.app") {
      window.location.href="https://dia-net.web.app/Staff/Auth/Staff/App/Service/Maintenance"
    } else{
      window.location.href="https://dia-net.web.app"
      alert('You do NOT have permission to view this page')
    }
  } else {
    // No user is signed in.
    window.location.href="https://dia-net.web.app"
    alert('You do NOT have permission to view this page')
  }
});
}


function ForceReset(){
  var auth = firebase.auth();
var emailAddress = document.getElementById('fb_email').value

auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
  alert('Reset Sent')
}).catch(function(error) {
  // An error happened.
  alert("Error")
});
}

function ForceVerify(){
  var user = document.getElementById('fb_email').value

user.sendEmailVerification(user).then(function() {
  // Email sent.
  alert('User Will be verification sent, awaiting user response.')
}).catch(function(error) {
  // An error happened.
  alert('Error')
});
}
