<?php
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db = "labyrinth";

    $conn = new mysqli($host , $user, $pass, $db);

    if(!$conn){
        die('Error'.$conn->error);
    }

?>