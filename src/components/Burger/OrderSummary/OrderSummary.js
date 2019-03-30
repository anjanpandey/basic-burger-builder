import React from 'react';
import Aux from  '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {
    // this could be a function component
    // wrapped by modal - so if modal changes then only it changes
    // how parent element can control the wrapped items

    render() {
            const ingredientSummary = Object.keys(this.props.ingredients)
                                .map(igKey => {
                                    return (
                                    <li key={igKey}>
                                        <span style={{textTransform:'capitalize'}}>{igKey}</span>: 
                                        {this.props.ingredients[igKey]}
                                    </li>
                                    );
                                });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <center style={{color:'blue'}}><strong>Total Price: ${this.props.price.toFixed(2)}</strong></center>
                <p>Continue to Checkout?</p>
                <Button clicked={this.props.cancelOrder} btnType="Danger">CANCEL</Button>
                <Button clicked={this.props.continueOrder} btnType="Success">CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;