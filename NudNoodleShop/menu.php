<?php
$pdo = new PDO('mysql:host=localhost;port=3306;dbname=nud-menu', 'root', 'root');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$statement = $pdo->prepare('SELECT * FROM items ORDER BY id ASC');
$statement->execute();
$products = $statement->fetchAll(PDO::FETCH_OBJ);
?>
<!DOCTYPE html>

<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>nüd® Noodle Kitchen</title>
    <script src="script.js" defer></script>
    <link rel="stylesheet" href="styles.css" />
</head>

<body class="container">
    <nav id="nav-shadow" class="navbar">
        <div>
            <a href="index.html"><img id="logo" src="nud-bowl.png" alt="company logo" /></a>
        </div>
        <div>
            <a href="index.html"><img id="logo-2" src="nud-name.png" alt="nud company name" /></a>
        </div>
        <a href="#" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>
        <div class="navbar-links">
            <ul>
                <li><a href="menu.php">Menu</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    </nav>
    <div class="menu-container">
        <div class="menu">
            <img src="nud-bowl.png" id="menu-logo" alt="company logo" />
            <h2 class="menu-headers">Soup (qt)</h2>
            <div class="left-items"><?php echo $products[0]->name ?></div>
            <div class="right-prices">$<?php echo $products[0]->price ?></div><br>
            <div class="left-items"><?php echo $products[1]->name ?></div>
            <div class="right-prices">$<?php echo $products[1]->price ?></div><br>
            <div class="left-items"><?php echo $products[2]->name ?></div>
            <div class="right-prices">$<?php echo $products[2]->price ?></div><br>
            <div class="left-items"><?php echo $products[3]->name ?></div>
            <div class="right-prices">$<?php echo $products[3]->price ?></div>


            <h2 class="menu-headers">Lo Mein (Soft Noodles)</h2>
            <div class="left-items"><?php echo $products[4]->name ?></div>
            <div class="right-prices">$<?php echo $products[4]->price ?></div><br>
            <div class="left-items"><?php echo $products[5]->name ?></div>
            <div class="right-prices">$<?php echo $products[5]->price ?></div><br>
            <div class="left-items"><?php echo $products[6]->name ?></div>
            <div class="right-prices">$<?php echo $products[6]->price ?></div><br>
            <div class="left-items"><?php echo $products[7]->name ?></div>
            <div class="right-prices">$<?php echo $products[7]->price ?></div>


            <h2 class="menu-headers">Chow Mein (Fried Noodles)</h2>
            <div class="left-items"><?php echo $products[8]->name ?></div>
            <div class="right-prices">$<?php echo $products[8]->price ?></div><br>
            <div class="left-items"><?php echo $products[9]->name ?></div>
            <div class="right-prices">$<?php echo $products[9]->price ?></div><br>
            <div class="left-items"><?php echo $products[10]->name ?></div>
            <div class="right-prices">$<?php echo $products[10]->price ?></div><br>
            <div class="left-items"><?php echo $products[11]->name ?></div>
            <div class="right-prices">$<?php echo $products[11]->price ?></div><br><br>


        </div>
        <div class="menu">
            <img src="nud-name.png" id="menu-name" alt="company logo" />
            <h2 class="menu-headers">Appetizers</h2>
            <div class="left-items"><?php echo $products[12]->name ?></div>
            <div class="right-prices">$<?php echo $products[12]->price ?></div><br>
            <div class="left-items"><?php echo $products[13]->name ?></div>
            <div class="right-prices">$<?php echo $products[13]->price ?></div><br>
            <div class="left-items"><?php echo $products[14]->name ?></div>
            <div class="right-prices">$<?php echo $products[14]->price ?></div><br>
            <div class="left-items"><?php echo $products[15]->name ?></div>
            <div class="right-prices">$<?php echo $products[15]->price ?></div><br>




            <h2 class="menu-headers">Beverage</h2>

            <div class="left-items"><?php echo $products[16]->name ?></div>
            <div class="right-prices">$<?php echo $products[16]->price ?></div><br>
            <div class="left-items"><?php echo $products[17]->name ?></div>
            <div class="right-prices">$<?php echo $products[17]->price ?></div><br>
            <div class="left-items"><?php echo $products[18]->name ?></div>
            <div class="right-prices">$<?php echo $products[18]->price ?></div><br>
            <div class="left-items"><?php echo $products[19]->name ?></div>
            <div class="right-prices">$<?php echo $products[19]->price ?></div><br>

            <h2 class="menu-headers">Ready To Order?</h2><br>
            <a href="contact.html"><button id="menu-button">CALL OUR STORE</button></a>
        </div>
    </div>
</body>

</html>