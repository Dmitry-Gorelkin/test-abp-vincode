import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackBtn = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 128px;

  margin-bottom: 20px;
  padding: 10px 4px;

  border-radius: ${p => p.theme.borderRadius};

  cursor: pointer;

  color: ${p => p.theme.colors.dark};
  text-decoration: none;
  text-align: center;

  :hover,
  :focus-visible {
    background-color: ${p => p.theme.colors.light};
    color: ${p => p.theme.colors.accent};
    box-shadow: ${p => p.theme.boxShadow};
  }
`;

export const Title = styled.h2`
  display: block;

  margin-bottom: 30px;

  text-align: center;
`;
