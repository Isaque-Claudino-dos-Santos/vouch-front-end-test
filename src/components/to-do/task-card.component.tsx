"use client";

import styles from "./styles/task-card.module.css";
import Task from "@/models/Task";
import QuickEdit from "../quick-edit.component";
import Input from "../form/input.component";
import Textarea from "../form/textarea.component";
import { Check, Copy, Pen, Trash, X } from "lucide-react";
import { useState } from "react";
import Checkbox from "../form/checkbox.component";
import TaskStatusEnum from "@/enums/TaskStatusEnum";
import QuickTrask from "../quick-trash.component";

export type TaskCardProps = {
  task: Task;
  onUpdate: (task: Task) => void;
  onDelete: (task: Task) => void;
};

export default function TaskCard(props: TaskCardProps) {
  const { task, onUpdate, onDelete } = props;

  const [inEditMode, setInEditMode] = useState(false);

  const handleCopyTitle = () => {
    window.navigator.clipboard.writeText(task.title ?? "");
  };

  const handleDelete = () => {
    onDelete(task);
  };

  const handleClickCompleteCheck = (checked: boolean) => {
    task.status = checked ? TaskStatusEnum.COMPLETED : TaskStatusEnum.TODO;
    onUpdate(task);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.title}>
          <h2># {task.id}</h2>

          <p className={styles.status}>{task.status}</p>
        </div>

        <div className={styles.deleteAndEdit}>
          <QuickTrask onConfirmDelete={handleDelete} />

          <Pen
            cursor="pointer"
            color="#efefef"
            onClick={() => {
              setInEditMode(!inEditMode);
            }}
          />
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.content}>
          <QuickEdit
            id="title"
            input={<Input type="text" defaultValue={task.title} name="title" />}
            preview={
              <h2 className="taskCard_title">
                {task.title}{" "}
                <Copy
                  onClick={handleCopyTitle}
                  className="copy-icon"
                  size={16}
                />{" "}
              </h2>
            }
            onSubmit={(title) => {
              task.title = title ?? "";
              onUpdate(task);
            }}
            inEditMode={inEditMode}
          />

          <QuickEdit
            id="description"
            input={
              <Textarea id="description" defaultValue={task.description} />
            }
            preview={<p className="taskCard_description">{task.description}</p>}
            onSubmit={(description) => {
              task.description = description ?? "";
              onUpdate(task);
            }}
            inEditMode={inEditMode}
          />
        </section>

        <section className={styles.actions}>
          <Checkbox
            className={styles.completeCheck}
            onClick={handleClickCompleteCheck}
          />
        </section>
      </main>
    </div>
  );
}
