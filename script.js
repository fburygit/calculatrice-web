document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.getElementById("buttons");

  const symbols = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "0",
    "C",
    "=",
    "/",
  ];
  symbols.forEach((sym) => {
    const btn = document.createElement("button");
    btn.textContent = sym;
    buttons.appendChild(btn);
  });

  console.log("Calculatrice initialisée !");
});

import { div } from "../script.js";

test("division simple", () => {
  expect(div(6, 3)).toBe(2);
});
