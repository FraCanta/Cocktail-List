// login and redirect to index.html

var login = document.querySelector('#login-form');
var login_btn = document.querySelector('#login-btn');
login_btn.addEventListener('click', function(e) {
    e.preventDefault();
    var email = login.querySelector('#email').value;
    var password = login.querySelector('#password').value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
        


