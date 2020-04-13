import React, { Fragment } from 'react';
// import { Formik, Field } from 'formik';


class CovidForm extends React.Component {
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

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state);
	}

	render() {
		return (
			<Fragment>
				<form
					className="form-detail"
					id="myform"
					onSubmit={this.handleSubmit}
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
								value={this.state.population}
								onChange={this.handlePopulationChange}
								data-population={this.state.population}
								required
							/>
						</div>
						<div className="form-row form-row-1">
							<label htmlFor="timeToElapse">Time To Elapse</label>
							<input
								type="number"
								name="timeToElapse"
								id="timeToElapse"
								className="input-text"
								value={this.state.timeToElapse}
								onChange={this.handleTimeToElapseChange}
								data-time-to-elapse={this.state.timeToElapse}
								required
							/>
						</div>
					</div>
					<div className="form-row">
						<label htmlFor="reportedCases">Reported Cases</label>
						<input
							type="number"
							name="reportedCases"
							id="reportedCases"
							className="input-text"
							value={this.state.reportedCases}
							onChange={this.handleReportedCasesChange}
							data-reported-cases={this.state.reportedCases}
							required
						/>
					</div>
					<div className="form-group">
						<div className="form-row form-row-1 ">
							<label htmlFor="totalHospitalBeds">Total Hospital Beds</label>
							<input
								type="number"
								name="totalHospitalBeds"
								id="totalHospitalBeds"
								className="input-text"
								value={this.state.totalHospitalBeds}
								onChange={this.handleTotalHospitalBedsChange}
								data-total-hospital-beds={this.state.totalHospitalBeds}
								required
							/>
						</div>
						<div className="form-row form-row-1">
							<label htmlFor="periodType">Period Type</label>
							<select
								as="select"
								className="form-control input-text"
								id="periodType"
								name="periodType"
								value={this.state.periodType}
								onChange={this.handlePeriodTypeChange}
								data-period-type={this.state.periodType}
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
							value="Estimate"
							data-go-estimate
						/>
					</div>
				</form>
			</Fragment>
		);
	}
}

// const CovidForm = () => (
// 	<Fragment>
// 		<Formik
// 			className="form-detail"
// 			id="myform"
// 			initialValues={{
// 				population: '',
// 				timeToElapse: '',
// 				reportedCases: '',
// 				totalHospitalBeds: '',
// 				periodType: 'days'
// 			}}
// 			onSubmit={(values, { setSubmitting }) => {
// 				console.log(values);
// 				setSubmitting(false);
// 			}}
// 		>
// 			{({
// 				values,
// 				handleChange,
// 				handleSubmit
// 			}) => (
// 				<form
// 					className="form-detail"
// 					id="myform"
// 					onSubmit={handleSubmit}
// 				>
// 					<h2>INPUT DATA</h2>
// 					<div className="form-group">
// 						<div className="form-row form-row-1">
// 							<label htmlFor="population">Population</label>
// 							<Field
// 								type="number"
// 								name="population"
// 								id="population"
// 								className="input-text"
// 								onChange={handleChange}
// 								value={values.population}
// 								data-population={values.population}
// 								required
// 							/>
// 						</div>
// 						<div className="form-row form-row-1">
// 							<label htmlFor="timeToElapse">Time To Elapse</label>
// 							<Field
// 								type="number"
// 								name="timeToElapse"
// 								id="timeToElapse"
// 								className="input-text"
// 								onChange={handleChange}
// 								value={values.timeToElapse}
// 								data-time-to-elapse={values.timeToElapse}
// 								required
// 							/>
// 						</div>
// 					</div>
// 					<div className="form-row">
// 						<label htmlFor="reportedCases">Reported Cases</label>
// 						<Field
// 							type="number"
// 							name="reportedCases"
// 							id="reportedCases"
// 							className="input-text"
// 							onChange={handleChange}
// 							value={values.reportedCases}
// 							data-reported-cases={values.reportedCases}
// 							required
// 						/>
// 					</div>
// 					<div className="form-group">
// 						<div className="form-row form-row-1 ">
// 							<label htmlFor="totalHospitalBeds">Total Hospital Beds</label>
// 							<Field
// 								type="number"
// 								name="totalHospitalBeds"
// 								id="totalHospitalBeds"
// 								className="input-text"
// 								onChange={handleChange}
// 								value={values.totalHospitalBeds}
// 								data-total-hospital-beds={values.totalHospitalBeds}
// 								required
// 							/>
// 						</div>
// 						<div className="form-row form-row-1">
// 							<label htmlFor="periodType">Period Type</label>
// 							<Field
// 								as="select"
// 								className="form-control input-text"
// 								id="periodType"
// 								name="periodType"
// 								data-period-type={values.periodType}
// 							>
// 								<option defaultValue="days">days</option>
// 								<option defaultValue="weeks">weeks</option>
// 								<option defaultValue="months">months</option>
// 							</Field>
// 						</div>
// 					</div>
// 					<div className="form-row-last">
// 						<Field
// 							type="submit"
// 							className="register"
// 							value="Estimate"
// 							data-go-estimate
// 						/>
// 					</div>
// 				</form>
// 			)}
// 		</Formik>
// 	</Fragment>
// );

export default CovidForm;
