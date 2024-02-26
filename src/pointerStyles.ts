import { CursorStyle } from "./types";

export default function pointerStyles(styles: CursorStyle) {
  const setStyles = (variable: string, value: string) =>
    document.body.style.setProperty(variable, value);

  Object.entries(styles).forEach(([key, value]) => {
    setStyles(`--typewritter-${key}`, value);
  });
}
