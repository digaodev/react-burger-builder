import React, { Component } from 'react';

import PropTypes from 'prop-types'

import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    if (this.props.type === 'bread-bottom') {
      ingredient = <div className={classes.BreadBottom} />;
    } else if (this.props.type === 'bread-top') {
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds1} />
        </div>
      );
    } else if (this.props.type === 'meat') {
      ingredient = <div className={classes.Meat} />;
    } else if (this.props.type === 'cheese') {
      ingredient = <div className={classes.Cheese} />;
    } else if (this.props.type === 'salad') {
      ingredient = <div className={classes.Salad} />;
    } else if (this.props.type === 'bacon') {
      ingredient = <div className={classes.Bacon} />;
    } else {
      ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredient;
