import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Notify } from 'notiflix';
import { fetchVariables } from 'api';
import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import { VariablesList, VariablesItem } from './VariablesListVehicle.styled';

const STATUS = {
  IDEAL: 'ideal',
  LOADING: 'loading',
  ERROR: 'error',
};

const VariablesListVehicle = () => {
  const [variables, setVariables] = useState([]);
  const [status, setStatus] = useState(STATUS.IDEAL);
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    const fetch = async () => {
      setStatus(STATUS.LOADING);
      try {
        const result = await fetchVariables();
        setVariables(result);
        setStatus(STATUS.IDEAL);
      } catch (error) {
        setStatus(STATUS.ERROR);
        setError(error.message);
        Notify.failure(error.message);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      {status === STATUS.LOADING && <Loader />}

      {status === STATUS.IDEAL && (
        <VariablesList>
          {variables.map(({ ID, Name }) => {
            return (
              <VariablesItem key={ID}>
                <Link to={`/variables/${ID}`} state={{ from: location }}>
                  {Name}
                </Link>
              </VariablesItem>
            );
          })}
        </VariablesList>
      )}

      {status === STATUS.ERROR && <Notification message={error} />}
    </div>
  );
};

export default VariablesListVehicle;
