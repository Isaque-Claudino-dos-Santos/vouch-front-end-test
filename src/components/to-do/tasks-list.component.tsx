"use client";

import useGetTasksPaginated from "@/hooks/task/use-get-tasks-paginated";
import TaskCard from "./task-card.component";
import Task from "@/models/Task";
import { KeyboardEvent, useEffect, useState } from "react";
import useCreateTask from "@/hooks/task/use-task-create";
import useDeleteTaskById from "@/hooks/task/use-delete-task-by-id";
import useUpdateTask from "@/hooks/task/use-update-task";
import styles from "./styles/task-list.module.css";
import Input from "../form/input.component";
import { Plus } from "lucide-react";
import Textarea from "../form/textarea.component";

export default function TasksList() {
  const [isClient, setIsClient] = useState(false);
  const { data } = useGetTasksPaginated();
  const [tasks, setTasks] = useState<Task[]>(data);
  const { mutate: createTask } = useCreateTask({ setState: setTasks });
  const { mutate: deleteTask } = useDeleteTaskById({ setState: setTasks });
  const { mutate: updateTask } = useUpdateTask({ setState: setTasks });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleAddTask = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code !== "Enter") {
      return;
    }
    const target = event.target as HTMLInputElement;
    const { value } = target;

    if (!value.length) {
      return;
    }
    const task = new Task();
    task.description = value;

    createTask(task);
    target.value = "";
  };

  const handleDelete = (task: Task) => {
    deleteTask(task.id);
  };

  const handleUpdate = (task: Task) => {
    updateTask(task);
  };

  if (!isClient) {
    return <></>;
  }

  return (
    <section>
      <h2>Tasks List</h2>

      <div className={styles.addTask}>
        <Plus />
        <Input
          autoFocus
          onKeyDown={handleAddTask}
          placeholder="My task description press enter to add task"
        />
      </div>

      <ul className={styles.list}>
        {tasks?.toReversed().map((task, index) => (
          <TaskCard
            key={index}
            task={task}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
    </section>
  );
}
