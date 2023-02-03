import Card from "../Card/Card"
import "./CardSlider.css"
import arrowL from "../../assets/img/left-arrow.png"
import arrowR from "../../assets/img/right-arrow.png"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
const CardSlider = (props) => {

    const [allData, setAllData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/prudocts").then((response) => {
            setAllData(response.data);
        });
    }, [])


    return (
        <>
            <div className="h-140 relative w-full" >
                <div className="h-140 w-40 rounded-l-lg border-solid border-2 border-#B3B3B3 inline-block mt-15 bg-white absolute right-0">
                    <button className="h-140 w-40 " ><img src={arrowR} width="20" className="mr-6" /></button>
                </div>
                <div className="h-140 w-40 rounded-r-lg border-solid border-2 border-#B3B3B3 inline-block mt-15 bg-white absolute left-0">
                    <button className="h-140 w-40 " ><img src={arrowL} width="20" className="mr-10" /></button>
                </div>
                <div className="flex slider pt-15 ">
                    <div className="ml-50"></div>
                    <div className="flex ">
                        {allData && allData.map((item) => (<Card item={item} category={props.category} />))}
                    </div>
                    <div className="mr-30"></div>
                </div>

            </div>
        </>
    )
}

export default CardSlider;