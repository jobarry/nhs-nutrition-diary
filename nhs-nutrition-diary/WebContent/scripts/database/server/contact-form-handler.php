
<?php
/*include 'saveimage.php';
$image='<img src="'.$_POST['img_val'].'" />';
echo $image;
 
//Get the base-64 string from data
$filteredData=substr($_POST['img_val'], strpos($_POST['img_val'], ",")+1);
 
//Decode the string
$unencodedData=base64_decode($filteredData);
 
//Save the image
file_put_contents('img.png', $unencodedData);*/


require 'phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

$message ="
<html>
<body bgcolor='#FFFFCC' text='#000000'>
<div align='center'>
<h1>GSST patient report</h1>


<div id='historyVisualisation'>
							<svg id='graph'></svg>
							<div id='table'></div>
							<div id='summary'></div>
						</div>
</div>
</body>
</html>
";

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'patientgsst@gmail.com';                 // SMTP username
$mail->Password = 'group15nhs';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->From = 'from@example.com';
$mail->FromName = 'Patient Report';
$mail->addAddress($_POST['email']);;     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Report from patient at GSST';
$mail->Body    = $message;
$mail->AltBody = 'body...';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}

?>

