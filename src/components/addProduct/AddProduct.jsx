import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import s from "./AddPoduct.module.css";
export const AddProduct = ({productName, setProductName, addProduct}) => {
 

  const handleSubmit = (e) => {
	e.preventDefault();
    
    addProduct(productName);
  };

  return (
    <form className={s.addForm} onSubmit={handleSubmit}>
      <label htmlFor="addItem">Добавить продукт</label>
      <input
        type="text"
        autoFocus
        placeholder="Добавить продукт"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        required
      />
      <button type="submit">
        <AiOutlinePlus />
      </button>
    </form>
  );
};
