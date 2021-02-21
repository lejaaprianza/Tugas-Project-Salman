<?php
include 'conn.php';

// $id = $_GET['id']; //untuk keperluan API

// $queryResult = $connect->query("SELECT * FROM tb_item" . ($id ? " where id=$id" : ''));
$queryResult = $connect->query("SELECT * FROM tb_item");

$result = array();

while ($fetchData = $queryResult->fetch_assoc()) {
    $result[] = $fetchData;
}


// if ($method == 'GET') {
//     if (!$id) echo '[';
//     for ($i = 0; $i < mysqli_num_rows($result); $i++) {
//         echo ($i > 0 ? ',' : '') . json_encode(mysqli_fetch_object($result));
//     }
//     if (!$id) echo ']';
// }

echo json_encode($result);
