import styles from "./styles/checkbox.module.css";
import { useState } from "react";

export type CheckboxProps = {
  isChecked?: boolean;
  onClick?: (checked: boolean) => void;
  className?: string;
};

export default function Checkbox(props: CheckboxProps) {
  const { onClick, className, isChecked = false } = props;
  const [checked, setChecked] = useState(isChecked);

  const handleClick = () => {
    setChecked(!checked);

    if (onClick) onClick(!checked);
  };

  const custonStyleByChecked = checked
    ? styles.checkbox_checked
    : styles.checkbox_unchecked;

  return (
    <div
      onClick={handleClick}
      className={[styles.checkbox, custonStyleByChecked, className].join(" ")}
    ></div>
  );
}
