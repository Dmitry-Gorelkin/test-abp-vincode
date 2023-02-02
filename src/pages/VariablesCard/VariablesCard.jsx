import { useEffect, useState, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Notify } from 'notiflix';
import { FiChevronLeft } from 'react-icons/fi';
import { fetchVariables } from 'api';
import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import { GoBackBtn, Title } from './VariablesCard.styled';

const STATUS = {
  IDEAL: 'ideal',
  LOADING: 'loading',
  ERROR: 'error',
};

const VariablesCard = () => {
  const [variabl, setVariabl] = useState({});
  const [status, setStatus] = useState(STATUS.IDEAL);
  const [error, setError] = useState('');
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/variables');

  useEffect(() => {
    const fetch = async () => {
      setStatus(STATUS.LOADING);
      try {
        const data = await fetchVariables();
        const dataVariabl = data.find(({ ID }) => ID === Number(id));

        if (!dataVariabl) {
          throw new Error('Undefined variable');
        }
        setVariabl(dataVariabl);
        setStatus(STATUS.IDEAL);
      } catch (error) {
        setStatus(STATUS.ERROR);
        setError(error.message);
        Notify.failure(error.message);
      }
    };

    fetch();
  }, [id]);

  const { Name, Description } = variabl;

  const visualDescription = Description
    ? Description.replaceAll('<p>', '')
        .replaceAll('</p>', '')
        .replaceAll('<ul>', '')
        .replaceAll('</ul>', '')
        .replaceAll('<li>', '')
        .replaceAll('</li>', '')
        .replaceAll('<br>', '')
    : Description;

  return (
    <>
      <GoBackBtn to={backLinkHref.current}>
        <FiChevronLeft size="20px" />
        Go back
      </GoBackBtn>

      {status === STATUS.LOADING && <Loader />}

      {status === STATUS.IDEAL && (
        <>
          <Title>{Name}</Title>
          <p>{visualDescription}</p>
        </>
      )}

      {status === STATUS.ERROR && <Notification message={error} />}
    </>
  );
};

export default VariablesCard;
