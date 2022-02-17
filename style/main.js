alert("karena keterbatasan waktu yang saya punya Untuk saat ini hanya responsive di mobile view ,")

var open = document.getElementById("toggle");
var close = document.getElementById("close");

open.addEventListener("click", function(){
    document.getElementById("tog-menu-list").style.transform = "translateY(-0%)";
});

close.addEventListener("click", function(){
    document.getElementById("tog-menu-list").style.transform = "translateY(-100%)";
});


var documentTitle = document.title + " - ";

(function titleMarquee() {
    document.title = documentTitle = documentTitle.substring(1) + documentTitle.substring(0,1);
    setTimeout(titleMarquee, 200);
})();