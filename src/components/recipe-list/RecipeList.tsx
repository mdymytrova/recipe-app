import React from 'react';
import './RecipeList.scss';
import { IRecipe } from '../../interfaces';
import Recipe from './recipe/Recipe';

interface IRecipeList {
	recipes: IRecipe[];
}

class RecipeList extends React.Component<IRecipeList, {}> {
    constructor(props: IRecipeList) {
        super(props);
    }

    render(): React.ReactNode {
		const { recipes } = this.props;
		return (
            <div className="recipe-list-container">
                {recipes.map((recipe: IRecipe) => {
                    return (<Recipe key={recipe.id} {...recipe}/>);
                })}
            </div>
		);
    }
}

export default RecipeList;