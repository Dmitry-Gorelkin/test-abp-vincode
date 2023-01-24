import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const FormSearchVin = ({ onSubmitVin }) => {
  const submitForm = e => {
    e.preventDefault();
    const vin = e.target.vin.value.trim();

    if (vin === '') {
      Notify.warning('Пустую строку нельзя запросить.');
      return;
    }

    onSubmitVin(vin);
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Search vin code"
          maxLength="17"
          name="vin"
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
