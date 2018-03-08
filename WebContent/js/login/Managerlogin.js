/**
 * 登录JS
 */

/*
 当调整浏览器窗口的大小时，发生 resize 事件。
resize() 方法触发 resize 事件，或规定当发生 resize 事件时运行的函数。
*/

$(window).resize(function() {
	$('#loginDiv').css({
		
		position : 'absolute',
		left : ($(window).width() - $('#loginDiv').outerWidth()) / 2,
		top : ($(window).height() - $('#loginDiv').outerHeight())/ 2 + $(document).scrollTop()

	});
});
// 初始化函数
$(window).resize();

//登录表格提交
function submitLoginForm(){
    $('#login').form('submit',{
    	url:'Managerlogin.ctrl',
        onSubmit:function(param){
    		//var pwd = $('#login input[name="password"]').val();
            return $(this).form('enableValidation').form('validate');
        },
       	success: function(data){
       		//此处测试前台数据是否成功传到后台
       	//	alert("success");
        	data = $.parseJSON(data);  
        	var object = data.object;
        	var error = data.error;
        	
        	if(! (typeof(error) == "undefined")){
        		$('#login').form('clear');
        		$.messager.alert({
        			title:'错误提示',
        			msg:error,
        			icon:"error"
        		});
        	}else {
	        	window.location.href="manager.html"
        	}
    	}
    });
}

//清除表中数据
function clearForm() {
	$('#login').form('clear');
}
