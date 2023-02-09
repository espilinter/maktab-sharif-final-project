import axios from "axios";
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import OrderTableCart from "../orderTableCart/OrderTableCart"
export const InventoryTable = (props) => {

    // const [allData, setAllData] = useState([])
    // useEffect(() => {
    //     axios.get("http://localhost:3001/shopper").then((response) => {
    //         setAllData(response.data);
    //     });
    // }, [])

    // let totalPrice = 0;
    // props.item.cart.map((item) => (totalPrice = totalPrice + Number(item.price)))

    let delivered = {};
    delivered.status = "delivered"
    let totalPrice = 0;
    props.item.cart.map((item) => (totalPrice = totalPrice + (item.price * item.stocks)))

    async function patchData(data) {
        const res = await fetch(`http://localhost:3001/shopper/${props.item.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        props.fetchData()
    };

    if (props.item.status === props.radioValue) {
        return (
            <>
                <tr className="h-40">
                    <td className="text-right border pr-5 ">{props.item.name}</td>
                    <td className="text-right border pr-5">{totalPrice}</td>
                    <td className=" border">{props.item.deliveryTime}</td>
                    <td className=" border">
                        <Popup trigger=
                            {<button className="text-blue">بررسی سفارش</button>}
                            modal nested>
                            {
                                close => (
                                    <div className='border-2 rounded-2xl bg-gradient-to-b from-#97D8CD to-#C191C0 w-600'>
                                        <div className="grid grid-cols-orderCard w-500 m-auto gap-x-50 gap-y-20">
                                            <p className="text-left">نام مشتری:</p>
                                            <p className="text-right">{props.item.name}</p>
                                            <p className="text-left">آدرس:</p>
                                            <p className="text-right">{props.item.address}</p>
                                            <p className="text-left">تلفن:</p>
                                            <p className="text-right">{props.item.phoneNumber}</p>
                                            <p className="text-left">زمان تحویل:</p>
                                            <p className="text-right">{props.item.deliveryTime}</p>
                                            <p className="text-left">زمان سفارش:</p>
                                            <p className="text-right">{props.item.orderTime}</p>
                                        </div>
                                        <table className="block w-500 m-auto mt-20">
                                            <tr>
                                                <th className="w-280 text-right border pr-5">کالا</th>
                                                <th className="w-120 text-center border">قیمت</th>
                                                <th className="w-100 text-center border">تعداد</th>
                                            </tr>
                                            {props.item.cart && props.item.cart.map((item) => (<OrderTableCart item={item} />))}
                                        </table>
                                        <button className="
                                    bg-#1EAB24 text-white w-120 h-40 rounded-lg mb-30 mt-20 text-22" onClick={() => { patchData(delivered); close(); }}>تحویل شد</button>

                                    </div>
                                )
                            }
                        </Popup>
                    </td>
                </tr>
            </>
        )
    }
}

export default InventoryTable;