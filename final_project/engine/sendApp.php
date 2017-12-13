<?php
require_once("connection.php");
$post = json_decode(file_get_contents('php://input'), true);
$id = $post["job"];
$name = $post["name"];
$email = $post["email"];
$address = $post["address"];
$birthdate = $post["birthdate"];
$phone = $post["phone"];
$university = $post["university"];
$degree = $post["degree"];
$company = $post["company"];
$position = $post["position"];
$skills = $post["skills"];

$connection = new Connection();
$pdo = $connection->connect();
print $connection->createApp($id, $name, $email, $address, $birthdate, $phone, $university, $degree, $company, $position, $skills);
?>
