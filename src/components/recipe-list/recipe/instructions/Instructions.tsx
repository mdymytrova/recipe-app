import React, { FunctionComponent } from 'react';

interface IInstructions {
    instructions: string;
}

const InstructionsComponent: FunctionComponent<IInstructions> = ({ instructions }): JSX.Element => {
    return (
        <section>
            <h4>Instructions:</h4>
            <p>{instructions}</p>
        </section>
    );
}

export default InstructionsComponent;