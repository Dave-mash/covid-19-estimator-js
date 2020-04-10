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
    avgDailyIncomePopulation: 0.66
  },
  reportedCases: 1601,
  population: 4661431,
  totalHospitalBeds: 236483,
  timeToElapse: 7,
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