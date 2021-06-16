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

    return (
        <>
        <div className='keypad' style={{background: theme.toggle_bg}}>
            <button className='key' name='7' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={{background: theme.key3_bg, color: theme.darkText}}>7</button>
            <button className='key' name='8' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={{background: theme.key3_bg, color: theme.darkText}}>8</button>
            <button className='key' name='9' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={{background: theme.key3_bg, color: theme.darkText}}>9</button>
            <button className='key' name='del' onClick={del} style={{background: theme.key1_bg, color: theme.lightText}}>DEL</button>
            <button className='key' name='4' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={{background: theme.key3_bg, color: theme.darkText}}>4</button>
            <button className='key' name='5' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={{background: theme.key3_bg, color: theme.darkText}}>5</button>
            <button className='key' name='6' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={{background: theme.key3_bg, color: theme.darkText}}>6</button>
            <button className='key' name='+' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={{background: theme.key3_bg, color: theme.darkText}}>+</button>
            <button className='key' name='1' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={{background: theme.key3_bg, color: theme.darkText}}>1</button>
            <button className='key' name='2' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={{background: theme.key3_bg, color: theme.darkText}}>2</button>
            <button className='key' name='3' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={{background: theme.key3_bg, color: theme.darkText}}>3</button>
            <button className='key' name='-' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={{background: theme.key3_bg, color: theme.darkText}}>-</button>
            <button className='key' name='.' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={{background: theme.key3_bg, color: theme.darkText}}>.</button>
            <button className='key' name='0' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={{background: theme.key3_bg, color: theme.darkText}}>0</button>
            <button className='key' name='/' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={{background: theme.key3_bg, color: theme.darkText}}>/</button>
            <button className='key' name='*' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={{background: theme.key3_bg, color: theme.darkText}}>x</button>
        </div>
        <div className='keypad2' style={{background: theme.toggle_bg}}>
            <button className='key2' name='reset' onClick={reset} style={{background: theme.key1_bg, color: theme.lightText}}>RESET</button>
            <button className='key2' name='=' onClick={calc} style={{background: theme.key2_bg, color: theme.equalTo}}>=</button>
        </div>
        </>
    )
}

export default Keypad
