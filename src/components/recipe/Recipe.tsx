import React from 'react';
import './Recipe.scss';
import { IRecipe, IRecipeState } from '../../interfaces';
import IngredientListComponent from '../ingredients/IngredientList';
import InstructionsComponent from '../instructions/Instructions';
import RecipeHeader from '../recipe-header/RecipeHeader';

enum ToggleButtons {
    SHOW = 'Show Recipe',
    HIDE = 'Hide Recipe'
}

export class Recipe extends React.Component<IRecipe, IRecipeState> {
    
	constructor(props: IRecipe) {
		super(props);
        this.state = { isCollapsed: true };
    }

    render(): React.ReactNode {
        const { title, ingredients, instructions, img: imgSource } = this.props;
        return(
            <article className="recipe-container">
                <RecipeHeader title={title} imgSource={imgSource} />
                <button onClick={this.toggleRecipe}>{this.getButtonLabel()}</button>
                <section className="recipe-content" style={this.getRecipeDisplay()}>
                    <IngredientListComponent ingredients={ingredients} />
                    <InstructionsComponent instructions={instructions} />
                </section>
            </article>
        );
    }

    private getRecipeDisplay = () => {
        return { display: this.state.isCollapsed ? 'none' : 'block' };
    }

    private getButtonLabel = (): string => {
        return this.state.isCollapsed ? ToggleButtons.SHOW : ToggleButtons.HIDE;
    }

    private toggleRecipe = (): void => {
        this.setState(state => {
            return { 
                isCollapsed: !state.isCollapsed 
            };
        });
    }
}