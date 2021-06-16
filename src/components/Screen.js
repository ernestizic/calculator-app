/*eslint-disable no-eval*/
import React, {useState, useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext'
import Keypad from "./Keypad";

const Screen = () => {
    const {isFineTheme, isLightTheme, isDarkTheme, fine, light, dark} = useContext(ThemeContext);

    const [displayVal, setDisplayVal] = useState('');
    const [result, setResult] = useState(0)

    const handleClick =(n)=> {
        setDisplayVal(displayVal + n);
    }
    //reset
    const reset =()=> {
        setDisplayVal('')
        setResult(0)
    }
    //delete
    const del =()=> {
        setDisplayVal(displayVal.slice(0, -1))
    }
    //calculation
    const calc =()=> {
        const res = eval(displayVal);
        setResult(res);
        setDisplayVal('')
    }

    let theme
    if (isFineTheme){
        theme = fine
    }else if(isLightTheme) {
        theme = light
    }else if(isDarkTheme){
        theme = dark
    }
        
    return (
        <>
        <div className='screen' style={{background: theme.screen_bg}}>
            <p style={{color: theme.resultColor}}>{result}</p>
            <p className='display-val'>{displayVal}</p>
        </div>
        <Keypad handleClick={handleClick} reset={reset} del={del} calc={calc}/>
        </>
    )
}

export default Screen;
