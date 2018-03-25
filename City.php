<?php

class City {
	
	var $description;
	var $storeList = array();

	function addStore($store){
		$this->storeList[] = $store;
	}

}


?>