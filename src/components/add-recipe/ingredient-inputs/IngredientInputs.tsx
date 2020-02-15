import React, { FunctionComponent } from 'react';
// import { IIngredient } from '../../../interfaces';

interface IIngredientInputs {
    ingredients: string[];
    changeHandler: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}
const IngredientInputs: FunctionComponent<IIngredientInputs> = ({ingredients, changeHandler}): JSX.Element => {
    return (
        <div className="ingredients-inputs-container flex-2">
            {ingredients.map((ingredient, index) => {
                return (
                    <div className="index-wrapper" key={index}>
                        <span>{index + 1}.</span>
                        <input
                            className="recipe-input ingredient-input"
                            placeholder="Ex: 5 potatos"
                            type="text"
                            name={`${index}`}
                            id={`${index}`}
                            value={ingredient}
                            onChange={changeHandler}/>
                    </div>
                );
            })}
        </div>
    );
};

export default IngredientInputs;