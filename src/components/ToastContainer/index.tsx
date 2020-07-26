import React from 'react';
import { Container, Toast } from './styles';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

const ToastContainer: React.FC = () => (
  <Container>
    <Toast hasDescription>
      <FiAlertCircle size={20} />

      <div>
        <strong>Aconteceu um erro</strong>
        <p>Deu ruim parceiro</p>
      </div>

      <button type="button">
        <FiXCircle />
      </button>
    </Toast>

    <Toast type="success" hasDescription={false}>
      <FiAlertCircle size={20} />

      <div>
        <strong>Aconteceu um erro</strong>
      </div>

      <button type="button">
        <FiXCircle />
      </button>
    </Toast>

    <Toast type="error" hasDescription>
      <FiAlertCircle size={20} />

      <div>
        <strong>Aconteceu um erro</strong>
        <p>Deu ruim parceiro</p>
      </div>

      <button type="button">
        <FiXCircle />
      </button>
    </Toast>
  </Container>
);

export default ToastContainer;
