import styled from 'styled-components';
import ScrollTop from 'react-scroll-to-top';

export const ScrollToTop = styled(ScrollTop)`
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
