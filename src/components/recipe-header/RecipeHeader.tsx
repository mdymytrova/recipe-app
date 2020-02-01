import React, { FunctionComponent } from 'react';
import '../App.scss';
import './RecipeHeader.scss';

interface IRecipeHeader {
    imgSource: string;
    title: string;
}

const RecipeHeader: FunctionComponent<IRecipeHeader> = ({ imgSource, title }): JSX.Element => {
    return (
        <section className="recipe-header-container">
            <img src={imgSource} alt={title} className="recipe-img"/>
            <h2 className="recipe-main-title">{title}</h2>
        </section>
    );
}

export default RecipeHeader;