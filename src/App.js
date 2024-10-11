import React from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-3xl sm:mx-auto w-full px-2 sm:px-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Ma Todo List Avancée</h1>
          </header>
          <main>
            <TodoList />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
