document.querySelector("body").onmouseup = function () {
    var __trans_temp=window.getSelection();
    var __trans_temp_elem=document.createElement("div");
    __trans_temp_elem.innerHTML=__trans_temp;
    document.body.appendChild(__trans_temp_elem);
    if(__trans_temp_elem.innerHTML==""){
        return;
    }
    __trans_callup(__trans_temp_elem.innerHTML);
    document.body.removeChild(__trans_temp_elem);
    __trans_temp_elem=null;
    __trans_temp=null;
    /*try {
        var selecter = window.getSelection().toString();
        if (selecter != null && selecter.trim() != "") {
            __trans_callup(selecter);
        }
    } catch (err) {
        var selecter = document.selection.createRange();
        var s = selecter.text;
        if (s != null && s.trim() != "") {
            __trans_callup(s)
        }
    }
    String.prototype.trim = function () {
        return this.replace(/(^\s*)|(\s*$)/g, "");
    }*/
}
function __trans_callup(__keywords){
    var __trans_script_jsonp=document.createElement("script");
    __trans_script_jsonp.src="./jsonp.php?callback=__trans_callback&w="+__keywords;
    __trans_script_jsonp.id="__trans_script_jsonp";
    document.body.appendChild(__trans_script_jsonp);
    setTimeout(function(){
        var __trans_script_jsonp=document.getElementById("__trans_script_jsonp");
        document.body.removeChild(__trans_script_jsonp)
    }, 1000);
}
function __trans_callback(__trans_callback_data){
    var __callback_praised_translated;
    if(__trans_callback_data.status==0){__trans_callback_data.content.word_mean[0];}
    if(__trans_callback_data.status==1){__callback_praised_translated=__trans_callback_data.content.out;}
    var __lang_from=__trans_callback_data.content.from;
    var __lang_to=__trans_callback_data.content.to;
    var __display_text="检测到:"+__lang_from+"\n将翻译成:"+__lang_to+"\n\n翻译结果:"+__callback_praised_translated+"\n\n由爱词霸(金山)提供支持(我真的懒得搞其他的)";
    alert(__display_text);
}