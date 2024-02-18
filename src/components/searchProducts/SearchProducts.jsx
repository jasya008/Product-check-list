import React from "react";

import s from "./SearchProducts.module.css";

export const SearchProducts = ({ search, setSearch }) => {
  return (
    <form className={s.searchForm}>
      <label htmlFor="search" id="search">
        Поиск
      </label>
      <input
        type="text"
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};
