function select(form){
    if (form.style.backgroundColor == "rgb(185, 185, 185)")
        form.style.backgroundColor = "";
    else{
    var elements = document.getElementsByClassName("table-r");
    for(var i=0; i<elements.length; i++){
        elements[i].style.backgroundColor = "";
    }
    for(var i=0; i<elements.length; i++){
        if (elements[i].style.backgroundColor ==  "rgb(185, 185, 185)"){

                elements[i].style.backgroundColor = "";



    }
    form.style.backgroundColor = "#b9b9b9";
}
    }
}

var links = [];

function hover() {
    var elem = document.getElementsByClassName("table-r");
    for (var i=elem.length-1; i>elem.length-15; i--)
        elem[i].onmouseover = hover1;
    links = document.getElementsByClassName("link");
    for (var i=0; i<links.length; i++)
    links[i].click();
}


function hover1() {

}


function load(){
    var elem = document.getElementsByClassName("table-r");
    for (var i=elem.length-1; i>elem.length-5; i--){
    elem[i].onmouseover = hover;
    elem[i].onmousedown = hover1;
    }
}

function reset(){
    var elem = document.getElementsByClassName("table-r");
    for (var i=elem.length-1; i>elem.length-5; i--)
        elem[i].onmouseover = hover1;
}
