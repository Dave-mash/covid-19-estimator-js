import estimatorHelper from './estimatorHelper';

const covid19ImpactEstimator = (data) => estimatorHelper(data);

export default covid19ImpactEstimator;

/*
Expected Input
{
	region: {
		name: 'Africa',
		avgAge: 19.7,
		avgDailyIncomeInUSD: 2,
		avgDailyIncomePopulation: 0.67
	},
	reportedCases: 1053,
	population: 7922844,
	totalHospitalBeds: 175459,
	timeToElapse: 30,
	periodType: 'days'
}

Expected Output
{
	data: {}, // the input data you got
	impact: {}, // your best case estimation
	severeImpact: {} // your severe case estimation
}
impact.currentlyInfected = reportedCases * 10
*/
