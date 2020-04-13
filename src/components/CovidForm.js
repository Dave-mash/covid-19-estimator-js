import React, { Fragment } from 'react';
import { Formik, Field } from 'formik';

const CovidForm = () => (
	<Fragment>
		<Formik
			className="form-detail"
			id="myform"
			initialValues={{
				population: '',
				timeToElapse: '',
				reportedCases: '',
				totalHospitalBeds: '',
				periodType: 'days'
			}}
			onSubmit={(values, { setSubmitting }) => {
				console.log(values);
				setSubmitting(false);
			}}
		>
			{({
				values,
				handleChange,
				handleSubmit
			}) => (
				<form
					className="form-detail"
					id="myform"
					onSubmit={handleSubmit}
				>
					<h2>INPUT DATA</h2>
					<div className="form-group">
						<div className="form-row form-row-1">
							<label htmlFor="population">Population</label>
							<Field
								type="number"
								name="population"
								id="population"
								className="input-text"
								onChange={handleChange}
								value={values.population}
								data-population={values.population}
								required
							/>
						</div>
						<div className="form-row form-row-1">
							<label htmlFor="timeToElapse">Time To Elapse</label>
							<Field
								type="number"
								name="timeToElapse"
								id="timeToElapse"
								className="input-text"
								onChange={handleChange}
								value={values.timeToElapse}
								data-time-to-elapse={values.timeToElapse}
								required
							/>
						</div>
					</div>
					<div className="form-row">
						<label htmlFor="reportedCases">Reported Cases</label>
						<Field
							type="number"
							name="reportedCases"
							id="reportedCases"
							className="input-text"
							onChange={handleChange}
							value={values.reportedCases}
							data-reported-cases={values.reportedCases}
							required
						/>
					</div>
					<div className="form-group">
						<div className="form-row form-row-1 ">
							<label htmlFor="totalHospitalBeds">Total Hospital Beds</label>
							<Field
								type="number"
								name="totalHospitalBeds"
								id="totalHospitalBeds"
								className="input-text"
								onChange={handleChange}
								value={values.totalHospitalBeds}
								data-total-hospital-beds={values.totalHospitalBeds}
								required
							/>
						</div>
						<div className="form-row form-row-1">
							<label htmlFor="periodType">Period Type</label>
							<Field
								as="select"
								className="form-control input-text"
								id="periodType"
								name="periodType"
								data-period-type={values.periodType}
							>
								<option defaultValue="days">days</option>
								<option defaultValue="weeks">weeks</option>
								<option defaultValue="months">months</option>
							</Field>
						</div>
					</div>
					<div className="form-row-last">
						<Field
							type="submit"
							className="register"
							value="Estimate"
							data-go-estimate
						/>
					</div>
				</form>
			)}
		</Formik>
	</Fragment>
);

export default CovidForm;
