export function getTitleElement() {
  const titleElement = document.querySelector(".title");
  console.dir(titleElement);
  return titleElement;
}

export function getInputElement() {
  const inputElement = document.querySelector("input");
  console.dir(inputElement);
  return inputElement;
}

getTitleElement();
getInputElement();
