var captchaResponse = grecaptcha.getResponse();
if (captchaResponse.success == true) {
    alert("recaptcha verified");

} else {
    alert("recaptcha unverified");
}