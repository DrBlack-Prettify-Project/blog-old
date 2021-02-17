<?php
date_default_timezone_set("Asia/Shanghai");
$wrtUsr = $_GET["usr"];
$wrtContent= $_GET["content"];
$seid = $_GET["seid"];
if(seid == time()){
    
$target = fopen("msg.txt", "a");
$wrtContent = "[".$wrtUsr."]@[". date("h:i a")."]=".$wrtContent."\n";
fwrite($target, $wrtContent);
fclose($target);
echo "Suceeded!";
}else{
    echo "SEID Incorrect!";
}
?>