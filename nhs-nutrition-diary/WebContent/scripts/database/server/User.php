<?php

class User
{
	private $_db;
	
	public function __construct($user = null)
	{
		$this->_db = DB::getInstance();
	}
	
	public function create($fields = array())
	{
		
		if(!$this->_db->insert('users', $fields))
		{
			echo var_dump($fields); //For DEBUGGING
			throw new Exception('There was a problem creating an account.');
		}
	}
	
	
}


?>