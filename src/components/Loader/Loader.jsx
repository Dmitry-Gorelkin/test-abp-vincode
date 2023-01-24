import { ThreeDots } from 'react-loader-spinner';
import { BoxLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <BoxLoader>
      <ThreeDots
        height="100"
        width="100"
        radius="9"
        color="#00c2e0"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </BoxLoader>
  );
};
