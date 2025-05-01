import TaskStatusEnum from "@/enums/TaskStatusEnum"

export default class Task {
    public id?: number
    public title?: string
    public description?: string
    public status: TaskStatusEnum = TaskStatusEnum.BACKLOG
}