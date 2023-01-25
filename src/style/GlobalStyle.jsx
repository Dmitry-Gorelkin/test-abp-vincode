import styled, { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import ScrollToTop from 'react-scroll-to-top';

export const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
    margin: 0;
    }
    ul,
    ol {
    margin: 0;
    padding: 0;
    list-style: none;
    }
    img {
    display: block;
    max-width: 100%;
    height: auto;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    }
`;

export const ScrollToTopStyled = styled(ScrollToTop)`
  bottom: 10px;
  right: 10px;

  border-radius: ${p => p.theme.borderRadius};

  color: ${p => p.theme.colors.dark};

  :hover,
  :focus-visible {
    background-color: ${p => p.theme.colors.light};
    color: ${p => p.theme.colors.accent};
    box-shadow: ${p => p.theme.boxShadow};
  }

  @media screen and (min-width: 480px) {
    right: 20px;
    bottom: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;

    right: 40px;
    bottom: 40px;
  }
`;
