import React from 'react';
import './RecipeList.scss';
import { IRecipe } from '../../interfaces';
import Recipe from './recipe/Recipe';

interface IRecipeList {
    recipes: IRecipe[];
    deleteRecipeHandler: (id: number) => void;
}

class RecipeList extends React.Component<IRecipeList, {}> {
    constructor(props: IRecipeList) {
        super(props);
    }

    private deleteRecipe = (id: number): () => void => {
        return () => {
            const { deleteRecipeHandler } = this.props;
            deleteRecipeHandler(id);
        }
    }

    render(): React.ReactNode {
		const { recipes } = this.props;
		return (
            <div className="recipe-list-container">
                {recipes.map((recipe: IRecipe) => {
                    return (
                        <Recipe
                            key={recipe.id}
                            {...recipe}
                            deleteRecipeHandler={this.deleteRecipe(recipe.id)}
                        />
                    );
                })}
            </div>
		);
    }
}

export default RecipeList;