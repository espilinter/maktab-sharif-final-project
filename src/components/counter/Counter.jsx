import React, { useState } from 'react';
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
const Counter = (props) => {
    const [count, setCount] = useState(0);

    function minus() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    function plus(stocks) {
        if (count < stocks) {
            setCount(count + 1)
        }
    }

    return (
        <>
            <div className='border-2 border-#D9D9D9 w-90 flex h-60'>
                <div className='w-30'>
                    <button onClick={() => { plus(props.stocks) }} className="block bg-#D9D9D9 active:bg-#B3B3B3 h-30 w-30 pr-5"><AiFillCaretUp /></button>
                    <button onClick={minus} className="block bg-#D9D9D9 active:bg-#B3B3B3 h-30 w-30 pr-5"><AiFillCaretDown /></button>
                </div>
                <div className='pt-8 w-60'>
                    <p className='text-26 '>{count}</p>
                </div>
            </div>
        </>
    )
};

export default Counter