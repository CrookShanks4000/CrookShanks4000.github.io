function verifyReg(){
    var captchaResponse = grecaptcha.getResponse();
    var captchaSuccess = captchaResponse.success;
    var userTag = document.getElementById("tag").value;
    var validUserTag = userTag.replace("#", "ID");
    if (captchaSuccess == false) {
      alert("recaptcha unverified");
    }
    var validTagRegEx = /.*[^# ]ID[0-9]{4}/;
    var validation = validTagRegEx.test(convertedTag);
    if (captchaSuccess == true && validation == true) {
      alert("nice job buddy");
    }
}
