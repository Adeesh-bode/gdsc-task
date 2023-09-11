let mode=true;
const themetogglebtn = document.querySelector('.mode');

themetogglebtn.addEventListener('click',() => {
   document.body.classList.toggle('dark-mode'); 
})

document.getElementById("mode").onclick=function()
{  
   if(mode==true)
   {
      document.getElementById("lightmode").innerHTML="<style>#lightmode { display:none} </style>"
      document.getElementById("darkmode").innerHTML="<style>#mode{display:flex; justify-content:end;align-items:start}  #darkmode { display:block;} </style>"
      document.getElementById("plane").innerHTML="<style>#plane{filter:invert(100%)}   </style>"
      mode=false;
   }
   else
   {
      document.getElementById("lightmode").innerHTML="<style>#mode{display:flex; justify-content:start ;align-items:start} #lightmode { display:block} </style>"
      document.getElementById("darkmode").innerHTML="<style>  #darkmode { display:none;} </style>"
      document.getElementById("plane").innerHTML="<style>#plane{filter:none}   </style>"
      mode=true;
   }

}
