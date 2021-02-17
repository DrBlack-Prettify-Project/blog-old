<?php
$songListId=$_GET["songListId"];
$url = 'http://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?type=1&json=1&utf8=1&onlysong=0&new_format=1&g_tk_new_20200303=5381&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'."&disstid=".$songListId;
$curlReq = curl_init();
curl_setopt($curlReq, CURLOPT_URL, $url);
curl_setopt($curlReq, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curlReq, CURLOPT_CONNECTTIMEOUT, 30);
curl_setopt ($curlReq, CURLOPT_REFERER, "https://y.qq.com/");
$curlResp = curl_exec($curlReq);
curl_close($curlReq);
header('Content-Type: application/json');
echo $curlResp;
?>