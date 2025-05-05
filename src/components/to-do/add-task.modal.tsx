"use client";

import Task from "@/models/Task";
import { X } from "lucide-react";
import Input from "../form/input.component";
import Textarea from "../form/textarea.component";
import Form from "../form/form.component";
import Button from "../button.component";

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
      <div className="modal-content">
        <Form onSubmit={handleSubmit}>
          <X
            onClick={handleClose}
            style={{ alignSelf: "flex-end", cursor: "pointer" }}
          />

          <Input type="text" id="title" label="Task Name" autoFocus />

          <Textarea
            id="description"
            label="Task Description"
            name="description"
          />

          <Button type="submit"> ADD TASK</Button>
        </Form>
      </div>
    </section>
  );
}
