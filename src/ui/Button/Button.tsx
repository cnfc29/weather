import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}
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
