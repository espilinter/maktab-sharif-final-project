import { useState } from "react";

export const ProductsTable = (props) => {

    // function sendData() {
    //     let data = {}
    //     data.id = props.item.id;
    //     data.price = priceValue;
    //     data.stock = stockValue;
    //     props.setSPData(prev => [...prev, data])
    // }

    function editItem(e) {
        props.getId(e.target.id)
        props.openTooltip()
    }

    return (
        <>
            <tr className="h-50">
                <td className="text-right border pr-5">{props.item.name}</td>
                <td className="text-center border">{props.item.price}</td>
                <td className="text-center border">{props.item.stocks}</td>
                <td className="text-center border pr-8 ">
                    <button id={props.item.id} className="ml-8 text-blue" onClick={editItem}>ویرایش</button>
                </td>
            </tr>
        </>
    )
}
export default ProductsTable;