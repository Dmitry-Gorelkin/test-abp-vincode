import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'style';
import { App } from './components/App';
import { FiChevronUp } from 'react-icons/fi';
import { ScrollToTop } from 'components/ScrollToTop/ScrollToTop.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/test-abp-vincode">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
        <ScrollToTop smooth top={250} component={<FiChevronUp size="20px" />} />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
