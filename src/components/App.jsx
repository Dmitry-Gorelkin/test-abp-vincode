import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from '../pages/SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home'));
const VariablesListVehicle = lazy(() =>
  import('pages/VariablesListVehicle/VariablesListVehicle')
);
const VariablesCard = lazy(() => import('pages/VariablesCard/VariablesCard'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="variables" element={<VariablesListVehicle />} />
        <Route path="variables/:id" element={<VariablesCard />} />
      </Route>
    </Routes>
  );
};
