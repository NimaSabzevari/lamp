const img = document.querySelector("img");
const btn = document.querySelector(".button");

let isOn = false; //flag

btn.addEventListener("click",function(){
    if (isOn){
        img.setAttribute("src","./bulboff.gif");
        btn.innerHTML = "لامپ را روشن کنید";
        isOn = false;
    } else {
        img.setAttribute("src","./bulbon.gif");
        btn.innerHTML = "لامپ را خاموش کنید";
        isOn = true;
    }
});