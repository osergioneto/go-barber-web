import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Background, Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="Go Barber Logo" />

        <Form initialData={{ name: 'Sérgio Neto' }} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input icon={FiUser} name="name" placeholder="Nome"></Input>
          <Input icon={FiMail} name="user" placeholder="E-mail"></Input>
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          ></Input>

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="#">
          <FiArrowLeft />
          Voltar para login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
