<?php
header("Content-Type: application/json; charset=UTF-8");
$file = fopen("userdata/useerregistry.json", "w") or die("fucky wucky");
$obj = $_POST["reg"];
fwrite($file, $obj);
?> 