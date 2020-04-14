import React, { Fragment } from 'react';
// import { Formik, Field } from 'formik';

const CovidForm = () => (
	<Fragment>

		<label htmlFor="population">
			population
			<input
				type="number"
				name="population"
				id="population"
				className="input-text"
				data-population
				required
			/>
		</label>
		<label htmlFor="timeToElapse">
			Time To Elapse
			<input
				type="number"
				name="timeToElapse"
				id="timeToElapse"
				className="input-text"
				data-time-to-elapse
				required
			/>
		</label>
		<label htmlFor="reportedCases">
			Reported Cases
			<input
				type="number"
				name="reportedCases"
				id="reportedCases"
				className="input-text"
				data-reported-cases
				required
			/>
		</label>
		<label htmlFor="totalHospitalBeds">
			Total Hospital Beds
			<input
				type="number"
				name="totalHospitalBeds"
				id="totalHospitalBeds"
				className="input-text"
				data-total-hospital-beds
				required
			/>
		</label>
		<label htmlFor="periodType">
			Period Type
			<input
				type="number"
				name="periodType"
				id="periodType"
				className="input-text"
				data-period-type
				required
			/>
		</label>
		<button
			type="submit"
			id="estimate"
			className="input-text"
			data-go-estimate
			required
		>
			Submit
		</button>

		{	/* <Formik
		// 	className="form-detail"
		// 	id="myform"
		// 	initialValues={{
		// 		population: '',
		// 		time_to_elapse: '',
		// 		reported_cases: '',
		// 		total_hospital_beds: '',
		// 		period_type: 'days'
		// 	}}
		// 	onSubmit={(values, { setSubmitting }) => {
		// 		console.log('==> ', values);
		// 		setSubmitting(false);
		// 	}}
		// >
		// 	{({
		// 		values,
		// 		handleChange,
		// 		handleSubmit
		// 	}) => (
		// 		<form
		// 			className="form-detail"
		// 			id="myform"
		// 			onSubmit={handleSubmit}
		// 		>
		// 			<h2>INPUT DATA</h2>
		// 			<div className="form-group">
		// 				<div className="form-row form-row-1">
		// 					<label htmlFor="population">
		// 						Population
		// 						<Field
		// 							type="number"
		// 							name="population"
		// 							id="population"
		// 							className="input-text"
		// 							onChange={handleChange}
		// 							value={values.population}
		// 							data-population
		// 							required
		// 						/>
		// 					</label>
		// 				</div>
		// 				<div className="form-row form-row-1">
		// 					<label htmlFor="time_to_elapse">
		// 						Time To Elapse
		// 						<Field
		// 							type="number"
		// 							name="time_to_elapse"
		// 							id="time_to_elapse"
		// 							className="input-text"
		// 							onChange={handleChange}
		// 							value={values.time_to_elapse}
		// 							data-time-to-elapse
		// 							required
		// 						/>
		// 					</label>
		// 				</div>
		// 			</div>
		// 			<div className="form-row">
		// 				<label htmlFor="reported_cases">
		// 					Reported Cases
		// 					<Field
		// 						type="number"
		// 						name="reported_cases"
		// 						id="reported_cases"
		// 						className="input-text"
		// 						onChange={handleChange}
		// 						value={values.reported_cases}
		// 						data-reported-cases
		// 						required
		// 					/>
		// 				</label>
		// 			</div>
		// 			<div className="form-group">
		// 				<div className="form-row form-row-// 1 ">
		// 					<label htmlFor="total_hospital_beds">
		// 						Total Hospital Beds
		// 						<Field
		// 							type="number"
		// 							name="total_hospital_beds"
		// 							id="total_hospital_beds"
		// 							className="input-text"
		// 							onChange={handleChange}
		// 							value={values.total_hospital_beds}
		// 							data-total-hospital-beds
		// 							required
		// 						/>
		// 					</label>
		// 				</div>
		// 				<div className="form-row form-row-1">
		// 					<label htmlFor="period_type">
		// 						Period Type
		// 						<Field
		// 							as="select"
		// 							className="form-control input-text"
		// 							id="period_type"
		// 							name="period_type"
		// 							data-period-type
		// 						>
		// 							<option defaultValue="days">days</option>
		// 							<option defaultValue="weeks">weeks</option>
		// 							<option defaultValue="months">months</option>
		// 						</Field>
		// 					</label>
		// 				</div>
		// 			</div>
		// 			<div className="form-row-last">
		// 				<button
		// 					type="submit"
		// 					className="register"
		// 					id="estimate"
		// 					data-go-estimate
		// 				>
		// 					Estimate
		// 				</button>
		// 			</div>
		// 		</form>
		// 	)}
		// </Formik> */	}
	</Fragment>
);

export default CovidForm;
