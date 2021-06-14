import React from 'react'

const Keypad = ({handleClick}) => {


    return (
        <>
        <div className='keypad'>
            <button className='key' name='7' onClick={(e) => handleClick(e.target.getAttribute('name'))}>7</button>
            <button className='key' name='8' onClick={(e) => handleClick(e.target.getAttribute('name'))}>8</button>
            <button className='key' name='9' onClick={(e) => handleClick(e.target.getAttribute('name'))}>9</button>
            <button className='key' name='del' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={{background: "hsl(225, 21%, 49%)"}}>DEL</button>
            <button className='key' name='4' onClick={(e) => handleClick(e.target.getAttribute('name'))}>4</button>
            <button className='key' name='5' onClick={(e) => handleClick(e.target.getAttribute('name'))}>5</button>
            <button className='key' name='6' onClick={(e) => handleClick(e.target.getAttribute('name'))}>6</button>
            <button className='key' name='+' onClick={(e) => handleClick(e.target.getAttribute('name'))}>+</button>
            <button className='key' name='1' onClick={(e) => handleClick(e.target.getAttribute('name'))}>1</button>
            <button className='key' name='2' onClick={(e) => handleClick(e.target.getAttribute('name'))}>2</button>
            <button className='key' name='3' onClick={(e) => handleClick(e.target.getAttribute('name'))}>3</button>
            <button className='key' name='-' onClick={(e) => handleClick(e.target.getAttribute('name'))}>-</button>
            <button className='key' name='.' onClick={(e) => handleClick(e.target.getAttribute('name'))}>.</button>
            <button className='key' name='0' onClick={(e) => handleClick(e.target.getAttribute('name'))}>0</button>
            <button className='key' name='/' onClick={(e) => handleClick(e.target.getAttribute('name'))}>/</button>
            <button className='key' name='*' onClick={(e) => handleClick(e.target.getAttribute('name'))}>x</button>
        </div>
        <div className='keypad2'>
            <button className='key2' name='reset' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={{background: "hsl(225, 21%, 49%)"}}>RESET</button>
            <button className='key2' name='=' onClick={(e) => handleClick(e.target.getAttribute('name'))} style={{background: 'hsl(6, 63%, 50%)'}}>=</button>
        </div>
        </>
    )
}

export default Keypad
