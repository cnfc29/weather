import { ReactNode } from "react";
import styles from "./Button.module.css";

// Отсутствует Public API (index.ts)

interface ButtonProps {
  children: ReactNode; // Просто ReactNode, не импортируй весь React
  onClick?: () => void;
  active?: boolean;
}
// Придирка: Стоит разделять интерфейс и компонент пробелом
export default function Button({ children, onClick, active }: ButtonProps) {
  return (
    <div
      onClick={onClick}
      className={`${styles.container} ${active && styles.active}`}
    >
      {children}
    </div>
  );
}
