<?php
    $dsn = "mysql:host = localhost;port=3306;dbname=rouge;charset=utf8";
    $user = "root";
    $password = "forest83270";
    $options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
    $pdo = new PDO($dsn,$user,$password);

?>