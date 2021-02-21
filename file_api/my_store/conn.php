<?php
header('Access-Control-Allow-Origin: *');
$connect = new mysqli("localhost", "root", "", "my_store");

if ($connect) {
    // echo "connection Success";
} else {
    echo "Connection Failed";
    exit();
}
