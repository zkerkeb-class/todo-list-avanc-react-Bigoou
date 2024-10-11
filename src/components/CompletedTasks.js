import React from 'react';
import { useTasks } from '../contexts/TasksContext';

const CompletedTasks = () => {
  const { tasks } = useTasks();
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Tâches terminées</h2>
      <ul className="space-y-2">
        {completedTasks.map((task) => (
          <li key={task.id} className="bg-green-100 p-2 rounded">
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTasks;
