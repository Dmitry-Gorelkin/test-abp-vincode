import styled from 'styled-components';

export const BoxNotification = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 20px;
  padding-bottom: 20px;

  p {
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;
