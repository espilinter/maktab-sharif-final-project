import logo from "../../assets/img/logo.png"
import shoppingCart from "../../assets/img/shoppingCart.png"
import "./header.layout.css"
export const Header = () => {
    return (
        <header className="w-full h-100 relative bg-header-background bg-cover">
            <a href='/cartPage' className='sabadKharid text-white absolute text-22 flex left-20 top-30'>
                <img src={shoppingCart} className='shoppingCart w-25 h-25 mt-5' />
                <span className="text-white">سبد خرید</span>
            </a>
            <a href='/loginPage' className='modiriat text-white absolute text-22 left-200 top-30' >
                <span className="text-white">مدیریت</span>
            </a>
            <h1 className='brand absolute top-20 right-100 text-42 font-black'>DIGI STORE</h1>
            <img src={logo} width="80" className='logo absolute right-2.5 top-2.5' />
        </header>

    )
}

export default Header;