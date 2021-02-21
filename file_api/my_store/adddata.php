<?php
include 'conn.php';

$itemcode = $_POST['itemcode'];
$itemname = $_POST['itemname'];
$price = $_POST['price'];
$stock = $_POST['stock'];

$connect->query("insert into tb_item (item_code,item_name,price,stock) values ('" . $itemcode . "','" . $itemname . "','" . $price . "','" . $stock . "')");
