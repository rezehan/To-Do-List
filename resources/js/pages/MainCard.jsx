import React, { useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import InputSection from '../components/InputSection';
import TasksList from '../components/TasksList';

export default function MainCard() {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Selamat datang di To-Do List Anda', description: 'Mulai kelola tugas Anda dengan lebih efektif', completed: false },
        { id: 2, title: 'Klik untuk menandai tugas selesai', description: 'Gunakan checkbox untuk menandai tugas yang sudah selesai', completed: false }
      ]);
    
      const completedCount = tasks.filter(t => t.completed).length;

    return(
        <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-90">
          {/* Progress Bar */}
          <ProgressBar />

          {/* Input Section */}
          <InputSection />

          {/* Tasks List */}
          <TasksList />

          {/* Footer Stats */}
          {tasks.length > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between text-sm text-gray-600">
              <span>{tasks.filter(t => !t.completed).length} tugas tersisa</span>
              <span>{completedCount} tugas selesai</span>
            </div>
          )}
        </div>
    )
}