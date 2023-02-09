import { useState } from "react";
import "./PaymentPage.css"
const PaymentPage = () => {

    return (
        <>
            <div className="w-100% bg-#B3B3B3">
                <div className="flex justify-between bg-white w-90% m-auto">
                    <img src="https://th.bing.com/th/id/OIP.75hrXhTt9Ee2vrM9fzfFTwHaEJ?pid=ImgDet&rs=1" width="150" className="" />
                    <div>
                        <h1 className="mt-30 text-20 font-bold">پرداخت الکترونیکی به پرداخت ملت</h1>
                        <div className="w-400 mt-5 bg-#aa0000 peymentBorder h-25 text-white">digistore.com</div>
                    </div>

                    <img src="https://th.bing.com/th/id/OIP.p1mV0nB6Rllc4c1xruKPCAHaEJ?pid=ImgDet&rs=1" width="150" />
                </div>
                <div className="flex justify-between mt-20 w-90% m-auto ">
                    <div className="w-65% bg-white mb-75">
                        <div className="w-300 bg-#D9D9D9">
                            <div className="inline-block bg-white">
                                <h2 className="text-white text-18 bg-#D9D9D9 w-150 py-10 inline-block h-40 rounded-bl-20">اطلاعات کارت</h2>
                            </div>
                            <h2 className="text-white text-18 bg-white py-10 w-150 inline-block h-40 rounded-tr-20">اطلاعات کارت</h2>
                            <h2 className="text-white text-18 bg-white py-10 w-300 block h-20  rounded-tr-20">اطلاعات کارت</h2>
                        </div>
                        <div className="grid grid-cols-2 w-95% m-auto gap-y-30 ">
                            <label className="text-18 font-bold text-right ">شماره کارت</label>
                            <input className="h-40 border-#D9D9D9 border-2 rounded-20 w-300" placeholder="XXXX XXXX XXXX XXXX" />
                            <label className="text-18 font-bold text-right">رمز اینترنتی کارت</label>
                            <input className="h-40 border-#D9D9D9 border-2 rounded-20 w-150" />
                            <label className="text-18 font-bold text-right">شماره شناسایی دوم (CVV2)</label>
                            <input className="h-40 border-#D9D9D9 border-2 rounded-20 w-150" />
                            <label className="text-18 font-bold text-right">تاریخ انقضای کارت</label>
                            <div className="text-right">
                                <lable className="ml-10 text-#5a5a5a">ماه</lable>
                                <input className="h-40 border-#D9D9D9 border-2 rounded-20 w-60" />
                                <lable className="mx-10 text-#5a5a5a">سال</lable>
                                <input className="h-40 border-#D9D9D9 border-2 rounded-20 w-60" />
                            </div>
                            <label className="text-18 font-bold text-right">کد امنیتی</label>
                            <div className="text-right">
                                <input className="h-40 border-#D9D9D9 border-2 rounded-20 w-150 ml-10" />
                                <img className="inline-block" src="https://th.bing.com/th/id/R.2ce3a931ee9d366f995bae044201034d?rik=V2MPH0PIqTDkXQ&pid=ImgRaw&r=0" width="150" />
                            </div>
                            <label className="text-18 font-bold text-right">ایمیل</label>
                            <input className="h-40 border-#D9D9D9 border-2 rounded-20 w-300" />
                            <div></div>
                            <div className="text-right">
                                <button className="h-40 rounded-20 w-250 ml-10 gardientGreen text-white text-20 font-bold">پرداخت</button>
                                <button className="h-40 rounded-20 w-100 ml-10 gardientOrang text-white text-20 font-bold">انصراف</button>
                            </div>
                        </div>

                    </div>
                    <div className="w-30% bg-white mb-80 rounded-bl-40 pb-20">
                        <div className="w-350 bg-#D9D9D9">
                            <div className="inline-block bg-white">
                                <h2 className="text-white text-18 bg-#D9D9D9 w-200 py-10 inline-block h-40 rounded-bl-20">اطلاعات پذیرندگان</h2>
                            </div>
                            <h2 className="text-white text-18 bg-white py-10 w-150 inline-block h-40 rounded-tr-20">اطلاعات پذیرندگان</h2>
                            <h2 className="text-white text-18 bg-white py-10 w-350 block h-20  rounded-tr-20">اطلاعات پذیرندگان</h2>
                        </div>
                        <div className="w-full h-200 mt-20 bg-#D9D9D9 "></div>
                        <div className="grid grid-cols-2 w-95% m-auto gap-y-30 mt-20 border-b-4 border-dotted pb-30 border-#5a5a5a">
                            <p className="text-18 font-bold text-#5a5a5a text-right">نام پذیرنده:</p>
                            <p className="text-18  text-#5a5a5a text-right">فروشگاه دیجی استور</p>
                            <p className="text-18 font-bold text-#5a5a5a text-right">شماره پذیرنده:</p>
                            <p className="text-18  text-#5a5a5a text-right">48956354781</p>
                            <p className="text-18 font-bold text-#5a5a5a text-right">آدرس وب سایت:</p>
                            <p className="text-18  text-#5a5a5a text-right">www.DigiStore.ir</p>
                        </div>
                        <div className="text-right">
                            <p className="text-#28c820 text-20 font-bold mt-17 inline-block mr-10">مبلغ قابل پرداخت:</p>
                            <p className="inline-block mr-20 text-#5a5a5a text-18 font-bold">1,546,000 تومان</p>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-#aa0000 rounded-t-top h-45">
                    <p className="text-#D9D9D9 text-14">02166099660</p>
                    <p className="text-#D9D9D9 text-14">شرکت زیر جامه پوشان تعاونی وقف عام</p>
                </div>
            </div>
        </>
    )
}

export default PaymentPage;