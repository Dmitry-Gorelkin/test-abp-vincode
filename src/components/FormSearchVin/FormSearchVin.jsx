import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { FiSearch } from 'react-icons/fi';
import {
  SearchForm,
  SearchIconBtn,
  SearchInput,
  SearchBtn,
} from './FormSearchVin.styled';

export const FormSearchVin = ({ onSubmitVin }) => {
  const submitForm = e => {
    e.preventDefault();
    const vin = e.target.vin.value.trim().toLowerCase();

    if (vin === '') {
      Notify.warning('Введите VIN-код автомобиля.');
      return;
    }

    onSubmitVin(vin);
    e.target.reset();
  };

  return (
    <>
      <SearchForm onSubmit={submitForm}>
        <SearchIconBtn type="submit">
          <FiSearch size="25px" />
        </SearchIconBtn>

        <SearchInput
          type="text"
          placeholder="Search vin code"
          maxLength="17"
          name="vin"
        />

        <SearchBtn type="submit">Search</SearchBtn>
      </SearchForm>
    </>
  );
};
