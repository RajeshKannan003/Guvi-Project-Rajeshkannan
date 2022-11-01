<?php

$name = $_POST['name'];
$email  = $_POST['email'];




if (!empty($name) || !empty($email) )
{

$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "project1"; 
$conn = new mysqli ($host,$dbusername, $dbpassword, $dbname);

if (mysqli_connect_error()){
  die('Connect Error ('. mysqli_connect_errno() .') '
    . mysqli_connect_error());
}
else{
  $SELECT = "SELECT email From register Where email = ? Limit 1";
  $INSERT = "INSERT INTO register ( name,email)values(?,?)";

     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", $email);
     $stmt->execute();
     $stmt->bind_result($email);
     $stmt->store_result();
     $rnum = $stmt->num_rows;

      if ($rnum==0) {
      $stmt->close();
      $stmt = $conn->prepare($INSERT);
      $stmt->bind_param("ss", $name,$email);
      $stmt->execute();
      echo "WELCOME ".$name;
     } else {
      echo "Someone already Register using this Email";
     }
     $stmt->close();
     $conn->close();
    }
} else {
 echo "Please Enter All the details";
 die();
}
?>