import Task from "@/models/Task";
import { getTasks, updateTask } from "@/services/task-services";
import { Dispatch, SetStateAction } from "react";


export type UseUpdateTaskOptions = {
    setState: Dispatch<SetStateAction<Task[]>>;
}

export default function useUpdateTask(options: UseUpdateTaskOptions) {
    const { setState } = options;

    const mutate = (task?: Task) => {
        if (!task) {
            return;
        }

        updateTask(task)
        setState(getTasks());
    }

    return {
        mutate
    }
}