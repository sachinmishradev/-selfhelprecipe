import React, { Component } from 'react';
import Auxiliry from '../../hoc/Auxiliry';
import Burger from '../../components/Layout/Burger/Burger';
class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //             ingredients : {
    //                 salad : 1,
    //                 bacon :1,
    //                 paneer : 1,
    //                 cheese:1
    //             }
    //     }
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            paneer: 0,
            cheese: 0
        },
        totalPrice: 0
    }

    addIngredientHandller = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCounts = oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCounts;

        this.setState((prevState, props) => {
            return {
                ingredients: updatedIngredients
            }
        })
    }
    subIngredientHandller = (type) => {
        
        
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return false;
        }
        
        const updatedCounts = oldCount - 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCounts;

        this.setState((prevState, props) => {
            return {
                ingredients: updatedIngredients
            }
        })
    }

    render() {
        return (
            <Auxiliry>
                <div>Burger</div>
                <div><Burger ingredients={this.state.ingredients} /></div>
                <div>
                    <button onClick={() => this.addIngredientHandller('cheese')}>Cheese +</button>
                    <button onClick={() => this.addIngredientHandller('paneer')}>Paneer +</button>
                    <button onClick={() => this.addIngredientHandller('salad')}>Salad +</button>
                    <button onClick={() => this.addIngredientHandller('bacon')}>Bacon +</button><br></br>
                    <button onClick={() => this.subIngredientHandller('cheese')}>Cheese -</button>
                    <button onClick={() => this.subIngredientHandller('paneer')}>Paneer -</button>
                    <button onClick={() => this.subIngredientHandller('salad')}>Salad -</button>
                    <button onClick={() => this.subIngredientHandller('bacon')}>Bacon -</button>
                </div>
            </Auxiliry>
        );
    }
}


export default BurgerBuilder;