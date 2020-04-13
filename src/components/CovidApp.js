import React, { Fragment, Suspense } from 'react';

const CovidForm = React.lazy(() => import('./CovidForm'));
const CovidInfo = React.lazy(() => import('./CovidInfo'));


const CovidApp = () => (
	<Fragment>
		<Suspense fallback={<div>Loading...</div>}>
			<div className="page-content">
				<div className="form-v4-content">
					<CovidInfo />
					<CovidForm />
				</div>
			</div>
		</Suspense>
	</Fragment>
);

export default CovidApp;
