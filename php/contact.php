<?php
	//define the receiver of the email
	define('TO_EMAIL','johanna.bouzige@gmail.com');

	//define the subject of the email
	define('SUBJECT','Contact from your website');

	// Messages
	define('MSG_INVALID_NAME','Please enter your name.');
	define('MSG_INVALID_EMAIL','Please enter valid e-mail.');
	define('MSG_INVALID_MESSAGE','Please enter your message.');
	define('MSG_SEND_ERROR','Sorry, we can\'t send this message.');
	// Sender Info
	$name = trim($_POST['name']);
	$email = trim($_POST['email']);
	$message = trim($_POST['message']);
	$err = "";

	// Check Info
	$pattern = "^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$^";
	if(!preg_match_all($pattern, $email, $out)) {
		$err = MSG_INVALID_EMAIL; // Invalid email
	}
	if(!$email) {
		$err = MSG_INVALID_EMAIL; // No Email
	}
	if(!$message) {
		$err = MSG_INVALID_MESSAGE; // No Message
	}
	if (!$name) {
		$err = MSG_INVALID_NAME; // No name
	}
	//define the headers we want passed. Note that they are separated with \r\n
	$headers = "From: ".$name." <".$email.">\r\nReply-To: ".$email."";
	if (!$err){
		// on ouvre la connexion MySQL
	// // include('connexionbdd.php');
	// // on fait les opérations nécessaires
	// $req = "INSERT INTO msgcv (name, email, message) VALUES ('".$name."', '".$email."', '".$message."')";
	// $dataset = mysqli_query($conn, $req) or die ('mysqli erreur');
	// // maintenant que la requête a été effectuée, on peut refermer la connexion
	// mysqli_close();
		//send the email
		$sent = mail(TO_EMAIL,SUBJECT,$message,$headers);

		if ($sent) {
				// If the message is sent successfully print
				echo "SEND";
				// echo '<meta http-equiv="refresh" content="0; URL=http://www.tuil-alexandre.ovh">';
			} else {
				// Display Error Message
				echo MSG_SEND_ERROR;
			}
	} else {
		echo $err; // Display Error Message
	}

?>
