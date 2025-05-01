'use client'

import { getTasks } from "@/services/task-services";

export default function useGetTasksPaginated() {

    return {
        data: getTasks(),
    }
}