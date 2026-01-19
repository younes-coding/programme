let btn =document.getElementById("btn");
window.onscroll = function(){
    if(document.body.scrollTop >1500 || document.documentElement.scrollTop >1500){
        btn.style.display ="block";
    }   else {  
        btn.style.display ="none";
    }
}
btn.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}