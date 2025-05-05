"use client";

import useCountDown from "@/hooks/use-count-down";
import { Pause, Play, RotateCcw } from "lucide-react";
import { useEffect } from "react";
import styles from "./styles/count-down.module.css";

export type CountDownProps = {
  className?: string;
};

export default function CountDown(props: CountDownProps) {
  const { className } = props;
  const { time, reset, start, stop, stopOnFinish, isFinish, isRunning } =
    useCountDown(10);

  const isAvailableToPlay = !isRunning && !isFinish;
  const isAvailableToReset = !isRunning && isFinish;
  const isAvailableToPause = isRunning;

  const handleStart = () => {
    start();
  };

  const handleReset = () => {
    reset();
  };

  const handleStop = () => {
    stop();
  };

  useEffect(() => {
    stopOnFinish();
  }, [time]);

  return (
    <div className={[styles.countDown, className].join(" ")}>
      {isAvailableToPlay && (
        <div onClick={handleStart}>
          <Play />
        </div>
      )}

      {isAvailableToReset && (
        <div onClick={handleReset}>
          <RotateCcw />
        </div>
      )}

      {isAvailableToPause && (
        <div onClick={handleStop}>
          <Pause />
        </div>
      )}

      {!isFinish ? <p>{time}</p> : <p>tempo esgotado!</p>}
    </div>
  );
}
