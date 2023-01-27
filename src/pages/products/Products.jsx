import { useEffect, useState } from "react";
import Management from "../management/Management";
import axios from "axios";
import ProductsTable from "../../components/productsTable/ProductsTable"
export const Inventory = () => {

    const [allData, setAllData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/prudocts").then((response) => {
            setAllData(response.data);
        });
    }, [])

    return (
        <>
            <Management />
            <div className="w-800 m-auto text-right justify-between relative mt-50 ">
                <h2 className="inline-block text-20 absolute top-10">مدیریت موجودی و قیمت  ها</h2>
                <button className="bg-#1EAB24 shadow-button w-100 text-white h-30 absolute top-10 left-20">ذخیره</button>
            </div>
            <div className="w-800 h-50 m-auto mb-40"></div>
            <table className="block w-800 m-auto ">
                <tr>
                    <th className="w-600 text-right border">کالا</th>
                    <th className="w-100 text-right border">قیمت</th>
                    <th className="w-100 text-right border">موجودی</th>
                </tr>
                {allData && allData.map((item) => (<ProductsTable item={item} />))}
            </table>
        </>
    )
}

export default Inventory;