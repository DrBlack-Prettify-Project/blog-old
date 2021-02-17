<!DOCTYPE HTML>
<html lang="zh">
<HEAD>
<TITLE>我们已经收到</title>
<meta charset="utf-8" />
<script type="text/javascript" src="/including/head.js"></script>
<style type="text/css">
<!--
body {
  display: flex;
  justify-content: center;
  text-align:center;
  text-align:-webkit-center;
  text-align: -moz-center;
  text-align: -ms-center;
  align-items: center;
  min-height: 100vh;
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
.yourform{
  height:135px;
  font-size: 24px;
  color: #FFFFFF;
  background-color: rgba(40,41,35,0.85);
}
-->
</style>
</head>
<body>
  <div class="solid">
    <input type="checkbox" autofocus="autofocus" checked="checked" disabled="disabled">
    <svg width="400" height="400">
      <circle fill="none" stroke="#000000" stroke-width="20" cx="200" cy="200" r="190" class="circle" stroke-linecap="round" transform="rotate(-90 200 200) "/>
      <polyline fill="none" stroke="#000000" stroke-width="24" points="88,214 173,284 304,138" stroke-linecap="round" stroke-linejoin="round" class="tick" />
    </svg>
    <%@ language="vbscript" codepage="65001" %>
    <%
      Session.codepage=65001
      Response.Charset="utf-8"
    %>
    <%
      dim name
      name=Request.QueryString("name")
      Response.Write("<h2> 你好，" & name & "!")
    %>
    你的表单已经提交到服务器！<br>
    <div class="yourform">
      <%
        name=Request.QueryString("name")
        Response.Write("↓你的表单↓ <br> 称呼:" & name & "<br>")
      %>
      <%
        dim connect
        connect=Request.QueryString("connect")
        Response.Write("联系方式:" & connect  & "<br>" )
      %>
      <%
        dim content
        content=Request.QueryString("content")
        Response.Write("内容:" & content  & "<br>" )
      %>
<%
dim fs,f,ts
dim userip
if name = "" Or content = "" Or connect = "" Then
  Response.Write("<script>alert('您的表单未填写完整，我们将不会收取该表单，即使稍后的页面可能提示提交成功！\n即将跳转到上一页面！')</script>")
  Response.Write("<script>window.history.back(-1)</script>")
Else
  userip = Request.ServerVariables("HTTP_X_FORWARDED_FOR")
  If userip = "" Then userip = Request.ServerVariables("REMOTE_ADDR")
  set fs=Server.CreateObject("Scripting.FileSystemObject")
  Set f=fs.GetFile("C:\inetpub\logs\LogFiles\W3SVC1\Z_recieved.txt")
  Set ts=f.OpenAsTextStream(8,-1)
  ts.Write("来自IP"& chr(34) & userip & chr(34) & ":" & chr(13) & chr(10))
  ts.Write("称呼：" & name & chr(13) & chr(10))
  ts.Write("联系方式：" & connect & chr(13) & chr(10))
  ts.Write("内容：" & content &chr(13) & chr(10) & chr(13) & chr(10))
  ts.Close
set ts=nothing
set f=nothing
set fs=nothing
End If
%>
    </div>
    即将在5秒后跳转到上一页面！
    <script type="text/javascript">
        window.onload = function(){
          setTimeout(function(){
            window.history.back(-1)
            },5000)
          }
      </script>
    <!--
    dim redirect
    redirect=Request.QueryString("redir")
    Response.Write("<a href=" & chr(34) & redirect & chr(34) & " id=" &chr(34)& "redir" &chr(34)& ">返回源地址(3秒后跳转)</a>")
    %>
      -->
  </div>
</body>
</html>