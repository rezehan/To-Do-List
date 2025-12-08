# To-Do List Application 📝

Aplikasi manajemen tugas full-stack modern yang dibangun untuk membantu pengguna mencatat dan mengorganisir aktivitas harian. Proyek ini menggabungkan kekuatan Laravel 12 sebagai backend API yang robust dengan React 19 untuk antarmuka pengguna yang dinamis dan responsif.

![Laravel](https://img.shields.io/badge/Laravel-12-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🌟 Fitur Utama

### Manajemen Tugas (CRUD)
- **Tambah Tugas**: Input tugas baru dengan judul dan deskripsi opsional. Data disimpan ke database melalui API
- **Status Selesai**: Tandai tugas sebagai selesai (completed) dengan interaksi checkbox yang intuitif
- **Hapus Tugas**: Menghapus tugas yang tidak lagi diperlukan dari daftar
- **Progress Tracking**: Progress Bar visual yang menghitung persentase penyelesaian tugas secara real-time
- **Antarmuka Modern**: Desain bersih dan responsif menggunakan Tailwind CSS v4, dengan efek glassmorphism dan gradien warna
- **Integrasi API**: Frontend React berkomunikasi dengan backend Laravel melalui Axios untuk persistensi data

## 🛠 Teknologi yang Digunakan

### Backend
- **Laravel 12**: Framework PHP modern untuk membangun RESTful API
- **SQLite / MySQL**: Penyimpanan data (default konfigurasi menggunakan SQLite untuk kemudahan development)

### Frontend
- **React 19**: Library JavaScript untuk membangun UI komponen berbasis state
- **Vite**: Build tool super cepat untuk pengembangan frontend modern
- **Tailwind CSS 4**: Framework CSS utility-first untuk styling cepat dan responsif
- **Axios**: HTTP client untuk melakukan request ke backend API

## 📂 Susunan Project

```
To-Do-List/
├── app/
│   ├── Http/Controllers/   # Controller logika backend
│   └── Models/             # Model Eloquent (Tasks, User)
├── database/
│   ├── migrations/         # Definisi skema database (tasks table)
│   └── seeders/            # Data awal (seeding)
├── resources/
│   ├── css/                # Entry point CSS (Tailwind)
│   ├── js/
│   │   ├── components/     # Komponen React (Header, InputSection, TasksList, dll)
│   │   ├── pages/          # Halaman utama (MainCard)
│   │   └── app.jsx         # Entry point React
│   └── views/              # Blade template (memuat React root)
├── routes/
│   ├── api.php             # Definisi route API (POST /todos, dll)
│   └── web.php             # Route web utama
└── vite.config.js          # Konfigurasi Vite & Plugin Laravel
```

## 📋 Prasyarat Instalasi

Sebelum memulai, pastikan sistem Anda telah terinstal:

- PHP >= 8.2
- Composer (Manajer dependensi PHP)
- Node.js & NPM (untuk menjalankan Vite dan React)

## 🚀 Panduan Instalasi & Penggunaan

Ikuti langkah-langkah berikut untuk menjalankan proyek di lingkungan lokal Anda:

### 1. Clone Repositori

```bash
git clone https://github.com/rezehan/To-Do-List.git
cd To-Do-List
```

### 2. Instalasi Dependensi Backend (Laravel)

```bash
composer install
```

### 3. Instalasi Dependensi Frontend (Node.js)

```bash
npm install
```

### 4. Konfigurasi Environment

Salin file contoh konfigurasi `.env`:

```bash
cp .env.example .env
```

Generate app key Laravel:

```bash
php artisan key:generate
```

### 5. Setup Database

Pastikan konfigurasi database di file `.env` sudah sesuai (secara default menggunakan SQLite, pastikan file database ada atau biarkan Laravel membuatnya):

```bash
# Jalankan migrasi untuk membuat tabel tasks dan lainnya
php artisan migrate
```

### 6. Jalankan Aplikasi

Anda perlu menjalankan dua terminal terpisah:

**Terminal 1 (Backend Server):**
```bash
php artisan serve
```

**Terminal 2 (Frontend Build/Dev Server):**
```bash
npm run dev
```

Buka browser dan akses alamat lokal yang muncul (biasanya `http://127.0.0.1:8000`).

## 📡 API Endpoints

Aplikasi ini menyediakan endpoint API berikut (didefinisikan di `routes/api.php`):

| Method | Endpoint | Deskripsi | Payload (JSON) |
|--------|----------|-----------|----------------|
| POST | `/api/todos` | Membuat tugas baru | `{ "task": "...", "description": "..." }` |

## 🤝 Kontribusi

Kontribusi selalu diterima! Jika Anda ingin berkontribusi:

1. Fork repositori ini
2. Buat branch fitur baru (`git checkout -b fitur-keren`)
3. Commit perubahan Anda (`git commit -m 'Menambahkan fitur keren'`)
4. Push ke branch tersebut (`git push origin fitur-keren`)
5. Buat Pull Request

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi MIT. Silakan gunakan dan modifikasi sesuai kebutuhan Anda.

---

**Dikembangkan dengan ❤️ oleh [Rezehan](https://github.com/rezehan)**