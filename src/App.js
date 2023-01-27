import React, { useState, useEffect, Fragment, Suspense } from 'react';

import './App.css';
import { AppRouting } from './routes';



const App = () => {


  return (
    <Suspense fallback={<p>در حال بارگذاری</p>}>
      <AppRouting />
    </Suspense>

  );
};

export default App;