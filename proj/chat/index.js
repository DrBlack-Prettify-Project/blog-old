var usr=123;
var avatar="https://picsum.photos/50/50?random=1";
var usrname="Test User"
window.onload=function(){
    var jump=document.createElement("a");
    jump.name="last-msg";
    jump.id="jump";
    var chatbox=document.getElementById("chatbox");
    chatbox.appendChild(jump);
    var jump_a=document.getElementById("jump-hplink");
    jump_a.click();
}

function send(){
    var chatbox=document.getElementById("chatbox");
    var jump=document.getElementById("jump");
    var iptbox=document.getElementById("iptbox");
    var content=iptbox.value;
    if(!content){alert('请勿发送空内容！');return;}
    chatbox.removeChild(jump);
    content=content.replace("<","‍‍<‍‍‍‍")
    content=content.replace("</","‍‍<‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍/‍‍‍‍")
    iptbox.value="";
    var xhr=new XMLHttpRequest();
    xhr.open("post","send.php");
    var senddata="content="+content+"&usr="+usr+"&seid="+Date.parse(new Date())/1000;
    xhr.send(senddata);

    var sent_container=document.createElement("div")
    sent_container.className="sent";

    var avatar_element=document.createElement("img");
    avatar_element.className="avatar";
    avatar_element.src=avatar;

    var msgcontain=document.createElement("div");
    msgcontain.className="pop-sent";
    var date=new Date();
    msgcontain.title="用户名:"+usrname+"\nUID:"+usr;
    msgcontain.innerHTML=usrname+" "+(date.getMonth()+1)+"-"+date.getDate()+" " +date.getHours()+":"+date.getMinutes();

    var content_contain=document.createElement("div");
    content_contain.innerHTML=content;
    content_contain.className="content";

    msgcontain.appendChild(content_contain);
    sent_container.appendChild(avatar_element)
    sent_container.appendChild(msgcontain);

    chatbox.appendChild(sent_container);
    var jump=document.createElement("a");
    jump.name="last-msg";
    jump.id="jump";
    chatbox.appendChild(jump);
    var jump_a=document.getElementById("jump-hplink");
    jump_a.click();
    
}

function popup(){
    var popbg=document.createElement("div");
    popbg.id = "popbg";
    document.body.appendChild(popbg);
    popbg = document.getElementById("popbg");

    var popframe = document.createElement("div");
    popframe.id = "popframe";
    popbg.appendChild(popframe);
    popframe=document.getElementById("popframe");

    var poptitle = document.createElement("div");
    poptitle.id = "poptitle";
    poptitle.innerHTML = "偏好设置";
    popframe.appendChild(poptitle);
    poptitle = document.getElementById("poptitle");

    var popclose = document.createElement("div");
    popclose.id = "popclose";
    popclose.onclick = "closepopup";
    popclose.innerHTML="×";
    popclose.onclick=closepopup();
    poptitle.appendChild(popclose);
}
function closepopup() {
    var popbg = document.getElementById("popbg");
    document.body.removeChild(popbg);
}