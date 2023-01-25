import styled from 'styled-components';

export const VariablesList = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -30px;
    margin-top: -30px;
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc(100% / 3 - 30px);
  }
`;

export const VariablesItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 5px;

  border-radius: ${p => p.theme.borderRadius};

  color: ${p => p.theme.colors.dark};

  cursor: pointer;

  a {
    color: unset;
    text-decoration: none;
    text-align: center;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  :hover,
  :focus-visible {
    background-color: ${p => p.theme.colors.light};
    color: ${p => p.theme.colors.accent};
    box-shadow: ${p => p.theme.boxShadow};
  }

  @media screen and (min-width: 768px) {
    flex-basis: calc(100% / 2 - 30px);
    margin-left: 30px;
    margin-top: 30px;

    &:not(:last-child) {
      margin-bottom: unset;
    }
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc(100% / 3 - 30px);
  }
`;
