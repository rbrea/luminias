<?php

class Store {
	
	var $id;
	var $description;
	var $address;
	var $image;
	var $imageSlugList = array();

	function addImageSlug($imageSlug){
		$this->imageSlugList[] = $imageSlug;
	}

}


?>