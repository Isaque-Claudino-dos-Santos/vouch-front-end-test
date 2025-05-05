import styles from "./styles/textarea.module.css";
import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { Label } from "./label.component";

type NativeTextareaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export type TextareaProps = { label?: string } & NativeTextareaProps;

export default function Textarea(props: TextareaProps) {
  const { label, id, ...rest } = props;

  return (
    <div className={styles.container}>
      {!!label && <Label htmlFor={id}>{label}</Label>}

      <textarea {...rest} className={styles.textarea} id={id} name={id} />
    </div>
  );
}
