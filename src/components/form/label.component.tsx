import style from "./styles/label.module.css";
import { DetailedHTMLProps, LabelHTMLAttributes } from "react";

type NativeLabelProps = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

export type LabelProps = {} & NativeLabelProps;

export function Label(props: LabelProps) {
  const { ...rest } = props;

  return <label {...rest} className={style.label} />;
}
