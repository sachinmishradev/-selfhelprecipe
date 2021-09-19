import React from 'react'
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(ekyes => {
            return [...Array(props.ingredients[ekyes])].map((_, i) => {
                return <BurgerIngredient key={ekyes + i} type={ekyes}></BurgerIngredient>
            })
        }).reduce((arr, el) => {
                      return arr.concat(el);
    });
    
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={'bread-top'}></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type={'bread-bottom'}></BurgerIngredient>
        </div>
    )
}


export default Burger;