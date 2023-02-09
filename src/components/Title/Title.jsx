import { useEffect } from "react";

const Title = (props) => {

    function addToLocal() {
        localStorage.setItem("targetTitle", props.title)
        localStorage.setItem("targetCategory", props.category)
    }

    return (
        <a href="/categoryPage" onClick={addToLocal} >
            <div direction="rtl" className="relative h-64 mt-75">
                <p className='w-600 absolute right-25 text-#0500FF text-32 text-right'>{props.title}</p>
            </div>
        </a>
    )
}
export default Title;