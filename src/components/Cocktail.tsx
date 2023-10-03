import React from "react";

type Props = {
  idDrink: number;
  strDrink: string;
  strCategory: string
  strDrinkThumb: string
};

const Cocktail = ({ strDrink, strCategory, idDrink, strDrinkThumb  }: Props) => {
  return <div>
    {strDrink}
    <img src={strDrinkThumb} alt="" />
  </div>;
};

export default Cocktail;
