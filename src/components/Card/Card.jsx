import panir from "../../assets/img/panir.jpg"

const Card = (props) => {
    return (
        <div className="w-340 h-165 " id={props.item.id}>
            <div className="shadow-cardShadow w-315 h-140 flex">
                <img src={props.item.img} className="w-140 inline-block" />
                <div className="w-170 mr-5 inline-block h-140">
                    <h2 className="text-right w-170 mt-25 font-semibold">{props.item.name}</h2>
                    <p className="text-right w-170 mt-35">{props.item.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;