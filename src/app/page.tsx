import CountDown from "@/components/CountDown";
import TasksList from "@/components/TODO/TasksList";

export default function Home() {
  return (
    <section>
      <CountDown />

      <TasksList />
    </section>
  );
}
