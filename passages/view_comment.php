<?php
$target = $_GET["target"];
$target = $target ."\\comments.txt";
$res=file_get_contents($target);
echo $res;
echo "]\n}";
?>