Province = function(){
	
}

Province.init = function(contextRoot){
	
	$.ajax({ 
	   type    : "GET",
	   url     : contextRoot + "ProvinceService.php?provinceName=",
	   contentType: "application/json;",
	   success:function(data) {
	   		
		   	//Message.hideMessages($('#modalClientAlertMessages'), $("#modalClientMessages"));
		   	if(data != null && data.status == 0){
				   
		   		$.each(data.info, function(idx, value){
		   			$("#sProvincia").append($("<option value='" + value.id + "'></option>").append((value.name).replace("1", "")));

		   			return;
		   		});

			   	return;
		   	} else {
			   //Message.showMessages($('#modalClientAlertMessages'), $("#modalClientMessages"), data.message);
			   
			   
		   	}
	   	},
	   	error:function(data){
			//Message.showMessages($('#modalClientAlertMessages'), $("#modalClientMessages"), data.responseJSON.message);
		   	alert(data.responseJSON.message);
		   
		   	return;
	   	}
	});



	return;
}
