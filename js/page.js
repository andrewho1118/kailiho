function getWidth() {
    var s = "";
    s += "網頁可見區域寬：" + (document.body.clientWidth + 18);
    s += "<br/>網頁可見區域高：" + document.body.clientHeight;
    return s;
}


/* 
//引用此JS
<script type="text/javascript" src="js/page.js"></script>

//放在script中
$(window).resize(function () {
    $("#winWidth").html("<p>" + getWidth() + "</p>");
});

//在html中顯示就設block，隱藏就設none
<div id="winWidth" style="display: block; font-family: Arial;">resize windows to show the width changing value here.</div>

*/