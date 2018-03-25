ContainerFunctions = function(){}

ContainerFunctions.createRow = function(){
	return $("<div class='row'></div>");
}

ContainerFunctions.createColumn = function(anchor){
	if(anchor == "" || anchor === undefined || anchor == null){
		anchor = "12";
	}

	return $("<div class='col-md-" + anchor + "'></div>");
}

ContainerFunctions.createTable = function(){
	return $("<table class='table'></table>");
}

ContainerFunctions.createTableBody = function(){
	return $("<tbody></tbody>");
}

ContainerFunctions.createTableRow = function(){
	return $("<tr></tr>");
}

ContainerFunctions.createTableColumn = function(){
	return $("<td></td>");
}

