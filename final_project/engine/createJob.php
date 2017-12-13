<?php
require_once("connection.php");
$post = json_decode(file_get_contents('php://input'), true);
$title = $post["title"];
$shortsummary = $post["shortsummary"];
$description = $post["description"];
$location = $post["location"];
$responsibilities = $post["responsibilities"];
$qualifications = $post["qualifications"];

$connection = new Connection();
$pdo = $connection->connect();
print $connection->createJob($title, $shortsummary, $description, $location, $responsibilities, $qualifications);
?>