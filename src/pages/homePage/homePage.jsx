import React, { Fragment, useEffect } from 'react';
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
import { useState } from 'react';
import axios from 'axios';
const App = () => {
    const [categoryData, setcategoryData] = useState([])
    useEffect(() => {
        fetchCategoryData()
    }, [])
    function fetchCategoryData() {
        axios.get("http://localhost:3001/categories").then((response) => {
            setcategoryData(response.data);
        });
    }
    // let data = {}
    // const setData = event => {
    //     data.title = event.target.title;
    //     data.category = event.target.category;
    //     patchData(data)
    // };

    // async function patchData(data) {
    //     const res = await fetch(`http://localhost:3001/categoryPage`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data),
    //     });
    // };

    const appTitle = getAppTitle();
    return (
        <Fragment>
            <Helmet>
                <title>{appTitle}</title>
            </Helmet>

            <PageContaner>
                <div>
                    <Carousel showThumbs={false} autoPlay={false} className='mt-10'>
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
                </div>

                {/* <div>
                    {categoryData.map((item) => (
                        <div>
                            <Title title={item.title} category={item.cetegory} />
                            <CardSlider category={item.category} />
                        </div>
                    ))}
                </div> */}
                <Title title={"کالا های گروه شوینده و بهداشتی"} category={"شوینده و بهداشتی"} />
                <CardSlider category={"شوینده و بهداشتی"} />
                <Title title={"کالا های گروه لبنیات"} category={"لبنیات"} />
                <CardSlider category={"لبنیات"} />
                <Title title={"کالا های گروه لوازم آشپزخانه"} category={"لوازم آشپزخانه"} />
                <CardSlider category={"لوازم آشپزخانه"} />

            </PageContaner>
        </Fragment>
    )
}

export default App;