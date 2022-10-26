function toggleimage() 
{
    var a = document.getElementById("b1");
    var c = document.getElementById("img2");
    var d = document.getElementById("img3");
    var e = document.getElementById("img4");
    var f = document.getElementsByClassName("Card_text")
    
    
        if(c.style.display === "none")
    {
        c.style.display = "block";
        a.innerHTML = "Hide All";
    }
    else{
        c.style.display = "none";
        a.innerHTML = "Show All";
    }
    
    
    
        if(d.style.display === "none")
    {
        d.style.display = "block";
        a.innerHTML = "Hide All";
    }
    else{
        d.style.display = "none";
        a.innerHTML = "Show All";
    }
    
    
    
        if(e.style.display === "none")
    {
        e.style.display = "block";
        a.innerHTML = "Hide All";
    }
    else{
        e.style.display = "none";
        a.innerHTML = "Show All";
    }
    
    
    if(f.style.display === "none")
    {
        f.style.display = "block";
        a.innerHTML = "Hide All";
    }
    else{
        f.style.display = "none";
        a.innerHTML = "Show All";
    }
}