<?php
require_once("connection.php");
$connection = new Connection();
$pdo = $connection->connect();
print $connection->getJobs();
?>