import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Path } from './consts/paths';

import { Home } from './routes/home';
import { Experience } from './routes/experience';
import { Education } from './routes/education';
import { Contact } from './routes/contact';
import { Projects } from './routes/projects';

function AppRoutes(): ReactElement {
  return (
    <Routes>
      <Route path={Path.home} element={<Home />} />
      <Route path={Path.experience} element={<Experience />} />
      <Route path={Path.education} element={<Education />} />
      <Route path={Path.projects} element={<Projects />} />
      <Route path={Path.contact} element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
