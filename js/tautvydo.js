var lemposBusena = false;
function toggleLempa (){
    lemposBusena = !lemposBusena
    if (lemposBusena){
        document.getElementById('myImage').src='img/pic_bulbon.gif';
    } else {
        document.getElementById('myImage').src='img/pic_bulboff.gif';
    }
}