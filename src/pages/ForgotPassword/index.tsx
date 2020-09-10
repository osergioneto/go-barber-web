import React, { useCallback, useRef, useContext, useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { Background, Container, Content, AnimationContainer } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
        });

        await schema.validate(data, { abortEarly: false });

        await api.post('/password/forgot', {
          email: data.email,
        });

        addToast({
          type: 'success',
          title: 'E-mail de recuperação enviado',
          description:
            'Enviamos um e-mail para confirmar a recuperação de senha. Verifique sua caixa de entrada',
        });

        // recuperação de senha

        history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description:
            'Ocorreu um erro ao tentar a repuração de senmha, tente novamente',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <AnimationContainer>
        <Content>
          <img src={logoImg} alt="Go Barber Logo" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Recuperar senha</h1>

            <Input
              icon={FiMail}
              name="email"
              type="text"
              placeholder="Email"
            ></Input>

            <Button loading={loading} type="submit">
              Recuperar
            </Button>
            <Link to="/login">Voltar ao login</Link>
          </Form>
        </Content>
      </AnimationContainer>

      <Background />
    </Container>
  );
};

export default ForgotPassword;
