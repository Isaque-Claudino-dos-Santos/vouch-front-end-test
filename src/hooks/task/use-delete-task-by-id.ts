import Task from "@/models/Task";
import { deleteTask, getTasks } from "@/services/task-services";
import { Dispatch, SetStateAction } from "react";

type UseDeleteTaskByIdOptions = {
    setState: Dispatch<SetStateAction<Task[]>>;

}


export default function useDeleteTaskById(options: UseDeleteTaskByIdOptions) {
    const { setState } = options;

    const mutate = (id?: number) => {
        if (!id) return

        deleteTask(id);
        setState(getTasks());
    };

    return { mutate }
}