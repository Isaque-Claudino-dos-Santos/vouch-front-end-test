import "../styles/task-card.css";
import Task from "@/models/Task";
import QuickEdit from "../QuickEdit";
import Input from "../form/Input";
import Textarea from "../form/Textarea";
import { Check, Copy, Pen, Trash, X } from "lucide-react";
import { useState } from "react";
import useDeleteTaskById from "@/hooks/task/use-delete-task-by-id";
import useUpdateTask from "@/hooks/task/use-update-task";

export type TaskCardProps = {
  task: Task;
  onUpdate: (task: Task) => void;
  onDelete: (task: Task) => void;
};

export default function TaskCard(props: TaskCardProps) {
  const { task, onUpdate, onDelete } = props;

  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleCopyTitle = () => {
    window.navigator.clipboard.writeText(task.title ?? "");
  };

  const handleDeleteTask = () => {
    if (!confirmDelete) {
      setConfirmDelete(true);
      return;
    }

    onDelete(task);
    setConfirmDelete(false);
  };

  const handlerCancelDelete = () => {
    setConfirmDelete(false);
  };

  return (
    <div className="taskCard">
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "1rem" }}>
          <h3 className="taskCard_id"># {task.id}</h3>

          <p className="taskCard_status">{task.status}</p>
        </div>

        <input type="checkbox" style={{ alignSelf: "flex-end" }} />
      </header>

      <QuickEdit
        id="title"
        input={<Input type="text" defaultValue={task.title} name="title" />}
        preview={
          <h2 className="taskCard_title">
            {task.title}{" "}
            <Copy onClick={handleCopyTitle} className="copy-icon" size={16} />{" "}
          </h2>
        }
        onSubmit={(title) => {
          task.title = title ?? "";
          onUpdate(task);
        }}
      />

      <QuickEdit
        id="description"
        input={<Textarea name="description" defaultValue={task.description} />}
        preview={<p className="taskCard_description">{task.description}</p>}
        onSubmit={(description) => {
          task.description = description ?? "";
          onUpdate(task);
        }}
      />

      <div className="taskCard_delete">
        <Pen cursor="pointer" color="#efefef" />

        {confirmDelete ? (
          <>
            <Check
              onClick={handleDeleteTask}
              color="#33aa33"
              cursor="pointer"
            />
            <X onClick={handlerCancelDelete} color="#aa3333" cursor="pointer" />
          </>
        ) : (
          <Trash onClick={handleDeleteTask} color="#aa3333" cursor="pointer" />
        )}
      </div>
    </div>
  );
}
