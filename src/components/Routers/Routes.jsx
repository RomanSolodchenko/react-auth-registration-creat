import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Registration } from '../pages/Registration/Registration';
import { Authorization } from '../pages/Authorization/Authorization';

function RoutForm() {
  return (
    <Routes>
      <Route index path="/" element={<Authorization />} />
      <Route path="2" element={<Registration />} />
    </Routes>
  );
}

export default RoutForm;
