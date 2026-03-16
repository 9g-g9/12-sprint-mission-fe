import {
  togglePWVisible,
  velifyDisplayNone,
  velifyDisplayBlock,
} from "./loginVelify.js";

import { handleSubmit, createVelify, validationCheck } from "./loginSignup.js";

const loginIdInput = document.querySelector("#login-id");
const loginPwInput = document.querySelector("#login-pw");
const loginBtn = document.querySelector(".btn-login");
const loginForm = document.querySelector("#login-form");
const pwVisible = document.querySelector("#pw-visibility");

let isLoginId = false;
let isLoginPw = false;

// focus out 시 validate 검사
loginIdInput.addEventListener("keyup", (e) => {
  const email = e.target.value;
  const regex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  let velify = e.target.nextElementSibling;

  if (
    velify === null ||
    velify === undefined ||
    velify.className !== "form-velify"
  ) {
    createVelify(velify, e.target);
  }

  if (email === "") {
    validationCheck("이메일을 입력해주세요.", e.target, velify);
  } else if (email.match(regex) === null) {
    validationCheck("잘못된 이메일 형식입니다.", e.target, velify);
  } else {
    isLoginId = true;
    velifyDisplayNone(e.target.nextElementSibling);
    e.target.classList = "form-filed-control";
    isLoginPw ? (loginBtn.classList = "btn btn-login") : null;
  }
});

loginPwInput.addEventListener("keyup", (e) => {
  const pw = e.target.value;
  let velify = e.target.nextElementSibling;

  if (
    velify === null ||
    velify === undefined ||
    velify.className !== "form-velify"
  ) {
    createVelify(velify, e.target);
  }

  if (pw === "") {
    validationCheck("비밀번호를 입력해주세요.", e.target, velify);
  } else if (pw.length < 8) {
    validationCheck("비밀번호를 8자 이상 입력해주세요.", e.target, velify);
  } else {
    isLoginPw = true;
    velifyDisplayNone(e.target.nextElementSibling);
    e.target.classList = "form-filed-control";
    isLoginId ? (loginBtn.classList = "btn btn-login") : null;
  }
});

// submit
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!isLoginId || !isLoginPw) {
    return;
  }
  handleSubmit(loginIdInput.value, loginPwInput.value);
});

// pw visibility check
pwVisible.addEventListener("click", (e) => {
  togglePWVisible(loginPwInput, e.target);
});
