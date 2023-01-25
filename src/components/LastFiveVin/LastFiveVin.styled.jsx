import styled from 'styled-components';

export const LastFiveBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 35px;
  }
`;

export const LastFiveTitle = styled.h3`
  margin-bottom: 10px;
`;

export const LastFiveItem = styled.li`
  text-transform: uppercase;

  cursor: pointer;

  :hover,
  :focus-visible {
    color: ${p => p.theme.colors.accent};
  }

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
