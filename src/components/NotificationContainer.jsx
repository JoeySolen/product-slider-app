import React, { useState, useEffect } from 'react';
import { CheckCircle, Heart, WarningCircle, X } from '@phosphor-icons/react';
import { addListener } from './NotificationService';

// Tipos de notificaciones y sus estilos
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

// Componente individual de notificación
function NotificationItem({ notification, onClose }) {
const { message, type } = notification;
const config = NOTIFICATION_TYPES[type] || NOTIFICATION_TYPES.success;

// Cerrar automáticamente después de 3 segundos
useEffect(() => {
    const timer = setTimeout(() => {
    onClose();
    }, 3000);
    
    return () => clearTimeout(timer);
}, [onClose]);

return (
    <div 
    className={`flex items-center p-4 border rounded-lg shadow-lg ${config.className} animate-slideInUp min-w-[260px] max-w-xs my-2`}
    style={{ position: 'relative' }} // Asegurar que tiene posición relativa para z-index
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
    >
        <X size={16} />
    </button>
    </div>
);
}

// Contenedor principal para todas las notificaciones
function NotificationContainer() {
const [notifications, setNotifications] = useState([]);

useEffect(() => {
    // Suscribirse al servicio de notificaciones
    const removeListener = addListener((notificationData) => {
    const newNotification = {
        id: Date.now().toString(),
        ...notificationData
    };
    
    setNotifications(prevNotifications => 
        [...prevNotifications, newNotification]
    );
    });
    
    // Limpiar al desmontar
    return () => removeListener();
}, []);

// Eliminar una notificación por ID
const removeNotification = (id) => {
    setNotifications(prevNotifications => 
    prevNotifications.filter(notification => notification.id !== id)
    );
};

// No renderizar nada si no hay notificaciones
if (notifications.length === 0) {
    return null;
}

return (
    <div 
    className="fixed bottom-4 right-4 flex flex-col items-end"
    style={{ 
        zIndex: 100000, // Un z-index extremadamente alto para asegurar que esté por encima de todo
        pointerEvents: 'none' // Permite que los clics pasen a través del contenedor 
    }}
    >
    {notifications.map(notification => (
        <div key={notification.id} style={{ pointerEvents: 'auto' }}> {/* Restaura pointer-events para cada notificación */}
        <NotificationItem
            notification={notification}
            onClose={() => removeNotification(notification.id)}
        />
        </div>
    ))}
    </div>
);
}

export default NotificationContainer;