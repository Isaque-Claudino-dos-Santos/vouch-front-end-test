import "../styles/form.css";
import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

type NativeTextareaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export type TextareaProps = {} & NativeTextareaProps;

export default function Textarea(props: TextareaProps) {
  const { ...rest } = props;
  return <textarea {...rest} className="form_textarea" />;
}
