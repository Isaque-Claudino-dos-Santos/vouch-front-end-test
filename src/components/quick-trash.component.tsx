import { Check, Trash, X } from "lucide-react";
import { useState } from "react";
import ConfirmOrCancel from "./confirm-or-cancel.component";

export type TrashProps = {
  onConfirmDelete?: () => void;
};

export default function QuickTrask(props: TrashProps) {
  const { onConfirmDelete } = props;
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDeleteConfirm = () => {
    if (!confirmDelete) {
      setConfirmDelete(true);
      return;
    }

    if (onConfirmDelete) onConfirmDelete();
    setConfirmDelete(false);
  };

  const handlerCancel = () => {
    setConfirmDelete(false);
  };

  const handleDelete = () => {
    setConfirmDelete(true);
  };

  return confirmDelete ? (
    <ConfirmOrCancel onConfirm={handleDeleteConfirm} onCancel={handlerCancel} />
  ) : (
    <Trash onClick={handleDelete} color="#aa3333" cursor="pointer" />
  );
}
