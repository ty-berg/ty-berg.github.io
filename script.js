function lightSwitch(){
    if(document.getElementById("body").className=="light"){
        document.getElementById("body").className = "dark";
        document.getElementById("nav").className = "nav-links-dark";
        document.getElementById("nav1").className = "nav-links-dark";
        document.getElementById("nav2").className = "nav-links-dark";
        document.getElementById("nav3").className = "nav-links-dark";
        document.getElementById("nav4").className = "nav-links-dark";
        document.getElementById("heading").className = "color-changing-dark";
        document.getElementById("light-or-dark").className = "button-dark";
        document.getElementById("animations").className = "button-dark";
        document.getElementById("light-or-dark").innerHTML = "DARK MODE";
    }
    else{
        document.getElementById("body").className = "light";
        document.getElementById("nav").className = "nav-links-light";
        document.getElementById("nav1").className = "nav-links-light";
        document.getElementById("nav2").className = "nav-links-light";
        document.getElementById("nav3").className = "nav-links-light";
        document.getElementById("nav4").className = "nav-links-light";
        document.getElementById("heading").className = "color-changing-light";
        document.getElementById("light-or-dark").className = "button-light";
        document.getElementById("animations").className = "button-light";
        document.getElementById("light-or-dark").innerHTML = "LIGHT MODE";
    }
}

function animationSwitch(){
    if(document.getElementById("heading").className=="color-changing-light" || document.getElementById("heading").className=="color-changing-dark"){
        document.getElementById("heading").className = "";
        document.getElementById("animations").innerHTML = "ANIMATIONS OFF";
    }
    else{
        if(document.getElementById("body").className=="light"){
            document.getElementById("heading").className = "color-changing-light";
        }
        else{
            document.getElementById("heading").className = "color-changing-dark";
        }
        document.getElementById("animations").innerHTML = "ANIMATIONS ON";
    }
}

