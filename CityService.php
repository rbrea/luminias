<?php
	// CityService.php
	include_once('dbConfig.php');

	$provinceId = isset($_GET['provinceId']) ? str_replace("%20"," ", mysql_real_escape_string($_GET['provinceId'])) :  "";

	$query = "select id, provincia, localidad from lugares";

	$result = array();

	if(!empty($provinceId)){
		$query = $query . " where provincia_id = $provinceId";
		
		$q = mysql_query($query);

		while($r = mysql_fetch_array($q)){
			$cityName = "" . $r['localidad'];
			$result[] = array("id" => $r['id'], "name" => htmlspecialchars($cityName, ENT_SUBSTITUTE));
		}

	} else {
		// [roher] nada q hacer x ahora
	}

	$json = array("status" => 0, "info" => $result);

	@mysql_close($conn);
	 
	header('Content-type: application/json');
	// [roher] supuestamente esto, es el retorno del servicio ...
	echo json_encode($json);

?>