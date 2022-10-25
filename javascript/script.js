function toggleimage(){
    var a = document.getElementById("b1");
    var b = document.getElementById("img1");
    
    if(b.style.display === "none"){
        b.style.display = "block";
        a.innerHTML = "Hide";
    }
    else{
        b.style.display = "none";
        a.innerHTML = "Show";
    }
}