const modal = document.querySelector("#modal");
export const modalWindow = (msg) => {
  const modalMsg = document.querySelector("#modal-msg");

  modal.style.display = "flex";
  modalMsg.textContent = msg;
};

export const modalClose = () => {
  modal.style.display = "none";
};
