const estimate = {
  data: {},
  impact: {},
  severeImpact: {}
};

const estimatorHelper = (data) => {
  const impactCurrentlyInfected = data.reportedCases * 10;
  const severeImpactCurrentlyInfected = data.reportedCases * 50;
  const exponentDys = parseInt(data.timeToElapse, 0);
  const exponentWks = parseInt(data.timeToElapse * 7, 0);
  const exponentMths = parseInt(data.timeToElapse * 30, 0);
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
  const severeImpactInMonths = parseInt(
    severeImpactCurrentlyInfected * (2 ** exponentMths), 0
  );

  estimate.impact.currentlyInfected = impactCurrentlyInfected;
  estimate.severeImpact.currentlyInfected = severeImpactCurrentlyInfected;

  switch (data.periodType) {
    case 'weeks':
      estimate.impact.infectionsByRequestedTime = impactInWeeks;
      estimate.severeImpact.infectionsByRequestedTime = severeImpactInWeeks;
      break;
    case 'months':
      estimate.impact.infectionsByRequestedTime = impactInMonths;
      estimate.severeImpact.infectionsByRequestedTime = severeImpactInMonths;
      break;
    case 'days':
    default:
      estimate.impact.infectionsByRequestedTime = impactInDays;
      estimate.severeImpact.infectionsByRequestedTime = severeImpactInDays;
  }

  return estimate;
};

export default estimatorHelper;
