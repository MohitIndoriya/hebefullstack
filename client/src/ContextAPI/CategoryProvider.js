import { createContext, useState } from "react";

export const Category = createContext();

export const CategoryProvider = ({children}) => {
    const [searchcategory, setCategory] = useState("");
    const categoryChanged = (value) => {
        return setCategory(value);
        
    }

    return <Category.Provider value={{searchcategory, categoryChanged}}>
        {children}
    </Category.Provider>
}
