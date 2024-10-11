import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import useTasksHook from '../hooks/useTasks';

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const tasksData = useTasksHook();

  return <TasksContext.Provider value={tasksData}>{children}</TasksContext.Provider>;
};

TasksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks doit être utilisé à l'intérieur d'un TasksProvider");
  }
  return context;
};
