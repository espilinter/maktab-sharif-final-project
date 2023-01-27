import { useEffect, useState } from "react";
import Management from "../management/Management";
import axios from "axios";
import OrderTable from "../../components/orderTable/OrderTable"
export const Inventory = () => {

    const [allData, setAllData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/shopper").then((response) => {
            setAllData(response.data);
        });
    }, [])

    return (
        <>
            <Management />
            <div className="w-800 m-auto text-right justify-between relative mt-50 ">
                <h2 className="inline-block text-20 absolute top-10">مدیریت سفارش ها</h2>
                <div className="inline-block absolute top-10 left-0">
                    <input type="radio" name="radio" ></input>
                    <label className="ml-20">سفارش های در انتظار ارسال</label>
                    <input type="radio" name="radio"></input>
                    <label>سفارش های تحویل شده</label>
                </div>
            </div>
            <div className="w-800 h-50 m-auto mb-40"></div>
            <table className="block w-800 m-auto ">
                <tr>
                    <th className="w-200 text-right border">نام کاربری</th>
                    <th className="w-200 text-right border">مجموع مبلغ</th>
                    <th className="w-180 border">زمان سفارش</th>
                    <th className="w-220 border"></th>
                </tr>
                {allData && allData.map((item) => (<OrderTable item={item} />))}

            </table>
        </>
    )
}

export default Inventory;