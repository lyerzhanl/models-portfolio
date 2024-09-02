import { useState } from 'react';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import './index.css';
import gallery1 from './assets/photo_5_2024-09-01_15-12-28.jpg';
import gallery2 from './assets/photo_1_2024-09-01_15-12-28.jpg';
import gallery3 from './assets/photo_2_2024-09-01_15-12-28.jpg';
import gallery4 from './assets/photo_3_2024-09-01_15-12-28.jpg';
import gallery5 from './assets/photo_4_2024-09-01_15-12-28.jpg';
import gallery6 from './assets/photo_6_2024-09-01_15-12-28.jpg';
import gallery7 from './assets/photo_7_2024-09-01_15-12-28.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <main className="bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-lg fixed top-0 w-full z-10">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">Алмат Айдария</h1>
            <nav className="hidden md:flex space-x-4">
              <a href="#about" className="text-gray-600 hover:text-gray-900">Обо мне</a>
              <a href="#models" className="text-gray-600 hover:text-gray-900">Галерея</a>
              <a href="#gallery" className="text-gray-600 hover:text-gray-900">Сотрудничество</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Контакты</a>
            </nav>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="focus:outline-none z-40">
                <div className="flex flex-col space-y-2">
                  <span className={`block w-7 h-0.5 bg-gray-600 transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`block w-7 h-0.5 bg-gray-600 transition duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-7 h-0.5 bg-gray-600 transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-3' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`fixed inset-0 bg-white flex flex-col items-center justify-center text-center space-y-6 z-20 transition-transform duration-300 top-[80px] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <a href="#about" onClick={closeMenu} className="text-gray-800 text-2xl">Обо мне</a>
            <a href="#models" onClick={closeMenu} className="text-gray-800 text-2xl">Галерея</a>
            <a href="#gallery" onClick={closeMenu} className="text-gray-800 text-2xl">Сотрудничество</a>
            <a href="#contact" onClick={closeMenu} className="text-gray-800 text-2xl">Контакты</a>
          </div>
        </header>

        {/* Rest of the page */}
        <section className="bg-cover bg-center min-h-screen flex items-center justify-center">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="w-full relative flex md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:pl-10">
              <img src={gallery1} alt="Hero section image" className="max-h-[600px] mt-16 mx-auto" />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:pl-10">
              <h2 className="text-black text-4xl md:text-6xl font-bold">Привет, меня зовут Айдария!</h2>
              <p className="text-black text-lg mt-4">Люблю танцевать и позировать на камеру</p>
              <a href="#contact" className="mt-8 mb-8 inline-block bg-white text-gray-800 px-6 py-3 font-semibold rounded-full shadow-lg hover:bg-gray-100">
                Свяжись со мной
              </a>
            </div>
          </div>
        </section>

        {/* Обо мне */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-800">Обо мне</h3>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Привет! Меня зовут Айдария, и мне 3 года. Я маленькая, но уже большая любительница моды! Я обожаю
                наряжаться в красивые платья, позировать перед камерой и дарить всем свои самые яркие улыбки.
                Я весёлая и энергичная, люблю играть с игрушками, смотреть мультики и придумывать свои маленькие
                истории. Мои родители говорят, что у меня особый талант быть перед камерой и дарить людям радость!
              </p>
            </div>
          </div>
        </section>

        {/* Галерея */}
        <section id="gallery" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-800">Галерея</h3>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Здесь собраны самые яркие моменты моих фотосессий.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mt-10">
              <img src={gallery7} alt="Изображение для галереи" className="w-full object-cover" />
              <img src={gallery2} alt="Изображение для галереи" className="w-full object-cover" />
              <img src={gallery3} alt="Изображение для галереи" className="w-full object-cover" />
              <img src={gallery4} alt="Изображение для галереи" className="w-full object-cover" />
              <img src={gallery5} alt="Изображение для галереи" className="w-full object-cover" />
              <img src={gallery6} alt="Изображение для галереи" className="w-full object-cover" />
            </div>
          </div>
        </section>

        {/* Сотрудничество */}
        <section id="models" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-800">Сотрудничество</h3>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Я уже успела поработать с рядом известных брендов и компаний...
              </p>
            </div>
          </div>
        </section>

        {/* Контакты */}
        <section id="contact" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-800">Контакты</h3>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Я всегда открыта для новых предложений и проектов! Заполните форму ниже, и мы ответим вам как можно скорее.
              </p>
            </div>
            <div className="flex justify-center mt-8 space-x-6">
              <a href="https://instagram.com/sartpanbetova" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 w-8 h-8 hover:text-pink-600" />
              </a>
              <a href="https://tiktok.com/@ai_dariya21" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="text-black w-8 h-8 hover:text-gray-700" />
              </a>
              <a href="https://wa.me/87058084143" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-green-500 w-8 h-8 hover:text-green-600" />
              </a>
            </div>
            <div className="mt-10 max-w-lg mx-auto">
              <form action="mailto:balmakanovs@mail.ru" method="POST" className="bg-white p-8 rounded-lg shadow-lg" encType="text/plain">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">Имя</label>
                  <input type="text" id="name" name="name" className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">Почта</label>
                  <input type="email" id="email" name="email" className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700">Сообщение</label>
                  <textarea id="message" name="message" className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:border-blue-500" rows="4"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600">
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 All Rights Reserved by Nusa Corporation</p>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
