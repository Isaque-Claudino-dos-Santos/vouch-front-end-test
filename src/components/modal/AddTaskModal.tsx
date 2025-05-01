"use client";

import Task from "@/models/Task";
import { X } from "lucide-react";
import Input from "../form/Input";
import Textarea from "../form/Textarea";

export type AddTaskModalProps = {
  setVisible: (visible: boolean) => void;
  onSubmit: (task: Task) => void;
};

export default function AddTaskModal(props: AddTaskModalProps) {
  const { setVisible, onSubmit } = props;

  const handleClose = () => {
    setVisible(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const title = formData.get("title")?.toString() ?? "";
    const description = formData.get("description")?.toString() ?? "";

    const task = new Task();
    task.title = title;
    task.description = description;

    onSubmit(task);
    setVisible(false);
  };

  return (
    <section className="modal">
      <form className="form modal-content" onSubmit={handleSubmit}>
        <X
          onClick={handleClose}
          style={{ alignSelf: "flex-end", cursor: "pointer" }}
        />

        <div className="form_group">
          <label htmlFor="title">Task Name</label>
          <Input type="text" id="title" name="title" autoFocus />
        </div>

        <div className="form_group">
          <label htmlFor="description">Task Description</label>
          <Textarea id="description" name="description" />
        </div>

        <button type="submit" className="form_button">
          ADD TASK
        </button>
      </form>
    </section>
  );
}
