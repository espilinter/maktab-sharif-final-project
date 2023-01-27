import "./footer.layout.css"
import Enamd from "../../assets/img/85.png"
import rezi from "../../assets/img/rezi.png"
import kasbokar from "../../assets/img/kasbokar.png"
import instagram from "../../assets/img/instagram.png"
import linkedin from "../../assets/img/linkedin.png"
import twitter from "../../assets/img/twitter.png"
import youtube from "../../assets/img/youtube.png"
const Footer = () => {
    return (
        <footer className="h-260 mt-40 w-full relative flex justify-between">
            <div className='khadamat relative w-250 mr-10 '>
                <span className='footerTitle ml-125'>خدمات مشتریان</span>
                <p className='subtitle text-right text-#000000cc text-16 mt-15'>پاسخ به سوالت متداول</p>
                <p className='subtitle text-right text-#000000cc text-16 mt-15'>رویه های باز کردن کالا</p>
                <p className='subtitle text-right text-#000000cc text-16 mt-15'>شرایط استفاده</p>
                <p className='subtitle text-right text-#000000cc text-16 mt-15'>حریم خصوصی</p>
            </div>
            <div className='rahnama relative w-240 text-right'>
                <span className='footerTitle'>راهنمای خرید</span>
                <p className='subtitle text-right text-#000000cc text-16 mt-15'>نحوه ثبت سفارش</p>
                <p className='subtitle text-right text-#000000cc text-16 mt-15'>رویه ارسال</p>
                <p className='subtitle text-right text-#000000cc text-16 mt-15'>شیوه پرداخت</p>
            </div>
            <div className='infoContaner ml-540 w-400 '>
                <span className='footerTitle text-24 ml-240'>همراه ما باشید</span>
                <div className='links flex mt-25'>
                    <img src={instagram} className="instagram ml-40" width="40" />
                    <img src={youtube} className="youtube ml-40" width="40" />
                    <img src={twitter} className="twitter ml-40" width="40" />
                    <img src={linkedin} className="linkedin" width="40" />
                </div>
                <p className='EmailLabel text-18 mt-20'>با ثبت ایمیل از جدید ترین تخفیف ها با خبر شوید</p>
                <div className='inputContaner mt-20'>
                    <input className='input bg-#D9D9D9 rounded-lg w-320 h-50 ml-5 text-right ' placeholder=' ایمیل شما' />
                    <button className="w-70 h-50 bg-#D9D9D9 rounded-lg text-white text-18">ثبت</button>
                </div>
            </div>
            <div className=" max-w-fit">
                <img src={Enamd} className="Enamd absolute top-56 left-28" width="148" />
                <img src={kasbokar} className="kasbokar absolute w-112 left-214 top-56" />
                <img src={rezi} className="rezi absolute left-364 top-56 font-bold block mt-10" height="148" />
            </div>





        </footer>
    )
}

export default Footer;