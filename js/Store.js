Store = function(){}

Store.init = function(contextRoot){


	Store.search(contextRoot, "", "");

	return;
}

Store.search = function(contextRoot, cityId, provId){
	
	var cityIdParam = "?cityId=" + cityId;

	if(cityId == null || cityId == "" || cityId === undefined){
		cityIdParam = "";
	}

	var provIdParam = "?provinceId=" + provId;
	if(cityIdParam != null && cityIdParam != ""){
		provIdParam = "&provinceId=" + provId;
	}

	if(provId == null || provId == "" || provId === undefined){
		provIdParam = "";
	}

	$.ajax({ 
	   type    : "GET",
	   url     : contextRoot + "StoreService.php" + cityIdParam + provIdParam,
	   contentType: "application/json;",
	   success:function(data) {
	   		
	   		var container = $("#localesContainer");

	   		container.children().remove();

		   	//Message.hideMessages($('#modalClientAlertMessages'), $("#modalClientMessages"));
		   	if(data != null && data.status == 0 && data.info != null && data.info.length > 0){
				   
		   		$.each(data.info, function(idx, value){


		   			var rowCity = Store.createCityNameRow(value.description);

		   			container.append(rowCity);

		   			Store.addStoreRows(container, value.storeList);

		   			return;
		   		});

			   	return;
		   	} else {
			   //Message.showMessages($('#modalClientAlertMessages'), $("#modalClientMessages"), data.message);
			   container.append($("<div class='row'><div class='col-md-12'>No se han encontrado locales</div></div>"));
			   
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

Store.createCityNameRow = function(cityName){

	var row = ContainerFunctions.createRow();
	var col1 = ContainerFunctions.createColumn("2").append("&nbsp;");
	var col2 = ContainerFunctions.createColumn("8").append($("<h3><span id='cityNameTitle'>" + cityName + "</span></h3>"));
	var col3 = ContainerFunctions.createColumn("2").append("&nbsp;");

	row.append(col1).append(col2).append(col3);

	return row;
}

Store.addStoreRows = function(container, storeList){

	var row1 = ContainerFunctions.createRow();
	var col1 = ContainerFunctions.createColumn("2").append("&nbsp;");
	var col2 = ContainerFunctions.createColumn("9");
	var col3 = ContainerFunctions.createColumn("1").append("&nbsp;");

	var table = ContainerFunctions.createTable();
	var tbody = ContainerFunctions.createTableBody();

	$.each(storeList, function(idx, value){

		var tr = ContainerFunctions.createTableRow();		
		var td = ContainerFunctions.createTableColumn();

		var rowStore = ContainerFunctions.createRow();
		var colImage = ContainerFunctions.createColumn("2").append("&nbsp;");
		var colDescription = ContainerFunctions.createColumn("10");

		colImage.append($("<img src='" + value.image + "' class='img-responsive img-thumbnail'>"));

		var rowSlug = ContainerFunctions.createRow();

		var colSlug = ContainerFunctions.createColumn();

		colSlug.css("padding-top", "2%");
/*
		$.each(value.imageSlugList, function(idx, slugValue){

			colSlug.append($("<span><img width='5%' src='" + slugValue + "'></span>")).append("&nbsp;").append("&nbsp;");

			return;
		});
*/
		rowSlug.append(colSlug);

		colDescription.append(rowSlug);


		var rowStoreInfo = ContainerFunctions.createRow();
		var colStoreInfo = ContainerFunctions.createColumn();

		colStoreInfo.css("padding-top", "2%");
		//colStoreInfo.css("padding-bottom", "1%");

		var span = $("<span style='font-size:1em;'></span>");

		span.append($("<div/>").html(value.description).text()).append($("<br>")).append($("<div/>").html(value.address).text());

		colStoreInfo.append(span);

		rowStoreInfo.append(colStoreInfo);

		colDescription.append(rowStoreInfo);

		rowStore.append(colImage).append(colDescription);
		td.append(rowStore);
		tr.append(td);

		tbody.append(tr);

		return;
	});

	table.append(tbody);
	col2.append(table);

	row1.append(col1).append(col2).append(col3);
	container.append(row1);

	return;
}
