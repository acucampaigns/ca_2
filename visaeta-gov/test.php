<?php
try {
    $db = new PDO('mysql:host=etavisagovca.domaincommysql.com;dbname=etavisa', "etavisa", "@H267erc1");
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
$result = $db->prepare("SELECT * FROM customers");
$result->execute();
var_dump($result->fetchAll());