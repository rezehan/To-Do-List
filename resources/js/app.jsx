import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import MainCard from './pages/MainCard';


function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <Header />

        {/* Main Card */}
        <MainCard />

        {/* Bottom Text */}
        <p className="text-center mt-6 text-gray-500 text-sm">
          Tetap produktif dan terorganisir ✨
        </p>
      </div>
    </div>
  );
}


const el = document.getElementById('app');
if (el) {
    createRoot(el).render(<App />);
}