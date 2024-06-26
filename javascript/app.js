let menu = document.querySelector(".menu");
let times = document.querySelector(".menu__times");
let bars = document.querySelector(".nav__bars");
let group = document.querySelectorAll(".main-menu__group")
let discount_box = document.querySelectorAll(".main-discount__box")
// *------------------------------------------------------------------*
bars.addEventListener("click", open_menu);
times.addEventListener("click", close_menu);
// *------------------------------------------------------------------*
function open_menu() {
    menu.classList.toggle("menu-active");
}

function close_menu() {
    menu.classList.remove("menu-active");
}

group.forEach(function (active) {
    active.addEventListener("click", function () {
        group.forEach(function(activate){
            activate.classList.remove("main-menu__group-active");
            active.classList.add("main-menu__group-active");
        })
})
})

discount_box.forEach(function(box){
    box.addEventListener("click",function(){
        discount_box.forEach(function(activate){
            activate.classList.remove("main-discount__box-active");
            box.classList.add("main-discount__box-active");
        })
    }
)
})