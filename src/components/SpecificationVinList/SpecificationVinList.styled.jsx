import styled from 'styled-components';

export const SpecificationVinListItem = styled.li`
  display: flex;
  flex-direction: column;

  span {
    font-weight: bold;
  }

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
