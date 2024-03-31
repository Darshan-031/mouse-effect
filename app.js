var dot = document.querySelector(".dot");
var main = document.querySelector(".main");
var title = document.querySelector("h1");
main.addEventListener("mousemove",(e)=>{
    // let y = -6+e.y;
    dot.style.top = -6+e.y+"px";
    dot.style.left = -6+e.x+"px";
});

dot.addEventListener("dblclick", ()=>{
    dot.style.scale = "2";
    setTimeout(()=>{
        dot.style.scale = "1";
    },2000);
})

title.addEventListener("click",()=>{
    alert("hii");
})