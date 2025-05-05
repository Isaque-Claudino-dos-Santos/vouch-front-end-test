import { Check, X } from "lucide-react";

export type ConfirmOrCancelProps = {
  onConfirm?: () => void;
  onCancel?: () => void;
  isSubmitable?: boolean;
};

export default function ConfirmOrCancel(props: ConfirmOrCancelProps) {
  const { onConfirm, onCancel, isSubmitable } = props;

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
  };

  const handlerCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <>
      {isSubmitable ? (
        <button type="submit" style={{ all: "unset" }}>
          <Check onClick={handleConfirm} color="#33aa33" cursor="pointer" />
        </button>
      ) : (
        <Check onClick={handleConfirm} color="#33aa33" cursor="pointer" />
      )}
      <X onClick={handlerCancel} color="#aa3333" cursor="pointer" />
    </>
  );
}
