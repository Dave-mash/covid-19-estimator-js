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
	const availableBeds = Math.round(data.totalHospitalBeds * 0.35);
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

	impact.currentlyInfected = impactCurrentlyInfected;
	severeImpact.currentlyInfected = severeImpactCurrentlyInfected;

	switch (data.periodType) {
	case 'weeks':
		impact.infectionsByRequestedTime = impactInWeeks;
		impact.severeCasesByRequestedTime = parseInt(
			0.15 * impact.infectionsByRequestedTime, 0
		);
		severeImpact.infectionsByRequestedTime = severeImpactInWeeks;
		severeImpact.severeCasesByRequestedTime = parseInt(
			0.15 * severeImpact.infectionsByRequestedTime, 0
		);

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
		severeImpact.infectionsByRequestedTime = severeImpactInMnths;
		severeImpact.severeCasesByRequestedTime = parseInt(
			0.15 * severeImpact.infectionsByRequestedTime, 0
		);

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
		severeImpact.infectionsByRequestedTime = severeImpactInDays;
		severeImpact.severeCasesByRequestedTime = parseInt(
			0.15 * severeImpact.infectionsByRequestedTime, 0
		);

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
reportedCases: 292,
population: 3158736,
totalHospitalBeds: 161196,
timeToElapse: 6,
periodType: 'weeks'
{
  data: {},
  impact: {
    currentlyInfected: 2920,
    infectionsByRequestedTime: 47841280,
    severeCasesByRequestedTime: 7176192,
    hospitalBedsByRequestedTime: -998177186718 // -7119773
  },
  severeImpact: {
    currentlyInfected: 14600,
    infectionsByRequestedTime: 239206400,
    severeCasesByRequestedTime: 35880960,
    hospitalBedsByRequestedTime: -4990886159262
  }
}
*/
