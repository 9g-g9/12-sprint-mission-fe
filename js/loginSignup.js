const USER_DATA = [
  { email: "codeit1@codeit.com", password: "codeit101!" },
  { email: "codeit2@codeit.com", password: "codeit202!" },
  { email: "codeit3@codeit.com", password: "codeit303!" },
  { email: "codeit4@codeit.com", password: "codeit404!" },
  { email: "codeit5@codeit.com", password: "codeit505!" },
  { email: "codeit6@codeit.com", password: "codeit606!" },
];

import {
  togglePWVisible,
  velifyDisplayNone,
  velifyDisplayBlock,
} from "./loginVelify.js";

import { modalWindow } from "./modal.js";

// submit
export const handleSubmit = (email, pw) => {
  const isUser = USER_DATA.findIndex((user) => {
    return user.email === email && user.password === pw;
  });

  isUser === -1
    ? modalWindow("비밀번호가 일치하지 않습니다..")
    : (location.href = "/items.html");
};

export function validationCheck(msg, ele, velify) {
  velifyDisplayBlock(velify);
  velify.textContent = msg;
  ele.classList = "form-filed-control error";
}

export function createVelify(velify, ele) {
  velify = document.createElement("p");

  velify.className = "form-velify";
  ele.after(velify);
}
