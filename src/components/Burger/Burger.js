import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  const ingredients = Object.keys(props.ingredients).map(key => {
    return [...Array(props.ingredients[key])].map((_, index) => {
      return <BurgerIngredient key={key + index} type={key} />;
    });
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
