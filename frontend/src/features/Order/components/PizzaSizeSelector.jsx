import {useState} from "react";

export const PizzaSizeSelector = ({pizzaSize, handleSizeChange}) => {
    const pizzaSizes = ['S', 'M', 'L'];

    return (
        <div>
            <label htmlFor={"pizza-size"}>Pizza Size</label>
            <div>
                <span>
                    <input
                        onChange={(e) => handleSizeChange(e.target.value)}
                        checked={pizzaSize === 'S'}
                        type="radio"
                        name={"pizza-size"}
                        value={"S"}
                        id={"pizza-s"}
                    />
                    <label htmlFor={"pizza-s"}>Small</label>
                </span>
                <span>
                    <input
                        onChange={(e) => handleSizeChange(e.target.value)}
                        checked={pizzaSize === 'M'}
                        type='radio'
                        name={"pizza-size"}
                        value={"M"}
                        id={'pizza-m'}
                    />
                     <label htmlFor={"pizza-m"}>Medium</label>
                </span>
                <span>
                    <input
                        onChange={(e) => handleSizeChange(e.target.value)}
                        checked={pizzaSize === 'L'}
                        type='radio'
                        name={"pizza-size"}
                        value={"L"}
                        id={'pizza-l'}
                    />
                     <label htmlFor={"pizza-l"}>Large</label>
                </span>
            </div>

        </div>
    )
}