<?php

$message_success = 'We have <strong>successfully</strong> received your Message and will get Back to you as soon as possible.';




$vendemail = 'hiii test mail';

$to = 'savanisagar99@gmail.com';				
$subject = 'test mail';
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// Additional headers
$headers .= 'From: eta-gov-cic.online<info@eta-gov-cic.online>' . "\r\n";
$headers .= 'Cc: welcome@eta-gov-cic.online' . "\r\n";
$headers .= 'Bcc: welcome2@eta-gov-cic.online' . "\r\n";
if(mail($to, $subject, $vendemail, $headers)){ 
echo '{ "alert": "success", "message": "' . $message_success . '" }';
}else{ echo '{ "alert": "error", "message": "Email <strong>could not</strong> be sent due to some Unexpected Error. Please Try Again later." }'; }				
					
?>