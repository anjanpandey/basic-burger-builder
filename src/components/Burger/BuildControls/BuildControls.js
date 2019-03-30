import React from 'react';
import classes from './BuildControls.css';
import {SALAD, BACON, MEAT, CHEESE} from '../../../hoc/Constants';
import BuildControl  from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: SALAD},
    {label: 'Bacon', type: BACON},
    {label: 'Cheese', type: CHEESE},
    {label: 'Meat', type: MEAT}
];

const buildControls = props => {
    const allControls = controls.map(ctrl => {
        return <BuildControl 
                 key={ctrl.label} 
                 label={ctrl.label} 
                 added={() => props.addedIngredient(ctrl.type)}
                 removed={() => props.removedIngredient(ctrl.type)}
                 disabled={props.disabled[ctrl.type]}/>;
            });

    return (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
        {allControls}
        <button className={classes.OrderButton}
                disabled={!props.canorder} 
                onClick={props.ordered}>
            ORDER NOW
        </button>
    </div>
    );
};

export default buildControls;