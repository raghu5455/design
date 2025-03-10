<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(trim($_POST['phone']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Set the recipient email address
    $to = "your-email@example.com"; // Replace with your email address

    // Set the email subject
    $email_subject = "New Contact Form Submission: $subject";

    // Build the email content
    $email_body = "You have received a new message from the contact form on your website.\n\n";
    $email_body .= "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Phone: $phone\n";
    $email_body .= "Subject: $subject\n";
    $email_body .= "Message:\n$message\n";

    // Set the email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        // Redirect to the thank you page or display a success message
        echo "<script>alert('Thank you for contacting us! Your message has been sent successfully.'); window.location.href = 'contact.html';</script>";
    } else {
        // Display an error message if the email couldn't be sent
        echo "<script>alert('Sorry, there was a problem sending your message. Please try again later.'); window.location.href = 'contact.html';</script>";
    }
} else {
    // Redirect to the contact form if accessed directly
    header("Location: contact.html");
    exit;
}
?>
