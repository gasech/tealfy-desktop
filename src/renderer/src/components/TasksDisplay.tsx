import Task from "@renderer/models/Task";
import Widget from "@renderer/models/Widget";
import { useEffect, useState } from "react";

type TasksDisplayProps = {
  widget: Widget
}

const TasksDisplay = ({ widget }: TasksDisplayProps) => {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    if (typeof widget.tasks == "undefined") return;

    setTasks(widget.tasks)
  }, [])

  return (
    <div>
      <ul
        className="flex flex-col gap-2"
      >
        {
          tasks.map((task) => {
            return (
              <li
                className="p-2.5 bg-neutral-800"
              >{task.name}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default TasksDisplay;
