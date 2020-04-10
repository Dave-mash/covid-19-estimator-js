const estimate = {
	data: {},
	impact: {},
	severeImpact: {}
};

const estimatorHelper = (data) => {
	const impactCurrentlyInfected = data.reportedCases * 10;
	const severeImpactCurrentlyInfected = data.reportedCases * 50;
	const exponentDys = parseInt(data.timeToElapse / 3, 0);
	const exponentWks = parseInt((data.timeToElapse * 7) / 3, 0);
	const exponentMths = parseInt((data.timeToElapse * 30) / 3, 0);
	const estimateBeds = parseInt(data.totalHospitalBeds * 0.35, 0);
	const numIsInteger = !Number.isInteger(data.totalHospitalBeds * 0.35, 0);
	const availableBeds = numIsInteger ? estimateBeds + 1 : estimateBeds;
	const avgIncome = data.region.avgDailyIncomeInUSD;
	const incomePopulation = data.region.avgDailyIncomePopulation;
	const impactInDays = parseInt(
		impactCurrentlyInfected * (2 ** exponentDys), 0
	);
	const severeImpactInDays = parseInt(
		severeImpactCurrentlyInfected * (2 ** exponentDys), 0
	);
	const impactInWeeks = parseInt(
		impactCurrentlyInfected * (2 ** exponentWks), 0
	);
	const severeImpactInWeeks = parseInt(
		severeImpactCurrentlyInfected * (2 ** exponentWks), 0
	);
	const impactInMonths = parseInt(
		impactCurrentlyInfected * (2 ** exponentMths), 0
	);
	const severeImpactInMnths = parseInt(
		severeImpactCurrentlyInfected * (2 ** exponentMths), 0
	);
	console.log('======>', data);

	const { severeImpact } = estimate;
	const { impact } = estimate;
	let impactVal;
	let severeImpactVal;
	let impactInfections;
	let dollarsInFlight;

	impact.currentlyInfected = impactCurrentlyInfected;
	severeImpact.currentlyInfected = severeImpactCurrentlyInfected;

	switch (data.periodType) {
	case 'weeks':
		impact.infectionsByRequestedTime = impactInWeeks;
		impact.severeCasesByRequestedTime = parseInt(
			0.15 * impact.infectionsByRequestedTime, 0
		);
		impact.casesForICUByRequestedTime = parseInt(
			impact.infectionsByRequestedTime * 0.5, 0
		);
		impact.casesForVentilatorsByRequestedTime = parseInt(
			impact.infectionsByRequestedTime * 0.2, 0
		);
		impactInfections = impact.infectionsByRequestedTime;
		dollarsInFlight = impactInfections * avgIncome * incomePopulation;

		impact.dollarsInFlight = (dollarsInFlight * 30).toFixed(2);

		severeImpact.infectionsByRequestedTime = severeImpactInWeeks;
		severeImpact.severeCasesByRequestedTime = parseInt(
			0.15 * severeImpact.infectionsByRequestedTime, 0
		);
		severeImpact.casesForICUByRequestedTime = parseInt(
			severeImpact.infectionsByRequestedTime * 0.5, 0
		);
		severeImpact.casesForVentilatorsByRequestedTime = parseInt(
			severeImpact.infectionsByRequestedTime * 0.2, 0
		);

		impactInfections = severeImpact.infectionsByRequestedTime;
		dollarsInFlight = impactInfections * avgIncome * incomePopulation;

		severeImpact.dollarsInFlight = (dollarsInFlight * 30).toFixed(2);

		impactVal = impact.severeCasesByRequestedTime;
		severeImpactVal = severeImpact.severeCasesByRequestedTime;

		impact.hospitalBedsByRequestedTime = availableBeds - impactVal;
		severeImpact.hospitalBedsByRequestedTime = availableBeds - severeImpactVal;
		break;
	case 'months':
		impact.infectionsByRequestedTime = impactInMonths;
		impact.severeCasesByRequestedTime = parseInt(
			0.15 * impact.infectionsByRequestedTime, 0
		);
		impact.casesForICUByRequestedTime = parseInt(
			impact.infectionsByRequestedTime * 0.5, 0
		);
		impact.casesForVentilatorsByRequestedTime = parseInt(
			impact.infectionsByRequestedTime * 0.2, 0
		);

		impactInfections = impact.infectionsByRequestedTime;
		dollarsInFlight = impactInfections * avgIncome * incomePopulation;

		impact.dollarsInFlight = (dollarsInFlight * 30).toFixed(2);

		severeImpact.infectionsByRequestedTime = severeImpactInMnths;
		severeImpact.severeCasesByRequestedTime = parseInt(
			0.15 * severeImpact.infectionsByRequestedTime, 0
		);
		severeImpact.casesForICUByRequestedTime = parseInt(
			severeImpact.infectionsByRequestedTime * 0.5, 0
		);
		severeImpact.casesForVentilatorsByRequestedTime = parseInt(
			severeImpact.infectionsByRequestedTime * 0.2, 0
		);

		impactInfections = severeImpact.infectionsByRequestedTime;
		dollarsInFlight = impactInfections * avgIncome * incomePopulation;

		severeImpact.dollarsInFlight = (dollarsInFlight * 30).toFixed(2);

		impactVal = impact.severeCasesByRequestedTime;
		severeImpactVal = severeImpact.severeCasesByRequestedTime;

		impact.hospitalBedsByRequestedTime = availableBeds - impactVal;
		severeImpact.hospitalBedsByRequestedTime = availableBeds - severeImpactVal;
		break;
	case 'days':
	default:
		impact.infectionsByRequestedTime = impactInDays;
		impact.severeCasesByRequestedTime = parseInt(
			0.15 * impact.infectionsByRequestedTime, 0
		);
		impact.casesForICUByRequestedTime = parseInt(
			impact.infectionsByRequestedTime * 0.5, 0
		);
		impact.casesForVentilatorsByRequestedTime = parseInt(
			impact.infectionsByRequestedTime * 0.2, 0
		);

		impactInfections = impact.infectionsByRequestedTime;
		dollarsInFlight = impactInfections * avgIncome * incomePopulation;

		impact.dollarsInFlight = (dollarsInFlight * 30).toFixed(2);

		severeImpact.infectionsByRequestedTime = severeImpactInDays;
		severeImpact.severeCasesByRequestedTime = parseInt(
			0.15 * severeImpact.infectionsByRequestedTime, 0
		);
		severeImpact.casesForICUByRequestedTime = parseInt(
			severeImpact.infectionsByRequestedTime * 0.5, 0
		);
		severeImpact.casesForVentilatorsByRequestedTime = parseInt(
			severeImpact.infectionsByRequestedTime * 0.2, 0
		);

		impactInfections = severeImpact.infectionsByRequestedTime;
		dollarsInFlight = impactInfections * avgIncome * incomePopulation;

		severeImpact.dollarsInFlight = (dollarsInFlight * 30).toFixed(2);

		impactVal = impact.severeCasesByRequestedTime;
		severeImpactVal = severeImpact.severeCasesByRequestedTime;

		impact.hospitalBedsByRequestedTime = availableBeds - impactVal;
		severeImpact.hospitalBedsByRequestedTime = availableBeds - severeImpactVal;
	}

	console.log('------>', estimate);

	return estimate;
};

export default estimatorHelper;


/*
reportedCases: 1594,
population: 7539720,
totalHospitalBeds: 55809,
timeToElapse: 49,
periodType: 'days'
{
  data: {},
  impact: {
    currentlyInfected: 15940,
    infectionsByRequestedTime: 1044643840,
    severeCasesByRequestedTime: 156696576,
    hospitalBedsByRequestedTime: -156677043
  },
  severeImpact: {
    currentlyInfected: 79700,
    infectionsByRequestedTime: 5223219200,
    severeCasesByRequestedTime: 783482880,
    hospitalBedsByRequestedTime: -783463347
  }
}
*/
