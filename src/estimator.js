import estimatorHelper from './estimatorHelper';

const covid19ImpactEstimator = (data) => estimatorHelper(data);

export default covid19ImpactEstimator;

/*
Expected Input
{
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 3,
    avgDailyIncomePopulation: 0.72
  },
  reportedCases: 1302,
  population: 8203543,
  totalHospitalBeds: 225924,
  timeToElapse: 46,
  periodType: 'days'
}

{
  data: {},
  impact: { currentlyInfected: 13020, infectionsByRequestedTime: 426639360 },
  severeImpact: {
    currentlyInfected: 65100,
    infectionsByRequestedTime: 2133196800,
    severeCasesByRequestedTime: 63995904,
    hospitalBedsByRequestedTime: -63916831
  }
}

Expected Output
{
	data: {}, // the input data you got
	impact: {}, // your best case estimation
	severeImpact: {} // your severe case estimation
}
impact.currentlyInfected = reportedCases * 10
*/
