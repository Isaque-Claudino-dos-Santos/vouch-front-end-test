import React, { useEffect, useState } from "react";
import "./styles/quick-edit.css";
import ConfirmOrCancel from "./confirm-or-cancel.component";

type QuickEditProps = {
  id: string;
  input: React.ReactNode;
  preview: React.ReactNode;
  onSubmit: (value: string) => void;
  inEditMode?: boolean;
};

export default function QuickEdit(props: QuickEditProps) {
  const { input, id, preview, onSubmit, inEditMode = false } = props;
  const [isEditiable, setIsEditiable] = useState(false);

  useEffect(() => {
    setIsEditiable(inEditMode);
  }, [inEditMode]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dataForm = new FormData(event.target as HTMLFormElement);
    const value = dataForm.get(id)?.toString();

    onSubmit(value ?? "");

    setIsEditiable(false);
  };

  const handleEdit = () => {
    setIsEditiable(true);
  };

  const handleCancel = () => {
    setIsEditiable(false);
  };

  if (isEditiable) {
    return (
      <form onSubmit={handleSubmit} className="quickEdit">
        {input}

        <div className="quickEdit_buttons">
          <ConfirmOrCancel onCancel={handleCancel} isSubmitable />
        </div>
      </form>
    );
  }

  return <div onDoubleClick={handleEdit}>{preview}</div>;
}
