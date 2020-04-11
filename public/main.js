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
	console.log(data)
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzdGltYXRvckhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQ0EsU0FBUztBQUNULFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsZUFBZTtBQUN2QixRQUFRLFNBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWUsOEVBQWUsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2hML0I7QUFBQTtBQUFnRDs7QUFFaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsU0FBSTtBQUNaLFVBQVUsU0FBSSxXQUFXLFNBQUk7QUFDN0I7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdFQUFlO0FBQ2hCLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgZXN0aW1hdGUgPSB7XG5cdGRhdGE6IHt9LFxuXHRpbXBhY3Q6IHt9LFxuXHRzZXZlcmVJbXBhY3Q6IHt9XG59O1xuXG5jb25zdCBlc3RpbWF0b3JIZWxwZXIgPSAoZGF0YSkgPT4ge1xuXHRjb25zb2xlLmxvZyhkYXRhKVxuXHRjb25zdCBpbXBhY3RDdXJyZW50bHlJbmZlY3RlZCA9IGRhdGEucmVwb3J0ZWRDYXNlcyAqIDEwO1xuXHRjb25zdCBzZXZlcmVJbXBhY3RDdXJyZW50bHlJbmZlY3RlZCA9IGRhdGEucmVwb3J0ZWRDYXNlcyAqIDUwO1xuXHRjb25zdCBleHBvbmVudER5cyA9IHBhcnNlSW50KGRhdGEudGltZVRvRWxhcHNlIC8gMywgMCk7XG5cdGNvbnN0IHRvdGFsRHlzID0gZGF0YS50aW1lVG9FbGFwc2U7XG5cdGNvbnN0IGV4cG9uZW50V2tzID0gcGFyc2VJbnQoKGRhdGEudGltZVRvRWxhcHNlICogNykgLyAzLCAwKTtcblx0Y29uc3QgZXhwb25lbnRNdGhzID0gcGFyc2VJbnQoKGRhdGEudGltZVRvRWxhcHNlICogMzApIC8gMywgMCk7XG5cdGNvbnN0IGVzdGltYXRlQmVkcyA9IHBhcnNlSW50KGRhdGEudG90YWxIb3NwaXRhbEJlZHMgKiAwLjM1LCAwKTtcblx0Y29uc3QgbnVtSXNJbnRlZ2VyID0gIU51bWJlci5pc0ludGVnZXIoZGF0YS50b3RhbEhvc3BpdGFsQmVkcyAqIDAuMzUsIDApO1xuXHRjb25zdCBhdmFpbGFibGVCZWRzID0gbnVtSXNJbnRlZ2VyID8gZXN0aW1hdGVCZWRzICsgMSA6IGVzdGltYXRlQmVkcztcblx0Y29uc3QgYXZnSW5jb21lID0gZGF0YS5yZWdpb24uYXZnRGFpbHlJbmNvbWVJblVTRDtcblx0Y29uc3QgaW5jb21lUG9wdWxhdGlvbiA9IGRhdGEucmVnaW9uLmF2Z0RhaWx5SW5jb21lUG9wdWxhdGlvbjtcblx0Y29uc3QgaW1wYWN0SW5EYXlzID0gcGFyc2VJbnQoXG5cdFx0aW1wYWN0Q3VycmVudGx5SW5mZWN0ZWQgKiAoMiAqKiBleHBvbmVudER5cyksIDBcblx0KTtcblx0Y29uc3Qgc2V2ZXJlSW1wYWN0SW5EYXlzID0gcGFyc2VJbnQoXG5cdFx0c2V2ZXJlSW1wYWN0Q3VycmVudGx5SW5mZWN0ZWQgKiAoMiAqKiBleHBvbmVudER5cyksIDBcblx0KTtcblx0Y29uc3QgaW1wYWN0SW5XZWVrcyA9IHBhcnNlSW50KFxuXHRcdGltcGFjdEN1cnJlbnRseUluZmVjdGVkICogKDIgKiogZXhwb25lbnRXa3MpLCAwXG5cdCk7XG5cdGNvbnN0IHNldmVyZUltcGFjdEluV2Vla3MgPSBwYXJzZUludChcblx0XHRzZXZlcmVJbXBhY3RDdXJyZW50bHlJbmZlY3RlZCAqICgyICoqIGV4cG9uZW50V2tzKSwgMFxuXHQpO1xuXHRjb25zdCBpbXBhY3RJbk1vbnRocyA9IHBhcnNlSW50KFxuXHRcdGltcGFjdEN1cnJlbnRseUluZmVjdGVkICogKDIgKiogZXhwb25lbnRNdGhzKSwgMFxuXHQpO1xuXHRjb25zdCBzZXZlcmVJbXBhY3RJbk1udGhzID0gcGFyc2VJbnQoXG5cdFx0c2V2ZXJlSW1wYWN0Q3VycmVudGx5SW5mZWN0ZWQgKiAoMiAqKiBleHBvbmVudE10aHMpLCAwXG5cdCk7XG5cblx0Y29uc3QgeyBzZXZlcmVJbXBhY3QgfSA9IGVzdGltYXRlO1xuXHRjb25zdCB7IGltcGFjdCB9ID0gZXN0aW1hdGU7XG5cdGxldCBpbXBhY3RWYWw7XG5cdGxldCBzZXZlcmVJbXBhY3RWYWw7XG5cdGxldCBpbXBhY3RJbmZlY3Rpb25zO1xuXHRsZXQgZG9sbGFyc0luRmxpZ2h0O1xuXHRsZXQgZG9sbGFyU3RyO1xuXG5cdGltcGFjdC5jdXJyZW50bHlJbmZlY3RlZCA9IGltcGFjdEN1cnJlbnRseUluZmVjdGVkO1xuXHRzZXZlcmVJbXBhY3QuY3VycmVudGx5SW5mZWN0ZWQgPSBzZXZlcmVJbXBhY3RDdXJyZW50bHlJbmZlY3RlZDtcblxuXHRzd2l0Y2ggKGRhdGEucGVyaW9kVHlwZSkge1xuXHRjYXNlICd3ZWVrcyc6XG5cdFx0aW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUgPSBpbXBhY3RJbldlZWtzO1xuXHRcdGltcGFjdC5zZXZlcmVDYXNlc0J5UmVxdWVzdGVkVGltZSA9IHBhcnNlSW50KFxuXHRcdFx0MC4xNSAqIGltcGFjdC5pbmZlY3Rpb25zQnlSZXF1ZXN0ZWRUaW1lLCAwXG5cdFx0KTtcblx0XHRpbXBhY3QuY2FzZXNGb3JJQ1VCeVJlcXVlc3RlZFRpbWUgPSBwYXJzZUludChcblx0XHRcdGltcGFjdC5pbmZlY3Rpb25zQnlSZXF1ZXN0ZWRUaW1lICogMC4wNSwgMFxuXHRcdCk7XG5cdFx0aW1wYWN0LmNhc2VzRm9yVmVudGlsYXRvcnNCeVJlcXVlc3RlZFRpbWUgPSBwYXJzZUludChcblx0XHRcdGltcGFjdC5pbmZlY3Rpb25zQnlSZXF1ZXN0ZWRUaW1lICogMC4wMiwgMFxuXHRcdCk7XG5cdFx0aW1wYWN0SW5mZWN0aW9ucyA9IGltcGFjdC5pbmZlY3Rpb25zQnlSZXF1ZXN0ZWRUaW1lO1xuXHRcdGRvbGxhcnNJbkZsaWdodCA9IGltcGFjdEluZmVjdGlvbnMgKiBhdmdJbmNvbWUgKiBpbmNvbWVQb3B1bGF0aW9uO1xuXHRcdGRvbGxhclN0ciA9IGRvbGxhcnNJbkZsaWdodCAvICh0b3RhbER5cyAqIDcpO1xuXG5cdFx0aW1wYWN0LmRvbGxhcnNJbkZsaWdodCA9IHBhcnNlSW50KGRvbGxhclN0ciwgMCk7XG5cblx0XHRzZXZlcmVJbXBhY3QuaW5mZWN0aW9uc0J5UmVxdWVzdGVkVGltZSA9IHNldmVyZUltcGFjdEluV2Vla3M7XG5cdFx0c2V2ZXJlSW1wYWN0LnNldmVyZUNhc2VzQnlSZXF1ZXN0ZWRUaW1lID0gcGFyc2VJbnQoXG5cdFx0XHQwLjE1ICogc2V2ZXJlSW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUsIDBcblx0XHQpO1xuXHRcdHNldmVyZUltcGFjdC5jYXNlc0ZvcklDVUJ5UmVxdWVzdGVkVGltZSA9IHBhcnNlSW50KFxuXHRcdFx0c2V2ZXJlSW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUgKiAwLjA1LCAwXG5cdFx0KTtcblx0XHRzZXZlcmVJbXBhY3QuY2FzZXNGb3JWZW50aWxhdG9yc0J5UmVxdWVzdGVkVGltZSA9IHBhcnNlSW50KFxuXHRcdFx0c2V2ZXJlSW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUgKiAwLjAyLCAwXG5cdFx0KTtcblx0XHRpbXBhY3RWYWwgPSBpbXBhY3Quc2V2ZXJlQ2FzZXNCeVJlcXVlc3RlZFRpbWU7XG5cdFx0c2V2ZXJlSW1wYWN0VmFsID0gc2V2ZXJlSW1wYWN0LnNldmVyZUNhc2VzQnlSZXF1ZXN0ZWRUaW1lO1xuXG5cdFx0aW1wYWN0Lmhvc3BpdGFsQmVkc0J5UmVxdWVzdGVkVGltZSA9IGF2YWlsYWJsZUJlZHMgLSBpbXBhY3RWYWw7XG5cdFx0c2V2ZXJlSW1wYWN0Lmhvc3BpdGFsQmVkc0J5UmVxdWVzdGVkVGltZSA9IGF2YWlsYWJsZUJlZHMgLSBzZXZlcmVJbXBhY3RWYWw7XG5cblx0XHRpbXBhY3RJbmZlY3Rpb25zID0gc2V2ZXJlSW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWU7XG5cdFx0ZG9sbGFyc0luRmxpZ2h0ID0gaW1wYWN0SW5mZWN0aW9ucyAqIGF2Z0luY29tZSAqIGluY29tZVBvcHVsYXRpb247XG5cdFx0ZG9sbGFyU3RyID0gZG9sbGFyc0luRmxpZ2h0IC8gKHRvdGFsRHlzICogNyk7XG5cblx0XHRzZXZlcmVJbXBhY3QuZG9sbGFyc0luRmxpZ2h0ID0gcGFyc2VJbnQoZG9sbGFyU3RyLCAwKTtcblxuXHRcdGJyZWFrO1xuXHRjYXNlICdtb250aHMnOlxuXHRcdGltcGFjdC5pbmZlY3Rpb25zQnlSZXF1ZXN0ZWRUaW1lID0gaW1wYWN0SW5Nb250aHM7XG5cdFx0aW1wYWN0LnNldmVyZUNhc2VzQnlSZXF1ZXN0ZWRUaW1lID0gcGFyc2VJbnQoXG5cdFx0XHQwLjE1ICogaW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUsIDBcblx0XHQpO1xuXHRcdGltcGFjdC5jYXNlc0ZvcklDVUJ5UmVxdWVzdGVkVGltZSA9IHBhcnNlSW50KFxuXHRcdFx0aW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUgKiAwLjA1LCAwXG5cdFx0KTtcblx0XHRpbXBhY3QuY2FzZXNGb3JWZW50aWxhdG9yc0J5UmVxdWVzdGVkVGltZSA9IHBhcnNlSW50KFxuXHRcdFx0aW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUgKiAwLjAyLCAwXG5cdFx0KTtcblxuXHRcdGltcGFjdEluZmVjdGlvbnMgPSBpbXBhY3QuaW5mZWN0aW9uc0J5UmVxdWVzdGVkVGltZTtcblx0XHRkb2xsYXJzSW5GbGlnaHQgPSBpbXBhY3RJbmZlY3Rpb25zICogYXZnSW5jb21lICogaW5jb21lUG9wdWxhdGlvbjtcblx0XHRkb2xsYXJTdHIgPSBkb2xsYXJzSW5GbGlnaHQgLyAodG90YWxEeXMgKiAzMCk7XG5cblx0XHRpbXBhY3QuZG9sbGFyc0luRmxpZ2h0ID0gcGFyc2VJbnQoZG9sbGFyU3RyLCAwKTtcblxuXHRcdHNldmVyZUltcGFjdC5pbmZlY3Rpb25zQnlSZXF1ZXN0ZWRUaW1lID0gc2V2ZXJlSW1wYWN0SW5NbnRocztcblx0XHRzZXZlcmVJbXBhY3Quc2V2ZXJlQ2FzZXNCeVJlcXVlc3RlZFRpbWUgPSBwYXJzZUludChcblx0XHRcdDAuMTUgKiBzZXZlcmVJbXBhY3QuaW5mZWN0aW9uc0J5UmVxdWVzdGVkVGltZSwgMFxuXHRcdCk7XG5cdFx0c2V2ZXJlSW1wYWN0LmNhc2VzRm9ySUNVQnlSZXF1ZXN0ZWRUaW1lID0gcGFyc2VJbnQoXG5cdFx0XHRzZXZlcmVJbXBhY3QuaW5mZWN0aW9uc0J5UmVxdWVzdGVkVGltZSAqIDAuMDUsIDBcblx0XHQpO1xuXHRcdHNldmVyZUltcGFjdC5jYXNlc0ZvclZlbnRpbGF0b3JzQnlSZXF1ZXN0ZWRUaW1lID0gcGFyc2VJbnQoXG5cdFx0XHRzZXZlcmVJbXBhY3QuaW5mZWN0aW9uc0J5UmVxdWVzdGVkVGltZSAqIDAuMDIsIDBcblx0XHQpO1xuXHRcdGltcGFjdFZhbCA9IGltcGFjdC5zZXZlcmVDYXNlc0J5UmVxdWVzdGVkVGltZTtcblx0XHRzZXZlcmVJbXBhY3RWYWwgPSBzZXZlcmVJbXBhY3Quc2V2ZXJlQ2FzZXNCeVJlcXVlc3RlZFRpbWU7XG5cblx0XHRpbXBhY3QuaG9zcGl0YWxCZWRzQnlSZXF1ZXN0ZWRUaW1lID0gYXZhaWxhYmxlQmVkcyAtIGltcGFjdFZhbDtcblx0XHRzZXZlcmVJbXBhY3QuaG9zcGl0YWxCZWRzQnlSZXF1ZXN0ZWRUaW1lID0gYXZhaWxhYmxlQmVkcyAtIHNldmVyZUltcGFjdFZhbDtcblxuXHRcdGltcGFjdEluZmVjdGlvbnMgPSBzZXZlcmVJbXBhY3QuaW5mZWN0aW9uc0J5UmVxdWVzdGVkVGltZTtcblx0XHRkb2xsYXJzSW5GbGlnaHQgPSBpbXBhY3RJbmZlY3Rpb25zICogYXZnSW5jb21lICogaW5jb21lUG9wdWxhdGlvbjtcblx0XHRkb2xsYXJTdHIgPSBkb2xsYXJzSW5GbGlnaHQgLyAodG90YWxEeXMgKiAzMCk7XG5cblx0XHRzZXZlcmVJbXBhY3QuZG9sbGFyc0luRmxpZ2h0ID0gcGFyc2VJbnQoZG9sbGFyU3RyLCAwKTtcblx0XHRicmVhaztcblx0Y2FzZSAnZGF5cyc6XG5cdGRlZmF1bHQ6XG5cdFx0aW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUgPSBpbXBhY3RJbkRheXM7XG5cdFx0aW1wYWN0LnNldmVyZUNhc2VzQnlSZXF1ZXN0ZWRUaW1lID0gcGFyc2VJbnQoXG5cdFx0XHQwLjE1ICogaW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUsIDBcblx0XHQpO1xuXHRcdGltcGFjdC5jYXNlc0ZvcklDVUJ5UmVxdWVzdGVkVGltZSA9IHBhcnNlSW50KFxuXHRcdFx0aW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUgKiAwLjA1LCAwXG5cdFx0KTtcblx0XHRpbXBhY3QuY2FzZXNGb3JWZW50aWxhdG9yc0J5UmVxdWVzdGVkVGltZSA9IHBhcnNlSW50KFxuXHRcdFx0aW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUgKiAwLjAyLCAwXG5cdFx0KTtcblxuXHRcdGltcGFjdEluZmVjdGlvbnMgPSBpbXBhY3QuaW5mZWN0aW9uc0J5UmVxdWVzdGVkVGltZTtcblx0XHRkb2xsYXJzSW5GbGlnaHQgPSBpbXBhY3RJbmZlY3Rpb25zICogYXZnSW5jb21lICogaW5jb21lUG9wdWxhdGlvbjtcblx0XHRkb2xsYXJTdHIgPSBkb2xsYXJzSW5GbGlnaHQgLyB0b3RhbER5cztcblxuXHRcdGltcGFjdC5kb2xsYXJzSW5GbGlnaHQgPSBwYXJzZUludChkb2xsYXJTdHIsIDApO1xuXG5cdFx0c2V2ZXJlSW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUgPSBzZXZlcmVJbXBhY3RJbkRheXM7XG5cdFx0c2V2ZXJlSW1wYWN0LnNldmVyZUNhc2VzQnlSZXF1ZXN0ZWRUaW1lID0gcGFyc2VJbnQoXG5cdFx0XHQwLjE1ICogc2V2ZXJlSW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUsIDBcblx0XHQpO1xuXG5cdFx0aW1wYWN0VmFsID0gaW1wYWN0LnNldmVyZUNhc2VzQnlSZXF1ZXN0ZWRUaW1lO1xuXHRcdHNldmVyZUltcGFjdFZhbCA9IHNldmVyZUltcGFjdC5zZXZlcmVDYXNlc0J5UmVxdWVzdGVkVGltZTtcblxuXHRcdGltcGFjdC5ob3NwaXRhbEJlZHNCeVJlcXVlc3RlZFRpbWUgPSBhdmFpbGFibGVCZWRzIC0gaW1wYWN0VmFsO1xuXHRcdHNldmVyZUltcGFjdC5ob3NwaXRhbEJlZHNCeVJlcXVlc3RlZFRpbWUgPSBhdmFpbGFibGVCZWRzIC0gc2V2ZXJlSW1wYWN0VmFsO1xuXHRcdHNldmVyZUltcGFjdC5jYXNlc0ZvcklDVUJ5UmVxdWVzdGVkVGltZSA9IHBhcnNlSW50KFxuXHRcdFx0c2V2ZXJlSW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUgKiAwLjA1LCAwXG5cdFx0KTtcblx0XHRzZXZlcmVJbXBhY3QuY2FzZXNGb3JWZW50aWxhdG9yc0J5UmVxdWVzdGVkVGltZSA9IHBhcnNlSW50KFxuXHRcdFx0c2V2ZXJlSW1wYWN0LmluZmVjdGlvbnNCeVJlcXVlc3RlZFRpbWUgKiAwLjAyLCAwXG5cdFx0KTtcblxuXHRcdGltcGFjdEluZmVjdGlvbnMgPSBzZXZlcmVJbXBhY3QuaW5mZWN0aW9uc0J5UmVxdWVzdGVkVGltZTtcblx0XHRkb2xsYXJzSW5GbGlnaHQgPSBpbXBhY3RJbmZlY3Rpb25zICogYXZnSW5jb21lICogaW5jb21lUG9wdWxhdGlvbjtcblx0XHRkb2xsYXJTdHIgPSBkb2xsYXJzSW5GbGlnaHQgLyB0b3RhbER5cztcblxuXHRcdHNldmVyZUltcGFjdC5kb2xsYXJzSW5GbGlnaHQgPSBwYXJzZUludChkb2xsYXJTdHIsIDApO1xuXHR9XG5cblx0cmV0dXJuIGVzdGltYXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXN0aW1hdG9ySGVscGVyO1xuIiwiaW1wb3J0IGVzdGltYXRvckhlbHBlciBmcm9tICcuL2VzdGltYXRvckhlbHBlcic7XG5cbmxldCBkYXRhID0ge1xuXHRyZWdpb246IHt9XG59O1xuXG4kKCcjbXlmb3JtJykuc3VibWl0KCgpID0+IHtcblx0Y29uc3QgJGlucHV0cyA9ICQoJyNteWZvcm0gOmlucHV0Jyk7XG5cblx0Y29uc3QgdmFsdWVzID0ge307XG5cdCRpbnB1dHMuZWFjaCgoKSA9PiB7XG5cdFx0aWYgKCQodGhpcykudmFsKCkpIHtcblx0XHRcdHZhbHVlc1t0aGlzLm5hbWVdID0gJCh0aGlzKS52YWwoKTtcblx0XHR9XG5cdH0pO1xuXHRkZWxldGUgdmFsdWVzLnJlZ2lzdGVyO1xuXG5cdGRhdGEgPSB7XG5cdFx0Li4uZGF0YSxcblx0XHQuLi52YWx1ZXNcblx0fTtcblx0ZXN0aW1hdG9ySGVscGVyKGRhdGEpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9