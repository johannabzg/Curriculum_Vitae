
<!-- <?php
$TO = "johanna.bouzige@gmail.com";
$h = "Form: " . $TO;
$message = "";

while (list($key, $val) = each($_POST)) {
  $message .= "$key : $val\n";
}
mail($TO, $subject, $message, $h);
header("Location: http://index.html");
// Header("Location: http://www.monsite.com/merci.html"); <- exemple
 ?> -->

<?php
$mail = 'johanna.bouzige@gmail.com'; // declaration de l'adresse de destination
if (!preg_match("#^[a-z0-9._-]+@(hotmail|live|msn).[a-z]{2,4}$#")) // je filtre les serveur qui rencontre des bogues.
{
  $passage_ligne = "\r\n";
}
else
{
  $passage_line = "\n";
}
// declaration des messages au format html et texte
$message_txt = "yo !";
$message_html = "<html><head></head><body><p> yosh !</p></body></html>";

// cretion de la boundary ( permet de separer differentes parties de l'email)
$boundary = "-----=".md5(rand());

// definition du sujet
$sujet = "";

// creation de l'header de l'email
$header = "From: \"johanna.bouzige\"<johanna.bouzige@gmail.com>".$passage_line;
$header.= "Reply-to: \"johanna.bouzige\" <johanna.bouzige@gmail.com>".$passage_line;
$header.= "MIME-Version: 1.0".$passage_line;
$header.= "Content-Type: multipart/mixed;".$passage_line." boundary=\"$boundary\"".$passage_line;

// creation du message
$message = $passage_line. "--".$boundary.$passage_line;

// ajout du message au format texte
$message.= "Content-Type: text/plain; charset=\"ISO-8859-1\"".$passage_line;
$message.= "Content-Transfer-Encoding: 8bit".$passage_line;
$message.= $passage_line.$message_txt.$passage_line;
// ajout du message au format html
$message.= "Content-Type: text/html; charset=\"ISO-8859-1\"".$passage_line;
$message.= "Content-Transfer-Encoding: 8bit".$passage_line;
$message.= $passage_line.$message_html.$passage_line;

$message.= $passage_line. "--".$boundary."--".$passage_line;


// envoie le 'lemail
mail($mail, $sujet, $message, $header);
 ?>
