const Card = (props) => {

    function addToLocal() {
        localStorage.setItem("targetId", props.item.id)
    }

    if (props.item.category === props.category) {
        return (
            <a href="/commodityPage" onClick={addToLocal}>
                <div className="w-340 h-165 " id={props.item.id}>
                    <div className="shadow-cardShadow w-315 h-140 flex">
                        <img src={props.item.img} className="w-140" />
                        <div className="w-170 mr-5  h-140">
                            <h2 className="text-right w-170 mt-25 font-semibold truncate">{props.item.name}</h2>
                            <p className="text-right w-170 mt-35">{props.item.price} تومان</p>
                        </div>
                    </div>
                </div>
            </a>
        )
    }
}
export default Card;