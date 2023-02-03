import { Fragment, useEffect, useRef, useState } from "react";
import Management from "../management/Management";
import axios from "axios";
import InventoryTable from "../../components/inventoryTable/inventoryTable"
import Popup from 'reactjs-popup';
export const Inventory = () => {
    const [name, setname] = useState(" ");
    const [category, setcategory] = useState(" ");
    const [subCategory, setsubCategory] = useState(" ");
    const [price, setprice] = useState(" ");
    const [stocks, setstocks] = useState(" ");
    const [img, setimg] = useState(" ");
    const [id, setId] = useState(null);
    const [renderNumber, setRenderNumber] = useState(1)
    const ref = useRef();
    const [allData, setAllData] = useState([])
    const [limit, setLimit] = useState(5)
    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        fetchData()
    }, [renderNumber])

    const openTooltip = () => ref.current.open();

    // useEffect(() => {
    //     if (id) {
    //         inputFilder()
    //         console.log("haaaaaaaaaaa");
    //     }
    // }, [id])

    const nameInput = event => {
        setname(event.target.value);
    };

    const categoryInput = event => {
        setcategory(event.target.value);
    };

    const subCategoryInput = event => {
        setsubCategory(event.target.value);
    };

    const priceInput = event => {
        setprice(event.target.value);
    };

    const stocksInput = event => {
        setstocks(event.target.value);
    };

    const imgInput = event => {
        setimg(event.target.value);
    };

    const fetchData = () => {
        fetch(`http://localhost:3001/prudocts?_page=${renderNumber}&_limit=${limit}`).then((res) => res.json()).then((response) => {
            setAllData(response);
        });
    };

    const Add = () => {
        let data = {};
        data.name = name;
        data.category = category;
        data.SubCategory = subCategory;
        data.price = price;
        data.stocks = stocks;
        data.img = img;
        postData(data)
    };

    async function postData(data) {
        const res = await fetch("http://localhost:3001/prudocts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        fetchData()
    };

    const inputFilder = async (params) => {
        const res = await fetch(`http://localhost:3001/prudocts/${params}`);
        const Data = await res.json();
        setname(Data.name)
        setcategory(Data.category);
        setsubCategory(Data.SubCategory);
        setprice(Data.price);
        setstocks(Data.stocks);
        setimg(Data.img);
    }

    const edit = () => {
        let data = {};
        data.name = name;
        data.category = category;
        data.SubCategory = subCategory;
        data.price = price;
        data.stocks = stocks;
        data.img = img;
        patchData(data)
    };

    async function patchData(data) {
        const res = await fetch(`http://localhost:3001/prudocts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        fetchData()
    };

    function getId(params) {
        setId(params)
        inputFilder(params)
    }

    function cleaner() {
        setname("")
        setcategory("");
        setsubCategory("");
        setprice("");
        setstocks("");
        setimg("");
    }

    return (
        <Fragment className="relative">
            <Management />
            <div className="w-800 m-auto text-right justify-between relative mt-50 ">
                <h2 className="inline-block text-20 absolute top-10">مدیریت کالا</h2>
                <div>
                    <Popup ref={ref} trigger=
                        {<button className="bg-#1EAB24 shadow-button w-100 text-white h-30 absolute top-10 left-20" onClick={cleaner}>افزودن کالا</button>}
                        modal nested>
                        {
                            close => (
                                <div className='border-2 rounded-2xl bg-gradient-to-b from-#97D8CD to-#C191C0 w-400'>
                                    <form className="text-right ">
                                        <h3 className="text-20 mt-20">افزودن کالا</h3>
                                        <label className="mr-50 mt-10">نام محصول:</label>
                                        <input type="text" className="block mt-10 w-300 m-auto mb-15" value={name} onChange={nameInput} />
                                        <label className="mr-50 ">دسته بندی:</label>
                                        <input type="text" className="block mt-10 w-300 m-auto mb-15" value={category} onChange={categoryInput} />
                                        <label className="mr-50">زیر گروه:</label>
                                        <input type="text" className="block mt-10 w-300 m-auto mb-15" value={subCategory} onChange={subCategoryInput} />
                                        <label className="mr-50">قیمت:</label>
                                        <input type="number" className="block mt-10 w-300 m-auto mb-15" value={price} onChange={priceInput} />
                                        <label className="mr-50">تعداد:</label>
                                        <input type="number" className="block mt-10 w-300 m-auto mb-15" value={stocks} onChange={stocksInput} />
                                        <label className="mr-50">لینک عکس:</label>
                                        <input type="text" className="block mt-20 w-300 m-auto mb-15" value={img} onChange={imgInput} />
                                    </form>
                                    <button className="
                                    bg-#1EAB24 text-white w-90 h-40 rounded-lg mb-30 mt-20 text-20" onClick={() => { Add(); close(); }}>ثبت</button>
                                    <button className="
                                    bg-#ff8c00 text-white w-90 h-40 rounded-lg mr-10 text-20" id={id} onClick={edit}>ویرایش</button>
                                    <button className="
                                    bg-#f10000 text-white w-90 h-40 rounded-lg mr-10 text-20" onClick={() => close()}>خروج</button>
                                </div>
                            )
                        }
                    </Popup>
                </div>
            </div>
            <div className="w-800 h-50 m-auto mb-40"></div>
            <table className="block w-800 m-auto ">
                <tr className="h-40 bg-#97D8CD">
                    <th className="w-80 text-right border pr-5">تصویر</th>
                    <th className="w-300 text-right border pr-5">نام کالا</th>
                    <th className="w-300 text-right border pr-5">دسته بندی</th>
                    <th className="w-120 text-right border"></th>
                </tr>
                {allData && allData.map((item) => (<InventoryTable item={item} fetchData={fetchData} getId={getId} openTooltip={openTooltip} />))}
            </table>
            <div className='flex w-120 m-auto mt-20 border-2 border-#B3B3B3'>
                <button onClick={() => setRenderNumber(renderNumber + 1)} className="w-40">{"<<"}</button>
                <div className='inline-block border-x-2 border-#B3B3B3'>
                    <p className='text-26 w-40'>{renderNumber}</p>
                </div>
                <button onClick={() => setRenderNumber(renderNumber - 1)} className="w-40">{">>"}</button>
            </div>
        </Fragment >
    )
}

export default Inventory;