import { createContext, useState } from "react";
export const SearchDataContext = createContext();


export const SearchDataProvider = ({ children }) => {
    const [searchData, setSearchData] = useState("");
    const [locations, setLocations] = useState("")
    const [experience, setExperience] = useState("")
    const handleSearchData = (par) => {
        setSearchData(par);
    }
    const handleLocations = (el) => {
        setLocations(el);
    }
    const handleExperience = (el) => {
        setExperience(el);
    }

    return <SearchDataContext.Provider value={{ searchData, handleSearchData, handleLocations, locations, experience, handleExperience }}>{children}</SearchDataContext.Provider>
}

