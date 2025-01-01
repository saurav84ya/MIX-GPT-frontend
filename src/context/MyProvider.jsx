import { useState } from "react";
import MyContext from "./MyContext";



const MyProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');
    const [name , setName] = useState("")

    return (
        <MyContext.Provider value={{theme ,name , setName, setTheme}}  >
            {
                children
            }
        </MyContext.Provider>
    )
}

export default MyProvider