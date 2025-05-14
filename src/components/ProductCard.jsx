import React, { useState } from 'react';
import { ShoppingCart, Heart, Eye, X, Star } from "@phosphor-icons/react";

function ProductCard({ product }) {
const [showQuickView, setShowQuickView] = useState(false);

const discountedPrice = product.discount > 0 
? (product.price * (1 - product.discount / 100)).toFixed(2)
: product.price.toFixed(2);

return (
<>
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
            <button 
            className="bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
            aria-label="Añadir al carrito"
            >
            <ShoppingCart size={18} />
            </button>
            <button 
            className="bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
            aria-label="Añadir a favoritos"
            >
            <Heart size={18} />
            </button>
            <button 
            className="bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
            onClick={() => setShowQuickView(true)}
            aria-label="Vista rápida"
            >
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
                ${discountedPrice}
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

    {/* Modal de vista rápida */}
    {showQuickView && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative p-6">
            {/* Botón de cerrar */}
            <button 
            onClick={() => setShowQuickView(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Cerrar"
            >
            <X size={24} />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Imagen del producto */}
            <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
                />
            </div>
            
            {/* Información del producto */}
            <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
                
                <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                    <Star 
                        key={i} 
                        size={18} 
                        weight={i < Math.floor(product.rating) ? "fill" : "regular"} 
                        className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}
                    />
                    ))}
                </div>
                <span className="text-sm text-gray-500">({product.rating})</span>
                </div>
                
                <div className="mb-4">
                {product.discount > 0 ? (
                    <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-900 mr-3">
                        ${discountedPrice}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                        ${product.price.toFixed(2)}
                    </span>
                    <span className="ml-3 bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                        Ahorra {product.discount}%
                    </span>
                    </div>
                ) : (
                    <span className="text-2xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                    </span>
                )}
                </div>
                
                <p className="text-gray-600 mb-6">
                Categoría: <span className="font-medium capitalize">{product.category}</span>
                </p>
                
                <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, 
                nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl 
                nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl 
                aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>
                
                <div className="flex gap-3 mt-auto">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center transition-colors">
                    <ShoppingCart size={20} className="mr-2" />
                    Añadir al carrito
                </button>
                <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors">
                    <Heart size={20} className="text-gray-700" />
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    )}
</>
);
}

export default ProductCard;