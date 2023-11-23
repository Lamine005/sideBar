const bars = document.querySelector(".fa-bars");
console.log(bars);
const sidebar = document.querySelector(".sidebar");
const closingbutton = document.querySelector(".fa-solid");

bars.addEventListener("click",()=>{
    console.log("clicked");
sidebar.classList.toggle("show-sidebar")
});

closingbutton.addEventListener("click", ()=>
{
sidebar.classList.remove("show-sidebar")
})

