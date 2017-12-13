<?php
require_once("connection.php");
$id = $_GET["id"];
$connection = new Connection();
$pdo = $connection->connect();
print $connection->getJob($id);
?>