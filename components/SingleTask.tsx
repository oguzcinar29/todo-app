import { Task } from "@/app/page";
import { Edit, Trash2 } from "lucide-react";
import DynamicDialog from "./DynamicDialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { DialogClose } from "./ui/dialog";

type SingleTaskProps = Readonly<{
  task: Task;
  readonly setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}>;
export default function SingleTask({ task, setTasks }: SingleTaskProps) {
  const handleDeleteTask = () => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  const [secondTask, setSecondTask] = useState(task);

  const editToggle = () => {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTasks((prevVal) => {
            const index = prevVal.findIndex((item) => item.id === task.id);
            console.log(index);
            const newTasks = [...prevVal];
            newTasks[index] = secondTask;

            return newTasks;
          });
        }}
        className="flex items-center gap-2"
      >
        <Input
          type="text"
          value={secondTask.title}
          onChange={(e) => {
            console.log("32");
            setSecondTask((prevVal) => ({ ...prevVal, title: e.target.value }));
          }}
        />
        <DialogClose asChild>
          <Button type="submit">Update</Button>
        </DialogClose>
      </form>
    );
  };
  const deleteToggle = () => {
    return <Button onClick={handleDeleteTask}>Yes</Button>;
  };

  return (
    <div className="flex items-center justify-between p-2 px-3  rounded-md">
      <span>{task?.title}</span>
      <div className="flex items-center gap-2">
        <DynamicDialog
          dialogTitle={<span>Edit Task</span>}
          button={
            <Button variant={"ghost"}>
              <Edit color="blue" className="cursor-pointer" />
            </Button>
          }
          toggle={editToggle}
        />
        <DynamicDialog
          dialogTitle={<span>Are you sure you want to delete this task ?</span>}
          button={
            <Button variant={"ghost"}>
              <Trash2 color="red" />
            </Button>
          }
          toggle={deleteToggle}
        />
      </div>
    </div>
  );
}
