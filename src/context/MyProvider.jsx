import { useState } from "react";
import MyContext from "./MyContext";



const MyProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');
    const [name , setName] = useState("")


        const [greet , setGreet] = useState(true)
          const [responses, setResponses] = useState([])




    const newDiloge = () => {
        console.log("hii done")
        setGreet(true)
        setResponses([])
      }
    

    return (
        <MyContext.Provider value={{theme ,name , setName, newDiloge,setTheme,responses, setResponses,greet , setGreet}}  >
            {
                children
            }
        </MyContext.Provider>
    )
}

export default MyProvider