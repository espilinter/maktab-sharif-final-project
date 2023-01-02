import React, { useState, useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { getAppTitle } from '../../utils/functoins.utils';
import { PageContaner } from "../../layout/index"
const App = () => {

    const appTitle = getAppTitle();
    return (
        <Fragment>
            <Helmet>
                <title>{appTitle}</title>
            </Helmet>

            <PageContaner>

            </PageContaner>
        </Fragment>
    )
}

export default App;