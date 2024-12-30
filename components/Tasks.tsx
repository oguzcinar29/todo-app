import { Task } from "@/app/page";
import SingleTask from "./SingleTask";
type TasksProps = {
  readonly tasks: Task[];
  readonly setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};
export default function Tasks({ tasks, setTasks }: TasksProps) {
  console.log(tasks);

  return (
    <section className="flex flex-col gap-2">
      <div className="flex justify-between p-2 px-3 bg-gray-200 rounded-md">
        <span>TASK</span>
        <span>ACTION</span>
      </div>
      {tasks.map((task) => {
        return <SingleTask key={task.id} task={task} setTasks={setTasks} />;
      })}
    </section>
  );
}
