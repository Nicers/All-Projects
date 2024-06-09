<?php
$conn = new mysqli('localhost', 'root', '', 'sed24');
if ($conn->connect_error) {
    die('DataBase Connection Error!' . $conn->connect_error);
}
?>