import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';
import {BREAD_TOP, BREAD_BOTTOM} from '../../hoc/Constants';
// reduce - transfer an array into something else
const burger = props => {
    let transformedIngredients 
    = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                    .map((_, index) => {
                return <BurgerIngredient key={igKey + index} type={igKey}/>;
            });
        }).reduce((prevValue, currentValue) => {
            return prevValue.concat(currentValue);
        }, []);
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={BREAD_TOP}/>
            {transformedIngredients}
            <BurgerIngredient type={BREAD_BOTTOM}/>
        </div>
    );
}

export default burger;