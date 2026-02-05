import {useState} from "react";

export const useOrder = () => {
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

   return {
        selectedType,
        pizzaSize,
        handlePizzaTypeChange,
        handlePizzaSizeChange,
        handleSubmit,
    }
}