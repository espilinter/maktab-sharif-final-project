import { useEffect, useState, useRef } from "react";
import ProductsTable from "../../components/productsTable/ProductsTable";
import { PageContaner } from "../../layout";
import axios from "axios";
import Popup from 'reactjs-popup';
import { useSelector, useDispatch } from "react-redux";
import { shoppingCart, showCart } from "../../featuers/shoppingCarts/shoppingCartSlice"
const CartPage = () => {

    // const cart = useSelector(shoppingCart)
    // const dispatch = useDispatch(showCart)

    const [data, setData] = useState()
    const [allData, setAllData] = useState([])
    const openTooltip = () => ref.current.open();
    const ref = useRef();
    // useEffect(() => {
    //     getcartData()
    // }, [])



    // function getId(params) {
    //     setId(params)
    //     inputFilder(params)
    // }

    // function minus() {
    //     if (renderNumber > 1) {
    //         setRenderNumber(renderNumber - 1)
    //     }
    // }

    // function plus() {
    //     let lenght = dataLenght.length / limit;
    //     if (renderNumber < lenght) {
    //         setRenderNumber(renderNumber + 1)

    //     }
    // }

    return (
        <PageContaner>
            <div className="w-800 m-auto text-right justify-between relative mt-50 ">
                <h2 className="inline-block text-20 absolute top-10">سبد خرید</h2>
            </div>
            <div className="w-800 h-50 m-auto mb-40"></div>
            <table className="block w-800 m-auto ">
                <tr className="h-40 bg-#97D8CD">
                    <th className="w-500 text-right border pr-5">کالا</th>
                    <th className="w-150 text-center border">قیمت</th>
                    <th className="w-150 text-center border">تعداد</th>
                    <th className="w-120 text-center border"></th>
                </tr>
                {allData && allData.map((item) => (<ProductsTable item={item} openTooltip={openTooltip} />))}
            </table>
            <div>
                <Popup ref={ref}
                    modal nested>
                    {
                        close => (
                            <div className='border-2 rounded-2xl bg-gradient-to-b from-#97D8CD to-#C191C0 w-400'>
                                <button className="
                                    bg-#ff8c00 text-white w-90 h-40 rounded-lg mr-10 text-20" onClick={() => { close() }}>لغو</button>
                                <button className="
                                    bg-#f10000 text-white w-90 h-40 rounded-lg mr-10 text-20" onClick={() => close()}>حذف</button>
                            </div>
                        )
                    }
                </Popup>
            </div >
            <a href="/informationPage">
                <button className=" bg-#1EAB24 shadow-button w-260 h-60 pt-10 m-auto mt-50">
                    <p className="text-white text-24 mr-10">نهایی کردن خرید</p>
                </button>
            </a>
        </PageContaner>
    )
}
export default CartPage;