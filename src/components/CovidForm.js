import React, { Fragment } from 'react';
// import { Formik, Field } from 'formik';

const CovidForm = () => (
	<Fragment>
		<form
			className="form-detail"
			id="myform"
			// onSubmit={handleSubmit}
		>
			<h2>INPUT DATA</h2>
			<div className="form-group">
				<div className="form-row form-row-1">
					<label htmlFor="population">Population</label>
					<input
						type="number"
						name="population"
						id="population"
						className="input-text"
						// onChange={handleChange}
						// value={values.population}
						data-population
						required
					/>
				</div>
				<div className="form-row form-row-1">
					<label htmlFor="time_to_elapse">Time To Elapse</label>
					<input
						type="number"
						name="time_to_elapse"
						id="time_to_elapse"
						className="input-text"
						// onChange={handleChange}
						// value={values.time_to_elapse}
						data-time-to-elapse
						required
					/>
				</div>
			</div>
			<div className="form-row">
				<label htmlFor="reported_cases">Reported Cases</label>
				<input
					type="number"
					name="reported_cases"
					id="reported_cases"
					className="input-text"
					// onChange={handleChange}
					// value={values.reported_cases}
					data-reported-cases
					required
				/>
			</div>
			<div className="form-group">
				<div className="form-row form-row-1 ">
					<label htmlFor="total_hospital_beds">Total Hospital Beds</label>
					<input
						type="number"
						name="total_hospital_beds"
						id="total_hospital_beds"
						className="input-text"
						// onChange={handleChange}
						// value={values.total_hospital_beds}
						data-total-hospital-beds
						required
					/>
				</div>
				<div className="form-row form-row-1">
					<label htmlFor="period_type">Period Type</label>
					<select
						as="select"
						className="form-control input-text select"
						id="period_type"
						name="period_type"
						data-period-type
					>
						<option defaultValue="days">days</option>
						<option defaultValue="weeks">weeks</option>
						<option defaultValue="months">months</option>
					</select>
				</div>
			</div>
			<div className="form-row-last">
				<input
					type="submit"
					className="register"
					id="estimate"
					value="Estimate"
					data-go-estimate
				/>
			</div>
		</form>
	</Fragment>
);

export default CovidForm;
/*
		<Formik
			className="form-detail"
			id="myform"
			initialValues={{
				population: '1',
				time_to_elapse: '1',
				reported_cases: '1',
				total_hospital_beds: '1',
				period_type: 'days'
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

			)}
		</Formik> */
