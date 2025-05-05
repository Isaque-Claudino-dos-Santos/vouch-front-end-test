import styles from "./styles/input.module.css";

import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Label } from "./label.component";

type NativeInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type InputProps = {
  label?: string;
} & NativeInputProps;

export default function Input(props: InputProps) {
  const { className, label, id, ...rest } = props;

  return (
    <div className={styles.container}>
      {!!label && <Label htmlFor={id}>{label}</Label>}

      <input
        id={id}
        name={id}
        {...rest}
        className={[styles.input, className].join(" ")}
      />
    </div>
  );
}
