import { Task } from "@/app/page";
import { Edit, Trash2 } from "lucide-react";
import DynamicDialog from "./DynamicDialog";
import { Button } from "./ui/button";

type SingleTaskProps = Readonly<{
  task: Task;
  readonly setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}>;
export default function SingleTask({ task, setTasks }: SingleTaskProps) {
  const handleDeleteTask = () => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  const handleEditTask = () => {};

  const toggle = () => {
    return <Button onClick={handleDeleteTask}>Yes</Button>;
  };

  return (
    <div className="flex items-center justify-between p-2 px-3  rounded-md">
      <span>{task?.title}</span>
      <div className="flex items-center gap-2">
        <Edit
          onClick={handleEditTask}
          color="blue"
          className="cursor-pointer"
        />
        <DynamicDialog
          dialogTitle={<span>Are you sure you want to delete this task ?</span>}
          button={
            <Button variant={"ghost"}>
              <Trash2 color="red" />
            </Button>
          }
          toggle={toggle}
        />
      </div>
    </div>
  );
}
