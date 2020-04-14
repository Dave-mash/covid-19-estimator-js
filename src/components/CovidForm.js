import React from 'react';
// import { Formik, Field } from 'formik';

import estimatorHelper from '../estimatorHelper';

export default class CovidForm extends React.Component {
	constructor(props) {
		super(props);
		this.handlePopulationChange = this.handlePopulationChange.bind(this);
		this.handleTimeToElapseChange = this.handleTimeToElapseChange.bind(this);
		this.handleReportedCasesChange = this.handleReportedCasesChange.bind(this);
		this.handleTotalHospitalBedsChange = this.handleTotalHospitalBedsChange.bind(this);
		this.handlePeriodTypeChange = this.handlePeriodTypeChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			population: '',
			timeToElapse: '',
			reportedCases: '',
			totalHospitalBeds: '',
			periodType: 'days'
		};
	}

	handlePopulationChange(event) {
		this.setState({ population: event.target.value });
	}

	handleTimeToElapseChange(event) {
		this.setState({ timeToElapse: event.target.value });
	}

	handleReportedCasesChange(event) {
		this.setState({ reportedCases: event.target.value });
	}

	handleTotalHospitalBedsChange(event) {
		this.setState({ totalHospitalBeds: event.target.value });
	}

	handlePeriodTypeChange(event) {
		this.setState({ periodType: event.target.value });
	}

	handleSubmit(e) {
		const data = {};
		e.preventDefault();
		data.population = parseInt(this.state.population, 0);
		data.timeToElapse = parseInt(this.state.timeToElapse, 0);
		data.reportedCases = parseInt(this.state.reportedCases, 0);
		data.totalHospitalBeds = parseInt(this.state.totalHospitalBeds, 0);

		data.region = {
			name: 'Africa',
			avgAge: 19.7,
			avgDailyIncomeInUSD: 5,
			avgDailyIncomePopulation: 0.71
		};
		estimatorHelper(data);
	}

	render() {
		return (
			<form
				className="form-detail"
				id="myform"
				onSubmit={this.handleSubmit}
			>
				<label htmlFor="population">
					Total Population
					<input type="number" id="population" data-population required />
				</label><br />
				<label htmlFor="reportedCases">
					Reported Cases
					<input type="number" id="reportedCases" data-reported-cases required />
				</label><br />
				<label htmlFor="timeToElapse">Time Period</label>
				<input type="number" id="timeToElapse" data-time-to-elapse required />
				<label htmlFor="periodType" id="lab">Period Type</label><br />
				<label htmlFor="totalHospitalBeds">Total Hospital Beds</label><br />
				<input type="number" id="totalHospitalBeds" data-total-hospital-beds required /><br />
				<select id="periodType" data-period-type>
					<option value="days">Days</option>
					<option value="weeks">Weeks</option>
					<option value="months">Months</option>
				</select><br />
				<br />
				<button id="estimate" type="submit" data-go-estimate>Estimate</button>
			</form>
		);
	}
}

// export default CovidForm;

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
			// onSubmit={(values, { setSubmitting }) => {
				// console.log(values);
				setSubmitting(false);
			}}
		>
			{({
				// values,
				handleChange,
				handleSubmit
			}) => (

			)}
		</Formik>

<h2>INPUT DATA</h2>
			<div className="form-group">
				<div className="form-row form
					<label htmlFor="population">Population</label>-row-1">
						population
					<input
						type="number"
						name="population"
						id="population"
						className="input-text"
						// value={values.population}
						onChange={handleChange}
						data-population
						required
					/>
				</div>
				<div className="form-row form
					<label htmlFor="time_to_elapse">Time To Elapse</label>-row-1">
						time_to_elapse
					<input
						type="number"
						name="time_to_elapse"
						id="time_to_elapse"
						className="input-text"
						// value={values.time_to_elapse}
						onChange={handleChange}
						data-time-to-elapse
						required
					/>
				</div>
			</div>
			<div className=
				<label htmlFor="reported_cases">Reported Cases</label>"form-row">
					reported_cases
				<input
					type="number"
					name="reported_cases"
					id="reported_cases"
					className="input-text"
					// value={values.reported_cases}
					onChange={handleChange}
					data-reported-cases
					required
				/>
			</div>
			<div className="form-group">
				<div className="form-row form-row
					<label htmlFor="total_hospital_beds">Total Hospital Beds</label>-1 ">
						total_hospital_beds
					<input
						type="number"
						name="total_hospital_beds"
						id="total_hospital_beds"
						className="input-text"
						// value={values.total_hospital_beds}
						onChange={handleChange}
						data-total-hospital-beds
						required
					/>
				</div>
				<div className="form-row form
					<label htmlFor="period_type">Period Type</label>-row-1">
						form
					<select
						as="select"
						className="form-control input-text select"
						id="period_type"
						name="period_type"
						data-period-type
						// <option defaultValue="days">days</option>
						// <option defaultValue="weeks">weeks</option>
						// <option defaultValue="months">months</option>
					>
					</select>
				</div>
			</div>
			<div className="form-row-last">
				<input
					type="submit"
					className="register"
					// value="Estimate"
					id="estimate"
					data-go-estimate
				/>
			</div>


					<label htmlFor="population">
						Population
						<input
							data-population
							type="number"
							name="population"
							id="population"
							className="input-text"
							// value={this.state.population}
							// onChange={this.handlePopulationChange}
							required
						/>
					</label><br />
					<label htmlFor="time_to_elapse">
						Time To Elapse
						<input
							data-time-to-elapse
							type="number"
							name="time_to_elapse"
							id="time_to_elapse"
							className="input-text"
							// value={this.state.timeToElapse}
							// onChange={this.handleTimeToElapseChange}
							required
						/>
					</label><br />
					<label htmlFor="reported_cases">
						Reported Cases
						<input
							data-reported-cases
							type="number"
							name="reported_cases"
							id="reported_cases"
							className="input-text"
							// value={this.state.reportedCases}
							// onChange={this.handleReportedCasesChange}
							required
						/>
					</label><br />
					<label htmlFor="total_hospital_beds">
						Total Hospital Beds
						<input
							data-total-hospital-beds
							type="number"
							name="total_hospital_beds"
							id="total_hospital_beds"
							className="input-text"
							// value={this.state.totalHospitalBeds}
							// onChange={this.handleTotalHospitalBedsChange}
							required
						/>
					</label><br />
					<label htmlFor="period_type">
						Period Type<br />
						<select
							data-period-type
							as="select"
							className="form-control input-text select"
							id="period_type"
							name="period_type"
							// value={this.state.periodType}
							// onChange={this.handlePeriodTypeChange}
						>
							<option defaultValue="days">days</option>
							<option defaultValue="weeks">weeks</option>
							<option defaultValue="months">months</option>
						</select>
					</label><br />
					<input
						data-go-estimate
						type="submit"
						className="register"
						value="Estimate"
						id="estimate"
					/>

*/
