import React, { useState, useMemo } from 'react';
import { useTasks } from '../contexts/TasksContext';

const TodoList = () => {
  const { tasks, addTask, deleteTask, toggleTask, loading, error } = useTasks();
  const [filter, setFilter] = useState('all');
  const [newTaskText, setNewTaskText] = useState('');

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'completed':
        return tasks.filter((task) => task.completed);
      case 'active':
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTaskText.trim()) {
      addTask(newTaskText);
      setNewTaskText('');
    }
  };

  const handleDeleteTask = (id) => {
    deleteTask(id);
  };

  const handleToggleTask = (id) => {
    toggleTask(id);
  };

  if (loading) return <div>Chargement des tâches...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleAddTask} className="mb-4">
        <div className="flex">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Ajouter une nouvelle tâche"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Ajouter
          </button>
        </div>
      </form>

      <div className="mb-4 space-x-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Toutes
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-3 py-1 rounded ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Actives
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-3 py-1 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Terminées
        </button>
      </div>

      <ul className="space-y-2">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="flex flex-wrap items-center bg-white p-3 rounded shadow transition-all duration-300 ease-in-out"
          >
            <div className="flex items-center flex-grow">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
                className="mr-3 form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className={`break-words ${task.completed ? 'line-through text-gray-500' : ''}`}>
                {task.text}
              </span>
            </div>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="ml-auto px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
