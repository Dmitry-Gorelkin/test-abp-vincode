import axios from 'axios';

axios.defaults.baseURL = 'https://vpic.nhtsa.dot.gov/api/';

// Сразу фильтрует массив от лишней информации
export const fetchVinCode = async vin => {
  const response = await axios(`/vehicles/decodevin/${vin}?format=json`);

  return response.data.Results.filter(
    ({ Value, Variable }) =>
      Value !== null &&
      Value !== '' &&
      Value !== 'Not Applicable' &&
      Variable !== 'Error Code' &&
      Variable !== 'Error Text' &&
      Variable !== 'Other Engine Info'
  );
};

export const fetchVariables = async () => {
  const response = await axios(`/vehicles/getvehiclevariablelist?format=json`);

  return response.data.Results;
};
