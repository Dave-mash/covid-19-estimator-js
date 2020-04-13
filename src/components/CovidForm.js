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
				exampleFormControlSelect1: 'days'
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
									data-population="population"
									required
								/>
							</label>
						</div>
						<div className="form-row form-row-1">
							<label htmlFor="timeToElapse">
								Time To Elapse
								<Field
									type="number"
									name="timeToElapse"
									id="timeToElapse"
									className="input-text"
									onChange={handleChange}
									value={values.timeToElapse}
									data-time-to-elapse="timeToElapse"
									required
								/>
							</label>
						</div>
					</div>
					<div className="form-row">
						<label htmlFor="reportedCases">
							Reported Cases
							<Field
								type="number"
								name="reportedCases"
								id="reportedCases"
								className="input-text"
								onChange={handleChange}
								value={values.reportedCases}
								data-reported-cases="reportedCases"
								required
							/>
						</label>
					</div>
					<div className="form-group">
						<div className="form-row form-row-1 ">
							<label htmlFor="totalHospitalBeds">
								Total Hospital Beds
								<Field
									type="number"
									name="totalHospitalBeds"
									id="totalHospitalBeds"
									className="input-text"
									onChange={handleChange}
									value={values.totalHospitalBeds}
									data-total-hospital-beds="totalHospitalBeds"
									required
								/>
							</label>
						</div>
						<div className="form-row form-row-1">
							<label htmlFor="exampleFormControlSelect1">
								Period Type
								<Field
									as="select"
									className="form-control input-text"
									id="exampleFormControlSelect1"
									name="exampleFormControlSelect1"
									data-period-type="periodType"
									required
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
							data-go-estimate="data-go-estimate"
							value="Estimate"
						/>
					</div>
				</form>
			)}
		</Formik>
	</Fragment>
);

export default CovidForm;
