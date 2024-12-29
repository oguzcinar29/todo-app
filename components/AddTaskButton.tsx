"use client";
import { Plus } from "lucide-react";
import DynamicDialog from "./DynamicDialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

export default function AddTaskButton({ setTasks }) {
  const [task, setTask] = useState("");

  const toggle = () => {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("32");
          setTasks((prev) => [...prev, task]);
        }}
        className="flex items-center gap-2"
      >
        <Input type="text" onChange={(e) => setTask(e.target.value)} />
        <Button type="submit">Submit</Button>
      </form>
    );
  };

  return (
    <section className=" ">
      <DynamicDialog
        buttonTitle={
          <span className="flex items-center gap-2">
            ADD NEW TASK <Plus />
          </span>
        }
        dialogTitle={<span className=" font-medium">Edit Task</span>}
        toggle={toggle}
      />
    </section>
  );
}
