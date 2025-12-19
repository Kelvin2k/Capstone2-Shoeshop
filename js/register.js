import {
  checkCheckBox,
  checkEmailValue,
  checkEmptyValue,
  checkGender,
  checkMinMaxValue,
  checkPhoneNumber,
} from "./validation/validation.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  console.log("hello");
  form.addEventListener("submit", registerUser);

  // Toast
  const toastTrigger = document.getElementById("toast_trigger");
  toastTrigger.addEventListener("click", () => showToast());
});

const registerUser = () => {
  console.log("hello world");
  event.preventDefault();
  const arr = document.querySelectorAll("form input");
  const user = {};
  let isValid = true;
  for (let i = 0; i < arr.length; i++) {
    let valueInput = document.getElementById(arr[i].id).value;
    let inputId = document.getElementById(arr[i].id).id;
    console.log("inputId", inputId);

    if (inputId === "email") {
      isValid &=
        checkEmptyValue(inputId, valueInput) &&
        checkEmailValue(inputId, valueInput);
    } else if (inputId === "password") {
      isValid &=
        checkEmptyValue && checkMinMaxValue(inputId, valueInput, 6, 10);
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
    if (inputId === "gender") {
      isValid &= checkGender(inputId, valueInput);
    }
    user[arr[i].id] = arr[i].value;
  }
  console.log(isValid);
  if (isValid) {
    user.gender = user.gender === "male";
    console.log("user", user);
    addUser(user);
    return user;
  }
};

const addUser = async (user) => {
  try {
    const { data } = await axios.post(
      "https://shop.cyberlearn.vn/api/Users/signup",
      user
    );
    console.log("success", data);
    showToast("success");
  } catch (error) {
    console.log(error);
    showToast("danger");
  }
};

const showToast = (status) => {
  const failToast = document.getElementById(`toast-${status}`);
  failToast.classList.remove("hidden");
  setTimeout(() => {
    failToast.classList.add("hidden");
  }, 1500);
};
