'use client';

import Task from "@/models/Task";


function autoIncrementTaskId(): number {
    const taskId = Number(localStorage.getItem("taskId"));


    if (!taskId || isNaN(taskId)) {
        localStorage.setItem("taskId", "0");
    }

    const newTaskId = Number(localStorage.getItem("taskId")) + 1;

    localStorage.setItem("taskId", newTaskId.toString());

    return newTaskId;
}

export function getTasks(): Task[] {
    return JSON.parse(localStorage.getItem("tasks") ?? "[]");
}

export function saveTask(task: Task): void {
    const taskId = autoIncrementTaskId();
    task.id = taskId;

    const tasks = getTasks();

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function deleteTask(taskId: number): void {
    const tasks = getTasks();

    const newTasks = tasks.filter((task) => task.id !== taskId);

    localStorage.setItem("tasks", JSON.stringify(newTasks));
}

export function updateTask(task: Task): void {
    const tasks = getTasks();

    const taskIndex = tasks.findIndex((t) => t.id === task.id);

    if (taskIndex === -1) { return; }

    tasks[taskIndex] = task;
    localStorage.setItem("tasks", JSON.stringify(tasks));
}