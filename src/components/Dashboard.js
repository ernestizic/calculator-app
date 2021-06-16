import React, {useContext, useEffect} from 'react'
import Header from "./Header";
import Screen from "./Screen";
import {ThemeContext} from '../contexts/ThemeContext'

export const Dashboard = () => {
    const {isFineTheme, isLightTheme, isDarkTheme, fine, light, dark} = useContext(ThemeContext);

    let theme
    if (isFineTheme){
        theme = fine
    }else if(isLightTheme) {
        theme = light
    }else if(isDarkTheme){
        theme = dark
    }

    useEffect(()=> {
        document.body.style.backgroundColor = theme.main_bg
    })
    return (
        
            <div style={{background: theme.main_bg, color: theme.resultColor}}>
                <Header />
                <Screen />
            </div>
        
    )
}
