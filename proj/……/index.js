window.onbeforeunload = function (event) {
    window.location.href = window.location.href + "???";
}
var audio = document.getElementById("audio");
setInterval(function(){
    if (audio.src == window.location.href.replace("index.html","")+"b_char_dead.mp3") {
        audio.src =  window.location.href.replace("index.html","")+"v_bat_f_05.mp3";
    }
    if(audio.src==window.location.href.replace("index.html","")+"v_bat_f_05.mp3"){
        audio.src= window.location.href.replace("index.html","")+"野兽先辈.mp3";
    }
    if(audio.src==window.location.href.replace("index.html","")+"野兽先辈.mp3"){
        audio.src=  window.location.href.replace("index.html","")+"b_char_dead.mp3";
    }
    audio.play();
}),1000;