<?php
//if "email" variable is filled out, send email
$result = false;
if (isset($_REQUEST['email'])) {
    $admin_email = "info@etavisa-gov.ca, jweinstock121@gmail.com";
    $subject = $_REQUEST['subject'];
    $user_email = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $message = $_REQUEST['message'];

    //send email
    $result = mail($admin_email, "Contact form - $subject",
        "From: $name ($user_email)\n"
        ."Subject: $subject \n".
        "Message: $message");
}
echo json_encode($result);