import React, { FunctionComponent } from 'react';
import '../App.scss';
import IngredientComponent from './Ingredient';

interface IIngredientsList {
    ingredients: string[];
}

const IngredientListComponent: FunctionComponent<IIngredientsList> = ({ ingredients }): JSX.Element => {
    return (
        <section className="recipe-section">
            <h4 className="recipe-header__section">You will need:</h4>
            <ul>{
                ingredients.map((ingredient, index) => {
                    return (
                        <IngredientComponent key={index} ingredient={ingredient}/>
                    );
                })
            }</ul>
        </section>
    );
}

export default IngredientListComponent;