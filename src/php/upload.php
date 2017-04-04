<?php
$target_dir = "../../launchpad/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$target_realpath = substr($target_file, 6, strlen($target_file) - 6);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
// Check if image file is a actual image or fake image
//if(isset($_POST["submit"])) {
//    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
//    if($check !== false) {
//        echo "File is an image - " . $check["mime"] . ".";
//        $uploadOk = 1;
//    } else {
//        echo "File is not an image.";
//        $uploadOk = 0;
//    }
//}

// Check if file already exists
if (file_exists($target_file)) {
    echo "<p style='color: red;'>Sorry, file already exists.</p>";
    $uploadOk = 0;
}
// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
    echo "<p style='color: red;'>Sorry, your file is too large.</p>";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "wav" && $imageFileType != "mp3" && $imageFileType != "webm") {
    echo "<p style='color: red;'>Sorry, only WAV, MP3 & WEBM files are allowed.</p>";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "<p style='color: red;'>Sorry, your file was not uploaded.</p>";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        /* fill json object */
        if(!file_exists("../../json/files2.json")){
          $newJson = fopen("fullJson.json", "w");
        } else {
          $before = file_get_contents("../../json/fullJson.json");
          $array = json_decode($before);

          $new_data = (object) [
            'name' => $_POST['name'],
            'hotkey' => $_POST['hotkey'],
            'source' => $target_realpath
          ];

          $array[count($array)] = $new_data;
          $array = json_encode($array);
          file_put_contents("../../json/fullJson.json", $array);
        }


        echo "<p style='color: green;'>The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.</p>";
    } else {
        echo "<p style='color: red;'>Sorry, there was an error uploading your file.</p>";
    }
}
?>
