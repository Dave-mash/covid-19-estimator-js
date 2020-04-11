/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/estimatorHelper.js":
/*!********************************!*\
  !*** ./src/estimatorHelper.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const estimate = {
	data: {},
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

	return estimate;
};

/* harmony default export */ __webpack_exports__["default"] = (estimatorHelper);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _estimatorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estimatorHelper */ "./src/estimatorHelper.js");


let data = {
	region: {}
};
$(document).ready(() => {
	$('#myform').submit(() => {
		const $inputs = $('#myform :input');

		const values = {};
		$inputs.each(() => {
			if ($(undefined).val()) {
				values[undefined.name] = $(undefined).val();
			}
		});
		delete values.register;

		data = {
			...data,
			...values
		};
		Object(_estimatorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
	});
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzdGltYXRvckhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQ0EsU0FBUztBQUNULFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsZUFBZTtBQUN2QixRQUFRLFNBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWUsOEVBQWUsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2hML0I7QUFBQTtBQUFnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLFNBQUk7QUFDYixXQUFXLFNBQUksV0FBVyxTQUFJO0FBQzlCO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnRUFBZTtBQUNqQixFQUFFO0FBQ0YsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBlc3RpbWF0ZSA9IHtcblx0ZGF0YToge30sXG5cdGltcGFjdDoge30sXG5cdHNldmVyZUltcGFjdDoge31cbn07XG5cbmNvbnN0IGVzdGltYXRvckhlbHBlciA9IChkYXRhKSA9PiB7XG5cdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRjb25zdCBpbXBhY3RDdXJyZW50bHlJbmZlY3RlZCA9IGRhdGEucmVwb3J0ZWRDYXNlcyAqIDEwO1xuXHRjb25zdCBzZXZlcmVJbXBhY3RDdXJyZW50bHlJbmZlY3RlZCA9IGRhdGEucmVwb3J0ZWRDYXNlcyAqIDUwO1xuXHRjb25zdCBleHBvbmVudER5cyA9IHBhcnNlSW50KGRhdGEudGltZVRvRWxhcHNlIC8gMywgMCk7XG5cdGNvbnN0IHRvdGFsRHlzID0gZGF0YS50aW1lVG9FbGFwc2U7XG5cdGNvbnN0IGV4cG9uZW50V2tzID0gcGFyc2VJbnQoKGRhdGEudGltZVRvRWxhcHNlICogNykgLyAzLCAwKTtcblx0Y29uc3QgZXhwb25lbnRNdGhzID0gcGFyc2VJbnQoKGRhdGEudGltZVRvRWxhcHNlICogMzApIC8gMywgMCk7XG5cdGNvbnN0IGVzdGltYXRlQmVkcyA9IHBhcnNlSW50KGRhdGEudG90YWxIb3NwaXRhbEJlZHMgKiAwLjM1LCAwKTtcblx0Y29uc3QgbnVtSXNJbnRlZ2VyID0gIU51bWJlci5pc0ludGVnZXIoZGF0YS50b3RhbEhvc3BpdGFsQmVkcyAqIDAuMzUsIDApO1xuXHRjb25zdCBhdmFpbGFibGVCZWRzID0gbnVtSXNJbnRlZ2VyID8gZXN0aW1hdGVCZWRzICsgMSA6IGVzdGltYXRlQmVkcztcblx0Y29uc3QgYXZnSW5jb21lID0gZGF0YS5yZWdpb24uYXZnRGFpbHlJbmNvbWVJblVTRDtcblx0Y29uc3QgaW5jb21lUG9wdWxhdGlvbiA9IGRhdGEucmVnaW9uLmF2Z0RhaWx5SW5jb21lUG9wdWxhdGlvbjtcblx0Y29uc3QgaW1wYWN0SW5EYXlzID0gcGFyc2VJbnQoXG5cdFx0aW1wYWN0Q3VycmVudGx5SW5mZWN0ZWQgKiAoMiAqKiBleHBvbmVudER5cyksIDBcblx0KTtcblx0Y29uc3Qgc2V2ZXJlSW1wYWN0SW5EYXlzID0gcGFyc2VJbnQoXG5cdFx0c2V2ZXJlSW1wYWN0Q3VycmVudGx5SW5mZWN0ZWQgKiAoMiAqKiBleHBvbmVudER5cyksIDBcblx0KTtcblx0Y29uc3QgaW1wYWN0SW5XZWVrcyA9IHBhcnNlSW50KFxuXHRcdGltcGFjdEN1cnJlbnRseUluZmVjdGVkICogKDIgKiogZXhwb25lbnRXa3MpLCAwXG5cdCk7XG5cdGNvbnN0IHNldmVyZUltcGFjdEluV2Vla3MgPSBwYXJzZUludChcblx0XHRzZXZlcmVJbXBhY3RDdXJyZW50bHlJbmZlY3RlZCAqICgyICoqIGV4cG9uZW50V2tzKSwgMFxuXHQpO1xuXHRjb25zdCBpbXBhY3RJbk1vbnRocyA9IHBhcnNlSW50KFxuXHRcdGltcGFjdEN1cnJlbnRseUluZmVjdGVkICogKDIgKiogZXhwb25lbnRNdGhzKSwgMFxuXHQpO1xuXHRjb25zdCBzZXZlcmVJbXBhY3RJbk1udGhzID0gcGFyc2VJbnQoXG5cdFx0c2V2ZXJlSW1wYWN0Q3VycmVudGx5SW5mZWN0ZWQgKiAoMiAqKiBleHBvbmVudE10aHMpLCAwXG5cdCk7XG5cblx0Y29uc3QgeyBzZXZlcmVJbXBhY3QgfSA9IGVzdGltYXRlO1xuXHRjb25zdCB7IGltcGFjdCB9ID0gZXN0aW1hdGU7XG5cdGxldCBpbXBhY3RWYWw7XG5cdGxldCBzZXZlcmVJbXBhY3RWYWw7XG5cdGxldCBpbXBhY3RJbmZlY3Rpb25zO1xuXHRsZXQgZG9sbGFyc0luRmxpZ2h0O1xuXHRsZXQgZG9sbGFyU3RyO1xuXG5cdGltcGFjdC5jdXJyZW50bHlJbmZlY3RlZCA9IGltcGFjdEN1cnJlbnRseUluZmVjdGVkO1xuXHRzZXZlcmVJbXBhY3QuY3VycmVudGx5SW5mZWN0ZWQgPSBzZXZlcmVJbXBhY3RDdXJyZW50bHlJbmZlY3RlZDtcblxuXHRzd2l0Y2ggKGRhdGEucGVyaW9kVHlwZSkge1xuXHRjYXNlICd3ZWVrcyc6XG5cdFx0aW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUgPSBpbXBhY3RJbldlZWtzO1xuXHRcdGltcGFjdC5zZXZlcmVDYXNlc0J5UmVxdWVzdGVkVGltZSA9IHBhcnNlSW50KFxuXHRcdFx0MC4xNSAqIGltcGFjdC5pbmZlY3Rpb25zQnlSZXF1ZXN0ZWRUaW1lLCAwXG5cdFx0KTtcblx0XHRpbXBhY3QuY2FzZXNGb3JJQ1VCeVJlcXVlc3RlZFRpbWUgPSBwYXJzZUludChcblx0XHRcdGltcGFjdC5pbmZlY3Rpb25zQnlSZXF1ZXN0ZWRUaW1lICogMC4wNSwgMFxuXHRcdCk7XG5cdFx0aW1wYWN0LmNhc2VzRm9yVmVudGlsYXRvcnNCeVJlcXVlc3RlZFRpbWUgPSBwYXJzZUludChcblx0XHRcdGltcGFjdC5pbmZlY3Rpb25zQnlSZXF1ZXN0ZWRUaW1lICogMC4wMiwgMFxuXHRcdCk7XG5cdFx0aW1wYWN0SW5mZWN0aW9ucyA9IGltcGFjdC5pbmZlY3Rpb25zQnlSZXF1ZXN0ZWRUaW1lO1xuXHRcdGRvbGxhcnNJbkZsaWdodCA9IGltcGFjdEluZmVjdGlvbnMgKiBhdmdJbmNvbWUgKiBpbmNvbWVQb3B1bGF0aW9uO1xuXHRcdGRvbGxhclN0ciA9IGRvbGxhcnNJbkZsaWdodCAvICh0b3RhbER5cyAqIDcpO1xuXG5cdFx0aW1wYWN0LmRvbGxhcnNJbkZsaWdodCA9IHBhcnNlSW50KGRvbGxhclN0ciwgMCk7XG5cblx0XHRzZXZlcmVJbXBhY3QuaW5mZWN0aW9uc0J5UmVxdWVzdGVkVGltZSA9IHNldmVyZUltcGFjdEluV2Vla3M7XG5cdFx0c2V2ZXJlSW1wYWN0LnNldmVyZUNhc2VzQnlSZXF1ZXN0ZWRUaW1lID0gcGFyc2VJbnQoXG5cdFx0XHQwLjE1ICogc2V2ZXJlSW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUsIDBcblx0XHQpO1xuXHRcdHNldmVyZUltcGFjdC5jYXNlc0ZvcklDVUJ5UmVxdWVzdGVkVGltZSA9IHBhcnNlSW50KFxuXHRcdFx0c2V2ZXJlSW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUgKiAwLjA1LCAwXG5cdFx0KTtcblx0XHRzZXZlcmVJbXBhY3QuY2FzZXNGb3JWZW50aWxhdG9yc0J5UmVxdWVzdGVkVGltZSA9IHBhcnNlSW50KFxuXHRcdFx0c2V2ZXJlSW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUgKiAwLjAyLCAwXG5cdFx0KTtcblx0XHRpbXBhY3RWYWwgPSBpbXBhY3Quc2V2ZXJlQ2FzZXNCeVJlcXVlc3RlZFRpbWU7XG5cdFx0c2V2ZXJlSW1wYWN0VmFsID0gc2V2ZXJlSW1wYWN0LnNldmVyZUNhc2VzQnlSZXF1ZXN0ZWRUaW1lO1xuXG5cdFx0aW1wYWN0Lmhvc3BpdGFsQmVkc0J5UmVxdWVzdGVkVGltZSA9IGF2YWlsYWJsZUJlZHMgLSBpbXBhY3RWYWw7XG5cdFx0c2V2ZXJlSW1wYWN0Lmhvc3BpdGFsQmVkc0J5UmVxdWVzdGVkVGltZSA9IGF2YWlsYWJsZUJlZHMgLSBzZXZlcmVJbXBhY3RWYWw7XG5cblx0XHRpbXBhY3RJbmZlY3Rpb25zID0gc2V2ZXJlSW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWU7XG5cdFx0ZG9sbGFyc0luRmxpZ2h0ID0gaW1wYWN0SW5mZWN0aW9ucyAqIGF2Z0luY29tZSAqIGluY29tZVBvcHVsYXRpb247XG5cdFx0ZG9sbGFyU3RyID0gZG9sbGFyc0luRmxpZ2h0IC8gKHRvdGFsRHlzICogNyk7XG5cblx0XHRzZXZlcmVJbXBhY3QuZG9sbGFyc0luRmxpZ2h0ID0gcGFyc2VJbnQoZG9sbGFyU3RyLCAwKTtcblxuXHRcdGJyZWFrO1xuXHRjYXNlICdtb250aHMnOlxuXHRcdGltcGFjdC5pbmZlY3Rpb25zQnlSZXF1ZXN0ZWRUaW1lID0gaW1wYWN0SW5Nb250aHM7XG5cdFx0aW1wYWN0LnNldmVyZUNhc2VzQnlSZXF1ZXN0ZWRUaW1lID0gcGFyc2VJbnQoXG5cdFx0XHQwLjE1ICogaW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUsIDBcblx0XHQpO1xuXHRcdGltcGFjdC5jYXNlc0ZvcklDVUJ5UmVxdWVzdGVkVGltZSA9IHBhcnNlSW50KFxuXHRcdFx0aW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUgKiAwLjA1LCAwXG5cdFx0KTtcblx0XHRpbXBhY3QuY2FzZXNGb3JWZW50aWxhdG9yc0J5UmVxdWVzdGVkVGltZSA9IHBhcnNlSW50KFxuXHRcdFx0aW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUgKiAwLjAyLCAwXG5cdFx0KTtcblxuXHRcdGltcGFjdEluZmVjdGlvbnMgPSBpbXBhY3QuaW5mZWN0aW9uc0J5UmVxdWVzdGVkVGltZTtcblx0XHRkb2xsYXJzSW5GbGlnaHQgPSBpbXBhY3RJbmZlY3Rpb25zICogYXZnSW5jb21lICogaW5jb21lUG9wdWxhdGlvbjtcblx0XHRkb2xsYXJTdHIgPSBkb2xsYXJzSW5GbGlnaHQgLyAodG90YWxEeXMgKiAzMCk7XG5cblx0XHRpbXBhY3QuZG9sbGFyc0luRmxpZ2h0ID0gcGFyc2VJbnQoZG9sbGFyU3RyLCAwKTtcblxuXHRcdHNldmVyZUltcGFjdC5pbmZlY3Rpb25zQnlSZXF1ZXN0ZWRUaW1lID0gc2V2ZXJlSW1wYWN0SW5NbnRocztcblx0XHRzZXZlcmVJbXBhY3Quc2V2ZXJlQ2FzZXNCeVJlcXVlc3RlZFRpbWUgPSBwYXJzZUludChcblx0XHRcdDAuMTUgKiBzZXZlcmVJbXBhY3QuaW5mZWN0aW9uc0J5UmVxdWVzdGVkVGltZSwgMFxuXHRcdCk7XG5cdFx0c2V2ZXJlSW1wYWN0LmNhc2VzRm9ySUNVQnlSZXF1ZXN0ZWRUaW1lID0gcGFyc2VJbnQoXG5cdFx0XHRzZXZlcmVJbXBhY3QuaW5mZWN0aW9uc0J5UmVxdWVzdGVkVGltZSAqIDAuMDUsIDBcblx0XHQpO1xuXHRcdHNldmVyZUltcGFjdC5jYXNlc0ZvclZlbnRpbGF0b3JzQnlSZXF1ZXN0ZWRUaW1lID0gcGFyc2VJbnQoXG5cdFx0XHRzZXZlcmVJbXBhY3QuaW5mZWN0aW9uc0J5UmVxdWVzdGVkVGltZSAqIDAuMDIsIDBcblx0XHQpO1xuXHRcdGltcGFjdFZhbCA9IGltcGFjdC5zZXZlcmVDYXNlc0J5UmVxdWVzdGVkVGltZTtcblx0XHRzZXZlcmVJbXBhY3RWYWwgPSBzZXZlcmVJbXBhY3Quc2V2ZXJlQ2FzZXNCeVJlcXVlc3RlZFRpbWU7XG5cblx0XHRpbXBhY3QuaG9zcGl0YWxCZWRzQnlSZXF1ZXN0ZWRUaW1lID0gYXZhaWxhYmxlQmVkcyAtIGltcGFjdFZhbDtcblx0XHRzZXZlcmVJbXBhY3QuaG9zcGl0YWxCZWRzQnlSZXF1ZXN0ZWRUaW1lID0gYXZhaWxhYmxlQmVkcyAtIHNldmVyZUltcGFjdFZhbDtcblxuXHRcdGltcGFjdEluZmVjdGlvbnMgPSBzZXZlcmVJbXBhY3QuaW5mZWN0aW9uc0J5UmVxdWVzdGVkVGltZTtcblx0XHRkb2xsYXJzSW5GbGlnaHQgPSBpbXBhY3RJbmZlY3Rpb25zICogYXZnSW5jb21lICogaW5jb21lUG9wdWxhdGlvbjtcblx0XHRkb2xsYXJTdHIgPSBkb2xsYXJzSW5GbGlnaHQgLyAodG90YWxEeXMgKiAzMCk7XG5cblx0XHRzZXZlcmVJbXBhY3QuZG9sbGFyc0luRmxpZ2h0ID0gcGFyc2VJbnQoZG9sbGFyU3RyLCAwKTtcblx0XHRicmVhaztcblx0Y2FzZSAnZGF5cyc6XG5cdGRlZmF1bHQ6XG5cdFx0aW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUgPSBpbXBhY3RJbkRheXM7XG5cdFx0aW1wYWN0LnNldmVyZUNhc2VzQnlSZXF1ZXN0ZWRUaW1lID0gcGFyc2VJbnQoXG5cdFx0XHQwLjE1ICogaW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUsIDBcblx0XHQpO1xuXHRcdGltcGFjdC5jYXNlc0ZvcklDVUJ5UmVxdWVzdGVkVGltZSA9IHBhcnNlSW50KFxuXHRcdFx0aW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUgKiAwLjA1LCAwXG5cdFx0KTtcblx0XHRpbXBhY3QuY2FzZXNGb3JWZW50aWxhdG9yc0J5UmVxdWVzdGVkVGltZSA9IHBhcnNlSW50KFxuXHRcdFx0aW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUgKiAwLjAyLCAwXG5cdFx0KTtcblxuXHRcdGltcGFjdEluZmVjdGlvbnMgPSBpbXBhY3QuaW5mZWN0aW9uc0J5UmVxdWVzdGVkVGltZTtcblx0XHRkb2xsYXJzSW5GbGlnaHQgPSBpbXBhY3RJbmZlY3Rpb25zICogYXZnSW5jb21lICogaW5jb21lUG9wdWxhdGlvbjtcblx0XHRkb2xsYXJTdHIgPSBkb2xsYXJzSW5GbGlnaHQgLyB0b3RhbER5cztcblxuXHRcdGltcGFjdC5kb2xsYXJzSW5GbGlnaHQgPSBwYXJzZUludChkb2xsYXJTdHIsIDApO1xuXG5cdFx0c2V2ZXJlSW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUgPSBzZXZlcmVJbXBhY3RJbkRheXM7XG5cdFx0c2V2ZXJlSW1wYWN0LnNldmVyZUNhc2VzQnlSZXF1ZXN0ZWRUaW1lID0gcGFyc2VJbnQoXG5cdFx0XHQwLjE1ICogc2V2ZXJlSW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUsIDBcblx0XHQpO1xuXG5cdFx0aW1wYWN0VmFsID0gaW1wYWN0LnNldmVyZUNhc2VzQnlSZXF1ZXN0ZWRUaW1lO1xuXHRcdHNldmVyZUltcGFjdFZhbCA9IHNldmVyZUltcGFjdC5zZXZlcmVDYXNlc0J5UmVxdWVzdGVkVGltZTtcblxuXHRcdGltcGFjdC5ob3NwaXRhbEJlZHNCeVJlcXVlc3RlZFRpbWUgPSBhdmFpbGFibGVCZWRzIC0gaW1wYWN0VmFsO1xuXHRcdHNldmVyZUltcGFjdC5ob3NwaXRhbEJlZHNCeVJlcXVlc3RlZFRpbWUgPSBhdmFpbGFibGVCZWRzIC0gc2V2ZXJlSW1wYWN0VmFsO1xuXHRcdHNldmVyZUltcGFjdC5jYXNlc0ZvcklDVUJ5UmVxdWVzdGVkVGltZSA9IHBhcnNlSW50KFxuXHRcdFx0c2V2ZXJlSW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUgKiAwLjA1LCAwXG5cdFx0KTtcblx0XHRzZXZlcmVJbXBhY3QuY2FzZXNGb3JWZW50aWxhdG9yc0J5UmVxdWVzdGVkVGltZSA9IHBhcnNlSW50KFxuXHRcdFx0c2V2ZXJlSW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUgKiAwLjAyLCAwXG5cdFx0KTtcblxuXHRcdGltcGFjdEluZmVjdGlvbnMgPSBzZXZlcmVJbXBhY3QuaW5mZWN0aW9uc0J5UmVxdWVzdGVkVGltZTtcblx0XHRkb2xsYXJzSW5GbGlnaHQgPSBpbXBhY3RJbmZlY3Rpb25zICogYXZnSW5jb21lICogaW5jb21lUG9wdWxhdGlvbjtcblx0XHRkb2xsYXJTdHIgPSBkb2xsYXJzSW5GbGlnaHQgLyB0b3RhbER5cztcblxuXHRcdHNldmVyZUltcGFjdC5kb2xsYXJzSW5GbGlnaHQgPSBwYXJzZUludChkb2xsYXJTdHIsIDApO1xuXHR9XG5cblx0cmV0dXJuIGVzdGltYXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXN0aW1hdG9ySGVscGVyO1xuIiwiaW1wb3J0IGVzdGltYXRvckhlbHBlciBmcm9tICcuL2VzdGltYXRvckhlbHBlcic7XG5cbmxldCBkYXRhID0ge1xuXHRyZWdpb246IHt9XG59O1xuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuXHQkKCcjbXlmb3JtJykuc3VibWl0KCgpID0+IHtcblx0XHRjb25zdCAkaW5wdXRzID0gJCgnI215Zm9ybSA6aW5wdXQnKTtcblxuXHRcdGNvbnN0IHZhbHVlcyA9IHt9O1xuXHRcdCRpbnB1dHMuZWFjaCgoKSA9PiB7XG5cdFx0XHRpZiAoJCh0aGlzKS52YWwoKSkge1xuXHRcdFx0XHR2YWx1ZXNbdGhpcy5uYW1lXSA9ICQodGhpcykudmFsKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0ZGVsZXRlIHZhbHVlcy5yZWdpc3RlcjtcblxuXHRcdGRhdGEgPSB7XG5cdFx0XHQuLi5kYXRhLFxuXHRcdFx0Li4udmFsdWVzXG5cdFx0fTtcblx0XHRlc3RpbWF0b3JIZWxwZXIoZGF0YSk7XG5cdH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9