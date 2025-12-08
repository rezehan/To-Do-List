import { useState, useEffect } from "react";
import axios from "axios";

export default function TasksList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
          // Ganti URL sesuai port Laravel kamu
          axios.get('http://127.0.0.1:8000/api/todos')
              .then(response => {
                  // Masukkan data dari API ke State
                  setTasks(response.data);
              })
              .catch(error => {
                  console.error("Ada error!", error);
              });
      }, []);

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="space-y-3">
      {tasks.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <div className="text-5xl mb-3">○</div>
          <p>Tidak ada tugas. Mulai tambahkan tugas baru!</p>
        </div>
      ) : (
        tasks.map(task => (
          <div
            key={task.id}
            className={`group flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 ${task.completed
                ? 'bg-gray-50 border-gray-200'
                : 'bg-white border-gray-200 hover:border-purple-300 hover:shadow-md'
              }`}
          >
            <button
              onClick={() => toggleTask(task.id)}
              className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 text-sm ${task.completed
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-transparent text-white'
                  : 'border-gray-300 hover:border-purple-400'
                }`}
            >
              {task.completed && '✓'}
            </button>

            <div className="flex-1">
              <div
                className={`font-medium transition-all duration-300 ${task.completed
                    ? 'text-gray-400 line-through'
                    : 'text-gray-800'
                  }`}
              >
                {task.title}
              </div>
              {task.description && (
                <div
                  className={`text-sm mt-1 transition-all duration-300 ${task.completed
                      ? 'text-gray-300 line-through'
                      : 'text-gray-500'
                    }`}
                >
                  {task.description}
                </div>
              )}
            </div>

            <button
              onClick={() => deleteTask(task.id)}
              className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </button>
          </div>
        ))
      )}
    </div>
  )
}