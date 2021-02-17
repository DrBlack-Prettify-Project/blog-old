function w8_notification_popup(title, content) {
    var w8_notification_frame = document.createElement("div");
    w8_notification_frame.id = "w8_notification_frame"
    w8_notification_frame.onclick = "function(){var w8_notification_frame = document.getElementById(\"w8_notification_frame\");document.body.removeChild(w8_notification_frame);}";
    document.body.appendChild(w8_notification_frame);

    var w8_notification_title = document.createElement("div");
    w8_notification_title.id = "w8_notification_title";
    w8_notification_title.innerHTML = title;
    w8_notification_frame.appendChild(w8_notification_title);

    var w8_notification_content = document.createElement("div");
    w8_notification_content.id = "w8_notification_content";
    w8_notification_content.innerHTML = content;
    w8_notification_frame.appendChild(w8_notification_content);

    var w8_notification_audio = document.createElement("audio");
    w8_notification_audio.src = "w8_notification_audio.wav";
    w8_notification_audio.type = "audio/wav"
    w8_notification_audio.id = "w8_notification_audio";
    w8_notification_audio.autoplay = "autoplay";
    w8_notification_audio.style.display = "none";
    w8_notification_frame.appendChild(w8_notification_audio);

    var w8_notification_close_btn_frame = document.createElement("div");
    w8_notification_close_btn_frame.id = "w8_notification_close_btn_frame";
    w8_notification_frame.appendChild(w8_notification_close_btn_frame);
    var w8_notification_close_btn = document.createElement("embed");
    w8_notification_close_btn.src = "Close icon.svg";
    w8_notification_close_btn.type = "image/svg+xml"
    w8_notification_close_btn.id = "w8_notification_close_btn";
    w8_notification_close_btn_frame.appendChild(w8_notification_close_btn);
    var w8_notification_frame = document.getElementById("w8_notification_frame");
    w8_notification_frame.addEventListener("click", function () {
        var w8_notification_frame = document.getElementById("w8_notification_frame");
        document.body.removeChild(w8_notification_frame);
    });
    setTimeout(function () {
        var w8_notification_frame = document.getElementById("w8_notification_frame");
        document.body.removeChild(w8_notification_frame);
    }, 5000);
}

function w8_msgbox_popup(hWnd, Title, Content) {
    var w8_notification_frame = document.createElement("div");
    w8_notification_frame.id = "w8_notification_frame"
    document.body.appendChild(w8_notification_frame);
    var w8_notification_title = document.createElement("div");
    w8_notification_title.id = "w8_notification_title";
    w8_notification_title.innerHTML = Title;
    w8_notification_frame.appendChild(w8_notification_title);

    var w8_notification_content = document.createElement("div");
    w8_notification_content.id = "w8_notification_content";
    w8_notification_content.innerHTML = content;
    w8_notification_frame.appendChild(w8_notification_content);

    var w8_notification_audio = document.createElement("audio");
    w8_notification_audio.src = "Windows Background.wav";
    w8_notification_audio.type = "audio/wav"
    w8_notification_audio.id = "w8_notification_audio";
    w8_notification_audio.autoplay = "autoplay";
    w8_notification_audio.style.display = "none";
    w8_notification_frame.appendChild(w8_notification_audio);
}


function w10_notification_popup(title, content) {
    var w10_notification_frame = document.createElement("div");
    w10_notification_frame.id = "w10_notification_frame"
    document.body.appendChild(w10_notification_frame);

    var w10_notification_icon = document.createElement("embed");
    w10_notification_icon.id = "w10_notification_icon";
    w10_notification_icon.src = "Info icon.svg";
    w10_notification_icon.type = "image/svg+xml"
    w10_notification_frame.appendChild(w10_notification_icon);

    var w10_notification_title = document.createElement("div");
    w10_notification_title.id = "w10_notification_title";
    w10_notification_title.innerHTML = title;
    w10_notification_frame.appendChild(w10_notification_title);

    var w10_notification_content = document.createElement("div");
    w10_notification_content.id = "w10_notification_content";
    w10_notification_content.innerHTML = content;
    w10_notification_frame.appendChild(w10_notification_content);

    var w10_notification_audio = document.createElement("audio");
    w10_notification_audio.src = "w10_notification_audio.wav";
    w10_notification_audio.type = "audio/wav"
    w10_notification_audio.id = "w10_notification_audio";
    w10_notification_audio.autoplay = "autoplay";
    w10_notification_audio.style.display = "none";
    w10_notification_frame.appendChild(w10_notification_audio);


    var w10_notification_frame = document.getElementById("w10_notification_frame");
    w10_notification_frame.addEventListener("click", function () {
        var w10_notification_frame = document.getElementById("w10_notification_frame");
        document.body.removeChild(w10_notification_frame);
    });
    setTimeout(function () {
        var w10_notification_frame = document.getElementById("w10_notification_frame");
        document.body.removeChild(w10_notification_frame);
    }, 5000);
}