/*-------declare variables--------------*/

let i;
let slideIndex = 0;
const form = document.getElementById('myform');
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("demo");
let captionText = document.getElementById("caption");
/*------------format---------*/
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var phoneformat =  /^(\d{3})(\d{3})(\d{4})$/;

/*---------------------------*/

/*-------------main validate function------------*/

function validateform(){       
    if(validateEmail()){   
      return false;  
    }else if(validatePhone()){
        return false;
    }else{ 
        alert("Susssds");
        form.reset();
        return false; 
    } 
} 
/*------------email validate function-------------------*/
function validateEmail(){
    var email=document.myform.email.value; 

    if(email.match(mailformat)){
        return false;
    }else{
        alert("Invalid email address!");
        return true;
    }
}
/*------------phone number validate function-------------------*/
function validatePhone(){
    var phone =document.myform.tel.value;

    if(phone!=""){
        if(phone.match(phoneformat)){
            return false;
        }
        else{
            alert("Invalid phone number!");
            return true;
        }
    }
    return false;    
    
}

/*---------------------------------------slide show functions ----------------------------------------*/

/*-------------call functions----------*/
showSlides(slideIndex);
carousel();

/*-------------functions----------------*/

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(slideIndex) {
    common();
}

function carousel() {
    slideIndex++;
    common();
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

function common(){
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }  
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active"; 
    captionText.innerHTML = dots[slideIndex-1].alt;
}

window.addEventListener("scroll",up);
function up(){

    var up_items  = document.getElementsByClassName("contactbox");
    for(var i=0 ; i<up_items.length;i++ ){
        var window_height = window.innerHeight;
        var reveal_top = up_items[i].getBoundingClientRect().top;
        var reveal_point = 150;

        if(reveal_top < window_height - reveal_point){
            up_items[i].classList.add("up");
        }
        else{
            up_items[i].classList.remove("up");
        }
    }
}