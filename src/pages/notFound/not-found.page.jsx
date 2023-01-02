import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { getAppTitle } from '../../utils/functoins.utils';

const App = () => {

    const appTitle = getAppTitle();
    return (
        <>
            <Helmet>
                <title>{appTitle}</title>
            </Helmet>
            <p>EROR 404 , page not found</p>
        </>
    );
};

export default App;