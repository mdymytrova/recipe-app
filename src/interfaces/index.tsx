export interface IRecipe {
    id: number;
    title: string;
    ingredients: string[];
    instructions: string;
    img: string;
}

export interface IRecipeState {
    isCollapsed: boolean;
}
