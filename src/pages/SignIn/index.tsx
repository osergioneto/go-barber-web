import React, { useCallback, useRef, useContext } from 'react';
import logoImg from '../../assets/logo.svg';
import { Background, Container, Content, AnimationContainer } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn, signOut, user } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu nas credenciais',
        });

        history.push('/dashboard');
      }
    },
    [signIn, history],
  );

  return (
    <Container>
      <AnimationContainer>
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
            <a href="/forgot-password">Esqueci minha senha</a>
          </Form>

          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </Content>
      </AnimationContainer>

      <Background />
    </Container>
  );
};

export default SignIn;
