import { TypeWritter } from "./types";
import eraser from "./eraser";

export default function write(props: TypeWritter): Promise<number> {
  console.log(props.loop);
  const {
    container,
    text,
    loop,
    erase,
    writeTimer,
    eraseTimer,
    writeInterval,
    eraseInterval,
  } = props;
  return new Promise((resolve) => {
    const writer = text.split("");
    let counter = 0;

    const id = setInterval(() => {
      container.innerHTML += writer[counter];

      if (counter >= writer.length - 1) {
        clearInterval(id);
        container.dataset.intervalId = "";
        resolve(id);

        // Delete text after 1s
        if (loop || erase)
          setTimeout(() => {
            Promise.resolve(eraser({ container, eraseTimer })).then((res) => {
              clearInterval(res);

              if (loop)
                setTimeout(() => {
                  write(props);
                }, writeInterval || 1000);
            });
          }, eraseInterval || 1000);
      }

      counter++;
    }, writeTimer || 100);

    // Set interval id on dataset
    container.dataset.intervalId = id.toString();
  });
}
