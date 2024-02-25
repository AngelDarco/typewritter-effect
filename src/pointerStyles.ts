import { Styles } from "./types";

export default function pointerStyles(styles: Styles) {
  const setStyles = (variable: string, value: string) =>
    document.body.style.setProperty(variable, value);

  Object.entries(styles).forEach(([key, value]) => {
    setStyles(`--type-writter-${key}`, value);
  });
}
