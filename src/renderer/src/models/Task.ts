interface Task {
  name: string;
  description?: string;
  priority?: 0 | 1 | 2 | 3;
  subtasks: Subtask[];
}

export interface Subtask {
  id: number;
  name: string;
  description?: string;
  priority?: 0 | 1 | 2 | 3;
}

export default Task;
