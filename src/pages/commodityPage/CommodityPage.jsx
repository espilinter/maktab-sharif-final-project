import { logRoles } from "@testing-library/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Counter from "../../components/counter/Counter";
import { PageContaner } from "../../layout";
import { useSelector, useDispatch } from "react-redux";
import { shoppingCart, showCart, addToCard } from "../../featuers/shoppingCarts/shoppingCartSlice"

export const CommodityPage = () => {

    localStorage.getItem("targetTitle")

    const [data, setData] = useState([])
    const [localData, setLocalData] = useState(undefined)
    function fetchData(id) {
        axios.get(`http://localhost:3001/prudocts/${id}`).then((response) => {
            setData(response.data);

        });
    }

    useEffect(() => {
        const id = localStorage.getItem("targetId")
        fetchData(id)
    }, [])

    // const cart = useSelector(shoppingCart)
    // const dispatch = useDispatch(showCart)

    // function getcartData() {
    //     let getData = localStorage.getItem("cart")
    //     if (getData !== undefined) {
    //         setLocalData(JSON.parse(getData))
    //         cartFilder()
    //     }
    //     else {
    //         setLocalData("undefined")
    //         cartFilder()
    //     }
    // }

    // function cartFilder() {
    //     console.log(localData);
    //     if (localData === "undefined") {
    //         let localData2 = []
    //         let cartData = {};
    //         cartData.id = 1
    //         cartData.name = data.name
    //         cartData.price = data.price
    //         cartData.stocks = data.stocks
    //         localData2.push(cartData)
    //         setLocalData(localData2)
    //     }
    //     else if (localData !== "undefined") {
    //         let cartData = {};
    //         let localData2 = localData
    //         cartData.id = (localData.length + 1)
    //         cartData.name = data.name
    //         cartData.price = data.price
    //         cartData.stocks = data.stocks
    //         localData2.push(cartData)
    //         setLocalData(localData2)
    //     }
    //     addToLocal()
    // }

    // function addToLocal() {
    //     localStorage.setItem("cart", JSON.stringify(localData))
    //     loger()
    // }

    // function loger() {
    //     JSON.parse(localStorage.getItem("cart"))
    // }
    return (
        <PageContaner>
            <div className="flex">
                <div className="w-430 h-430 px-40 py-40 ">
                    <img src={data.img} width="350" />
                </div>
                <div className="pr-25 pt-50 text-right">
                    <h1 className="text-30 text-right">{data.name}</h1>
                    <p className="text-right mt-30 text-20">{data.category} / {data.SubCategory}</p>
                    <p className="text-right text-18 mt-20">موجودی: {data.stocks}</p>
                    <p className="text-right text-26 mt-40">{data.price} تومان</p>
                    <div className="mt-30 flex gap-40">
                        <Counter stocks={data.stocks} />
                        <a>
                            <button className=" bg-#1EAB24 shadow-button w-260 h-60 flex pt-10">
                                <p className="text-white pt-6 text-20 mr-10">افزودن به سبد خرید</p>
                                <div className="bg-white w-40 h-40 rounded-full mr-10">
                                    <p className="text-#1EAB24 text-26 font-semibold">+</p>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-95% bg-#B3B3B3 h-3 m-auto"></div>
            <div className="pr-50">
                <h2 className="text-32 text-right">معرفی</h2>
                <p className="text-right">{data.introduction}</p>
                <h2 className="text-32 text-right">بررسی تخصصی</h2>
                <p className="text-right">{data.expertCheck}</p>
            </div>
        </PageContaner>
    )
}

export default CommodityPage;