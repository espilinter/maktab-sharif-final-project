import { useEffect, useState, useRef } from "react";
import Management from "../management/Management";
import axios from "axios";
import ProductsTable from "../../components/productsTable/ProductsTable"
import Popup from 'reactjs-popup';

export const Inventory = () => {
    const [allData, setAllData] = useState([])
    const [price, setprice] = useState(" ");
    const [stocks, setstocks] = useState(" ");
    const [id, setId] = useState(null);
    const [renderNumber, setRenderNumber] = useState(1)
    const [limit, setLimit] = useState(5)
    const [dataLenght, setDataLenght] = useState()
    useEffect(() => {
        fetchData()
    }, [renderNumber])
    const ref = useRef();
    const openTooltip = () => ref.current.open();



    function fetchData() {
        fetch(`http://localhost:3001/prudocts?_page=${renderNumber}&_limit=${limit}`).then((res) => res.json()).then((response) => {
            setAllData(response);
        });
    }

    useEffect(() => {
        fetchData()
        fetchDataLenght()
    }, [])

    async function putData(data) {
        const res = await fetch("http://localhost:3001/prudocts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        fetchData()
    };

    async function patchData(data) {
        const res = await fetch(`http://localhost:3001/prudocts/${data.id}`, {
            method: "PATCH",
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
        setprice(Data.price);
        setstocks(Data.stocks);
    }

    function fetchDataLenght() {
        axios.get("http://localhost:3001/prudocts").then((response) => {
            setDataLenght(response.data);
        });
    }

    function cleaner() {
        setprice("");
        setstocks("");
    }

    const priceInput = event => {
        setprice(event.target.value);
    };

    const stocksInput = event => {
        setstocks(event.target.value);
    };

    const edit = () => {
        let data = {};
        data.price = price;
        data.stocks = stocks;
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

    function minus() {
        if (renderNumber > 1) {
            setRenderNumber(renderNumber - 1)
        }
    }

    function plus() {
        let lenght = dataLenght.length / limit;
        if (renderNumber < lenght) {
            setRenderNumber(renderNumber + 1)

        }
    }
    return (
        <>
            <Management />
            <div className="w-800 m-auto text-right justify-between relative mt-50 ">
                <h2 className="inline-block text-20 absolute top-10">???????????? ???????????? ?? ????????  ????</h2>
                <button className="bg-#1EAB24 shadow-button w-100 text-white h-30 absolute top-10 left-20" >??????????</button>
            </div>
            <div className="w-800 h-50 m-auto mb-40"></div>
            <table className="block w-800 m-auto ">
                <tr className="h-40 bg-#97D8CD">
                    <th className="w-500 text-right border pr-5">????????</th>
                    <th className="w-150 text-center border">????????</th>
                    <th className="w-150 text-center border">????????????</th>
                    <th className="w-120 text-center border"></th>
                </tr>
                {allData && allData.map((item) => (<ProductsTable item={item} openTooltip={openTooltip} getId={getId} />))}
            </table>
            <div>
                <Popup ref={ref}
                    modal nested>
                    {
                        close => (
                            <div className='border-2 rounded-2xl bg-gradient-to-b from-#97D8CD to-#C191C0 w-400'>
                                <form className="text-right ">
                                    <label className="mr-50">????????:</label>
                                    <input type="number" className="block mt-10 w-300 m-auto mb-15" value={price} onChange={priceInput} />
                                    <label className="mr-50">??????????:</label>
                                    <input type="number" className="block mt-10 w-300 m-auto mb-15" value={stocks} onChange={stocksInput} />
                                </form>
                                <button className="
                                    bg-#ff8c00 text-white w-90 h-40 rounded-lg mr-10 text-20" id={id} onClick={() => { edit(); close() }}>????????????</button>
                                <button className="
                                    bg-#f10000 text-white w-90 h-40 rounded-lg mr-10 text-20" onClick={() => close()}>????????</button>
                            </div>
                        )
                    }
                </Popup>
            </div >
            <div className='flex w-120 m-auto mt-20 border-2 border-#B3B3B3'>
                <button onClick={plus} className="w-40">{"<<"}</button>
                <div className='inline-block border-x-2 border-#B3B3B3'>
                    <p className='text-26 w-40'>{renderNumber}</p>
                </div>
                <button onClick={minus} className="w-40">{">>"}</button>
            </div>
        </>
    )
}
export default Inventory;