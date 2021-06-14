import React, {useState} from 'react'
import Keypad from "./Keypad";

const Screen = () => {
    const [num, setNum] = useState(0)

    const handleClick =(n)=> {
        setNum(n);
    }
    return (
        <>
        <div className='screen'>
            <p>{num}</p>
        </div>
        <Keypad handleClick={handleClick}/>
        </>
    )
}

export default Screen
