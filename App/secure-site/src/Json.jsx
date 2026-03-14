import  {useState , useEffect, createContext, useContext} from "react";

const  DataContext = createContext()

export function DataProvider({ children }) {
    const [users, setUsers]=useState([])
    const [logins,setLogins] = useState([])
    useEffect(()=>{
        fetch("public/uzytkownicy.json")
            .then((res)=>res.json())
            .then((res)=>setUsers(res))
            .catch((err)=>console.log(err));

    },[])
    useEffect(()=>{
        fetch("public/logowane.json")
            .then((res)=>res.json())
            .then((res)=>setLogins(res))
            .catch((err)=>console.log(err));
    },[])
    return (
        <DataContext.Provider value={{users, logins}}>
            {children}
        </DataContext.Provider>
    )
}
export  const useUsers = () =>useContext(DataContext)