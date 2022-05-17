import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Registration } from '../pages/Registration/Registration';
import { Authorization } from '../pages/Authorization/Authorization';

import { Main } from '../pages/Authorization/Main';

function RoutForm() {
  return (
    <Routes>
      <Route index path="/" element={<Authorization />} />
      <Route path="2" element={<Registration />} />

      <Route path="main" element={<Main/>}/>

    </Routes>
  );
}

export default RoutForm;
