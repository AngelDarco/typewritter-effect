export declare interface TypeWritter {
  container: HTMLDivElement;
  text: string;
  erase?: boolean;
  loop?: boolean;
  writeTimer?: number;
  eraseTimer?: number;
  writeInterval?: number;
  eraseInterval?: number;
  cursorStyle?: CursorStyle;
}

declare const typeWritter: (params: TypeWritter) => void;
export default typeWritter;

export declare type Eraser = {
  container: HTMLDivElement;
  eraseTimer?: number;
};

export declare type CursorStyle = {
  color?: string;
  width?: string;
  height?: string;
  time?: string;
  animation?: string;
};
