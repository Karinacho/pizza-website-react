import {PizzaTypeDropdown} from "./components/PizzaTypeDropdown.jsx";
import {PizzaSizeSelector} from "./components/PizzaSizeSelector.jsx";
import {useOrder} from "./hooks/useOrder.js";

export const Order = () => {
   const {selectedType, pizzaSize, handlePizzaTypeChange, handlePizzaSizeChange, handleSubmit} = useOrder();

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