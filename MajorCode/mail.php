<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['tel'];
$message= $_POST['message'];
$to = "tseponmalaza@gmail.com";
$subject = "Mail From Major Style";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@majorcode.000webhostapp.com" . "\r\n" .
"CC: tseponmalaza@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:contact.html");
?>