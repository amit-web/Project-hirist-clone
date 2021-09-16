import { createContext, useState } from "react";
export const SearchDataContext = createContext();


export const SearchDataProvider = ({ children }) => {
    const [searchData, setSearchData] = useState("");
    const [locations, setLocations] = useState("")
    const [experience, setExperience] = useState("")
    const [debouncing, setDebouncing] = useState("")

    const [id,setId] = useState("")

    const handleId = (id)=>{
         setId(id)
    }
    const handleSearchData = (par) => {
        setSearchData(par);
    }
    const handleLocations = (el) => {
        setLocations(el);
    }
    const handleExperience = (el) => {
        setExperience(el);
    }
    const handleDebouncing = (el) => {
        setDebouncing(el)
    }

    return <SearchDataContext.Provider value={{ searchData,handleId, handleSearchData, handleLocations, locations, experience, handleExperience, handleDebouncing, debouncing }}>{children}</SearchDataContext.Provider>
}

