import axios from 'axios';
import { useEffect, useState } from 'react';
import './LoginPage.css'
const LoginPage = () => {

    const [allData, setAllData] = useState([])
    const [userName, setUserName] = useState()
    const [password, setPasword] = useState()
    const fetchData = () => {
        axios.get("http://localhost:3001/users").then((response) => {
            setAllData(response.data);
        });
    }

    const userNameValue = event => {

        setUserName(event.target.value);
    };

    const passwordValue = event => {

        setPasword(event.target.value);
    };

    // const loginButton = async () => {
    //     const users = await allData.filter((users) => users.userName === userName && users.password === password)

    //     if (users.length > 0) {
    //         // window.location.href = "/Management"

    //     }
    //     else {

    //     }
    // }

    // git cke add , commit , git checkout master, git merg dev , git push origne master

    return (
        <div className="w-400 h-300 m-auto mt-200 loginCard relative">
            <h1 className="pt-20 text-22 font-bold mb-20">ورود به پنل مدیریت فروشگاه</h1>
            <div className="m-auto w-300 text-right">
                <label className="text-14">نام کاربری:</label>
                <input type="text" className="w-full block mt-5 mb-10" value={userName} onChange={userNameValue} />
            </div>
            <div className="m-auto w-300 text-right">
                <label className="text-14 ">رمز عبور:</label>
                <input type="password" className="w-full block m-auto mt-5 mb-10" value={password} onChange={passwordValue} />
            </div>
            <a href='/Management'>
                <button className="bg-#1EAB24 shadow-button w-80  mt-20 mb-30 text-white h-30">ورود</button>
            </a>
            <a href='/' className='text-12 absolute bottom-5 left-5 text-blue'>بازگشت به صفحه اصلی</a>
        </div>
    )
}

export default LoginPage;