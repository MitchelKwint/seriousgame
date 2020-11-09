<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/style.css">
    <title>Serious games</title>
</head>
<body>

<?php require_once("nav.html") ?>
<?php require_once("spellen.php") ?>

        <?php 

        foreach($links as $k => $v) {
        echo '<div class="gamecube"><a href="' . $k . '">' . $v . '</a></div>'; 
        }

        ?>

</body>
</html>
 