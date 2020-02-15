import React from 'react';
import './Recipe.scss';
import { IRecipe, IRecipeState } from '../../../interfaces';
import IngredientListComponent from './ingredients/IngredientList';
import InstructionsComponent from './instructions/Instructions';
import RecipeHeader from './recipe-header/RecipeHeader';

enum ToggleButtons {
    SHOW = 'Show Recipe',
    HIDE = 'Hide Recipe'
}

type IRecipeWithHandler = IRecipe & {deleteRecipeHandler: () => void};

class Recipe extends React.Component<IRecipeWithHandler, IRecipeState> {
	constructor(props: IRecipeWithHandler) {
		super(props);
        this.state = { isCollapsed: true };
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

    render(): React.ReactNode {
        const { title, ingredients, instructions, img: imgSource, deleteRecipeHandler } = this.props;
        return(
            <article className="recipe-container">
                <RecipeHeader title={title} imgSource={imgSource} />
                <button onClick={this.toggleRecipe}>{this.getButtonLabel()}</button>
                <section className="recipe-content" style={this.getRecipeDisplay()}>
                    <IngredientListComponent ingredients={ingredients} />
                    <InstructionsComponent instructions={instructions} />
                    <button type="button" onClick={deleteRecipeHandler}>Delete</button>
                </section>
            </article>
        );
    }
}

export default Recipe;