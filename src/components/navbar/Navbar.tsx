import React from 'react';

interface INavbarProps {
    addRecipeButtonHandler: () => void;
}
class Navbar extends React.Component<INavbarProps, {}> {
    constructor(props: any) {
        super(props);
    }
    render(): React.ReactNode {
        const { addRecipeButtonHandler } = this.props;
        return(
            <div>
                <button onClick={addRecipeButtonHandler}>Add New Recipe</button>
            </div>
        );
    }
}

export default Navbar;