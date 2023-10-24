import { optionsMD, t, today } from "../config/date.mjs";

export default function render(data) {
  const ul = document.querySelector(".cal");
  ul.insertAdjacentHTML("afterBegin", data);
  ul.insertAdjacentHTML(
    "beforeBegin",
    `<h1> ${t.toLocaleDateString("fr", optionsMD)} `
  );

  const elementToday = document.querySelector(`[id='${today}']`);
  if (elementToday) {
    elementToday.classList.add("today");
    elementToday.classList.remove("day", "dayOfCurrentMonth");
  }

  const daysOfMonth = document.querySelectorAll(
    `[data-month='${t.getMonth()}']`
  );
  for (let day of daysOfMonth) {
    day.classList.add("dayOfCurrentMonth");
    day.classList.remove("day");
  }
}
