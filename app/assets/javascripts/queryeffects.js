function select(form){
    var elements = document.getElementsByClassName("table-r");
    for(var i=0; i<elements.length; i++){
        elements[i].style.backgroundColor = "#ffffff";
    }
    for(var i=0; i<elements.length; i++){
        if (elements[i].style.backgroundColor ==  "rgb(185, 185, 185)"){

                elements[i].style.backgroundColor = "#ffffff";



    }
    form.style.backgroundColor = "#b9b9b9";
}

}

var links = [];

function hover() {
    links = document.getElementsByClassName("link");
    for (var i = 0; i<links.length; i++)
    links[i].click();
}

function resize() {
    document.getElementById("hover-block").style.width = document.body.clientWidth + "px";
    document.getElementById("hover-block").style.height = document.getElementsByClassName("container")[0].clientHeight*0.5 + "px";
    document.getElementById("hover-block").style.top = document.getElementsByClassName("container")[0].clientHeight*0.5 + "px";
}
