import React, { Fragment } from 'react';
import { Formik, Field } from 'formik';

const CovidForm = () => (
	<Fragment>
		<Formik
			className="form-detail"
			id="myform"
			initialValues={{
				population: '',
				time_to_elapse: '',
				reported_cases: '',
				total_hospital_beds: '',
				exampleFormControlSelect1: ''
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
								data-population="true"
								required
							/>
						</div>
						<div className="form-row form-row-1">
							<label htmlFor="time_to_elapse">Time To Elapse</label>
							<Field
								type="number"
								name="time_to_elapse"
								id="time_to_elapse"
								className="input-text"
								onChange={handleChange}
								value={values.time_to_elapse}
								data-time-to-elapse="true"
								required
							/>
						</div>
					</div>
					<div className="form-row">
						<label htmlFor="reported_cases">Reported Cases</label>
						<Field
							type="number"
							name="reported_cases"
							id="reported_cases"
							className="input-text"
							onChange={handleChange}
							value={values.reported_cases}
							data-reported-cases="true"
							required
						/>
					</div>
					<div className="form-group">
						<div className="form-row form-row-1 ">
							<label htmlFor="total_hospital_beds">Total Hospital Beds</label>
							<Field
								type="number"
								name="total_hospital_beds"
								id="total_hospital_beds"
								className="input-text"
								onChange={handleChange}
								value={values.total_hospital_beds}
								data-total-hospital-beds="true"
								required
							/>
						</div>
						<div className="form-row form-row-1">
							<label htmlFor="exampleFormControlSelect1">Period Type</label>
							<Field
								as="select"
								className="form-control input-text"
								id="exampleFormControlSelect1"
								name="exampleFormControlSelect1"
								data-period-type="true"
								required
							>
								<option defaultValue="" hidden>Please select</option>
								<option defaultValue="days">days</option>
								<option defaultValue="weeks">weeks</option>
								<option defaultValue="months">months</option>
							</Field>
						</div>
					</div>
					<div className="form-row-last">
						<button
							type="submit"
							className="register"
							data-go-estimate="true"
						>
							Estimate
						</button>
					</div>
				</form>
			)}
		</Formik>
	</Fragment>
);

export default CovidForm;
