import "./style.css";
import { TypeWritter } from "./types.d";
import write from "./write";
import pointerStyles from "./pointerStyles";

export default function typeWritter(props: TypeWritter) {
  const { container, cursorStyle } = props;

  if (!props.container || !props.text)
    throw new Error("container and text props, are required");

  // Clear any existing interval
  const existingInterval = container.dataset.intervalId;
  if (existingInterval) {
    clearInterval(parseInt(existingInterval));
    container.dataset.intervalId = "";
  }

  // Apply styles to the pointer if provided
  if (cursorStyle && Object.values(cursorStyle).length > 0)
    pointerStyles(cursorStyle);

  // Initial write
  Promise.resolve(write(props));
}
