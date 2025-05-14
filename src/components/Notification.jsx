import React, { useEffect } from 'react';
import { CheckCircle, Heart, WarningCircle, X } from '@phosphor-icons/react';

const NOTIFICATION_TYPES = {
success: {
    icon: <CheckCircle size={20} weight="fill" />,
    className: 'bg-green-50 border-green-200 text-green-800'
},
error: {
    icon: <WarningCircle size={20} weight="fill" />,
    className: 'bg-red-50 border-red-200 text-red-800'
},
favorite: {
    icon: <Heart size={20} weight="fill" className="text-red-500" />,
    className: 'bg-pink-50 border-pink-200 text-pink-800'
},
cart: {
    icon: <CheckCircle size={20} weight="fill" />,
    className: 'bg-blue-50 border-blue-200 text-blue-800'
}
};

function Notification({ message, type = 'success', onClose, duration = 3000 }) {
// Obtener la configuración según el tipo de notificación
const config = NOTIFICATION_TYPES[type] || NOTIFICATION_TYPES.success;

// Cerrar automáticamente después de la duración especificada
useEffect(() => {
    const timer = setTimeout(() => {
    onClose();
    }, duration);
    
    return () => clearTimeout(timer);
}, [onClose, duration]);

return (
    <div 
    className={`fixed bottom-4 right-4 z-50 flex items-center p-4 border rounded-lg shadow-lg ${config.className} animate-slideInUp`}
    role="alert"
    >
    <div className="flex items-center gap-2">
        <span className="flex-shrink-0">
        {config.icon}
        </span>
        <span className="text-sm font-medium">
        {message}
        </span>
    </div>
    <button 
        className="ml-4 inline-flex items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none"
        onClick={onClose}
        aria-label="Cerrar"
    >
        <X size={16} />
    </button>
    </div>
);
}

export default Notification;