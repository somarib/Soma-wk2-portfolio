let btn=document.querySelector("#mbm-icon");
btn.addEventListener("click",function(){
    document.getElementById("hide-show").style.display="block";
});

document.querySelectorAll(".mbmenu-li-a").forEach((item)=>{
    item.addEventListener("click",()=>{
        document.getElementById("hide-show").style.display="none";
    })
});
