'use client';

import Task from "@/models/Task";
import { getTasks, saveTask } from "@/services/task-services";
import { Dispatch, SetStateAction } from "react";


export type TaskCreateProps = {
    setState: Dispatch<SetStateAction<Task[]>>;
}

export default function useCreateTask(options: TaskCreateProps) {
    const { setState } = options;

    const mutate = (task: Task) => {
        saveTask(task)
        setState(() => getTasks());
    }

    return {
        mutate
    }
}