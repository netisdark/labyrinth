<?php
    include "config.php";
    session_start();

    if($_SERVER['REQUEST_METHOD'] === "POST"){
        $name = $_POST['name'];
        $password = $_POST['password'];

        $sql = $conn -> prepare ("SELECT COUNT(*) FROM games WHERE name = ?");
        $sql -> bind_param('s',$name);
        $sql -> execute();
        $sql -> bind_result($count);
        $sql -> fetch();
        $sql -> close();

        if($count < 1){
            $mode=1;
            $stmt = $conn -> prepare('INSERT INTO games (name, password, mode1) VALUES (?,?,?)');
            $stmt -> bind_param('ssi',$name,$password,$mode);
            $stmt -> execute();
            $_SESSION['name'] = $name;
            echo "success";
        }
        else{
            echo "Game ALready Exists!";
        }
    }
?>