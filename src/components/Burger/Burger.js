import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)   // this returns an array with its elements as object's keys as strings
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => { //video 12. Outputting Burger Ingredients Dynamically
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);  //transforms an array of array to an array

    console.log(transformedIngredients)

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding Ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;