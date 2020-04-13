import React, { Suspense, Fragment } from 'react';
import ReactDOM from 'react-dom';

const CovidApp = React.lazy(() => import('./components/CovidApp'));
import('./styles/style.css');
// import('./styles/bootstrap.min.css');

const App = () => (
	<Fragment>
		<Suspense fallback={<div>Loading...</div>}>
			<CovidApp />
		</Suspense>
	</Fragment>
);

ReactDOM.render(<App />, document.getElementById('app'));
