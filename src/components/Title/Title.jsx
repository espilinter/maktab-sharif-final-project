
const Title = (props) => {
    return (
        <a href="/categoryPage" >
            <div direction="rtl" className="relative h-64 mt-35">
                <p className='w-600 absolute right-25 text-#0500FF text-32 text-right'>{props.title}</p>
            </div>
        </a>
    )
}

export default Title;