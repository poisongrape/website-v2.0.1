import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutTest from './AboutTest';
import HomeTest from './HomeTest';

function AppRoutes(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<HomeTest />} />
      <Route path="/about" element={<AboutTest />} />
    </Routes>
  );
}

export default AppRoutes;
