import {
  togglePWVisible,
  velifyDisplayNone,
  velifyDisplayBlock,
} from "./loginVelify.js";

import { handleSubmit } from "./loginSignup.js";
import { modalWindow, modalClose } from "./modal.js";

const loginIdInput = document.querySelector("#login-id");
const loginPwInput = document.querySelector("#login-pw");
const loginPwCheckInput = document.querySelector("#login-pw-check");
const loginBtn = document.querySelector(".btn-login");
const pwVisible = document.querySelector("#pw-visibility");
const pwCheckVisible = document.querySelector("#pw-check-visibility");

const signupForm = document.querySelector("#signup-form");

let isLoginId = false;
let isLoginPw = false;

// focus out 시 validate 검사
// keyup 으로 하면 실시간으로 처리 ..
loginIdInput.addEventListener("keyup", (e) => {
  const email = e.target.value;
  const regex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  let velify = e.target.nextElementSibling;

  if (
    velify === null ||
    velify === undefined ||
    velify.className !== "form-velify"
  ) {
    velify = document.createElement("p");

    velify.className = "form-velify";
    e.target.after(velify);
  }

  if (email === "") {
    velifyDisplayBlock(velify);
    velify.textContent = "이메일을 입력해주세요.";
  } else if (email.match(regex) === null) {
    velifyDisplayBlock(velify);
    velify.textContent = "잘못된 이메일 형식입니다.";
  } else {
    isLoginId = true;
    velifyDisplayNone(e.target.nextElementSibling);
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
    velify = document.createElement("p");

    velify.className = "form-velify";
    e.target.after(velify);
  }

  if (pw === "") {
    velify.style.display = "block";
    velify.textContent = "비밀번호를 입력해주세요.";
    e.target.classList = "form-filed-control error";
  } else if (pw.length < 8) {
    velify.style.display = "block";
    velify.textContent = "비밀번호를 8자 이상 입력해주세요.";
    e.target.classList = "form-filed-control error";
  } else {
    isLoginPw = true;
    velifyDisplayNone(e.target.nextElementSibling);
    isLoginId ? (loginBtn.classList = "btn btn-login") : null;
  }
});

loginPwCheckInput.addEventListener("keyup", (e) => {
  const pwCheck = e.target.value;
  let velify = e.target.nextElementSibling;

  if (
    velify === null ||
    velify === undefined ||
    velify.className !== "form-velify"
  ) {
    velify = document.createElement("p");

    velify.className = "form-velify";
    e.target.after(velify);
  }

  if (pwCheck !== loginPwInput.value) {
    velify.style.display = "block";
    velify.textContent = "비밀번호가 일치하지 않습니다.";
  } else {
    velifyDisplayNone(e.target.nextElementSibling);
  }
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

// pw visibility check
pwVisible.addEventListener("click", (e) => {
  togglePWVisible(loginPwInput, e.target);
});

pwCheckVisible.addEventListener("click", (e) => {
  togglePWVisible(loginPwCheckInput, e.target);
});
