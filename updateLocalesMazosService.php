<?php
	// CityService.php
	include_once('dbConfig.php');

	$query = "select id from locales";

	$result = array();
	
	$cantLocales = 0;
	$cantMazos = 0;

	$q = mysql_query($query);

	while($r = mysql_fetch_array($q)){
		$storeId = "" . $r['id'];
		$cantLocales = $cantLocales + 1;
		$query2 = "select id from mazos";

		$q2 = mysql_query($query2);

		while($r2 = mysql_fetch_array($q2)){
			$mazoId = "" . $r2['id'];
			
			$cantMazos = $cantMazos + 1;

			$qi = "insert into locales_mazos (locales_id, mazos_id) values ($storeId, $mazoId)";

			mysql_query($qi);
		}
	}

	@mysql_close($conn);
	 
	echo "finished cantLocales: $cantLocales, cantMazos: $cantMazos";
?>