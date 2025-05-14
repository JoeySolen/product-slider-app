import ProductSlider from './components/ProductSlider';
import NotificationContainer from './components/NotificationContainer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">E-Commerce Slider</h1>
        </div>
      </header>
      
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <ProductSlider />
        </div>
      </main>
      
      <footer className="bg-white mt-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2025 E-Commerce Demo. Todos los derechos reservados.
          </p>
        </div>
      </footer>
      
      {/* Contenedor de notificaciones (fuera del flujo normal del DOM) */}
      <NotificationContainer />
    </div>
  );
}

export default App;