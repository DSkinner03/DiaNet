window.onload = function() {
firebase.auth().onAuthStateChanged(function() {
    const user = firebase.auth().currentUser
    const profilePicture = document.getElementById("user_avatar")
    const username = document.getElementById("user_name")
    const email = document.getElementById('user_email')

    profilePicture.style.backgroundImage = `url("${user.photoURL}")`
    username.innerHTML = user.displayName
    email.innerHTML = user.email
});
}
