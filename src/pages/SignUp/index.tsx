import React, { useCallback, useRef } from 'react';
import logoImg from '../../assets/logo.svg';
import { Background, Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

interface ISignUpUser {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: ISignUpUser) => {
    formRef.current?.setErrors({});

    const schema = Yup.object().shape({
      name: Yup.string().required('Nome obrigatório'),
      email: Yup.string()
        .required('Email obrigatório')
        .email('Digite um email válido'),
      password: Yup.string().min(6, 'No mínimo 6 digitos'),
    });

    try {
      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      console.log(error);
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="Go Barber Logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
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
