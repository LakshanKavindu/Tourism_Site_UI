//................ making the navigation bar to the mobile..................

const burger = document.querySelector('.burger');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
let list = document.querySelector('.list');

burger.addEventListener('click',()=>{
    console.log("hello");
    
    list.classList.toggle('list_active');
    line1.classList.toggle('line1_active');
    line2.classList.toggle('line2_active');
    line3.classList.toggle('line3_active');
})

// ........................................................................





// ............... page title animation ....................................

// const letters  = document.querySelectorAll("span");

// setTimeout(()=>{
//     Array.from(letters).forEach((letter, index) => {
//         setTimeout(()=>{
//             letter.classList.toggle("show");
//         },index * 150);
//     })
// },1000);

// ............................................................................

