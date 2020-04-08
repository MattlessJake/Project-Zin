<?php
$dir = "BlogPosts/";

//$a = scandir($dir);
$f = fopen("testfile.txt", "w+");
$data = $_POST['innertext'];
fwrite($f, $data);
fclose($f);
?>