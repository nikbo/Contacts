function select(form){
    if (form.style.backgroundColor == "rgb(185, 185, 185)")
        form.style.backgroundColor = "";                        //Обнуление цвета при повторном нажатии
    else{
    var elements = document.getElementsByClassName("table-r");
    for(var i=0; i<elements.length; i++){
        if (elements[i].style.backgroundColor ==  "rgb(185, 185, 185)"){         //Предварительное обнуление всех контактов

                elements[i].style.backgroundColor = "";



    }
    form.style.backgroundColor = "#b9b9b9";
}                                                              //Изменение цвета при нажатии
    }
}

function upload(){
    document.getElementById("upload").style.display = "block";      //Анимация при подгрузке контактов
}

var links = [];

function hover() {
    var elem = document.getElementsByClassName("table-r");
    for (var i=elem.length-1; i>elem.length-15; i--)
        elem[i].onmouseover = hover1;
    links = document.getElementsByClassName("link");
    for (var i=0; i<links.length; i++){
        links[i].click();
        document.getElementById("upload").style.display = "block";
    }
}


function hover1() {

}

function clicked () {
    var elements = document.getElementsByClassName("table-r");
    for(var i=0; i<elements.length; i++){
        if (elements[i].style.backgroundColor == "rgb(185, 185, 185)")
        elements[i].style.backgroundColor = "";

    }
}

function reset_click() {
    document.body.click = clicked;
}


function load(){
    reset_click;
    var elem = document.getElementsByClassName("table-r");
    for (var i=elem.length-1; i>elem.length-15; i--){
    elem[i].onmouseover = hover;
    elem[i].onmousedown = hover1;
    }
}

function reset(){
    var elem = document.getElementsByClassName("table-r");
    for (var i=elem.length-1; i>elem.length-15; i--)
        elem[i].onmouseover = hover1;
}
