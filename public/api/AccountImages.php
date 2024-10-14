<?php

header("Access-Control-Allow-Origin: *"); // Allow requests from any origin (adjust for production)
header("Content-Type: application/json; charset=UTF-8");
// Get data from the GET request
$email =$_GET['email'];


$servername = "localhost";
$username = "ocbenjic_YHTSAPP";
$password = "god578aden";
$dbname = "ocbenjic_YHTS_App";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 


    $stmt = $conn->prepare("SELECT ID, Image_Link FROM Activity WHERE Account_ID=(SELECT ID FROM Account WHERE Email='".$email."') AND Image_Link IS NOT NULL GROUP BY (Image_Link) ORDER BY Event_Date DESC");
    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC); 


    echo json_encode($result);
} catch(PDOException $e) {
    echo json_encode(["error" => "Error: " . $e->getMessage()]);
}
$conn = null;
?>

