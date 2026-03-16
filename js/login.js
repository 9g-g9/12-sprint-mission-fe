import {
  handleSubmit,
  togglePWVisible,
  loginIdCheck,
  loginPwCheck,
} from "./loginSignup.js";

const loginIdInput = document.querySelector("#login-id");
const loginPwInput = document.querySelector("#login-pw");
const loginForm = document.querySelector("#login-form");
const pwVisible = document.querySelector("#pw-visibility");

// focus out 시 validate 검사
loginIdInput.addEventListener("focusout", (e) => {
  loginIdCheck(e.target);
});

loginPwInput.addEventListener("focusout", (e) => {
  loginPwCheck(e.target);
});

// submit
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  handleSubmit(loginIdInput.value, loginPwInput.value);
});

// pw visibility check
pwVisible.addEventListener("click", (e) => {
  togglePWVisible(loginPwInput, e.target);
});
