export const inventoryTable = (props) => {
    console.log(props);
    return (
        <>
            <tr>
                <td className="text-right border"></td>
                <td className="text-right border">{props.item.name}</td>
                <td className="text-right border">{props.item.category} / {props.item.SubCategory}</td>
                <td className="text-right border">
                    <button>ویرایش</button>
                    <button>حذف</button>
                </td>
            </tr>
        </>
    )
}

export default inventoryTable;