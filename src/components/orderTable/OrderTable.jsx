export const inventoryTable = (props) => {
    console.log(props);
    return (
        <>
            <tr>
                <td className="text-right border">{props.item.name}</td>
                <td className="text-right border">{props.item.totalPrice}</td>
                <td className=" border">{props.item.date}</td>
                <td className=" border">
                    <button>بررسی سفارش</button>
                </td>
            </tr>
        </>
    )
}

export default inventoryTable;