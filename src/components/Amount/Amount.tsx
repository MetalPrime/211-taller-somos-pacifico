import * as React from 'react';
import './Amount.css';

interface Amount {
    list : OptionsAmount[],
    setAmount : React.Dispatch<React.SetStateAction<number>>,


}

interface OptionsAmount {
    label : number,
    value : number,
}


export const Amount: React.FC<Amount> = ({list,setAmount}) => {

    const handleChange : React.ChangeEventHandler<HTMLSelectElement> = (event) =>{
        
        setAmount(parseInt(event.target.value));
        
    }

    return (
        <section className='Amount'>
            
            <h1>Cantidad</h1>
            <select name="amount" className='Amount__select' onChange={handleChange}  >
            {list.map((option) => (
              <option value={option.value} key={option.value}>{option.label}</option>
            ))}
            </select>
        </section>
    );
}