const scrollToTop = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll",function(){
    if (window.pageYOffset>300) {
        scrollToTop.style.display="block";
    }else{
        scrollToTop.style.display="none";
    }
});

scrollToTop.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});


