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
	const severeCasesByRequestedTimeDys = parseInt(
		0.15 * impactInDays, 0
	);
	const impactHospitalBedsByRequestedTimeDys = availableBeds - impactInDays;
	const sImpactHospitalBedsByRequestedTimeDys = severeCasesByRequestedTimeDys - availableBeds;
	const impactInWeeks = parseInt(
		impactCurrentlyInfected * (2 ** exponentWks), 0
	);
	const severeImpactInWeeks = parseInt(
		severeImpactCurrentlyInfected * (2 ** exponentWks), 0
	);
	const severeCasesByRequestedTimeWeeks = parseInt(
		0.15 * impactInWeeks, 0
	);
	const impactHospitalBedsByRequestedTimeWeeks = availableBeds - impactInWeeks;
	const sImpactHospitalBedsByRequestedTimeWeeks = availableBeds - severeCasesByRequestedTimeWeeks;
	const impactInMonths = parseInt(
		impactCurrentlyInfected * (2 ** exponentMths), 0
	);
	const severeImpactInMnths = parseInt(
		severeImpactCurrentlyInfected * (2 ** exponentMths), 0
	);
	const severeCasesByRequestedTimeMnths = parseInt(
		0.15 * impactInMonths, 0
	);
	const impactHospitalBedsByRequestedTimeMnths = availableBeds - impactInMonths;
	const sImpacthospitalBedsByRequestedTimeMnths = availableBeds - severeCasesByRequestedTimeMnths;
	console.log('======>', data);

	estimate.impact.currentlyInfected = impactCurrentlyInfected;
	estimate.severeImpact.currentlyInfected = severeImpactCurrentlyInfected;

	switch (data.periodType) {
	case 'weeks':
		estimate.impact.infectionsByRequestedTime = impactInWeeks;
		estimate.impact.hospitalBedsByRequestedTime = impactHospitalBedsByRequestedTimeWeeks;
		estimate.severeImpact.infectionsByRequestedTime = severeImpactInWeeks;
		estimate.severeImpact.severeCasesByRequestedTime = severeCasesByRequestedTimeWeeks;
		estimate.severeImpact.hospitalBedsByRequestedTime = sImpactHospitalBedsByRequestedTimeWeeks;
		break;
	case 'months':
		estimate.impact.infectionsByRequestedTime = impactInMonths;
		estimate.impact.hospitalBedsByRequestedTime = impactHospitalBedsByRequestedTimeMnths;
		estimate.severeImpact.infectionsByRequestedTime = severeImpactInMnths;
		estimate.severeImpact.severeCasesByRequestedTime = severeCasesByRequestedTimeMnths;
		estimate.severeImpact.hospitalBedsByRequestedTime = sImpacthospitalBedsByRequestedTimeMnths;
		break;
	case 'days':
	default:
		estimate.impact.infectionsByRequestedTime = impactInDays;
		estimate.impact.hospitalBedsByRequestedTime = impactHospitalBedsByRequestedTimeDys;
		estimate.severeImpact.infectionsByRequestedTime = severeImpactInDays;
		estimate.severeImpact.severeCasesByRequestedTime = severeCasesByRequestedTimeDys;
		estimate.severeImpact.hospitalBedsByRequestedTime = sImpactHospitalBedsByRequestedTimeDys;
	}
	console.log('------>', estimate);

	return estimate;
};

export default estimatorHelper;
