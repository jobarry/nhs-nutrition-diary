<?php require_once 'scripts/database/server/init.php'; ?>
<!DOCTYPE html>
<html lang="en">
	<head>
    	<meta charset="utf-8">
    	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    	<meta name="viewport" content="width=device-width, initial-scale=1">
    	
    	<link href="lib/bootstrap/bootstrap.min.css" rel="stylesheet">
		<link href="css/standardPage.css" rel="stylesheet">
		
		<script src="lib/jquery/jquery-2.1.1.min.js"></script>
		<script src="lib/bootstrap/bootstrap.min.js"></script>
		
		<script src="scripts/util/Validator.js"></script>
		<script src="scripts/SubmitController.js"></script>
		<script src="scripts/database/server/ServerDBAdapter.js"></script>
		<script src="scripts/RequirementsCalculator.js"></script>
    	
    	<title>Sign Up</title>
	</head>
	<body>
 		<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  			<div class="container-fluid">
    			<div class="collapse navbar-collapse">
					<h2 class="nav-title">Sign Up</h2>
          		</div>
  			</div>
		</nav>
    	<div class="container">
      		<form class="form-signup" role="form" method="post" action="scripts/database/server/register.php">
      			<div class="input-group">
      				<div class="input-group-btn"></div>
    			</div>
      			
				<table border="0" width="100%" style="text-align: center;">
				  <tr>
				    <th></th>
				    <th></th>
				  </tr>
				  <tr>
				    <td><label for="nhsnumber">Enter Your NHS Number:</label></td>
				    <td><input class="form-control" name="nhsnumber" id="nhs-number" type="text" placeholder="Enter Your NHS Number" required></td>
				  </tr>
				  <tr>
				    <td><label for="password">Enter Your Password:</label></td>
				    <td><input class="form-control" name="password" id="password" type="text" placeholder="Enter Your Password" required></td>
				  </tr>
				  <tr>
				    <td><label for="password_again">Confirm Your Password:</label></td>
				    <td><input class="form-control" name="password_again" id="password-confirm" type="password" placeholder="Confirm Your Password" required></td>
				  </tr>
				  <tr>
				    <td><label for="weight">Enter Your Weight:</label></td>
				    <td><input class="form-control" name="weight" id="weight" type="number" placeholder="Enter Your Weight" required></td>
				  </tr>
				  <tr>
				    <td><label for="dob">Enter Your Date of Birth:</label></td>
				    <td><input class="form-control" name="dob" id="dob" type="number" placeholder="Enter Your DOB DD MM YYYY" required></td>
				  </tr>
				  <tr>
				    <td><label for="activity_level">Enter Your Activity Level:</label></td>
				    <td><input class="form-control" name="activity_level" id="activity-level" type="text" placeholder="Enter Your Activity Level" required></td>
				  </tr>
				  <tr>
				    <td><label for="gender">Enter Your Gender:</label></td>
				    <td>
		      			<input class="radio_buttons optional" id="user_basic_sex_male" name="user_basic[sex]" type="radio" value="Male"> Male
		      			<input class="radio_buttons optional" id="user_basic_sex_female" name="user_basic[sex]" type="radio" value="Female"> Female</td>
				  </tr>
				</table>
				<input type="hidden" name="token" value="<?php echo Token::generate(); ?>">
        		<button id="btn_submit_signUpDetails" class="btn btn-lg btn-primary btn-block"
        			onclick="SubmitController.prototype.submit(this.id)">Submit</button>
      		</form>
    	</div>
  	</body>
</html>