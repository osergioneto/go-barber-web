import React, { useCallback, useRef, useContext } from 'react';
import logoImg from '../../assets/logo.svg';
import { Background, Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import getValidationErrors from '../../utils/getValidationErrors';
import AuthContext from '../../context/AuthContext';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { name } = useContext(AuthContext);

  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatório'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      console.log(error);
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Go Barber Logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Entre aqui</h1>

          <Input
            icon={FiMail}
            name="email"
            type="text"
            placeholder="Email"
          ></Input>
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          ></Input>

          <Button type="submit">Enviar</Button>
          <a href="#">Esqueci minha senha</a>
        </Form>

        <a href="#">
          <FiLogIn />
          Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
