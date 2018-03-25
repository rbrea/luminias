<?php
	// CityService.php
	include_once('dbConfig.php');
	include_once('City.php');
	include_once('Store.php');

	$provinceId = isset($_GET['provinceId']) ? str_replace("%20"," ", mysql_real_escape_string($_GET['provinceId'])) :  "";
	$cityId = isset($_GET['cityId']) ? str_replace("%20"," ", mysql_real_escape_string($_GET['cityId'])) :  "";

	$query = "select l.id local_id, l.imagen imagen_local, l.description local_description, l.address address, m.imagen imagen_mazo, lu.localidad localidad from locales l, ciudad_locales cl, locales_mazos lm, mazos m, lugares lu, provincias p where l.id = cl.locales_id and l.id = lm.locales_id and lm.mazos_id = m.id and cl.city_id = lu.id and p.id = lu.provincia_id";

	$result = array();

	if(!empty($provinceId)){
		$query = $query . " and lu.provincia_id = $provinceId";
	} else {
		// [roher] nada q hacer x ahora
	}

	if(!empty($cityId)){
		$query = $query . " and cl.city_id = $cityId";
	} else {
		// [roher] nada q hacer x ahora
	}

	$query = $query . " order by lu.localidad";
		
	$q = mysql_query($query);

	$lastStoreId = null;
	$lastCityDescription = null;

	$store = null;
	$city = null;


	while($r = mysql_fetch_array($q)){

		$cityDescription = htmlspecialchars($r['localidad'], ENT_SUBSTITUTE);

		if($cityDescription != $lastCityDescription){
			$lastCityDescription = $cityDescription;
			$city = new City();
			$city->description = $cityDescription;
			$cityList[] = $city;
		}

		$storeId = $r['local_id'];

		if($storeId != $lastStoreId){
			$lastStoreId = $storeId;
			$store = new Store();
			$store->id = $storeId;

			$store->description = htmlspecialchars($r['local_description'], ENT_SUBSTITUTE);
			$store->address = htmlspecialchars($r['address'], ENT_SUBSTITUTE);
			$store->image = htmlspecialchars($r['imagen_local'], ENT_SUBSTITUTE);

			//$storeList[] = $store;
			$city->addStore($store);
		}

		$store->addImageSlug(htmlspecialchars($r['imagen_mazo'], ENT_SUBSTITUTE));
	}

	

	$json = array("status" => 0, "info" => $cityList);

	@mysql_close($conn);
	 
	header('Content-type: application/json');
	// [roher] supuestamente esto, es el retorno del servicio ...
	echo json_encode($json);

?>
