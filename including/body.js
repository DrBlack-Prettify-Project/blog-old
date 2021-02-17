/*===============================数据库开始===============================*/
/*===============================导航栏列表===============================*/
var navbar_data = [
    {
        "name": "首页",
        "link": "/"
    },
    {
        "name": "睿站主页",
        "link": "https://space.bilibili.com/108238952"
    },
    {
        "name": "QQ音乐H5播放器",
        "link": "/proj/qqmusic/"
    },
    {
        "name": "联系我",
        "link": "/connect.html"
    },
    {
        "name": "捐赠我",
        "link": "/donate.html"
    }
];

/*===============================下载中心列表===============================*/
var dlcenter_data = {
    "links": [
        {
            "title": "飞机大战",
            "link": "/dl/PWLwC/Executable.exe"
        },
        {
            "title": "丧心病狂的404页面",
            "link": "/dl/404.zip"
        },
        {
            "title": "Aria2离线下载(Powered By AriaNG)",
            "link": "/AriaNG"
        },
        {
            "title": "Aria2下载完成的任务",
            "link": "/dl"
        }
    ]
}

/*===============================项目列表===============================*/
var proj_data = {
    "links": [
        {
            "title": "仿Fiora在线聊天(啥都没有)",
            "link": "/proj/chat"
        },
        {
            "title": "身份证号码生成",
            "link": "/proj/ID-Gen"
        },
        {
            "title": "QQ音乐播放",
            "link": "/proj/qqmusic"
        },
        {
            "title": "Windows Touko[协助创作]",
            "link": "/proj/wintouko/"
        },
        {
            "title": "BV/AV互转",
            "link": "/proj/bv_av_transfer/"
        },
        {
            "title": "S B 一 下，你 就 知 道",
            "link": "/proj/sbyx/sbyx.html"
        }
    ]
}
/*===============================数据库结束===============================*/

/*===============================未完成加载警告===============================*/
var unloaded_warn = document.createElement("div");
unloaded_warn.style.cssText="margin: 0px; padding: 10px; height: 30px; width: fit-content; position: fixed; z-index: 999999; top: 30px; left: 50%; transform: translateX(-50%); transition: all ease-in-out 1s; box-shadow: black 0px 0px 20px; border-radius: 10px; background-color: rgb(26, 132, 215);"
unloaded_warn.innerHTML = "警告：页面尚未加载完成，可能会有部分元素显示不正确！";
document.body.appendChild(unloaded_warn);
window.onload = function () {
    document.body.removeChild(unloaded_warn);
    setTimeout(function () {
        unloaded_warn.innerHTML = "页面已加载完成，请放心观看！";
        document.body.appendChild(unloaded_warn);
        setTimeout(function () { document.body.removeChild(unloaded_warn); unloaded_warn = null; }, 1000);
    }, 500)
}

/*===============================导航栏引入===============================*/
var navbar = document.createElement("div");
navbar.className = "navbar";
document.body.appendChild(navbar);
for (var i = 0; i < navbar_data.length; i++) {
    var hplink=document.createElement("a");
    hplink.href=navbar_data[i].link;
    hplink.innerHTML=navbar_data[i].name;
    hplink.style.width=100 / navbar_data.length+"%";
    navbar.appendChild(hplink);
}
/*===============================项目列表引入===============================*/
console.log("Importing Project Block(Visible Element)...");
var projects = document.createElement("div");
projects.className = "project";
document.body.appendChild(projects);
var projects_title = document.createElement("div");
projects_title.className = "blocktitle";
projects_title.innerHTML = "我的项目<br>My Projects";
projects.appendChild(projects_title);
projects_title = null;
for (var i = 0; i < proj_data.links.length; i++) {
    var hplink4dlc = document.createElement("a");
    hplink4dlc.innerHTML = proj_data.links[i].title;
    hplink4dlc.target = "_blank";
    hplink4dlc.href = proj_data.links[i].link;
    projects.appendChild(hplink4dlc);
    var br = document.createElement("br");
    projects.appendChild(br);
}
br = null;
hplink4dlc = null;
projects = null;
proj_data = null;
/*document.write('        <a href="" target="_blank" title="系统由 湮柏 制作 网页由 我爱C艹 制作"></a><br>');
document.write('        <a href="/" target="_blank" title="又名：疑难杂症解决方案">/a><a href="" target="_blank" title="又名：疑难杂症解决方案(iframe版本)">(iframe版本)</a><br>');*/

