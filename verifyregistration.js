function verifyReg(){
    var captchaResponse = grecaptcha.getResponse();
    var captchaSuccess = captchaResponse.success;
    var userTag = document.getElementById("tag").value;
    var validUserTag = userTag.replace("#", "ID");
    if (captchaSuccess == false) {
      alert("recaptcha unverified");
    }
    function validateTag(convertedTag) {
        const validTagRegEx = /.*[^# ]ID[0-9]{4}/;
        return validTagRegEx.test(convertedTag);
    }
  }
    var validation = validateTag(validUserTag);
    if (captchaSuccess == true && validation == true) {
      alert("nice job buddy");
    }
