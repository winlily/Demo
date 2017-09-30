/**
 *
 * @authors Your Name
 * @date   2016-11-10 17:08:08
 * @version $Id$
 */
function dialog(mask, dialog) {
    //获取页面的高度和宽度
    var sWidth = document.body.scrollWidth || document.documentElement.scrollWidth;
    var sHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
    //获取页面的可视区域高度和宽度
    var wWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var wHeight = document.documentElement.clientHeight || document.body.clientHeight;
    //获取登陆框的宽和高
    var dWidth = dialog.width();
    var dHeight = dialog.height();
    //设置登陆框的left和top
    var odialog_left = wWidth / 2 - dWidth / 2 + "px";
    var odialog_top = wHeight / 2 - dHeight / 2 + "px";
    mask.css({
        width: sWidth + "px",
        height: sHeight + "px"
    });
    dialog.css({
        left: odialog_left,
        top: odialog_top
    });
    mask.show();
    dialog.show();
}
