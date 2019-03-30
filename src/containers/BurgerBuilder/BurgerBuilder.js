import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.75,
    meat: 1.5,
    bacon:1
};

class BurgerBuilder extends React.Component {
    state = {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice: 2.5,
        canOrder: false,
        ordering: false
    }

    updateCanOrderState = ingredients => {
        // array of values
        const sum = Object.keys(ingredients)
                    .map(igKey => {
                        return ingredients[igKey]
                    }).reduce((newSum, el) => {
                        return newSum + el;
                    },0);
        // set can order flag
        this.setState({canOrder: sum > 0});
    }

    addIngredientHandler = type => {
        // get the previous count
        const oldCount = this.state.ingredients[type];
        // add one to the count and store it 
        const updatedCount = oldCount + 1;
        // mutate the previous state
        const updatedIngredients = {
            ...this.state.ingredients
        };
        // assign new count to the type ingredient that was changed
        updatedIngredients[type] = updatedCount;
        // get the new price 
        const addedPrice = INGREDIENT_PRICES[type]; 
        // get the old price
        const oldPrice = this.state.totalPrice;
        // set the new price
        const newPrice = oldPrice + addedPrice;
        // set previous state to the new updated state
        this.setState({
            ingredients : updatedIngredients,
            totalPrice: newPrice
        });
        // identify whether to enable/disable order now button
        this.updateCanOrderState(updatedIngredients);
    }

    removeIngredientHandler = type => {
        // get the previous count
        const oldCount = this.state.ingredients[type];
        // if nothing to remove then
        if(oldCount <= 0) {
            return;
        }
        // add one to the count and store it 
        const updatedCount = oldCount - 1;
        // mutate the previous state
        const updatedIngredients = {
            ...this.state.ingredients
        };
        // assign new count to the type ingredient that was changed
        updatedIngredients[type] = updatedCount;
        // get the new price 
        const addedPrice = INGREDIENT_PRICES[type]; 
        // get the old price
        const oldPrice = this.state.totalPrice;
        // set the new price
        const newPrice = oldPrice - addedPrice;
        // set previous state to the new updated state
        this.setState({
            ingredients : updatedIngredients,
            totalPrice: newPrice
        });
        // identify whether to enable/disable order now button
        this.updateCanOrderState(updatedIngredients);
    }

    orderHandler = () => {
        this.setState({
            ordering: true
        });
    };

    cancelOrderHandler = () => {
        this.setState({
            ordering: false
        });
    };

    continueOrderHandler = () => {
        alert('You continued!');
    }

    render() {
        // get all ingredients
        const items = {
            ...this.state.ingredients
        };
        // for each ingredient, identify true/false based on count
        // change the items to store [ingredient, true/false]
        for(let item in items) {
            items[item] = items[item] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.ordering} modalClosed={this.cancelOrderHandler}>
                    <OrderSummary 
                        price={this.state.totalPrice}
                        ingredients={this.state.ingredients}
                        cancelOrder={this.cancelOrderHandler}
                        continueOrder={this.continueOrderHandler}
                        />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    addedIngredient={this.addIngredientHandler} 
                    removedIngredient = {this.removeIngredientHandler}
                    disabled={items}
                    price={this.state.totalPrice}
                    canorder={this.state.canOrder}
                    ordered={this.orderHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;