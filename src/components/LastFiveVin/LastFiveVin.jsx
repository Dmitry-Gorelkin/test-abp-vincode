import { useState, useEffect } from 'react';

const VINCODEJLS = 'vinCode';

export const LastFiveVin = ({ vin, onClickVin }) => {
  const [fiveVin, setFiveVin] = useState(() => {
    try {
      const vinCode = window.localStorage.getItem(VINCODEJLS);
      return vinCode ? JSON.parse(vinCode) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    if (vin) {
      setFiveVin(prevState => [vin, ...prevState].splice(0, 5));
    }
  }, [vin]);

  useEffect(() => {
    window.localStorage.setItem(VINCODEJLS, JSON.stringify(fiveVin));
  }, [fiveVin]);

  return (
    <>
      {fiveVin.length !== 0 && (
        <div>
          <h3>Последние запросы:</h3>
          <ul>
            {fiveVin.map((e, i) => {
              return (
                <li key={i} onClick={() => onClickVin(e)}>
                  {e}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
