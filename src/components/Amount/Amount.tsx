import * as React from 'react';
import './Amount.css';

interface Amount {
    list : OptionsAmount[],
    setAmount : React.Dispatch<React.SetStateAction<number>>,
    setPrice : React.Dispatch<React.SetStateAction<number>>,
    price: number,

}

interface OptionsAmount {
    label : number,
    value : number,
}


export const Amount: React.FC<Amount> = ({list,setAmount,setPrice,price}) => {

    const handleChange : React.ChangeEventHandler<HTMLSelectElement> = (event) =>{
        
        setAmount(parseInt(event.target.value));
        setPrice(parseInt(event.target.value) * price);
    }

    return (
        <section className='Amount'>
            <h1>Cantidad</h1>
            <select name="amount" className='Amount__select' onChange={handleChange}  >
            {list.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
            </select>
        </section>
    );
}