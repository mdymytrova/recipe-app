import * as React from 'react';
import './App.scss';
import { IRecipe } from '../interfaces';
import RecipeList from './recipe-list/RecipeList';
import AddRecipe from './add-recipe/AddRecipe';
import Navbar from './navbar/Navbar';
import RECIPES from '../constants/recipes.constant';
import DEFAULT_IMAGE from '../constants/default-image.constant';

interface IRecipeState {
	recipes: IRecipe[];
	newRecipeId: number;
	showAddRecipe: boolean;
}

class App extends React.Component<{}, IRecipeState> {
	constructor(props: object) {
		super(props);
		this.state = {
			recipes: RECIPES,
			newRecipeId: 2,
			showAddRecipe: false
		};
	}

    private submitHandler = (newRecipe: IRecipe): void => {
		const { newRecipeId } = this.state;
		this.setState((prevState: IRecipeState, props) => {
			const imgSrc = newRecipe.img || DEFAULT_IMAGE;
			const recipeToAdd = {...newRecipe, id: newRecipeId, img: imgSrc};
			return {
				recipes: [...prevState.recipes, recipeToAdd],
				newRecipeId: newRecipeId + 1,
				showAddRecipe: false
			};
		});
	}
	
	private addRecipeButtonHandler = (): void => {
		this.setState((prevState: IRecipeState, props) => {
			return {
				showAddRecipe: !prevState.showAddRecipe
			};
		});
	}

	private deleteRecipeHandler = (recipeId: number) => {
		const { recipes } = this.state;
		const filteredRecipes = recipes.filter((recipe: IRecipe) => {
			return recipe.id !== recipeId;
		});

		this.setState({recipes: filteredRecipes});
	}

	private getAddRecipeStyle(): string {
		return this.state.showAddRecipe ? 'add-recipe-container' : 'hidden';
	}

	render(): React.ReactNode {
		const { recipes } = this.state;
		return (
			<div>
				<Navbar addRecipeButtonHandler={this.addRecipeButtonHandler}/>
				<div className={this.getAddRecipeStyle()}>
					<AddRecipe 
						submitHandler={this.submitHandler} 
						closeHandler={this.addRecipeButtonHandler}
					/>
				</div>
				<RecipeList recipes={recipes} deleteRecipeHandler={this.deleteRecipeHandler}/>
			</div>
		);
	}
}

export default App;