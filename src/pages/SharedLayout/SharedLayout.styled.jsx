import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    padding-left: 100px;
    padding-right: 100px;
    max-width: 1200px;
  }
`;

export const Heder = styled.div`
  display: flex;
  justify-content: space-evenly;

  padding-top: 20px;
  padding-bottom: 20px;

  border-bottom: 3px solid ${p => p.theme.colors.accent};

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    padding: 30px;
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const LinkPage = styled(NavLink)`
  display: flex;
  justify-content: center;

  padding: 10px 20px;
  border-radius: ${p => p.theme.borderRadius};

  color: ${p => p.theme.colors.dark};
  text-decoration: none;

  cursor: pointer;

  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: ${p => p.theme.colors.light};
    color: ${p => p.theme.colors.accent};
    box-shadow: ${p => p.theme.boxShadow};
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (min-width: 320px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  @media screen and (min-width: 1200px) {
    padding-top: 35px;
    padding-bottom: 35px;
  }
`;
