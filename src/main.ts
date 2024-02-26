// import typeWritter from "../npm/index";
import "./style.css";
import typeWritter from "./typeWritter";

document.querySelector<HTMLDivElement>(
  "#app"
)!.innerHTML = `<h1 id="show" class="typewritter"></h1>`;

typeWritter({
  text: "testing ...",
  container: document.querySelector<HTMLDivElement>("#show")!,
  loop: true,
});
