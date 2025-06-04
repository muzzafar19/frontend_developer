import { useContext } from "react"
import { ChecklistContext } from "./ChecklistContext"

const items = ["tea", "coffee", "juice", "water"]

const Checklist = () => {
    const { selectedItems, toggleItem } = useContext(ChecklistContext);

    const handleChange = (event) => {
        const item = event.target.name;
        toggleItem(item);
    };

    return (
        <div>
            <h2>Select Your Items</h2>
            {items.map((item) => (
                <div key={item}>
                    <label>
                        <input
                            type="checkbox"
                            name={item}
                            checked={selectedItems.includes(item)}
                            onChange={handleChange}
                        />
                        {item}
                    </label>
                </div>
            ))}

            <h3>Selected Items:</h3>
            <ul>
                {selectedItems.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <hr />


        </div>
    )
}

export default Checklist;