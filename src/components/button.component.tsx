import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./styles/button.module.css";

type NativeButtonProps = {} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = {} & NativeButtonProps;

export default function Button(props: ButtonProps) {
  const { ...rest } = props;

  return <button className={styles.button} {...rest} />;
}
