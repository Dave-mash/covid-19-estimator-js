const estimate = {
	impact: {},
	severeImpact: {}
};

const estimatorHelper = (data) => {
	console.log(data);
	const impactCurrentlyInfected = data.reportedCases * 10;
	const severeImpactCurrentlyInfected = data.reportedCases * 50;
	const exponentDys = parseInt(data.timeToElapse / 3, 0);
	const totalDys = data.timeToElapse;
	const exponentWks = parseInt((data.timeToElapse * 7) / 3, 0);
	const exponentMths = parseInt((data.timeToElapse * 30) / 3, 0);
	const estimateBeds = parseInt(data.totalHospitalBeds * 0.35, 0);
	const numIsInteger = !Number.isInteger(data.totalHospitalBeds * 0.35, 0);
	const availableBeds = numIsInteger ? estimateBeds + 1 : estimateBeds;
	const avgIncome = data.region.avgDailyIncomeInUSD;
	const incomePopulation = data.region.avgDailyIncomePopulation;
	estimate.data = data;
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

	const { severeImpact } = estimate;
	const { impact } = estimate;
	let impactVal;
	let severeImpactVal;
	let impactInfections;
	let dollarsInFlight;
	let dollarStr;

	impact.currentlyInfected = impactCurrentlyInfected;
	severeImpact.currentlyInfected = severeImpactCurrentlyInfected;

	switch (data.periodType) {
	case 'weeks':
		impact.infectionsByRequestedTime = impactInWeeks;
		impact.severeCasesByRequestedTime = parseInt(
			0.15 * impact.infectionsByRequestedTime, 0
		);
		impact.casesForICUByRequestedTime = parseInt(
			impact.infectionsByRequestedTime * 0.05, 0
		);
		impact.casesForVentilatorsByRequestedTime = parseInt(
			impact.infectionsByRequestedTime * 0.02, 0
		);
		impactInfections = impact.infectionsByRequestedTime;
		dollarsInFlight = impactInfections * avgIncome * incomePopulation;
		dollarStr = dollarsInFlight / (totalDys * 7);

		impact.dollarsInFlight = parseInt(dollarStr, 0);

		severeImpact.infectionsByRequestedTime = severeImpactInWeeks;
		severeImpact.severeCasesByRequestedTime = parseInt(
			0.15 * severeImpact.infectionsByRequestedTime, 0
		);
		severeImpact.casesForICUByRequestedTime = parseInt(
			severeImpact.infectionsByRequestedTime * 0.05, 0
		);
		severeImpact.casesForVentilatorsByRequestedTime = parseInt(
			severeImpact.infectionsByRequestedTime * 0.02, 0
		);
		impactVal = impact.severeCasesByRequestedTime;
		severeImpactVal = severeImpact.severeCasesByRequestedTime;

		impact.hospitalBedsByRequestedTime = availableBeds - impactVal;
		severeImpact.hospitalBedsByRequestedTime = availableBeds - severeImpactVal;

		impactInfections = severeImpact.infectionsByRequestedTime;
		dollarsInFlight = impactInfections * avgIncome * incomePopulation;
		dollarStr = dollarsInFlight / (totalDys * 7);

		severeImpact.dollarsInFlight = parseInt(dollarStr, 0);

		break;
	case 'months':
		impact.infectionsByRequestedTime = impactInMonths;
		impact.severeCasesByRequestedTime = parseInt(
			0.15 * impact.infectionsByRequestedTime, 0
		);
		impact.casesForICUByRequestedTime = parseInt(
			impact.infectionsByRequestedTime * 0.05, 0
		);
		impact.casesForVentilatorsByRequestedTime = parseInt(
			impact.infectionsByRequestedTime * 0.02, 0
		);

		impactInfections = impact.infectionsByRequestedTime;
		dollarsInFlight = impactInfections * avgIncome * incomePopulation;
		dollarStr = dollarsInFlight / (totalDys * 30);

		impact.dollarsInFlight = parseInt(dollarStr, 0);

		severeImpact.infectionsByRequestedTime = severeImpactInMnths;
		severeImpact.severeCasesByRequestedTime = parseInt(
			0.15 * severeImpact.infectionsByRequestedTime, 0
		);
		severeImpact.casesForICUByRequestedTime = parseInt(
			severeImpact.infectionsByRequestedTime * 0.05, 0
		);
		severeImpact.casesForVentilatorsByRequestedTime = parseInt(
			severeImpact.infectionsByRequestedTime * 0.02, 0
		);
		impactVal = impact.severeCasesByRequestedTime;
		severeImpactVal = severeImpact.severeCasesByRequestedTime;

		impact.hospitalBedsByRequestedTime = availableBeds - impactVal;
		severeImpact.hospitalBedsByRequestedTime = availableBeds - severeImpactVal;

		impactInfections = severeImpact.infectionsByRequestedTime;
		dollarsInFlight = impactInfections * avgIncome * incomePopulation;
		dollarStr = dollarsInFlight / (totalDys * 30);

		severeImpact.dollarsInFlight = parseInt(dollarStr, 0);
		break;
	case 'days':
	default:
		impact.infectionsByRequestedTime = impactInDays;
		impact.severeCasesByRequestedTime = parseInt(
			0.15 * impact.infectionsByRequestedTime, 0
		);
		impact.casesForICUByRequestedTime = parseInt(
			impact.infectionsByRequestedTime * 0.05, 0
		);
		impact.casesForVentilatorsByRequestedTime = parseInt(
			impact.infectionsByRequestedTime * 0.02, 0
		);

		impactInfections = impact.infectionsByRequestedTime;
		dollarsInFlight = impactInfections * avgIncome * incomePopulation;
		dollarStr = dollarsInFlight / totalDys;

		impact.dollarsInFlight = parseInt(dollarStr, 0);

		severeImpact.infectionsByRequestedTime = severeImpactInDays;
		severeImpact.severeCasesByRequestedTime = parseInt(
			0.15 * severeImpact.infectionsByRequestedTime, 0
		);

		impactVal = impact.severeCasesByRequestedTime;
		severeImpactVal = severeImpact.severeCasesByRequestedTime;

		impact.hospitalBedsByRequestedTime = availableBeds - impactVal;
		severeImpact.hospitalBedsByRequestedTime = availableBeds - severeImpactVal;
		severeImpact.casesForICUByRequestedTime = parseInt(
			severeImpact.infectionsByRequestedTime * 0.05, 0
		);
		severeImpact.casesForVentilatorsByRequestedTime = parseInt(
			severeImpact.infectionsByRequestedTime * 0.02, 0
		);

		impactInfections = severeImpact.infectionsByRequestedTime;
		dollarsInFlight = impactInfections * avgIncome * incomePopulation;
		dollarStr = dollarsInFlight / totalDys;

		severeImpact.dollarsInFlight = parseInt(dollarStr, 0);
	}
	console.log(estimate);

	return estimate;
};

export default estimatorHelper;
