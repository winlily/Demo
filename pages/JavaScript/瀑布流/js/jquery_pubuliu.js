/**
 * @authors : WangLi
 * @QQ : 1790676280
 * @E-mail : winlily@foxmail.com
 * @date : 2017-03-04 15:07:56
 * @version $Id$
 */
$(function() {
    waterfall();
});

function waterfall() {
    var $boxs = $(".box");
    var w = $boxs.eq(0).innerWidth();
    var cols = Math.floor($(window).width() / w);
    var hArr = [];
    // $('#main').width(w * cols).css('margin', '0 auto');
    $boxs.each(function(index, el) {
        var _this = $(this);
        var h = _this.innerHeight();
        if (index < cols) {
            hArr[index] = h;
        } else {
            var minH = Math.min.apply(null, hArr);
            var minHIndex = $.inArray(minH, hArr);
            $(el).css({
                'position': 'absolute',
                'top': minH + 'px',
                'left': minHIndex * w + 'px'
            });
            hArr[minHIndex] += h;
        }
    });
}
