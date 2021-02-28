window.onload = function() {
firebase.auth().onAuthStateChanged(function() {
    const user = firebase.auth().currentUser
    const profilePicture = document.getElementById("NightScoutImg")
    const username = document.getElementById("user_name")
    const email = document.getElementById('user_email')

    profilePicture.style.backgroundImage = `url("${user.photoURL}")`
    username.innerHTML = user.displayName
    email.innerHTML = user.email
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
    window.location.href="https://dia-net.web.app"
    alert(`You are not signed in. \nPlease sign in again to continue.`)
  }
});
}
