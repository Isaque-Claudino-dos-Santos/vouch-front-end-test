import styles from "./styles/form.module.css";

import { DetailedHTMLProps, FormHTMLAttributes } from "react";

type NativeFormProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

export type FormProps = {} & NativeFormProps;

export default function Form(props: FormProps) {
  const { className, ...rest } = props;

  return <form {...rest} className={[className, styles.form].join(" ")} />;
}
