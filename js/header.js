const seaCont = document.getElementById("top-search");
const serHide = document.getElementById("topsercross-icon");
const serShow = document.getElementById("ser-btn-icon");

serShow.addEventListener("click",function(){
    seaCont.style.padding="5px 5%";
    seaCont.style.height="50px";
    seaCont.style.transition="all 0.5s";
})

serHide.addEventListener("click",function(){
    seaCont.style.padding="0 5%";
    seaCont.style.height="0px";
    seaCont.style.transition="all 0.5s";
})


const barBtn = document.getElementById("bar-icon");
const dropdown = document.getElementById("menu");

barBtn.addEventListener("click",function(){
    dropdown.classList.toggle("show");
})


const droptogg = document.querySelectorAll(".droptoggle");
const submenu = document.getElementsByClassName("submenu");
for(let x=0;x<droptogg.length;x++){
    droptogg[x].addEventListener("click",()=>{
        submenu[x].classList.toggle("submenushow");
        const downArrow = droptogg[x].querySelector('.down-arrow');
    })
}


const subsubtogg = document.querySelectorAll(".sub-sub-drop");
const subsubmenu = document.getElementsByClassName("sub-sub-menu");
for(let y=0;y<subsubtogg.length;y++){
    subsubtogg[y].addEventListener("click",()=>{
        subsubmenu[y].classList.toggle("show-sub-sub-menu");
    })
}
