import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const Header = () => {
    const {toggle1, toggle2, toggle3, isFineTheme, isLightTheme, isDarkTheme, fine, light, dark} = useContext(ThemeContext)

    let theme
    if (isFineTheme){
        theme = fine
    }else if(isLightTheme) {
        theme = light
    }else if(isDarkTheme){
        theme = dark
    }
    return (
        <div className='header'>
            <div>
                <h2 style={{fontSize: '20px', marginTop: '12px'}}>calc</h2>
            </div>
            <div className='theme'>
                <h2 style={{fontSize:'10px' , marginTop: '19px'}}>THEME</h2>
                {/*
                <div className="o-switch btn-group btn-sm" data-toggle="buttons" role="group">
                    <label className="btn btn-default" onClick={toggle1} style={{backgroundColor: theme.toggle_bg, color: theme.resultColor}}>
                        <input type="radio" name="options" id="option1" autocomplete="off" /> 1
                    </label>

                    <label className="btn btn-default" onClick={toggle2} style={{backgroundColor: theme.toggle_bg, color: theme.resultColor}}>
                        <input type="radio" name="options" id="option2" autocomplete="off" /> 2
                    </label>

                    <label className="btn btn-default" onClick={toggle3} style={{backgroundColor: theme.toggle_bg, color: theme.resultColor}}>
                        <input type="radio" name="options" id="option3" autocomplete="off" /> 3
                    </label>
                </div>  
                */}

                <div className='switch' style={{background: theme.toggle_bg}}>
                    <input type="radio" name="options" id="option1" onClick={toggle1} style={{backgroundColor: theme.toggle_bg, color: theme.resultColor}}/>
                    <input type="radio" name="options" id="option2" onClick={toggle2} style={{backgroundColor: theme.toggle_bg, color: theme.resultColor}}/>
                    <input type="radio" name="options" id="option3" onClick={toggle3} style={{backgroundColor: theme.toggle_bg, color: theme.resultColor}}/>
                </div> 
            </div>
        </div>
    )
}

export default Header
