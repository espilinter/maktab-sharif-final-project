export const Management = () => {
    return (

        <header className="relative border-b-2 h-70">
            <h1 className="inline-block absolute right-20 top-20 text-22 ">پنل مدیریت فروشگاه</h1>
            <a href="/" className="absolute left-10 top-30 text-10 text-blue ">بازگشت به صفحه اصلی</a>
            <a href="/Management/orders"><button className="w-80 border-blcak border-2 absolute left-150 top-25 h-25 text-12 font-bold shadow-button bg-white">سفارش ها</button></a>
            <a href="/Management/products"><button className="w-150 border-blcak border-2 absolute left-230 top-25 h-25 text-12 font-bold shadow-button bg-white">موجودی و قیمت ها</button></a>
            <a href="/Management/inventory"><button className=" w-80 border-blcak border-2 absolute left-380 top-25 h-25 text-12 font-bold shadow-button bg-white">کالا ها</button></a>
        </header>
    )
}

export default Management;