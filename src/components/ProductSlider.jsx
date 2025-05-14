import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ShoppingCart, Heart, Eye } from "@phosphor-icons/react";
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
const [autoplayEnabled, setAutoplayEnabled] = useState(false); // Inicialmente desactivado
const swiperRef = useRef(null);

// Filtrar productos según la categoría seleccionada
const filteredProducts = activeCategory === 'todos' 
    ? productsData 
    : productsData.filter(product => product.category === activeCategory);

// Categorías únicas para el filtro
const categories = ['todos', ...new Set(productsData.map(product => product.category))];

// Manejar cambio de autoplay
useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;
    
    if (autoplayEnabled) {
    // Iniciar autoplay
    swiper.autoplay.start();
    } else {
    // Detener autoplay
    swiper.autoplay.stop();
    }
}, [autoplayEnabled]);

return (
    <div className="bg-gray-50 p-6 rounded-md">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Productos Destacados</h2>
        
        {/* Filtro de categorías */}
        <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
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

    {/* Slider de productos */}
    <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={autoplayEnabled ? { delay: 3000, disableOnInteraction: false } : false}
        loop={true} // Esto evita problemas cuando se llega al final del slider
        breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 }
        }}
        className="mySwiper"
    >
        {filteredProducts.map((product) => (
        <SwiperSlide key={product.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg h-full">
            <div className="relative">
                {/* Distintivos para ofertas y productos nuevos */}
                <div className="absolute top-2 left-2 flex flex-col gap-2 z-10">
                {product.discount > 0 && (
                    <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    -{product.discount}%
                    </span>
                )}
                {product.isNew && (
                    <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    Nuevo
                    </span>
                )}
                </div>
                
                {/* Imagen del producto */}
                <div className="h-48 overflow-hidden">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                    loading="lazy"
                />
                </div>
                
                {/* Botones de acción rápida */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-2">
                    <button className="bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                    <ShoppingCart size={18} />
                    </button>
                    <button className="bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                    <Heart size={18} />
                    </button>
                    <button className="bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                    <Eye size={18} />
                    </button>
                </div>
                </div>
            </div>
            
            {/* Información del producto */}
            <div className="p-4 flex flex-col h-[calc(100%-12rem)]">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                <div className="flex items-center">
                {/* Clasificación con estrellas */}
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    ))}
                    <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                </div>
                </div>
                <div className="mt-auto pt-2 flex items-center justify-between">
                <div className="flex items-center">
                    {product.discount > 0 ? (
                    <>
                        <span className="text-lg font-bold text-gray-900">
                        ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-500 line-through ml-2">
                        ${product.price.toFixed(2)}
                        </span>
                    </>
                    ) : (
                    <span className="text-lg font-bold text-gray-900">
                        ${product.price.toFixed(2)}
                    </span>
                    )}
                </div>
                </div>
            </div>
            </div>
        </SwiperSlide>
        ))}
    </Swiper>
    </div>
);
}

export default ProductSlider;