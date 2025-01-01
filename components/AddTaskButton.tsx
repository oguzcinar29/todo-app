"use client";
import DynamicDialog from "./DynamicDialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { Task } from "@/app/page";
import { Plus } from "lucide-react";
import { DialogClose } from "./ui/dialog";

type AddTaskButtonProps = {
  readonly setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export default function AddTaskButton({ setTasks }: AddTaskButtonProps) {
  const [task, setTask] = useState("");

  const toggle = () => {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();

          setTasks((prev) => [
            ...prev,
            { id: Date.now(), title: task.trim(), completed: false }, // Ensure task is a valid Task object
          ]);
          setTask("");
        }}
        className="flex items-center gap-2"
      >
        <Input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <DialogClose asChild>
          <Button type="submit">Submit</Button>
        </DialogClose>
      </form>
    );
  };

  return (
    <section className=" ">
      <DynamicDialog
        button={
          <Button className="flex items-center gap-2">
            ADD NEW TASK <Plus />
          </Button>
        }
        dialogTitle={<span className=" font-medium">Edit Task</span>}
        toggle={toggle}
      />
    </section>
  );
}
