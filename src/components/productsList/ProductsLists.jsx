import React from "react";
import { ProductItem } from "./ProductItem";

export const ProductsLists = ({ items, handleDelete, handleCheck }) => {
  return (
    <ul>
      {items.length ? (
        items.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        ))
      ) : (
        <h4>Список продуктов пуст!</h4>
      )}
    </ul>
  );
};
