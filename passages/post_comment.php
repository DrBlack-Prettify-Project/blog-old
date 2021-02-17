<?php
$name=$_POST["name"];
$time=$_POST["time"];
$UA=$_POST["user_agent"];
$content=$_POST["content"];
$wrt=",\n        {
            \"id\": \"".md5($time)."\",
            \"name\": \"".$name."\",
            \"time\": \"".$time."\",
            \"ua\": \"".$UA."\",
            \"content\": \"".$content."\"
        }";
$target = $_POST["target"];
$target = "F:\\LocalHost\\passages\\".$target ."\\comments.txt";
if(is_file($target)==false){
    $wrt="var comments={
    \"data\": [".$wrt;
}
$target = fopen($target, "a");
fwrite($target, $wrt);
fclose($target);
?>
<!DOCTYPE HTML>
<html lang="zh-cn">
<HEAD>
<TITLE>评论已提交</title>
<meta charset="utf-8" />
<script type="text/javascript" src="/including/head.js"></script>
<style type="text/css">
<!--
*{
    margin:0;
    padding:0;
}
body {
  display:flex;
  overflow:hidden;
  justify-content: center;
  text-align:center;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
}

h2 {
  font-family: Helvetica;
  font-size: 36px;
  margin-top: 40px;
  color: #333;
  opacity: 0;
}

.circle {
  stroke-dasharray: 1194;
  stroke-dashoffset: 1194;
}

input[type="checkbox"]:checked ~ h2 {
  animation: .6s title ease-in-out;
  animation-delay: 1.2s;
  animation-fill-mode: forwards;
}

input[type="checkbox"]:checked + svg .circle {
  animation: circle 1s ease-in-out;
  animation-fill-mode: forwards;
}

input[type="checkbox"]:checked + svg .tick {
  animation: tick .8s ease-out;
  animation-fill-mode: forwards;
  animation-delay: .95s;
}

.tick {
  stroke-dasharray: 350;
  stroke-dashoffset: 350;
}

@keyframes circle {
  from {
    stroke-dashoffset: 1194;
  }
  to {
    stroke-dashoffset: 2388;
  }
}

@keyframes tick {
  from {
    stroke-dashoffset: 350;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes title {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
-->
</style>
</head>
<body>
  <div class="solid" style="padding-left:150px;padding-right:150px;">
    <input type="checkbox" checked="checked" disabled style="display:none">
    <svg width="400" height="400">
      <circle fill="none" stroke="#000000" stroke-width="20" cx="200" cy="200" r="190" class="circle" stroke-linecap="round" transform="rotate(-90 200 200) "/>
      <polyline fill="none" stroke="#000000" stroke-width="24" points="88,214 173,284 304,138" stroke-linecap="round" stroke-linejoin="round" class="tick" />
    </svg>
    <h1>您的评论已提交</h1>
    <h6>您的浏览器将在3秒后重定向至<b>上一个页面</b></h6>
    目标文章：<?php echo $_POST["target"]?><br>
    评论时间: <?php echo $_POST["time"]?>
    </div>
<script>
    setTimeout(() => {
        window.location.href="<?php 
            echo $_SERVER['HTTP_REFERER']; ?>";
    }, 3000);
</script>
</body>
</html>
