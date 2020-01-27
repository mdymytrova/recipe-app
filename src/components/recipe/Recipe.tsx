import React from 'react';
import './Recipe.scss';

export interface IRecipe {
    id: number;
    title: string;
    ingredients: string[];
    instructions: string;
    img: string;
}
export class Recipe extends React.Component<IRecipe, {}> {
    render(): React.ReactNode {
        const { title, ingredients, instructions, img: imgSource } = this.props;
        const ingredientsComponent: JSX.Element = this.getIngredientsComponent(ingredients);
        return(
            <article className="recipe-container">
                <img src={imgSource} alt={title} className="recipe-img"/>
                <section className="recipe-content">
                    <h2 className="recipe-header__main">{title}</h2>
                    {ingredientsComponent}
                    <section className="recipe-section">
                        <h4 className="recipe-header__section">Instructions:</h4>
                        <p>{instructions}</p>
                    </section>
                </section>
            </article>
        );
    }

    private getIngredientsComponent(ingredients: string[] = []): JSX.Element {
        const items: JSX.Element[] = ingredients.map((ingredient, index) => {
            return (
                <li key={index}>{ingredient}</li>
            );
        });

        return (
            <section className="recipe-section">
                <h4 className="recipe-header__section">You will need:</h4>
                <ul>{items}</ul>
            </section>
        );
    }
}