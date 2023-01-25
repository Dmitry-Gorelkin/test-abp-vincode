import styled from 'styled-components';

export const SpecificationVinTitle = styled.h2`
  display: flex;
  flex-direction: column;
  gap: 5px;

  margin-bottom: 10px;

  font-size: 1.2em;

  span {
    text-transform: uppercase;
  }

  @media screen and (min-width: 480px) {
    font-size: 1.4em;
  }

  @media screen and (min-width: 768px) {
    display: block;
    font-size: 1.5em;
  }
`;
