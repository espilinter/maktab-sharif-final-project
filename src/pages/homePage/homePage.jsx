import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { getAppTitle } from '../../utils/functoins.utils';
import { PageContaner } from "../../layout/index"
import Title from "../../components/Title/Title"
import CardSlider from '../../components/CardSlider/CardSlide';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from "react-responsive-carousel"
import tabligh1 from "../../assets/img/tabligh.jpg"
import tabligh2 from "../../assets/img/tabligh2.jpg"
import tabligh3 from "../../assets/img/tabligh3.jpg"
const App = () => {

    const appTitle = getAppTitle();
    return (
        <Fragment>
            <Helmet>
                <title>{appTitle}</title>
            </Helmet>

            <PageContaner>
                <Carousel className='mt-10'>
                    <div>
                        <img src={tabligh1} />
                    </div>
                    <div>
                        <img src={tabligh2} />
                    </div>
                    <div>
                        <img src={tabligh3} />
                    </div>
                </Carousel>

                <Title title={"< کالا های گروه شوینده و بهداشتی"} />
                <CardSlider />
                <Title title={"< کالا های گروه لبنیات"} />
                <CardSlider />
                <Title title={"< کالا های گروه لوازم و آشپزخانه"} />
                <CardSlider />

            </PageContaner>
        </Fragment>
    )
}

export default App;