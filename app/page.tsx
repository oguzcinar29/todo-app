"use client";
import AddTaskButton from "@/components/AddTaskButton";
import Tasks from "@/components/Tasks";
import { useState } from "react";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  console.log(tasks[0]);

  return (
    <main className=" max-w-4xl space-y-3   my-5 mx-auto text-center">
      <section>
        <h1 className="text-[24px] font-bold ">Todo List App</h1>
      </section>
      <AddTaskButton setTasks={setTasks} />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </main>
  );
}
