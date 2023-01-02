import React, { useState, useEffect, Fragment, Suspense } from 'react';
import logo from "../src/assets/img/logo.png"
import shoppingCart from "../src/assets/img/shoppingCart.png"
import Enamd from "../src/assets/img/85.png"
import rezi from "../src/assets/img/rezi.png"
import kasbokar from "../src/assets/img/kasbokar.png"
import instagram from "../src/assets/img/instagram.png"
import linkedin from "../src/assets/img/linkedin.png"
import twitter from "../src/assets/img/twitter.png"
import youtube from "../src/assets/img/youtube.png"
import './App.css';
import { AppRouting } from './routes';


// const fetchData = async () => {
//   const res = await fetch("http://localhost:3000/productPageData");
//   const data = await res.json();
//   console.log(data);
//   return data;
// };


const App = () => {


  return (
    // <Fragment>
    //   <div className='body'>
    //     <header>
    //       <a href='#' className='sabadKharid'>
    //         <span>سبد خرید</span>
    //         <img src={shoppingCart} className='shoppingCart' />
    //       </a>
    //       <a href='#' className='modiriat'>
    //         <span>مدیریت</span>
    //       </a>
    //       <h1 className='brand'>DIGI STORE</h1>
    //       <img src={logo} width="80" className='logo' />
    //     </header>

    //     <body></body>

    //     <footer>
    //       <div>
    //         <img src={Enamd} className="Enamd" width="148" />
    //         <img src={kasbokar} className="kasbokar" />
    //         <img src={rezi} className="rezi" height="148" />
    //       </div>
    //       <div className='infoContaner'>
    //         <span className='footerTitle'>همراه ما باشید</span>
    //         <div className='links'>
    //           <img src={instagram} className="instagram" width="40" />
    //           <img src={youtube} className="youtube" width="40" />
    //           <img src={twitter} className="twitter" width="40" />
    //           <img src={linkedin} className="linkedin" width="40" />
    //         </div>
    //         <p className='EmailLabel'>با ثبت ایمیل از جدید ترین تخفیف ها با خبر شوید</p>
    //         <div className='inputContaner'>
    //           <button>ثبت</button>
    //           <input className='input' placeholder='ایمیل شما ' />
    //         </div>
    //       </div>

    //       <div className='rahnama'>
    //         <span className='footerTitle'>راهنمای خرید</span>
    //         <p className='subtitle marginTop'>نحوه ثبت سفارش</p>
    //         <p className='subtitle'>رویه ارسال</p>
    //         <p className='subtitle'>شیوه پرداخت</p>
    //       </div>

    //       <div className='khadamat'>
    //         <span className='footerTitle'>خدمات مشتریان</span>
    //         <p className='subtitle'>پاسخ به سوالت متداول</p>
    //         <p className='subtitle'>رویه های باز کردن کالا</p>
    //         <p className='subtitle'>شرایط استفاده</p>
    //         <p className='subtitle'>حریم خصوصی</p>
    //       </div>


    //     </footer>
    //   </div>
    // </Fragment>

    <>
      <Suspense fallback={<p>در حال بارگذاری</p>}>
        <AppRouting />
      </Suspense>
    </>
  );
};

export default App;