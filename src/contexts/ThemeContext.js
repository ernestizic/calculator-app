import React, { createContext,useState} from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [isFineTheme, setIsFineTheme] = useState(true);
    const [isLightTheme, setIsLightTheme] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const [fine] = useState({
        main_bg: "hsl(222, 26%, 31%)",
        toggle_bg: "hsl(223, 31%, 20%)",
        screen_bg: "hsl(224, 36%, 15%)",
        key1_bg: "hsl(225, 21%, 49%)",
        key1_shadow: "hsl(224, 28%, 35%)",
        key2_bg: "hsl(6, 63%, 50%)",
        key2_shadow: "hsl(6, 70%, 34%)",
        key3_bg: "hsl(30, 25%, 89%)",
        key3_shadow: "hsl(28, 16%, 65%)",
        darkText: "hsl(221, 14%, 31%)",
        lightText: "#fff",
        equalTo: '#fff',
        resultColor: "#fff"
        
    });
    const [light] = useState({
        main_bg: "hsl(0, 0%, 90%)",
        toggle_bg: "hsl(0, 5%, 81%)",
        screen_bg: "hsl(0, 0%, 93%)",
        key1_bg: "hsl(185, 42%, 37%)",
        key1_shadow: "hsl(185, 58%, 25%)",
        key2_bg: "hsl(25, 98%, 40%)",
        key2_shadow: "hsl(25, 99%, 27%)",
        key3_bg: "hsl(45, 7%, 89%)",
        key3_shadow: "hsl(35, 11%, 61%)",
        darkText: "black",
        lightText: "#fff",
        equalTo: "#fff",
        resultColor: "black"
        
    });
    const [dark] = useState({
        main_bg: "hsl(268, 75%, 9%)",
        toggle_bg: "hsl(268, 71%, 12%)",
        screen_bg: "hsl(268, 71%, 12%)",
        key1_bg: "hsl(281, 89%, 26%)",
        key1_shadow: "hsl(285, 91%, 52%)",
        key2_bg: "hsl(176, 100%, 44%)",
        key2_shadow: "hsl(177, 92%, 70%)",
        key3_bg: "hsl(268, 47%, 21%)",
        key3_shadow: "hsl(290, 70%, 36%)",
        darkText: "hsl(52, 100%, 62%)",
        lightText: "#fff",
        equalTo: "hsl(198, 20%, 13%)",
        resultColor: "hsl(52, 100%, 62%)"
        
    });

    const toggle1 =()=> {
        setIsFineTheme(true)
        setIsLightTheme(false)
        setIsDarkTheme(false)
    }
    const toggle2 =()=> {
        setIsFineTheme(false)
        setIsLightTheme(true)
        setIsDarkTheme(false)
    }
    const toggle3 =()=> {
        setIsFineTheme(false)
        setIsLightTheme(false)
        setIsDarkTheme(true)
    }

    return ( 
        <ThemeContext.Provider value={{isFineTheme: isFineTheme, isLightTheme: isLightTheme, light: light, dark: dark, fine: fine,
        isDarkTheme: isDarkTheme, toggle1: toggle1, toggle2: toggle2, toggle3: toggle3}}>
            {props.children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;