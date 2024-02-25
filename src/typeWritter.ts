import { TypeWritter } from "./types.d";
import write from "./write";
import pointerStyles from "./pointerStyles";

export default function typeWritter(props: TypeWritter) {
  const { container, styles } = props;

  // Clear any existing interval
  const existingInterval = container.dataset.intervalId;
  if (existingInterval) {
    clearInterval(parseInt(existingInterval));
    container.dataset.intervalId = "";
  }

  // Apply styles to the pointer if provided
  if (styles && Object.values(styles).length > 0) pointerStyles(styles);

  // Initial write
  Promise.resolve(write(props));
}
