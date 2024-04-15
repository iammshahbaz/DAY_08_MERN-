import { createContext, useState } from "react"

const themes ={
    light:{
        background:'#f0f0f0',
        text:'#000'
    },
    dark:{
        background:'#333',
        text:'#fff'
    }
}

const ThemeContext = createContext({
    theme:themes.light,
    toggleTheme:()=>{}
})

function ThemeProvider({children}){
    const [theme,setTheme] = useState(themes.light)

    const toggleTheme =()=>{
        setTheme((prevTheme)=> 
        prevTheme === themes.light?themes.dark:themes.light
    )
    console.log("ThemeProvider theme prop:", theme);
    }
    return(
<ThemeContext.Provider
value={{theme,toggleTheme}}>{children}</ThemeContext.Provider>
    )

}

export{ThemeContext,ThemeProvider,themes}