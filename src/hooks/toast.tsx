import React, { createContext, useContext, useCallback, useState } from 'react';
import ToastContainer from '../components/ToastContainer';
import { uuid } from 'uuidv4';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'info' | 'error';
  title: string;
  description?: string;
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  console.log('messages: ', messages);

  const addToast = useCallback(
    ({ title, description, type }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();

      const toast = { id, title, description, type };

      setMessages((state) => [...state, toast]);
    },
    [messages],
  );

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be within an ToastProvder');
  }

  return context;
}

export { ToastProvider, useToast };
