<html>
    <head>
        <link rel="stylesheet" href="../styles/fileupload.css" />
    </head>
    <body>
        <div id="files">
            <form action="../src/php/upload.php" method="post" enctype="multipart/form-data">
                <p>Select image to upload:</p>
                <input type="file" name="fileToUpload" id="fileToUpload"></br>
                <p>Name:</p><input type="text" name="name"></input>
                <p>Hotkey:</p><input type="text" name="hotkey"></input></br>
                <input type="submit" value="Upload File" name="submit"></br>
            </form>
        </div>
    </body>
</html>
