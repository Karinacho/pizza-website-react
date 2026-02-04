import {PizzaTypeDropdown} from "./components/PizzaTypeDropdown.jsx";
import {PizzaSizeSelector} from "./components/PizzaSizeSelector.jsx";
import {useState} from "react";

export const Order = () => {
    const [selectedType, setSelectedType] = useState('pepperoni');
    const [pizzaSize, setPizzaSize] = useState('S');

    const handlePizzaTypeChange = (value) => {
        setSelectedType(value)
    }

    const handlePizzaSizeChange = (value) => {setPizzaSize(value)}

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Order', {selectedType,  pizzaSize})
        // Submit to API, etc.
    }
    return (
        <div>
            <h1>Create New Order</h1>
            <form onSubmit={handleSubmit}>
                <PizzaTypeDropdown selectedType={selectedType} handlePizzaTypeChange={handlePizzaTypeChange}/>
                <PizzaSizeSelector pizzaSize={pizzaSize} handleSizeChange={handlePizzaSizeChange}/>
                <button type='submit'>Order</button>
            </form>

        </div>
    )
}