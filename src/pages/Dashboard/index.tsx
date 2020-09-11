import React, { useState, useCallback } from 'react';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Calendar,
  Schedule,
  Content,
  NextAppointment,
  Section,
  Appointment,
} from './styles';
import logoImg from '../../assets/logo.svg';
import { FiPower, FiClock } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

interface CalendarModifiers {
  available: boolean;
}

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

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

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock></FiClock>
                09:00
              </span>

              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/17184941?s=460&u=232106eb88002ee3d9dfc94f47de969815573abb&v=4"
                  alt="Sergio Neto"
                />
                <strong>Sérgio Neto</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock></FiClock>
                13:00
              </span>

              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/17184941?s=460&u=232106eb88002ee3d9dfc94f47de969815573abb&v=4"
                  alt="Sergio Neto"
                />
                <strong>Sérgio Neto</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>
            <Appointment>
              <span>
                <FiClock></FiClock>
                14:00
              </span>

              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/17184941?s=460&u=232106eb88002ee3d9dfc94f47de969815573abb&v=4"
                  alt="Sergio Neto"
                />
                <strong>Sérgio Neto</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
