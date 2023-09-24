<?php
    $param = isset($_GET['category']);
    if($param){
        $cat = $_GET['category'];
    }else{
        $cat = 0;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>One Piece</title>
    <link rel="stylesheet" href="./styles/index.css">
</head>

<body>
    <div class="container">
        <p hidden id="cat"><?php echo $cat?></p>
        <div class="box-container">
            <center>
                <nav>
                    <ul>
                        <a href="index.php?category=A"><li id="tab">All</li></a>
                        <a href="index.php?category=P"><li id="tab">Pirates</li></a>
                        <img src="./images/logo/One-Piece-Logo.png" alt="One Piece Logo" class="logo">
                        <a href="index.php?category=M"><li id="tab">Marines</li></a>
                        <a href="index.php?category=O"><li id="tab">Others</li></a>
                    </ul>
                </nav>

                <div class="card-container" id="card-container"></div>
                
                <div class="pagination">
                    <button id="prev">&lt;</button>
                    <button id="next">&gt;</button>
                </div>
            </center>   
        </div>
    </div>
    </div>
    <script src="./scripts/action.js" type="module"></script>
</body>
</html>