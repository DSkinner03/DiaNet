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
