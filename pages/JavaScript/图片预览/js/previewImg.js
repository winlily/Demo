var viewer_div=$('.viewer');	
var destroy=$('[data-id="destroy"]');	//关闭按钮
var big_img=$('[data-id="big_img"]');	//图片展示td
var prew=$('[data-id="prev"]');	//图片展示部分--左按钮
var next=$('[data-id="next"]');	//图片展示部分--右按钮
var prev_group=$('[data-id="prev_group"]');	//图片缩略图部分--左按钮
var next_group=$('[data-id="next_group"]');	//图片缩略图部分--右按钮
var img_thumbnail_list=$('[data-id="img-thumbnail-list"]');	//存放图片缩略图的div
var imgs_ul=$('[data-id="img-thumbnail-content"]');	//存放图片缩略图的ul
var imgs=imgs_ul.find('img');	//所有图片缩略图对象
var imgs_num=imgs.length;	//图片缩略图总个数
var expansion=$('[data-id="expansion"]');	//展示图片预览条的按钮
var total_info=$('[data-id="total-info"]');	//显示第几张图片
var current_a=imgs_ul.find('.current');		//加有current的a
var current_a_img=current_a.children('img');	//加有current的img
$(function(){
	var current_data_index=current_a_img.attr('data-index');	//加有current的img的data-index值
	var val=current_a_img.attr('data-index');
	big_img.empty();
	big_img.append(current_a_img.clone());
	total_info.text('第'+val+'/'+imgs_num+'张');
	if(current_data_index==1){
		prew.addClass('disable-prev');
		next.removeClass('disable-next');
	}else if(current_data_index==imgs_num){
		next.addClass('disable-next');
		prew.removeClass('disable-prev');
	}else{
		prew.removeClass('disable-prev');
		next.removeClass('disable-next');
	}
})
/*关闭按钮点击事件*/
destroy.click(function(){
	viewer_div.hide();
})
/*展开、收起图片预览条*/
expansion.click(function(){
	var _this=$(this);
	if(_this.hasClass('expansion_down')){
		_this.removeClass('expansion_down').addClass('expansion_up');
		img_thumbnail_list.hide();
	}else{
		_this.removeClass('expansion_up').addClass('expansion_down');
		img_thumbnail_list.show();
	}
})
/*对所有图片进行遍历*/
$.each(imgs, function(index) {
	var _this=$(this);
	var img_index=index+1;
	_this.attr('data-index',img_index);
	_this.click(function(){
		clickImg(_this,img_index);
	})
});
/*图片展示部分--左按钮点击事件*/
	prew.click(function(){
	var _this=$(this);
	var current_a=imgs_ul.find('.current');	//加有current的a
	var current_a_img=current_a.children('img');
	var current_data_index=current_a_img.attr('data-index');
	var current_a_li=current_a.parent('li');
	var prev_li=current_a_li.prev('li');
	var prev_li_img=prev_li.find('img');
	var prev_data_index=prev_li_img.attr('data-index');
	if(prev_li.length){
		clickImg(prev_li_img,prev_data_index);
	}
})
/*图片展示部分--右按钮点击事件*/
	next.click(function(){
	var _this=$(this);
	var current_a=imgs_ul.find('.current');	//加有current的a
	var current_a_img=current_a.children('img');
	var current_data_index=current_a_img.attr('data-index');
	var current_a_li=current_a.parent('li');
	var next_li=current_a_li.next('li');
	var next_li_img=next_li.find('img');
	var next_data_index=next_li_img.attr('data-index');
	if(next_li.length){
		clickImg(next_li_img,next_data_index);
	}
})
/*图片点击事件*/
function clickImg(obj,val){
	var current_a=imgs_ul.find('.current');	//加有current的a
	var obj_data_index=obj.attr('data-index');
	current_a.removeClass('current');
	obj.parents('.img-error').addClass('current');
	big_img.empty();
	big_img.append(obj.clone());
	total_info.text('第'+val+'/'+imgs_num+'张');
	if(obj_data_index==1){
		prew.addClass('disable-prev');
		next.removeClass('disable-next');
	}else if(obj_data_index==imgs_num){
		next.addClass('disable-next');
		prew.removeClass('disable-prev');
	}else{
		prew.removeClass('disable-prev');
		next.removeClass('disable-next');
	}
}
