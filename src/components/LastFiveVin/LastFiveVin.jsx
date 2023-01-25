import { useState, useEffect } from 'react';
import { LastFiveBox, LastFiveTitle, LastFiveItem } from './LastFiveVin.styled';

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
        <LastFiveBox>
          <LastFiveTitle>Последние запросы:</LastFiveTitle>
          <ul>
            {fiveVin.map((e, i) => {
              return (
                <LastFiveItem key={i} onClick={() => onClickVin(e)}>
                  {e}
                </LastFiveItem>
              );
            })}
          </ul>
        </LastFiveBox>
      )}
    </>
  );
};
