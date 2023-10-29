let btn = document.querySelector("button");
let textArea = document.querySelector("textarea");
let result = document.querySelector(".result");

btn.addEventListener("click", () => {
  let arr = [];
  let randomString = textArea.value.split(",");
  arr.push(randomString);
  let resultRandom = arr[0][Math.floor(Math.random() * randomString.length)];
  result.innerHTML = `
    Random Choice: <span class="choice">${resultRandom}</span>
  `
});