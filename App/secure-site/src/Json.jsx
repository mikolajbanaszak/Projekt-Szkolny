import  {useState , useEffect, createContext, useContext} from "react";

const  DataContext = createContext()

export function DataProvider({ children }) {
    const [users, setUsers]=useState([])
    const [logs,setLogins] = useState([])
    useEffect(()=>{
        fetch("/uzytkownicy.json")
            .then((res)=>res.json())
            .then((res)=>{setUsers(res)
                                console.log(res)})
            .catch((err)=>console.log(err));

    },[])
    useEffect(()=>{
        fetch("/logowane.json")
            .then((res)=>res.json())
            .then((res)=>setLogins(res))
            .catch((err)=>console.log(err));
    },[])
    return (
        <DataContext.Provider value={{users, logs}}>
            {children}
        </DataContext.Provider>
    )
}
export  const useUsers = () =>useContext(DataContext)