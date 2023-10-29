import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
      setInputValue(target.value);
    }

    const onSubmit = (e) => {
      e.preventDefault();
      const cleanInputValue = inputValue.trim();
      if (cleanInputValue.length <= 1) return;
      onNewCategory(cleanInputValue)
      //setCategories(categories => [inputValue, ...categories]);
      setInputValue('');
    }

    return (
      <form onSubmit={ onSubmit }>
        <input 
          type="text" 
          placeholder="Buscar Gifs"
          value={inputValue}
          onChange={event => onInputChange(event)}
        />  
      </form>
    )
}
