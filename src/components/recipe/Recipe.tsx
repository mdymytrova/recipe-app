import React from 'react';
import './Recipe.scss';

export interface IRecipe {
    id: number;
    title: string;
    ingredients: string[];
    instructions: string;
    img: string;
}

enum ToggleButtons {
    SHOW = 'Show Recipe',
    HIDE = 'Hide Recipe'
}

interface IRecipeState {
    isCollapsed: boolean;
}
export class Recipe extends React.Component<IRecipe, IRecipeState> {
    
	constructor(props: IRecipe) {
		super(props);
        this.state = { isCollapsed: true };
    }

    render(): React.ReactNode {
        const { title, ingredients, instructions, img: imgSource } = this.props;
        const ingredientsComponent: JSX.Element = this.getIngredientsComponent(ingredients);
        return(
            <article className="recipe-container">
                <div className="recipe-container__img">
                    <img src={imgSource} alt={title} className="recipe-img"/>
                    <h2 className="recipe-header__main">{title}</h2>
                </div>
                <button onClick={this.toggleRecipe}>{this.getButtonLabel()}</button>
                <section className="recipe-content" style={this.getRecipeDisplay()}>
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

    private getRecipeDisplay = () => {
        return { display: this.state.isCollapsed ? 'none' : 'block' };
    }

    private getButtonLabel = (): string => {
        return this.state.isCollapsed ? ToggleButtons.SHOW : ToggleButtons.HIDE;
    }

    private toggleRecipe = (): void => {
        this.setState({ isCollapsed: !this.state.isCollapsed });
    }
}