import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Heder, LinkPage, Main } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Heder>
        <LinkPage to="/">Home</LinkPage>
        <LinkPage to="/variables">Variables</LinkPage>
      </Heder>
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};
