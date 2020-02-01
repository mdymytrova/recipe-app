import React, { FunctionComponent } from 'react';
import '../App.scss';

interface IInstructions {
    instructions: string;
}

const InstructionsComponent: FunctionComponent<IInstructions> = ({ instructions }): JSX.Element => {
    return (
        <section className="recipe-section">
            <h4 className="recipe-header__section">Instructions:</h4>
            <p>{instructions}</p>
        </section>
    );
}

export default InstructionsComponent;