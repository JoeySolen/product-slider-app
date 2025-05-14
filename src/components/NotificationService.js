// NotificationService.js
let listeners = [];

// Agregar un listener
export const addListener = (listener) => {
    listeners.push(listener);
return () => {
    listeners = listeners.filter(l => l !== listener);
};
};

// Mostrar una notificación
export const showNotification = (message, type = 'success') => {
// Notificar a todos los listeners
    listeners.forEach(listener => listener({ message, type }));
};