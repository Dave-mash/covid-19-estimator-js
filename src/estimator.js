import estimatorHelper from './estimatorHelper';

const covid19ImpactEstimator = (data) => estimatorHelper(data);

export default covid19ImpactEstimator;

/*
Expected Input
{
	region: {
		name: "Africa",
		avgAge: 19.7,
		avgDailyIncomeInUSD: 5,
		avgDailyIncomePopulation: 0.71
	},
	periodType: "days",
	timeToElapse: 58,
	reportedCases: 674,
	population: 66622705,
	totalHospitalBeds: 1380614
}

Expected Output
{
	data: {}, // the input data you got
	impact: {}, // your best case estimation
	severeImpact: {} // your severe case estimation
}
impact.currentlyInfected = reportedCases * 10
*/