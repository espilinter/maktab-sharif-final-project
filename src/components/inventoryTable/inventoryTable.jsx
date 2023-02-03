export const inventoryTable = (props) => {

    async function deleteData(id) {
        const res = await fetch(`http://localhost:3001/prudocts/${id}`, {
            method: "DELETE",
        });
        props.fetchData()
    }

    function editItem(e) {
        props.getId(e.target.id)
        props.openTooltip()
    }
    return (
        <>
            <tr className="h-80">
                <td className="text-right border "><img src={props.item.img} /></td>
                <td className="text-right border pr-5">{props.item.name}</td>
                <td className="text-right border pr-5">{props.item.category} / {props.item.SubCategory}</td>
                <td className="text-right border pr-8 ">
                    <button id={props.item.id} className="ml-8 text-blue" onClick={editItem}>ویرایش</button>
                    <button onClick={() => deleteData(props.item.id)} className="text-blue">حذف</button>
                </td>
            </tr>
        </>
    )
}

export default inventoryTable;