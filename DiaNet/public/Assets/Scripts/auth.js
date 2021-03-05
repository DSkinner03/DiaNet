
var emailAddress = email
var message = document.getElementById('message')

function LogMin(){
  var email = document.getElementById('fb_email').value;
  var password = document.getElementById('fb_pass').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      window.location.href="/dashboard.html"
      var user = userCredential.user;
      // ...
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



function LogOut(){
  firebase.auth().signOut().then(() => {
  // Sign-out successful.
  window.location.href="https://dia-net.web.app"
  document.getElementById('message').innerHTML = '✅ Signed out successfully'
}).catch((error) => {
  // An error happened.
});
}
