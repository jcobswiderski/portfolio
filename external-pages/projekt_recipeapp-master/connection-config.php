<?php
    $host = "mysql112.unoeuro.com";
    $database_name = "jakubswiderski_com_db_recipeapp";
    $username = "jakubswiderski_com";
    $password = "eFdEwfrA2tby";

    $database = new PDO("mysql:host=$host;dbname=$database_name;charset=utf8", $username, $password);
?>