import { useEffect, useState } from "react";
import Management from "../management/Management";
import axios from "axios";
import OrderTable from "../../components/orderTable/OrderTable"
export const Inventory = () => {

    const [allData, setAllData] = useState([])
    const [radioValue, setRadioValue] = useState("notDelivered")
    const [renderNumber, setRenderNumber] = useState(1)
    const [limit, setLimit] = useState(5)
    useEffect(() => {
        fetchData()
    }, [renderNumber])
    useEffect(() => {
        fetchData()
    }, [])

    function fetchData() {
        axios.get("http://localhost:3001/shopper").then((response) => {
            setAllData(response.data);
        });
    }

    const radioInput = event => {
        setRadioValue(event.target.value);
    };

    return (
        <>
            <Management />
            <div className="w-800 m-auto text-right justify-between relative mt-50 ">
                <h2 className="inline-block text-20 absolute top-10">مدیریت سفارش ها</h2>
                <div className="inline-block absolute top-10 left-0">
                    <input type="radio" name="radio" value={"notDelivered"} onClick={radioInput}></input>
                    <label className="ml-20">سفارش های در انتظار ارسال</label>
                    <input type="radio" name="radio" value={"delivered"} onClick={radioInput}></input>
                    <label>سفارش های تحویل شده</label>
                </div>
            </div>
            <div className="w-800 h-50 m-auto mb-40"></div>
            <table className="block w-800 m-auto ">
                <tr className="h-40 bg-#97D8CD">
                    <th className="w-200 text-right border pr-5">نام کاربری</th>
                    <th className="w-200 text-right border pr-5">مجموع مبلغ</th>
                    <th className="w-180 border">زمان سفارش</th>
                    <th className="w-220 border"></th>
                </tr>
                {allData && allData.map((item) => (<OrderTable item={item} radioValue={radioValue} fetchData={fetchData} />))}
            </table>
            <div className='flex w-120 m-auto mt-20 border-2 border-#B3B3B3'>
                <button onClick={() => setRenderNumber(renderNumber + 1)} className="w-40">{"<<"}</button>
                <div className='inline-block border-x-2 border-#B3B3B3'>
                    <p className='text-26 w-40'>{renderNumber}</p>
                </div>
                <button onClick={() => setRenderNumber(renderNumber - 1)} className="w-40">{">>"}</button>
            </div>
        </>
    )
}

export default Inventory;