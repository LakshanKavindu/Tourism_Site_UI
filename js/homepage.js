// ..............................type writing effect ................................


const texts = ["Sri Lanka"];
let count = 0;
let index = 0;
let current_text = "";
let letter = "";


(function type(){
    // if(count === texts.length){

    // }

    current_text = texts[count];
    letter = current_text.slice(0,++index);

    document.querySelector(".title_name").textContent = letter;
    if(letter.length === current_text.length){
        count++;
        index= 0;

    }
    
    setTimeout(type,400);
})();


// .......................................................................................


// .........................searchbox activate.....................................


var search_box = document.querySelector(".search_box");
var search_icon = document.querySelector(".search_icon");


search_icon.addEventListener("click",()=>{
    search_box.classList.toggle("search_box_activate");
    search_box.style.animation = "search_anim 2s ease";
})



// ...................................................................................



// ...........................poping up items..........................

window.addEventListener("scroll",up);
function up(){

    var up_items  = document.querySelectorAll(".my_container2");
    for(var i=0 ; i<up_items.length;i++ ){
        var window_height = window.innerHeight;
        var reveal_top = up_items[i].getBoundingClientRect().top;
        var reveal_point = 100;

        if(reveal_top < window_height - reveal_point){
            up_items[i].classList.add("up");
        }
        else{
            up_items[i].classList.remove("up");
        }
    }
}


// .......................end popping up ..................................
