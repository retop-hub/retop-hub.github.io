function flipCard(element) {
    element.style.transform = element.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}


/*header*/
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function changeSlide(n) {
    var slides = document.getElementsByClassName("slide");
    slideIndex += n - 1;
    if (slideIndex >= slides.length) {slideIndex = 0}
    if (slideIndex < 0) {slideIndex = slides.length - 1}
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";  
}

// 当页面滚动时检测滚动位置
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // 如果页面向下滚动超过500px，则显示返回顶部按钮
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

// 点击返回顶部按钮时平滑滚动到页面顶部
document.getElementById("back-to-top").onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
