document.addEventListener("DOMContentLoaded",function(){
    var nut = document.querySelector('#navbar .toggle_menu');
    var mobile = document.querySelector('ul');
    nut.addEventListener('click',function(){
        mobile.classList.toggle('active');
    })
})

// fade in
document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".fade-in");
    var instances = M.Lazy.init(elems, {
        onLoad: function(element) {
            element.style.opacity = 1;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var bar = document.querySelectorAll(".bar1, .bar2, .bar3");
    // animation al click sull'icona
    bar.addEventListener("click", function() {
        this.classList.toggle("animate");
    });
});

