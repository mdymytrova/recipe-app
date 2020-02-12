import React, { FunctionComponent } from 'react';
import IngredientComponent from './Ingredient';

interface IIngredientsList {
    ingredients: string[];
}

const IngredientListComponent: FunctionComponent<IIngredientsList> = ({ ingredients }): JSX.Element => {
    return (
        <section>
            <h4>You will need:</h4>
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