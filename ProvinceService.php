<?php
	// ProvinceService.php
	include_once('dbConfig.php');

	$provinceName = isset($_GET['proviceName']) ? mysql_real_escape_string($_GET['provinceName']) :  "";

	$query = "select id, provincia from provincias";

	if(!empty($provinceName)){
		$query = $query + " where provincia = '$proviceName'";
	}

	$q = mysql_query($query);

	$result = array();

	while($r = mysql_fetch_array($q)){
		//extract($r)
		//$result[] = array("name" => $provincia);
		$result[] = array("id" => $r['id'], "name" => $r['provincia']);
		//$result[] = "1";
	}

	$json = array("status" => 0, "info" => $result);

	@mysql_close($conn);
 
 	/* Output header */
 	header('Content-type: application/json');
 	// [roher] supuestamente esto, es el retorno del servicio ...
 	echo json_encode($json);

?>