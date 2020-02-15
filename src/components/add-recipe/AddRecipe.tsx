import React from 'react';
import { IRecipe } from '../../interfaces';
import './AddRecipe.scss';
import IngredientInputs from './ingredient-inputs/IngredientInputs';

interface IAddRecipeProps {
    closeHandler: (event: React.FormEvent<HTMLButtonElement>) => void;
    submitHandler: (state: IAddRecipeState) => void;
}
type IAddRecipeState = Omit<IRecipe, 'id'>;

class AddRecipe extends React.Component<IAddRecipeProps, IAddRecipeState> {

    constructor(props: IAddRecipeProps) {
        super(props);
        this.state = this.getClearForm();
    }

    private onInputChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { value, name: key } = event.currentTarget;
		this.setState({ [key]: value } as any);
    }

    private onIngredientsChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { ingredients } = this.state;
        const { value, name: id } = event.currentTarget;
        const updatedIngredients = [...ingredients];
        updatedIngredients[parseInt(id)] = value;
		this.setState({ingredients: updatedIngredients});
    }

    private addIngredientHandler = (event: React.FormEvent<HTMLButtonElement>): void => {
        const { ingredients } = this.state;
        this.setState({ingredients: [...ingredients, '']});
    }

    private addRecipeHandler = (event: React.FormEvent<HTMLButtonElement | HTMLFormElement>): void => {
        event.preventDefault();
        const { submitHandler } = this.props;
        submitHandler(this.state);
        this.setState(this.getClearForm());
    }

    private getClearForm(): IAddRecipeState {
        return {
            title: '',
            ingredients: [''],
            instructions: '',
            img: ''
        };
    }

    render(): React.ReactNode {
        const { title, ingredients, instructions, img: imgSrc } = this.state;
        const { closeHandler } = this.props;
        return(
            <form className="add-recipe-form" onSubmit={this.addRecipeHandler}>
                <button 
                    type="button" 
                    className="button-fit-content flex-end"
                    onClick={closeHandler}>X
                </button>
                <div className="flex-container-row row-padding">
                    <label className="flex-1" htmlFor="title">Title:</label>
                    <input 
                        className="recipe-input flex-2"
                        placeholder="Ex: Potato Salad"
                        type="text"
                        name="title"
                        id="title"
                        required
                        value={title}
                        onChange={this.onInputChange}/>
                </div>
                <div className="flex-container-row row-padding">
                    <label className="flex-1" htmlFor="ingredients">Ingredients:</label>
                    <div className="flex-2 flex-container-row">
                        <IngredientInputs ingredients={ingredients} changeHandler={this.onIngredientsChange}/>
                        <button
                            type="button"
                            className="button-fit-content add-ingredient-button"
                            onClick={this.addIngredientHandler}>+
                        </button>
                    </div>
                </div>
                <div className="flex-container-row row-padding">
                    <label className="flex-1" htmlFor="instructions">Instructions:</label>
                    <textarea
                        className="recipe-input flex-2"
                        placeholder="Ex: Boil potatos"
                        name="instructions"
                        id="instructions"
                        required
                        value={instructions}
                        onChange={this.onInputChange}>
                    </textarea>
                </div>
                <div className="flex-container-row row-padding">
                    <label className="flex-1"htmlFor="img">Image link:</label>
                    <input 
                        className="recipe-input flex-2"
                        placeholder="http://"
                        type="text"
                        name="img"
                        id="img"
                        value={imgSrc}
                        onChange={this.onInputChange}/>
                </div>
                <button
                    type="submit"
                    className="button-fit-content flex-end">Add
                </button>
            </form>
        );
    }
}

export default AddRecipe;