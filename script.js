const dino = document.getElementById("dino");
const meteor = document.getElementById("meteor");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump() {
    if (dino.classList !="jump"){
        dino.classList.add("jump")
    }
    setTimeout(function(){
        dino.classList.remove("jump")
    }, 300)
}
let isAlive = setInterval ( function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let meteorLeft = parseInt(window.getComputedStyle(meteor).getPropertyValue("left"));

    if (meteorLeft < 160 && meteorLeft > 0 && dinoTop >= 200) {
        alert("ВСЕ")
    }
}, 10 )