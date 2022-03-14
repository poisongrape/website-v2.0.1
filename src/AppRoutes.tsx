import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './routes/home';
import { Experience } from './routes/experience';
import { Education } from './routes/education';
import { Contact } from './routes/contact';
import { Projects } from './routes/projects';

function AppRoutes(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
