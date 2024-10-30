<?php
    include "config.php";
    session_start();

    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $name = $_POST['name'];
        $password = $_POST['password'];

        $sql = $conn -> prepare ("SELECT COUNT(*),password FROM games WHERE name = ?");
        $sql -> bind_param('s',$name);
        $sql -> execute();
        $sql -> bind_result($count, $pass);
        $sql -> fetch();
        $sql -> close();

        if($count === 1){
            $mode = 1;
            if($pass === $password){
                $stmt = $conn -> prepare('UPDATE games SET mode2 = ? WHERE name = ?');
                $stmt -> bind_param('is',$mode, $name);
                $stmt -> execute();
                $_SESSION['name'] = $name;
                echo "success";
            }
            else{
                echo "INCORRECT PASSWORD!";
            }
            
        }
        else{
            echo "Game not FOund";
        }
    }
?>