import "../styles/form.css";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type NativeInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type InputProps = {} & NativeInputProps;

export default function Input(props: InputProps) {
  const { ...rest } = props;

  return <input {...rest} className="form_input" />;
}
