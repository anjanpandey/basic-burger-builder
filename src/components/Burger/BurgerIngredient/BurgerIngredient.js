import React from 'react';
import classes from './BurgerIngredient.css';
import {BREAD_TOP, BREAD_BOTTOM, SALAD, BACON, MEAT, CHEESE} from '../../../hoc/Constants';
import PropTypes from 'prop-types';

class BurgerIngredient extends React.Component {
    render() {
        let ingredient = null;
    switch(this.props.type){
        case BREAD_BOTTOM:
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case BREAD_TOP:
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case MEAT:
                ingredient = <div className={classes.Meat}></div>;
                break;
        case CHEESE:
                ingredient = <div className={classes.Cheese}></div>;
                break;
        case SALAD:
                ingredient = <div className={classes.Salad}></div>;
                break;
        case BACON:
                ingredient = <div className={classes.Bacon}></div>;
                break;
        default:
                ingredient=null;
    }
    return ingredient;
}
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;