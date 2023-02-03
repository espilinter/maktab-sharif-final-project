import { PageContaner } from "../../layout/index"
import Category from "../../components/category/Category"
import SubCategory from "../../components/subCategory/SubCategory"
import Title from "../../components/Title/Title"
import { useEffect } from "react"
import { useState } from "react"
import Card from "../../components/Card/Card"
import axios from "axios"
import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const App = () => {

    const [allData, setAllData] = useState([])
    const [categoryData, setcategoryData] = useState([])
    const [localCategory, setlocalCategory] = useState()
    const [localTitle, setLocalTitle] = useState()
    useEffect(() => {
        getCategory()
        fetchData()
        fetchCategoryData()
    }, [])

    function fetchData() {
        axios.get("http://localhost:3001/prudocts").then((response) => {
            setAllData(response.data);
        });
    }

    function fetchCategoryData() {
        axios.get("http://localhost:3001/categories").then((response) => {
            setcategoryData(response.data);
        });
    }

    function getCategory() {
        setlocalCategory(localStorage.getItem("targetCategory"))
        setLocalTitle(localStorage.getItem("targetTitle"))

    }

    function addToLocal(item) {
        localStorage.setItem("targetTitle", item.title)
        localStorage.setItem("targetCategory", item.category)
        window.location.reload();
    }

    return (
        <>
            <PageContaner>
                <div className="flex">
                    <div className="bg-#FBFBFB w-364 border-l-2 ">
                        <Accordion allowZeroExpanded >
                            <AccordionItem >
                                <AccordionItemHeading >
                                    <AccordionItemButton >
                                        دسته بندی محصولات
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                {categoryData.map((item) => (
                                    <AccordionItemPanel >
                                        <button onClick={() => { addToLocal(item) }}>
                                            {item.category}
                                        </button>
                                    </AccordionItemPanel>
                                ))}
                            </AccordionItem>

                        </Accordion>
                    </div>
                    <div className="w-1076 pr-40 ">
                        <Title className="" title={localTitle} />
                        <div className="bg-black h-1 w-auto "></div>
                        <div className="grid grid-cols-3 mt-20 pr-15">
                            {allData && allData.map((item) => (<Card item={item} category={localCategory} />))}
                        </div>
                    </div>
                </div>
            </PageContaner>
        </>
    )
}

export default App;