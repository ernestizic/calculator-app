import React, {useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext'

const Keypad = ({handleClick, reset, del, calc}) => {
    const {isFineTheme, isLightTheme, isDarkTheme, fine, light, dark} = useContext(ThemeContext);

    let theme
    if (isFineTheme){
        theme = fine
    }else if(isLightTheme) {
        theme = light
    }else if(isDarkTheme){
        theme = dark
    }

    const key1Style = {
        background: theme.key1_bg, 
        color: theme.lightText
    }
    
    const key2Style = {
        background: theme.key2_bg, 
        color: theme.equalTo
    }

    const key3Style = {
        background: theme.key3_bg,
        color: theme.darkText
    }

    return (
        <>
        <div className='keypad' style={{background: theme.toggle_bg}}>
            <button className='key' name='7' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={key3Style}>7</button>
            <button className='key' name='8' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={key3Style}>8</button>
            <button className='key' name='9' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={key3Style}>9</button>
            <button className='key' name='del' onClick={del} style={key1Style}>DEL</button>
            <button className='key' name='4' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={key3Style}>4</button>
            <button className='key' name='5' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={key3Style}>5</button>
            <button className='key' name='6' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={key3Style}>6</button>
            <button className='key' name='+' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={key3Style}>+</button>
            <button className='key' name='1' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={key3Style}>1</button>
            <button className='key' name='2' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={key3Style}>2</button>
            <button className='key' name='3' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={key3Style}>3</button>
            <button className='key' name='-' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={key3Style}>-</button>
            <button className='key' name='.' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={key3Style}>.</button>
            <button className='key' name='0' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={key3Style}>0</button>
            <button className='key' name='/' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={key3Style}>/</button>
            <button className='key' name='*' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={key3Style}>x</button>
        </div>
        <div className='keypad2' style={{background: theme.toggle_bg}}>
            <button className='key2' name='reset' onClick={reset} style={key1Style}>RESET</button>
            <button className='key2' name='=' onClick={calc} style={key2Style}>=</button>
        </div>
        </>
    )
}

export default Keypad
