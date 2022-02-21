const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");

window.addEventListener("load", function () {
  const popUpWasShown= localStorage.getItem("popupWasShown");
  if (popUpWasShown == null) {
  showPopup();
  }
  // setTimeout(function(){
  //   loginPopup.classList.add("show");
  // },5000)
});

function showPopup() {
 
  const timeLimit = 1; // seconds;
  let i = 0;
  const timer = setInterval(function () {
    i++;
    if (i == timeLimit) {
      clearInterval(timer);
      loginPopup.classList.add("show");
    }
    console.log(i);
  }, 1000);
}

close.addEventListener("click", function () {
  loginPopup.classList.remove("show");
});

// pop up show when index.html is loaded
$(document).ready(function () {
  $(".login-popup").modal("show");
});

// login se hai più o uguale ad anni 18

function login() {
  localStorage.setItem("popupWasShown",1);
  return (
    loginPopup.remove("button-close")
  );

}

function reject() {
  confirm("Non sei abbastanza vecchio per accedere a questa pagina");
}


// function PopUp(hideOrshow) {
//   if (hideOrshow == 'hide') {
//       document.getElementById('ac-wrapper').style.display = "none";
//   }
//   else  if(localStorage.getItem("popupWasShown") == null) {
//       localStorage.setItem("popupWasShown",1);
//       document.getElementById('login-popup').removeAttribute('style');
//   }
// }
// window.onload = function () {
//   setTimeout(function () {
//       PopUp('show');
//   }, 0);
// }


// function hideNow(e) {
//   if (e.target.id == 'login-popup') document.getElementById('login-popup').style.display = 'none';}