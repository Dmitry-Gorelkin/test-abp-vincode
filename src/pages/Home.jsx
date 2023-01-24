import { useState } from 'react';
import { FormSearchVin } from 'components/FormSearchVin/FormSearchVin';
import { LastFiveVin } from 'components/LastFiveVin/LastFiveVin';
import { SpecificationVin } from 'components/SpecificationVin/SpecificationVin';

const Home = () => {
  const [vinCode, setVinCode] = useState('');

  const handelSubmit = vin => {
    setVinCode(vin);
  };

  return (
    <>
      <FormSearchVin onSubmitVin={handelSubmit} />
      <LastFiveVin vin={vinCode} onClickVin={handelSubmit} />
      {vinCode !== '' && <SpecificationVin vin={vinCode} />}
    </>
  );
};

export default Home;
