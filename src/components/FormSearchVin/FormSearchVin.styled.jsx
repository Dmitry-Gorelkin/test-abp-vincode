import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 35px;
  }
`;

export const SearchIconBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  border-top: 1px solid ${p => p.theme.colors.accent};
  border-right: none;
  border-left: 1px solid ${p => p.theme.colors.accent};
  border-bottom: 1px solid ${p => p.theme.colors.accent};

  border-top-left-radius: ${p => p.theme.borderRadius};
  border-bottom-left-radius: ${p => p.theme.borderRadius};

  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.light};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 200px;
  height: 40px;

  padding-left: 10px;
  padding-right: 10px;

  border-top: 1px solid ${p => p.theme.colors.accent};
  border-right: 1px solid ${p => p.theme.colors.accent};
  border-left: none;
  border-bottom: 1px solid ${p => p.theme.colors.accent};

  border-top-right-radius: ${p => p.theme.borderRadius};
  border-bottom-right-radius: ${p => p.theme.borderRadius};

  outline: none;

  color: ${p => p.theme.colors.dark};
  font-size: 16px;

  ::placeholder {
    color: ${p => p.theme.colors.accent};
  }
  @media screen and (min-width: 768px) {
    width: 300px;

    border-right: none;
    border-left: 1px solid ${p => p.theme.colors.accent};

    border-top-left-radius: ${p => p.theme.borderRadius};
    border-bottom-left-radius: ${p => p.theme.borderRadius};
    border-top-right-radius: unset;
    border-bottom-right-radius: unset;
  }
`;

export const SearchBtn = styled.button`
  display: none;
  width: 100px;
  height: 40px;

  border-top: 1px solid ${p => p.theme.colors.accent};
  border-right: 1px solid ${p => p.theme.colors.accent};
  border-left: none;
  border-bottom: 1px solid ${p => p.theme.colors.accent};

  border-top-right-radius: ${p => p.theme.borderRadius};
  border-bottom-right-radius: ${p => p.theme.borderRadius};

  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.light};

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
