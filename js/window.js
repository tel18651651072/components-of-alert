define(['jquery','jqueryUI'],function($,$UI){
	function Window(){
		this.cfg={
			width:500,
			height:300,
			title:'系统消息',
			content:'',
			callback:null,
			hasCloseBtn:false,
			skinClassName:null,
			textAlertBtn:'确定',
			hasMask:true,
			isDraggable:true
		}
    }
	Window.prototype={
		alert:function(cfg){
			var CFG=$.extend(this.cfg,cfg);
			var boundingBox=$('<div class="window_boundingBox">'+
                  '<div class="window_header">'+CFG.title+'</div>'+
                  '<div class="window_content">'+CFG.content+'</div>'+
                  '<div class="window_footer">'+
                  '<input type="button" value="'+CFG.textAlertBtn+'"></div>'+
				'</div>');
			boundingBox.appendTo("body");
			// boundingBox.html(CFG.content);
			var btn=$('.window_footer').find('input');
			// btn.appendTo(boundingBox);
			var mask=null;
			if (CFG.hasMask) {
				mask=$('<div class="window_mask"></div>');
				mask.appendTo('body');
			}
			btn.click(function(){
				CFG.callback&&CFG.callback();
				boundingBox.remove();
				mask&&mask.remove();
			});
			// $.extend(this.cfg,cfg);  //合并处理
			boundingBox.css({
				width:CFG.width+'px',
				height:CFG.height+'px',
				left:(CFG.x||(window.innerWidth-CFG.width)/2)+'px',
				top:(CFG.y||(window.innerHeight-CFG.height)/2)+'px'
			});
			if(CFG.hasCloseBtn){
				var closeBtn=$('<span class="window_CloseBtn">X</span>');
				closeBtn.appendTo(boundingBox);
				closeBtn.click(function(){
					boundingBox.remove();
					mask&&mask.remove();
				});
			}
			if (CFG.skinClassName) {
				boundingBox.addClass(CFG.skinClassName)
			}
			if (CFG.isDraggable) {
				boundingBox.draggable();
			}

		},
		
		confirm:function(){},
		prompt:function(){}
	}
	return {
		Window:Window
	}
})