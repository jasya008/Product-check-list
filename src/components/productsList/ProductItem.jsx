import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import s from "./ProductsList.module.css";

export const ProductItem = ({product, handleDelete, handleCheck}) => {
  return (
    <li key={product.id} className={s.item}>
      <input
        type="checkbox"
        checked={product.checked}
        onChange={() => handleCheck(product.id)}
      />
      <label
        style={product.checked ? { textDecoration: "line-through" } : null}
      >
        {product.name}
      </label>
      <FaTrashAlt type="button" onClick={() => handleDelete(product.id)} />
    </li>
  );
};
