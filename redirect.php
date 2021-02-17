<?php if (isset($_GET["url"])) {$url=$_GET['url'];}else{$url="/";} ?>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="3; url=<?php echo $url; ?>">
    <title>正在重定向...</title>
</head>
<body>
    <h1>正在重定向...</h1>
    如果5秒后仍未重定向至目标地址，请点击<a href="<?php echo $url; ?>">此处</a>来重定向到目标地址。<br><br>
    目标地址: <a href="<?php echo $url; ?>"><?php echo $url; ?></a>
</body>
</html>