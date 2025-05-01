'use client'

import { useState } from "react";


export default function useCountDown(startTime = 10) {
    const [time, setTime] = useState(startTime);
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

    const handleTimeout = () => {
        setTime((time) => time - 1);
    }

    const start = () => {
        if (isRunning) return;

        setIsRunning(true);

        const currentIntervalId = setInterval(handleTimeout, 1000)

        setIntervalId(currentIntervalId);
    };

    const stop = () => {
        setIsRunning(false);
        clearInterval(intervalId!);
    }


    const reset = () => {
        stop();
        setTime(startTime);
    };

    const stopOnFinish = () => {
        if (time > 0) {
            return
        }

        stop();
    };


    return { time, start, reset, stop, stopOnFinish, isFinish: time <= 0, isRunning };
}