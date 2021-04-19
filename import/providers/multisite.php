<?php

class Brizy_Import_Providers_Multisite {

	private $demo;
	private $key;

	public function __construct( $demo, $key ) {
		$this->demo = $demo;
		$this->key  = $key;
	}

	private function getMainUrl() {
		return apply_filters( 'brizy_importer_get_main_url', 'http://test.themefuse.com/viorelimport' );
	}

	public function getDemoUrl() {
		return add_query_arg( [ 'key' => $this->key ], $this->getMainUrl() . '/' . $this->demo );
	}
}
