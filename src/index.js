import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme, ScrollToTopStyled } from 'style';
import { App } from './components/App';
import { FiChevronUp } from 'react-icons/fi';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/test-abp-vincode">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
        <ScrollToTopStyled
          smooth
          top={250}
          component={<FiChevronUp size="20px" />}
        />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
