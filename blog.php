<?php
$dir = '/BlogPosts';
$data = $_POST['directory'];
$a = scandir($data);
$b = scandir($dir);

print_r($a);
print_r($b);
?>