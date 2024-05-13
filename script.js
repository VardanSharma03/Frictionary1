//<li class="l2"><img style=" width: 120px; filter: blur(1px);" class="ghost" src="creepy-ghost_12394.png"></li>
let a = document.querySelector(".h");
let b = document.querySelector(".img")
a.addEventListener("mouseenter",e=>{
    b.style.opacity=1;
    for (let i = 0; i < 10; i++) {
        b.style.left=i;
    }
});
a.addEventListener("mouseout",e=>{
    b.style.opacity=0;
    b.style.left=`-26%`;
});
function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
}
