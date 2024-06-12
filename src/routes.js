import { Home } from './screens/home'
import { About } from './screens/about'
import { Contact } from './screens/contact'
import { Services } from './screens/services';

import { Auto } from './screens/services/auto';
import { HomeService } from './screens/services/home';
import { Business } from './screens/services/business';

import { Error } from './screens/alert/error';
import { Success } from './screens/alert/success';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const AppRoutes = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/services/auto" element={<Auto />} />
      <Route path="/services/home" element={<HomeService />} />
      <Route path="/services/business" element={<Business />} />

      <Route path="/alert/error" element={<Error />} />
      <Route path="/alert/success" element={<Success />} />
    </Routes>
);

