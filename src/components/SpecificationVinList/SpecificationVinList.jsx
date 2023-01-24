export const SpecificationVinList = ({ description }) => {
  return (
    <ul>
      {description.lenght !== 0 &&
        description.map(({ VariableId, Variable, Value }) => (
          <li key={VariableId}>
            {Variable}: {Value}
          </li>
        ))}
    </ul>
  );
};
