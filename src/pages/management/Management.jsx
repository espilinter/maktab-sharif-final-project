import "./Managment.css"

export const Management = () => {
    return (

        <header className="relative h-70 bg-header-background bg-cover ">
            <h1 className="inline-block absolute right-20 top-15 text-30 font-black gradient">پنل مدیریت فروشگاه</h1>
            <a href="/" className="absolute left-10 top-30 text-10 text-blue ">بازگشت به صفحه اصلی</a>
            <a href="/Management/orders"><button className="w-80 border-blcak border-2 absolute left-150 top-25 h-25 text-12 font-bold shadow-button bg-white">سفارش ها</button></a>
            <a href="/Management/products"><button className="w-150 border-blcak border-2 absolute left-230 top-25 h-25 text-12 font-bold shadow-button bg-white">موجودی و قیمت ها</button></a>
            <a href="/Management/inventory"><button className=" w-80 border-blcak border-2 absolute left-380 top-25 h-25 text-12 font-bold shadow-button bg-white">کالا ها</button></a>
        </header>
    )
}

export default Management;