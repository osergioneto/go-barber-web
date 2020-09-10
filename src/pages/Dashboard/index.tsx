import React from 'react';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Calendar,
  Schedule,
  Content,
  NextAppointment,
} from './styles';
import logoImg from '../../assets/logo.svg';
import { FiPower, FiClock } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button">
            <FiPower></FiPower>
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Hórarios agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 10</span>
            <span>Quinta-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars3.githubusercontent.com/u/17184941?s=460&u=232106eb88002ee3d9dfc94f47de969815573abb&v=4"
                alt="Sergio Neto"
              />
              <strong>Sérgio Neto</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>
        </Schedule>
        <Calendar></Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
