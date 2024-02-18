import React from "react";

export const Footer = () => {
  const date = new Date();

  return <footer>Copyright &copy; {date.getFullYear()}</footer>;
};
