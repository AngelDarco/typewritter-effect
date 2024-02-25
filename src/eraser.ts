import { Eraser } from "./types";

export default function erase({
  container,
  eraseTimer,
}: Eraser): Promise<number> {
  return new Promise((resolve) => {
    const id = setInterval(() => {
      if (container.innerHTML.length > 0) {
        container.innerHTML = container.innerHTML.slice(0, -1);
      } else resolve(id);
    }, eraseTimer || 100);
  });
}
