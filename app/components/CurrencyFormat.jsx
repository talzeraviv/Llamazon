import React from "react";

const CurrencyFormat = ({ value }) => {
  return new Intl.NumberFormat("he-IL", {
    style: "currency",
    currency: "ILS",
  }).format(value);
};

export default CurrencyFormat;
