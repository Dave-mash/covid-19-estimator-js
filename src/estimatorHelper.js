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
	const availableBeds = parseInt(data.totalHospitalBeds * 0.35, 0);
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
	const totalImpactAvailableBeds = availableBeds - impact.severeCasesByRequestedTime;
	const totalSevereAvailableBeds = availableBeds - severeImpact.severeCasesByRequestedTime;

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
		impact.hospitalBedsByRequestedTime = totalImpactAvailableBeds;
		severeImpact.hospitalBedsByRequestedTime = totalSevereAvailableBeds;
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
		impact.hospitalBedsByRequestedTime = totalImpactAvailableBeds;
		severeImpact.hospitalBedsByRequestedTime = totalSevereAvailableBeds;
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
		impact.hospitalBedsByRequestedTime = totalImpactAvailableBeds;
		severeImpact.hospitalBedsByRequestedTime = totalSevereAvailableBeds;
	}

	console.log('------>', estimate);

	return estimate;
};

export default estimatorHelper;


/*

reportedCases: 2188,
population: 5398393,
totalHospitalBeds: 204378,
timeToElapse: 3,
periodType: 'weeks'

{
  data: {},
  impact: {
    currentlyInfected: 21880,
    infectionsByRequestedTime: 2800640,
    severeCasesByRequestedTime: 420096,
    hospitalBedsByRequestedTime: -727191578772 // -348563
  },
  severeImpact: {
    currentlyInfected: 109400,
    infectionsByRequestedTime: 14003200,
    severeCasesByRequestedTime: 2100480,
    hospitalBedsByRequestedTime: -3635958179988
  }
*/
