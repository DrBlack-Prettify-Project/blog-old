<?php
$callback="callback";
$callback=$_GET['callback'];
$w=$_GET['w'];
$url="http://fy.iciba.com/ajax.php?a=fy&f=auto&t=auto&w=".$w;
$get=file_get_contents($url);
echo $callback."(".$get.");";
?>