export const OrderTableCart = (props) => {
    return (
        <tr>
            <td className="text-right border pr-5">{props.item.name}</td>
            <td className="text-center border ">{props.item.price}</td>
            <td className="text-center border ">{props.item.stocks}</td>
        </tr>
    )
}

export default OrderTableCart;