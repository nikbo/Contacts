function select(form){
    var elements = document.getElementsByClassName("table-r");
    for(var i=0; i<elements.length; i++){
        if (elements[i].style.backgroundColor ==  "rgb(185, 185, 185)")
            elements[i].style.backgroundColor = "#ffffff";
    }
    form.style.backgroundColor = "#b9b9b9";
}



