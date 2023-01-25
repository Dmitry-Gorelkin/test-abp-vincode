import { SpecificationVinListItem } from './SpecificationVinList.styled';

export const SpecificationVinList = ({ description }) => {
  return (
    <ul>
      {description.lenght !== 0 &&
        description.map(({ VariableId, Variable, Value }) => (
          <SpecificationVinListItem key={VariableId}>
            <span>{Variable}:</span> {Value}
          </SpecificationVinListItem>
        ))}
    </ul>
  );
};
