import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import { fetchVinCode } from 'api';
import { SpecificationVinList } from 'components/SpecificationVinList/SpecificationVinList';
import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import { SpecificationVinTitle } from './SpecificationVin.styled';

const STATUS = {
  IDEAL: 'ideal',
  LOADING: 'loading',
  ERROR: 'error',
};

export const SpecificationVin = ({ vin }) => {
  const [descriptionVin, setDescriptionVin] = useState([]);
  const [status, setStatus] = useState(STATUS.IDEAL);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVin = async vinCode => {
      setStatus(STATUS.LOADING);
      try {
        const data = await fetchVinCode(vinCode);
        setDescriptionVin(data);
        setStatus(STATUS.IDEAL);
      } catch (error) {
        setStatus(STATUS.ERROR);
        setError(error.message);
        Notify.failure(error.message);
      }
    };

    fetchVin(vin);
  }, [vin]);

  return (
    <div>
      <SpecificationVinTitle>
        По запрашеваемому: <span>{vin}</span>
      </SpecificationVinTitle>

      {status === STATUS.LOADING && <Loader />}

      {status === STATUS.IDEAL && (
        <SpecificationVinList description={descriptionVin} />
      )}

      {status === STATUS.ERROR && <Notification message={error} />}
    </div>
  );
};
