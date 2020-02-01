import React, { FunctionComponent } from 'react';

const IngredientComponent: FunctionComponent<{ ingredient: string }> = ({ ingredient }): JSX.Element => {
    return (
        <li>{ingredient}</li>
    );
}

export default IngredientComponent;