/*===============================下载中心引入===============================*/
console.log("Importing Download Center(Visible Element)...");
var dlcenter = document.createElement("div");
dlcenter.className = "downloadcenter";
document.body.appendChild(dlcenter);
var dlcenter_title = document.createElement("div");
dlcenter_title.className = "blocktitle";
dlcenter_title.innerHTML = "下载中心<br>Download Center";
dlcenter.appendChild(dlcenter_title);
dlcenter_title = null;
for (var i = 0; i < dlcenter_data.links.length; i++) {
    var hplink4dlc = document.createElement("a");
    hplink4dlc.innerHTML = dlcenter_data.links[i].title;
    hplink4dlc.target = "_blank";
    hplink4dlc.href = dlcenter_data.links[i].link;
    dlcenter.appendChild(hplink4dlc);
    var br = document.createElement("br");
    dlcenter.appendChild(br);
}
br = null;
hplink4dlc = null;
dlcenter = null;
dlcenter_data = null;

/*===============================返回顶部===============================*/
console.log("Creating Element: Back To Top");
var back2top = document.createElement("a");
back2top.name = "top";
document.body.appendChild(back2top);
back2top = null;
document.write('<a href="#top"><div class="backtotop"></div></a>');
var back2top = document.createElement("a");
back2top.href = "#top";
back2top.id = "b2top_hplink";
document.body.appendChild(back2top);
back2top = document.createElement("div");
back2top.className = "backtotop";
var template = document.getElementById("b2top_hplink");
template.appendChild(back2top);
template.id = null;
template = null;
back2top = null;

/*===============================Footer===============================*/
console.log("Creating Element: Footer");
var footer = document.createElement("div");
footer.className="footer";
footer.innerHTML="Copyrights © 我爱C艹 2020 - All Rights Reserved - 由CaoPress/CaoChou强力驱动";
footer.innerHTML=footer.innerHTML+' <a href="/" title="主站">欢迎来访主站</a>&nbsp;&nbsp;<a target="_blank" href="/about.html">关于本站</a><br>';
footer.innerHTML=footer.innerHTML+'<a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><sub><img alt="知识共享许可协议" style="border-width:0;height:15px;width:80px;" src="/img/by-nc-nd@80x15.png" /></sub></a>:本作品采用<a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议</a>进行许可。<br>';
footer.innerHTML=footer.innerHTML+'挂个友链：<a href="http://yb.zka.ink/" target="_blank">湮柏的Web</a> | <a href="https://i-am-a-loser-using-windows-server.github.io/" target="_blank">博客二号</a> | <a href="https://skipm4.com" target="_blank">SkipM4的日(月)记本</a>';
document.body.appendChild(footer);
footer=null;
var l2d=document.createElement("script");
l2d.src="/including/assets/autoload.js"
l2d.type="text/javascript"
l2d.defer="defer";
document.body.appendChild(l2d);
l2d=null;
/*==============================================================*/

/*
var threshold = 160; // 打开控制台的宽或高阈值
// 每秒检查一次
var check = setInterval(function() {
    if (window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold) {
        // 如果打开控制台，则刷新页面
        alert('请勿打开侧边控制台！');
        window.location.herf="about:blank";
    }
}, 1000);
//阻止F12
window.onkeydown = window.onkeyup = window.onkeypress = function (event) {
    // 判断是否按下F12，F12键码为123
    if (event.keyCode == 123) {
    event.preventDefault(); // 阻止默认事件行为
    window.event.returnValue = false;
    }
}
*/