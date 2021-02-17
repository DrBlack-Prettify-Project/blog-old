<?php
header("Access-Control-Allow-Origin: *");
header("content-type: text/xml; charset=utf-8");
$url="http://cn.bing.com/HPImageArchive.aspx?idx=0&n=1";
$get=file_get_contents($url);
echo $get;
?>