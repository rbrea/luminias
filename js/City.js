City = function(){
	
}

City.init = function(contextRoot){

	$("#sProvincia").on('change', function(){

		City.search(contextRoot);

		return;
	});


	return;
}

City.search = function(contextRoot){

	var sProv = $("#sProvincia");
	
	$.ajax({ 
	   type    : "GET",
	   url     : contextRoot + "CityService.php?provinceId=" + sProv.val(),
	   contentType: "application/json;",
	   success:function(data) {
	   		$("#sCity > option").remove();
	   		$("#sCity").append($("<option value=''>Todas las ciudades</option>"));
		   	//Message.hideMessages($('#modalClientAlertMessages'), $("#modalClientMessages"));
		   	if(data != null && data.status == 0){
				   
		   		$.each(data.info, function(idx, value){
		   			$("#sCity").append($("<option value='" + value.id + "'></option>").append(value.name));

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
