export const checkEmptyValue = (inputId, valueInput) => {
  if (inputId !== "remember") {
    if (valueInput == "") {
      document.getElementById("span_" + inputId).innerHTML =
        "Please do not leave this field empty";
      return false;
    } else {
      document.getElementById("span_" + inputId).innerHTML = "";
      return true;
    }
  } else {
    return true;
  }
};

export const checkEmailValue = (inputId, valueInput) => {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const result = regexEmail.test(valueInput);
  if (regexEmail.test(valueInput)) {
    document.getElementById("span_" + inputId).innerHTML = "";
    return true;
  } else {
    document.getElementById("span_" + inputId).innerHTML =
      "Email format is not correct!";
    return false;
  }
};

export const checkPhoneNumber = (inputId, valueInput) => {
  var regexPhoneNumber = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
  const result = regexPhoneNumber.test(valueInput);
  if (result) {
    document.getElementById("span_" + inputId).innerHTML = "";
    return true;
  } else {
    document.getElementById("span_" + inputId).innerHTML =
      "Phone Number format is not correct!";
    return false;
  }
};

export const checkMinMaxValue = (inputId, valueInput, min, max) => {
  if (min >= valueInput <= max) {
    document.getElementById("span_" + inputId).innerHTML = "";
    return true;
  } else {
    document.getElementById(
      "span_" + inputId
    ).innerHTML = `password should be made between ${min} characters and ${max} characters`;
    return false;
  }
};

export const checkCheckBox = (inputId, valueInput) => {
  if (valueInput) {
    document.getElementById("span_" + inputId).innerHTML = "";
    return true;
  } else {
    document.getElementById("span_" + inputId).innerHTML =
      "Please agree to the term";
    return false;
  }
};
