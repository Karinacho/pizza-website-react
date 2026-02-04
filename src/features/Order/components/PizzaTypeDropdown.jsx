import {useState} from "react";

const pizzaTypesArr = ['pepperoni', 'pizza-1'];

export const PizzaTypeDropdown = ({selectedType, handlePizzaTypeChange}) => {

    const [pizzaTypes, setPizzaTypes] = useState(pizzaTypesArr);


    return (
        <div>

            <label htmlFor={"pizza-type"}>Pizza Type</label>
            <select name={"pizza-type"} value={selectedType}
                    onChange={(e) =>
                        handlePizzaTypeChange(e.target.value)}
            >
                <option value={'pepperoni'}>Pepperoni</option>
                <option value={'pizza-1'}>Pizza-1</option>
            </select>
        </div>
    )
}