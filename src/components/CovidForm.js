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
				<form
					className="form-detail"
					id="myform"
					onSubmit={handleSubmit}
				>
					<h2>INPUT DATA</h2>
					<div className="form-group">
						<div className="form-row form-row-1">
							<label htmlFor="population">
								Population
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
							</label>
						</div>
						<div className="form-row form-row-1">
							<label htmlFor="time_to_elapse">
								Time To Elapse
								<Field
									type="number"
									name="time_to_elapse"
									id="time_to_elapse"
									className="input-text"
									onChange={handleChange}
									value={values.time_to_elapse}
									data-time-to-elapse={values.time_to_elapse}
									required
								/>
							</label>
						</div>
					</div>
					<div className="form-row">
						<label htmlFor="reported_cases">
							Reported Cases
							<Field
								type="number"
								name="reported_cases"
								id="reported_cases"
								className="input-text"
								onChange={handleChange}
								value={values.reported_cases}
								data-reported-cases={values.reported_cases}
								required
							/>
						</label>
					</div>
					<div className="form-group">
						<div className="form-row form-row-1 ">
							<label htmlFor="total_hospital_beds">
								Total Hospital Beds
								<Field
									type="number"
									name="total_hospital_beds"
									id="total_hospital_beds"
									className="input-text"
									onChange={handleChange}
									value={values.total_hospital_beds}
									data-total-hospital-beds={values.total_hospital_beds}
									required
								/>
							</label>
						</div>
						<div className="form-row form-row-1">
							<label htmlFor="period_type">
								Period Type
								<br /><Field
									as="select"
									className="form-control input-text"
									id="period_type"
									name="period_type"
									data-period-type
								>
									<option defaultValue="days">days</option>
									<option defaultValue="weeks">weeks</option>
									<option defaultValue="months">months</option>
								</Field>
							</label>
						</div>
					</div>
					<div className="form-row-last">
						<Field
							type="submit"
							className="register"
							id="estimate"
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
