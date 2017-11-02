var lemposBusena = false;
function toggleLempa (){
    lemposBusena = !lemposBusena
    if (lemposBusena){
        document.getElementById('myImage').src='img/pic_bulbon.gif';
    } else {
        document.getElementById('myImage').src='img/pic_bulboff.gif';
    }
}

function changeSheet(elementId) {
    var elements = document.getElementsByClassName("sheet");
    for (i = 0; i < elements.length; i++) {
        elements[i].style.display='none';
    }
    document.getElementById(elementId).style.display='block';
}