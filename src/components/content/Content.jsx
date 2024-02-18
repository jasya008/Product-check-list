// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";

import { ProductsLists } from "../productsList/ProductsLists";
import s from "./Content.module.css";

export const Content = ({ items, handleDelete, handleCheck }) => {
  return (
    <>
      <ProductsLists
        items={items}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
    </>
  );
};
