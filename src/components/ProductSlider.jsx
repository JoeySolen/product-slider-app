import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ProductCard from './ProductCard';
import { Sliders } from "@phosphor-icons/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Datos de productos con imágenes reales
const productsData = [
{
    id: 1,
    name: "Auriculares Premium",
    price: 149.99,
    category: "electrónica",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    discount: 15,
    rating: 4.7,
    isNew: true
},
{
    id: 2,
    name: "Zapatillas Running Pro",
    price: 89.99,
    category: "deportes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    discount: 0,
    rating: 4.3,
    isNew: false
},
{
    id: 3,
    name: "Libro de Cocina Vegana",
    price: 25.50,
    category: "libros",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    discount: 10,
    rating: 4.5,
    isNew: false
},
{
    id: 4,
    name: "Smartwatch FitPro",
    price: 199.99,
    category: "electrónica",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    discount: 5,
    rating: 4.8,
    isNew: true
},
{
    id: 5,
    name: "Bolsa de Deporte",
    price: 45.00,
    category: "deportes",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    discount: 0,
    rating: 4.2,
    isNew: false
},
{
    id: 6,
    name: "Cámara Instantánea",
    price: 79.99,
    category: "electrónica",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    discount: 12,
    rating: 4.4,
    isNew: false
},
{
    id: 7,
    name: "Mancuernas 5kg",
    price: 29.99,
    category: "deportes",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    discount: 0,
    rating: 4.1,
    isNew: true
},
{
    id: 8,
    name: "Novela Bestseller",
    price: 18.99,
    category: "libros",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    discount: 0,
    rating: 4.9,
    isNew: false
}
];

function ProductSlider() {
const [activeCategory, setActiveCategory] = useState('todos');
const [autoplayEnabled, setAutoplayEnabled] = useState(false);
const [showPriceFilter, setShowPriceFilter] = useState(false);
const swiperRef = useRef(null);

// Calcular precios mínimo y máximo para el rango del filtro
const maxPrice = Math.ceil(Math.max(...productsData.map(p => p.price)));
const minPrice = Math.floor(Math.min(...productsData.map(p => p.price)));

// Estado para el filtro de precio (utilizamos valores de precio real, no porcentajes)
const [minPriceFilter, setMinPriceFilter] = useState(minPrice);
const [maxPriceFilter, setMaxPriceFilter] = useState(maxPrice);

// Filtrar productos según la categoría y el rango de precio seleccionados
const filteredProducts = productsData
    .filter(product => activeCategory === 'todos' || product.category === activeCategory)
    .filter(product => {
    const finalPrice = product.discount > 0 
        ? product.price * (1 - product.discount / 100) 
        : product.price;
    return finalPrice >= minPriceFilter && finalPrice <= maxPriceFilter;
    });

// Categorías únicas para el filtro
const categories = ['todos', ...new Set(productsData.map(product => product.category))];

// Manejar cambio de autoplay
useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;
    
    if (autoplayEnabled) {
    swiper.autoplay.start();
    } else {
    swiper.autoplay.stop();
    }
}, [autoplayEnabled]);

// Manejar cambio en el filtro de precio mínimo
const handleMinPriceChange = (e) => {
    const value = Number(e.target.value);
    setMinPriceFilter(value > maxPriceFilter ? maxPriceFilter : value);
};

// Manejar cambio en el filtro de precio máximo
const handleMaxPriceChange = (e) => {
    const value = Number(e.target.value);
    setMaxPriceFilter(value < minPriceFilter ? minPriceFilter : value);
};

return (
    <div className="bg-gray-50 p-6 rounded-md">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Productos Destacados</h2>
        
        <div className="flex flex-wrap gap-3 mt-4 md:mt-0 items-center">
        {/* Filtro de categorías */}
        {categories.map(category => (
            <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-md text-sm transition-colors ${
                activeCategory === category 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            >
            {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
        ))}
        
        {/* Botón de filtro de precio */}
        <button 
            onClick={() => setShowPriceFilter(!showPriceFilter)}
            className={`ml-2 p-2 rounded-md transition-colors duration-300 ${
            showPriceFilter 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-label="Filtrar por precio"
        >
            <Sliders size={20} />
        </button>
        </div>
    </div>

    {/* Filtro de precio MEJORADO - con animación */}
    <div className={`price-filter-container ${showPriceFilter ? 'price-filter-active' : 'price-filter-inactive'}`}>
        <div className="price-filter-content mb-6 p-4 bg-white rounded-lg shadow-sm max-w-xl mx-auto">
        <div className="mb-3 flex justify-between items-center">
            <h3 className="text-sm font-medium text-gray-700">Filtrar por precio</h3>
            <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md">
                <span className="text-xs font-medium text-gray-600">${minPriceFilter}</span>
                <span className="text-xs text-gray-400">-</span>
                <span className="text-xs font-medium text-gray-600">${maxPriceFilter}</span>
            </div>
            <button 
                onClick={() => {
                setMinPriceFilter(minPrice);
                setMaxPriceFilter(maxPrice);
                }}
                className="text-xs text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-1"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset
            </button>
            </div>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
            {/* Slider para precio mínimo */}
            <div>
            <div className="flex justify-between items-center mb-1">
                <label className="block text-xs font-medium text-gray-500">
                Mínimo
                </label>
                <span className="text-xs text-gray-500">${minPriceFilter}</span>
            </div>
            <input 
                type="range" 
                min={minPrice} 
                max={maxPrice} 
                value={minPriceFilter}
                onChange={handleMinPriceChange}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            </div>
            
            {/* Slider para precio máximo */}
            <div>
            <div className="flex justify-between items-center mb-1">
                <label className="block text-xs font-medium text-gray-500">
                Máximo
                </label>
                <span className="text-xs text-gray-500">${maxPriceFilter}</span>
            </div>
            <input 
                type="range" 
                min={minPrice} 
                max={maxPrice} 
                value={maxPriceFilter}
                onChange={handleMaxPriceChange}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            </div>
        </div>
        </div>
    </div>

    {/* Opción de autoplay */}
    <div className="mb-4 flex items-center">
        <label className="inline-flex items-center cursor-pointer">
        <input
            type="checkbox"
            checked={autoplayEnabled}
            onChange={() => setAutoplayEnabled(!autoplayEnabled)}
            className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-700">Autoplay</span>
        </label>
    </div>

    {/* Mensaje cuando no hay productos */}
    {filteredProducts.length === 0 && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-md p-4 mb-6">
        <p className="text-center">No se encontraron productos con los filtros seleccionados.</p>
        </div>
    )}

    {/* Slider de productos */}
    {filteredProducts.length > 0 && (
        <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={autoplayEnabled ? { delay: 3000, disableOnInteraction: false } : false}
        loop={filteredProducts.length > 1} // Solo activar loop si hay más de un elemento
        breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
        }}
        className="mySwiper"
        >
        {filteredProducts.map((product) => (
            <SwiperSlide key={product.id}>
            <ProductCard product={product} />
            </SwiperSlide>
        ))}
        </Swiper>
    )}
    </div>
);
}

export default ProductSlider;
