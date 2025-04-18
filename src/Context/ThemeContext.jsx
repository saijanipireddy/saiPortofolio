import { createContext, useState } from "react";
import './ThemeContext.css'

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleTheme = () => {
        setDarkMode(!darkMode)
    }
    return (
        <ThemeContext.Provider value= {{darkMode, toggleTheme}}>
            <div className={darkMode ? "dark" : 'light'}>{children}</div>
     </ThemeContext.Provider>
    )
}

export {ThemeContext}
export default ThemeProvider