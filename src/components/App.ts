import * as React from 'react';

export interface IAppProps {
	name: string;
}
class App extends React.Component<IAppProps, {}> {
	render(): React.ReactNode {
		return (React.createElement('h1', null, `${this.props.name}`));
	}
}

export default App;