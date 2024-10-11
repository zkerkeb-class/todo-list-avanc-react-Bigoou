import { useState, useEffect, useCallback } from 'react';
import useFetch from './useFetch';

const API_URL = 'https://my-json-server.typicode.com/Bigoou/db-ynov-json/tasks';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const { data: initialTasks, loading, error } = useFetch(API_URL);

  useEffect(() => {
    if (initialTasks) {
      setTasks(initialTasks);
    }
  }, [initialTasks]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((text) => {
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), text, completed: false }]);
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  }, []);

  return { tasks, addTask, deleteTask, toggleTask, loading, error };
};

export default useTasks;
