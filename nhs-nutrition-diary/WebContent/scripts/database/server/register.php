<?php
/**
 * Register.php is the script called when the user clicks submit in the registration process. It contains the function call
 * to the validation class which checks whether the data passed to the form conforms to certain rules (min/max length, if it is unique etc.). 
 * If it passes the validation it allows the user to register, if not it returns errors relating to why the registration was unsuccessful.  
 * 
 * Created 22nd December 2014
 * @author Vikram Bakshi
 * */
 
require_once 'init.php';

if(Input::exists('post'))
{
	$validate = new Validate();
	$validation = $validate -> check($_POST, array(
			'nhsnumber' => array(
				'required' => true,
				'min' => 5, //min length
				'max' => 15, //max length
				'unique' => 'users'
			),
			'password' => array(
				'required' => true,
				'min' => 6,
			),
			'password_again' => array(
				'required' => true,
				'matches' => 'password'
			),
			'weight' => array(
				'required' => true
			),
			'dob' => array(),
			'activitylevel' => array()
	));
	
	if($validation->passed())
	{
		echo 'passed'; //register user
		$user = new User(); 
		$salt = Hash::salt(32);

		try 
		{
			$user->create(array(
					'nhsnumber' 			=> Input::get('nhsnumber'),
					'password' 				=> Hash::make(Input::get('password'),$salt),
					'salt' 					=> $salt,
					'dateofbirth' 			=> Input::get('dob'),
					//TODO fetch gender from registration form
					'gender' 				=> "male",//Input::get('gender'),
					 
					'activitylevel' 		=> Input::get('activity_level'),
					'registrationtimestamp' => date('Y-m-d H:i:s'),
					'group' 				=> 1
			));
			
			$userID = DB::getInstance()->get('users', array('nhsnumber','=',Input::get('nhsnumber')))->first()->id; 
			
			DB::getInstance()->insert('userweightmanifest',array(
					'userid'				=> $userID,
					'datetime' 				=> date('Y-m-d H:i:s'),
					'weight'				=> Input::get('weight')
					));
			
			$login = $user -> login(Input::get('nhsnumber'), Input::get('password'), true);
		} catch(Exception $e)
		{
			echo ($e->getMessage());
		}
		
		echo "You have registered successfully! You will be redirected in 5 seconds. <br/>
				If you are not redirected please ".'<a href="../../../home.html">'. 'click here'.'</a>';
		header( "refresh:5;url=../../../home.html");
		//Redirect::to('../../../home.html');
	} else 
	{
		print_r($validation->getErrors()); //output errors
		
	}
	//TODO call SubmitController.prototype.updateRequirements()

} 
?>