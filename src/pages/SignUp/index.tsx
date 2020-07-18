import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Background, Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="Go Barber Logo" />

      <form action="">
        <h1>Faça seu cadastro</h1>

        <Input icon={FiUser} name="name" type="text" placeholder="Nome"></Input>
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

        <Button>Cadastrar</Button>
      </form>

      <a href="#">
        <FiArrowLeft />
        Voltar para login
      </a>
    </Content>
  </Container>
);

export default SignUp;
