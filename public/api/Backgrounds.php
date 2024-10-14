<?php
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin (adjust for production)
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "ocbenjic_YHTSAPP";
$password = "god578aden";
$dbname = "ocbenjic_YHTS_App";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 


    $stmt = $conn->prepare("SELECT * FROM Backgrounds LIMIT 3");
    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC); 


    echo json_encode($result);
} catch(PDOException $e) {
    echo json_encode(["error" => "Error: " . $e->getMessage()]);
}
$conn = null;
?>