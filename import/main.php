<?php

class Brizy_Import_Main {

	private $demo;
	private $key;

	public function __construct( $demo, $key ) {
		$this->demo = $demo;
		$this->key  = $key;
	}

	public function import() {

		try {
			$provider  = new Brizy_Import_Providers_Multisite( $this->demo, $this->key );
			$extractor = new Brizy_Import_Extractors_Xml( $provider->getDemoUrl() );
			$parser    = new Brizy_Import_Parsers_Parser( $extractor->getFilePath() );
			$data      = $parser->parse();

			if ( ! empty( $data['plugins'] ) ) {
				$plugins = new Brizy_Import_Plugins( $data['plugins'] );
				$plugins->install();
			}

			$importer = new Brizy_Import_Importers_WordpressImporter( $data );
			$importer->import();

		} catch ( DomainException $e ) {
			$extractor->cleanup();

			throw new DomainException( $e->getMessage() );
		}

		$extractor->cleanup();
	}
}
