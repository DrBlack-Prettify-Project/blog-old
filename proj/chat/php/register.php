<?php
date_default_timezone_set("Asia/Shanghai");
$wrtUsr = $_GET["usr"];
$wrtContent= $_GET["content"];
$target = fopen("msg.txt", "a");
$wrtContent = "[".$wrtUsr."]@[". date("h:i a")."]=".$wrtContent."\n";
fwrite($target, $wrtContent);
fclose($target);
echo "Suceeded!";
?>