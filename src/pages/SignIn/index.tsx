import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Background, Container, Content } from './styles';
import { FiLogIn } from 'react-icons/fi';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Go Barber Logo" />

      <form action="">
        <h1>Entre aqui</h1>

        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Enviar</button>
        <a href="#">Esqueci minha senha</a>
      </form>

      <a href="#">
        <FiLogIn />
        Criar conta
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
