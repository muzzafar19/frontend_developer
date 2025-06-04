import { createContext, useState } from "react";


export const ChecklistContext = createContext();

export const ChecklistProvider = ({ children }) => {
    const [selectedItems, setSelectedItems] = useState([])

    const toggleItem = (item) => {
        setSelectedItems((prev) =>
            prev.includes(item)
                ? prev.filter((i) => i !== item)
                : [...prev, item]
        );
    };

    return (
        <ChecklistContext.Provider value={{ selectedItems, toggleItem }}>
            {children}
        </ChecklistContext.Provider>
    )
}