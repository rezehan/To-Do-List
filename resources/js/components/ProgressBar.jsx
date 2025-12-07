import { useState } from "react";

export default function ProgressBar() {
        const [tasks, setTasks] = useState([
            { id: 1, title: 'Selamat datang di To-Do List Anda', description: 'Mulai kelola tugas Anda dengan lebih efektif', completed: false },
            { id: 2, title: 'Klik untuk menandai tugas selesai', description: 'Gunakan checkbox untuk menandai tugas yang sudah selesai', completed: false }
          ]);
        
          const completedCount = tasks.filter(t => t.completed).length;
          const totalCount = tasks.length;

    return(
        <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress Hari Ini</span>
              <span className="font-semibold">{completedCount}/{totalCount}</span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 ease-out rounded-full"
                style={{ width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%` }}
              />
            </div>
          </div>
    )
}