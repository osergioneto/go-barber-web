import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Background, Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Go Barber Logo" />

      <form action="">
        <h1>Entre aqui</h1>

        <Input
          icon={FiMail}
          name="user"
          type="text"
          placeholder="Usuario"
        ></Input>
        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Senha"
        ></Input>

        <Button>Enviar</Button>
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
