let leftIcon = document.querySelector(".fa-chevron-left");
let rightIcon = document.querySelector(".fa-chevron-right");

rightIcon.addEventListener("click", function(){
    let activeImage = document.querySelector(".active");
    if(activeImage.nextElementSibling != null) {
        activeImage.nextElementSibling.classList.add("active");
    }
    else{
        activeImage.parentNode.firstElementChild.classList.add("active");
    }
    activeImage.classList.remove("active");
})

leftIcon.addEventListener("click", function(){
    let activeImage = document.querySelector(".active");
    if(activeImage.previousElementSibling != null) {
        activeImage.previousElementSibling.classList.add("active");
    }
    else{
        activeImage.parentNode.lastElementChild.classList.add("active");
    }
    activeImage.classList.remove("active");
})