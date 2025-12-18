import {
  checkCheckBox,
  checkEmailValue,
  checkEmptyValue,
  checkPhoneNumber,
} from "./validation/validation.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  console.log("hello");
  form.addEventListener("submit", registerUser);
});

const registerUser = () => {
  console.log("hello world");
  event.preventDefault();
  const arr = document.querySelectorAll("form input");
  const student = {};
  let isValid = true;
  for (let i = 0; i < arr.length; i++) {
    let valueInput = document.getElementById(arr[i].id).value;
    let inputId = document.getElementById(arr[i].id).id;
    console.log("inputId", inputId);

    if (inputId === "email") {
      isValid &=
        checkEmptyValue(inputId, valueInput) &&
        checkEmailValue(inputId, valueInput);
    } else if (inputId === "phone") {
      isValid &=
        checkEmptyValue(inputId, valueInput) &&
        checkPhoneNumber(inputId, valueInput);
    } else {
      isValid &= checkEmptyValue(inputId, valueInput);
    }
    if (inputId === "remember") {
      const agree = document.getElementById("remember").checked;
      isValid &= checkCheckBox(inputId, agree);
    }
    student[arr[i].id] = arr[i].value;
  }
  console.log(isValid)
  if (isValid) {
    console.log("student", student);
    return student;
  }
};
