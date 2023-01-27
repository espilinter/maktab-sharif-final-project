import { useEffect, useState } from "react";
import Management from "../management/Management";
import axios from "axios";
import InventoryTable from "../../components/inventoryTable/inventoryTable"
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
                <h2 className="inline-block text-20 absolute top-10">مدیریت کالا</h2>
                <button className="bg-#1EAB24 shadow-button w-100 text-white h-30 absolute top-10 left-20">افزودن کالا</button>
            </div>
            <div className="w-800 h-50 m-auto mb-40"></div>
            <table className="block w-800 m-auto ">
                <tr>
                    <th className="w-80 text-right border">تصویر</th>
                    <th className="w-300 text-right border">نام کالا</th>
                    <th className="w-300 text-right border">دسته بندی</th>
                    <th className="w-120 text-right border"></th>
                </tr>
                {allData && allData.map((item) => (<InventoryTable item={item} />))}

            </table>
        </>
    )
}

export default Inventory;