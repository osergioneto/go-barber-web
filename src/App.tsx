import React from 'react';
import GlobalStyle from './styles/global';
import AppProvider from './hooks';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />

    <AppProvider>
      <Routes />
    </AppProvider>
  </BrowserRouter>
);

export default App;
