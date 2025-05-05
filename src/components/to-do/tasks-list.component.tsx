"use client";

import useGetTasksPaginated from "@/hooks/task/use-get-tasks-paginated";
import TaskCard from "./task-card.component";
import { Plus } from "lucide-react";
import Task from "@/models/Task";
import { useEffect, useState } from "react";
import useCreateTask from "@/hooks/task/use-task-create";
import useDeleteTaskById from "@/hooks/task/use-delete-task-by-id";
import useUpdateTask from "@/hooks/task/use-update-task";
import AddTaskModal from "./add-task.modal";
import styles from './styles/task-list.module.css'

export default function TasksList() {
  const [isClient, setIsClient] = useState(false);
  const { data } = useGetTasksPaginated();
  const [tasks, setTasks] = useState<Task[]>(data);
  const { mutate: createTask } = useCreateTask({ setState: setTasks });
  const { mutate: deleteTask } = useDeleteTaskById({ setState: setTasks });
  const { mutate: updateTask } = useUpdateTask({ setState: setTasks });
  const [isVisibleAddTaskModal, setIsVisibleAddTaskModal] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleOnClickPlus = () => {
    setIsVisibleAddTaskModal(true);
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
      {isVisibleAddTaskModal && (
        <AddTaskModal
          setVisible={setIsVisibleAddTaskModal}
          onSubmit={(task) => {
            createTask(task);
          }}
        />
      )}

      <h2>Tasks List</h2>

      <Plus onClick={handleOnClickPlus} />

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
