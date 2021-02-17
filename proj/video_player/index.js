document.getElementById("optimizeBarPlayRate").addEventListener("click", changePlayingRate);
document.getElementById("optimizeBarVol").addEventListener("click", changeVolume);
document.getElementById("optimizeBarVolInner").addEventListener("click", changeVolume);
document.getElementById("video").addEventListener("click", playPause);
document.getElementById("syncTime").addEventListener("click", syncTime);
document.getElementById("playPause").addEventListener("click", playPause);

function print(text) {
    console.log("%c Video Player %c" + text, "margin:0;padding:3.12px;font-size:18px;font-family:'Helvetica','Arial Unicode MS';background-color:rgb(250,115,150);color:rgb(255,255,255);", "font-size:18px;font-family:'Helvetica','Arial Unicode MS';background-color:rgba(255,255,255,0);color:rgb(10,170,220);margin:0px;padding:3.12px;");
}

function changeVolume(event) {
    console.log(event)
    var bar = document.getElementById("optimizeBarVol");
    var vol = (event.clientX - bar.offsetLeft) / bar.offsetWidth;
    if (vol == "" || vol == undefined) {
        print("Error: Volume hasn't been defined!");
        alert("Error: Volume hasn't been defined!");
        return;
    }
    if (vol > 1) vol = 1;
    if (vol < 0) vol = 0;
    var bar = document.getElementById("optimizeBarVolInner");
    bar.style.width = vol * 100 + "%";
    video.volume = vol;
    print("Volume Setted To " + Math.round(vol * 100) + "%");
    return;
}

function changePlayingRate(event) {
    var mousePos = event.offsetX;
    var speed = mousePos * 0.04;
    if (speed == "" || speed == undefined) {
        alert("Error: Player's speed hasn't been Undefined!");
        print("Error: Player's speed hasn't been Undefined!");
        return;
    }
    if (speed > 1) {
        speed = Math.round(speed);
    }
    if (speed <= 0.05) {
        print("Error: Player's speed cannot lower than 0.07X, speed setted to 0.07X");
        speed = 0.07;
    }
    video.playbackRate = speed;
    var innerBall = document.getElementById("optimizeBarPlayRateBall");
    innerBall.style.left = event.offsetX + "px";
    print("Player's Playing Speed Setted To " + speed + "X")
}

function checkState() {
    var btn = document.getElementById("playPause");
    if (video.paused == true) {
        btn.style.backgroundImage = "url(./img/play.svg)";
        return false;
    } else {
        btn.style.backgroundImage = "url(./img/pause.svg)";
        return true;
    }
}

function syncTime() {
    var btn = document.getElementById("syncTime");
    btn.style.animation = "rotateSync .5s linear";
    setTimeout(function () {
        btn.style.animation = "";
    }, 500);
    print("Syncing Time...")
    var video = document.getElementById("video");
    var currTime = video.currentTime;
    print("Current Time: " + currTime);
    var totalTime = video.duration;
    print("Duration: " + totalTime);
    var progressBarInner = document.getElementById("progressBarInner");
    var wid = ((currTime / totalTime) * 100) + "%";
    print("Expected Width: " + wid);
    progressBarInner.style.width = wid;
}

function playPause() {
    var video = document.getElementById("video");
    print("Changing Playing State");
    var ifPlaying = checkState();
    print("Playing State is " + !ifPlaying);
    if (ifPlaying == true) {
        video.pause();
    } else {
        video.play();
    }
    checkState();
}

function changeTime(event) {
    var progressBar_outer = document.getElementById("progressBar");
    var progressBar_inner = document.getElementById("progressBarInner");
    var video = document.getElementById("video");
    var outer_wid = progressBar_outer.clientWidth;
    print("Progress Outer Width: " + outer_wid);
    var expectedWidth = ((event.clientX - 30) / outer_wid) * 100 + "%";
    print("Mouse Position: " + event.clientX - 30);
    print("Expected Width: " + expectedWidth);
    progressBar_inner.style.width = expectedWidth;
    var video_time = video.duration;
    print("Video Duration: " + video_time + " secs");
    var expectedTime = video_time * ((event.clientX - 30) / outer_wid);
    print("Expected Time: " + expectedTime + " secs");
    video.currentTime = expectedTime;
}