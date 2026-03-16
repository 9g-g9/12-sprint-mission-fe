export const velifyId = (input, velify) => {
  return;
};

export const velifyPw = (input, velify) => {
  return;
};

export const togglePWVisible = (input, visible) => {
  if (input.type === "text") {
    input.type = "password";
    visible.classList = "form-filed-action";
  } else {
    input.type = "text";
    visible.classList = "form-filed-action visible";
  }
};

export const velifyDisplayNone = (velify) => {
  velify.style.display = "none";
};

export const velifyDisplayBlock = (velify) => {
  velify.style.display = "block";
};
