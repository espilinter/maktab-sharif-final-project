export const inventoryTable = (props) => {
    console.log(props);
    return (
        <>
            <tr>
                <td className="text-right border">{props.item.name}</td>
                <td className="text-right border">{props.item.price}</td>
                <td className="text-right border">{props.item.stocks}</td>
            </tr>
        </>
    )
}

export default inventoryTable;