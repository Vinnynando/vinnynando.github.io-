<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize user inputs
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Submission Received - Guess the Movie / TV Show</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>

    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="game.html">Play Game</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="rules.html">Rules</a></li>
        <li><a href="credits.html">Credits</a></li>
      </ul>
    </nav>

    <h1>Thank You, <?php echo $name; ?>!</h1>
    <p>Your message has been successfully submitted. Here is what we received:</p>
    <p><strong>Email:</strong> <?php echo $email; ?></p>
    <p><strong>Message:</strong> <?php echo nl2br($message); ?></p>

    <p><a href="index.html">Return to Home</a></p>

    </body>
    </html>
    <?php
} else {
    // Redirect if the page is accessed directly
    header("Location: contact.html");
    exit();
}
?>
