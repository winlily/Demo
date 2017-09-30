var url='';
function setImagePreview(docObj) {//imgObjPreview
    var docObj = document.getElementById(docObj);
    //var imgObjPreview = document.getElementById(imgObjPreview);
    if (docObj.files && docObj.files[0]) {
        //火狐下，直接设img属性
        //imgObjPreview.style.display = 'block';
        // imgObjPreview.src = docObj.files[0].getAsDataURL();

        //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
        //imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
        url=window.URL.createObjectURL(docObj.files[0]);
        console.log(url);
        return url;
    } /*else {
        //IE下，使用滤镜
        docObj.select();
        var imgSrc = document.selection.createRange().text;
        var localImagId = document.getElementById("localImag");
        //必须设置初始大小
        localImagId.style.width = "180px";
        localImagId.style.height = "160px";
        //图片异常的捕捉，防止用户修改后缀来伪造图片
        try {
            localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
        } catch (e) {
            alert("您上传的图片格式不正确，请重新选择!");
            return false;
        }
       // imgObjPreview.style.display = 'none';
        document.selection.empty();
        url=imgSrc;
        console.log(imgSrc);
    }*/
   // return true;
}

/*function InsertImageInputShow(){
    $('.classFile').click();
}*/