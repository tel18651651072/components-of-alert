require.config({
	paths:{
		jquery:'jquery.min',
		jqueryUI:'http://code.jquery.com/ui/1.12.1/jquery-ui'
	}
});
require(['jquery','window'],function($,w){
	$('#a').click(function(){
		new w.Window().alert({
			title:'提示',
			content:"友玲是个听话的孩子",
			callback:function(){
				alert('you click the button')
			},
			width:300,
			height:150,
			y:50,
			hasCloseBtn:true,
			skinClassName:'window_skin_a',
			textAlertBtn:'确定',
			hasMask:true
		});
	});	
});