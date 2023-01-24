import { BoxNotification } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <BoxNotification>
      <p>{message}</p>
    </BoxNotification>
  );
};
