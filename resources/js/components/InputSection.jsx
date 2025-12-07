import { useState } from "react";
import axios from "axios";

export default function InputSection() {
    const [tasks, setTasks] = useState('');
    const [inputTitle, setInputTitle] = useState('');
    const [inputDescription, setInputDescription] = useState('');

    const addTask = async () => {
        // Validasi sederhana: Cek kalau title kosong
        if (!inputTitle.trim()) return;

        try {
            // 1. Kirim data ke API Laravel
            const response = await axios.post('/api/todos', {
                // Sebelah kiri: nama kolom di Database (Laravel)
                // Sebelah kanan: nama state di React kamu
                task: inputTitle,
                description: inputDescription
            });

            // 2. Sukses! Masukkan data ASLI dari database ke list
            // response.data berisi { id: 1, task: "...", description: "...", ... }
            setTasks([...tasks, response.data]);

            // 3. Reset form
            setInputTitle('');
            setInputDescription('');

        } catch (error) {
            console.error("Gagal menyimpan task:", error);
            alert("Gagal menyimpan data ke server");
        }
    };

    return (
        <div className="mb-6 space-y-3">
            <input
                type="text"
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTask()}
                placeholder="Judul tugas..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-400 transition-colors font-medium"
            />
            <div className="flex gap-2">
                <input
                    type="text"
                    value={inputDescription}
                    onChange={(e) => setInputDescription(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTask()}
                    placeholder="Deskripsi (opsional)..."
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"
                />
                <button
                    onClick={addTask}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                    <span className="text-xl">+</span>
                    <span className="font-medium">Tambah</span>
                </button>
            </div>
        </div>
    )
}