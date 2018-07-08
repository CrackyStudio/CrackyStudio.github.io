<?php
if (isset($_POST["submit"])) {
    if ($_POST["vname"] == "" || $_POST["vemail"] == "" || $_POST["sub"] == "" || $_POST["msg"] == "") {
        echo "Fill All Fields..";
    } else {
        $email = $_POST['vemail'];
        $email = filter_var($email, FILTER_SANITIZE_EMAIL);
        $email = filter_var($email, FILTER_VALIDATE_EMAIL);
        if (!$email) {
            echo "Invalid Sender's Email";
        } else {
            $subject = $_POST['sub'];
            $message = $_POST['msg'];
            $headers = 'From:' . $email2 . "rn";
            $headers .= 'Cc:' . $email2 . "rn";
            $message = wordwrap($message, 70);
            mail("cracky.studio@gmail.com", $subject, $message, $headers);
            echo "Your mail has been sent successfuly ! Thank you for your message. I'll answer you ASAP";
        }
    }
}
?>