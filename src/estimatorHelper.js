const estimate = {
  data: {},
  impact: {},
  severeImpact: {}
};

const estimatorHelper = (data) => {
  estimate.impact.currentlyInfected = data.reportedCases * 10;
  estimate.impact.infectionsByRequestedTime = parseInt(
    estimate.impact.currentlyInfected * (2 ** 9), 0
  );
  estimate.severeImpact.currentlyInfected = data.reportedCases * 50;
  estimate.severeImpact.infectionsByRequestedTime = parseInt(
    estimate.severeImpact.currentlyInfected * (2 ** 9), 0
  );

  return estimate;
};

export default estimatorHelper;
