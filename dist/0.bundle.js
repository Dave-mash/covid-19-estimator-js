(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/deepmerge/dist/es.js":
/*!*******************************************!*\
  !*** ./node_modules/deepmerge/dist/es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		} else {
			destination[key] = deepmerge(target[key], source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

/* harmony default export */ __webpack_exports__["default"] = (deepmerge_1);


/***/ }),

/***/ "./node_modules/formik/dist/formik.esm.js":
/*!************************************************!*\
  !*** ./node_modules/formik/dist/formik.esm.js ***!
  \************************************************/
/*! exports provided: ErrorMessage, FastField, Field, FieldArray, Form, Formik, FormikConsumer, FormikContext, FormikProvider, connect, getActiveElement, getIn, insert, isEmptyArray, isEmptyChildren, isFunction, isInputEvent, isInteger, isNaN, isObject, isPromise, isString, move, prepareDataForValidation, replace, setIn, setNestedObjectValues, swap, useField, useFormik, useFormikContext, validateYupSchema, withFormik, yupToFormErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FastField", function() { return FastField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldArray", function() { return FieldArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formik", function() { return Formik; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormikConsumer", function() { return FormikConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormikContext", function() { return FormikContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormikProvider", function() { return FormikProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveElement", function() { return getActiveElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIn", function() { return getIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyArray", function() { return isEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyChildren", function() { return isEmptyChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInputEvent", function() { return isInputEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteger", function() { return isInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return isNaN$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "move", function() { return move; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareDataForValidation", function() { return prepareDataForValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIn", function() { return setIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNestedObjectValues", function() { return setNestedObjectValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swap", function() { return swap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useField", function() { return useField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormik", function() { return useFormik; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormikContext", function() { return useFormikContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateYupSchema", function() { return validateYupSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withFormik", function() { return withFormik; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yupToFormErrors", function() { return yupToFormErrors; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fast-compare */ "./node_modules/react-fast-compare/index.js");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/es.js");
/* harmony import */ var lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/isPlainObject */ "./node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var lodash_es_clone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/clone */ "./node_modules/lodash-es/clone.js");
/* harmony import */ var lodash_es_toPath__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es/toPath */ "./node_modules/lodash-es/toPath.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var scheduler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! scheduler */ "./node_modules/scheduler/index.js");
/* harmony import */ var scheduler__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(scheduler__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es/cloneDeep */ "./node_modules/lodash-es/cloneDeep.js");











function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/** @private is the value an empty array? */

var isEmptyArray = function isEmptyArray(value) {
  return Array.isArray(value) && value.length === 0;
};
/** @private is the given object a Function? */

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};
/** @private is the given object an Object? */

var isObject = function isObject(obj) {
  return obj !== null && typeof obj === 'object';
};
/** @private is the given object an integer? */

var isInteger = function isInteger(obj) {
  return String(Math.floor(Number(obj))) === obj;
};
/** @private is the given object a string? */

var isString = function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
};
/** @private is the given object a NaN? */
// eslint-disable-next-line no-self-compare

var isNaN$1 = function isNaN(obj) {
  return obj !== obj;
};
/** @private Does a React component have exactly 0 children? */

var isEmptyChildren = function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(children) === 0;
};
/** @private is the given object/value a promise? */

var isPromise = function isPromise(value) {
  return isObject(value) && isFunction(value.then);
};
/** @private is the given object/value a type of synthetic event? */

var isInputEvent = function isInputEvent(value) {
  return value && isObject(value) && isObject(value.target);
};
/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?Document} doc Defaults to current document.
 * @return {Element | null}
 * @see https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/dom/getActiveElement.js
 */

function getActiveElement(doc) {
  doc = doc || (typeof document !== 'undefined' ? document : undefined);

  if (typeof doc === 'undefined') {
    return null;
  }

  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}
/**
 * Deeply get a value from an object via its path.
 */

function getIn(obj, key, def, p) {
  if (p === void 0) {
    p = 0;
  }

  var path = Object(lodash_es_toPath__WEBPACK_IMPORTED_MODULE_5__["default"])(key);

  while (obj && p < path.length) {
    obj = obj[path[p++]];
  }

  return obj === undefined ? def : obj;
}
/**
 * Deeply set a value from in object via it's path. If the value at `path`
 * has changed, return a shallow copy of obj with `value` set at `path`.
 * If `value` has not changed, return the original `obj`.
 *
 * Existing objects / arrays along `path` are also shallow copied. Sibling
 * objects along path retain the same internal js reference. Since new
 * objects / arrays are only created along `path`, we can test if anything
 * changed in a nested structure by comparing the object's reference in
 * the old and new object, similar to how russian doll cache invalidation
 * works.
 *
 * In earlier versions of this function, which used cloneDeep, there were
 * issues whereby settings a nested value would mutate the parent
 * instead of creating a new object. `clone` avoids that bug making a
 * shallow copy of the objects along the update path
 * so no object is mutated in place.
 *
 * Before changing this function, please read through the following
 * discussions.
 *
 * @see https://github.com/developit/linkstate
 * @see https://github.com/jaredpalmer/formik/pull/123
 */

function setIn(obj, path, value) {
  var res = Object(lodash_es_clone__WEBPACK_IMPORTED_MODULE_4__["default"])(obj); // this keeps inheritance when obj is a class

  var resVal = res;
  var i = 0;
  var pathArray = Object(lodash_es_toPath__WEBPACK_IMPORTED_MODULE_5__["default"])(path);

  for (; i < pathArray.length - 1; i++) {
    var currentPath = pathArray[i];
    var currentObj = getIn(obj, pathArray.slice(0, i + 1));

    if (currentObj && (isObject(currentObj) || Array.isArray(currentObj))) {
      resVal = resVal[currentPath] = Object(lodash_es_clone__WEBPACK_IMPORTED_MODULE_4__["default"])(currentObj);
    } else {
      var nextPath = pathArray[i + 1];
      resVal = resVal[currentPath] = isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
    }
  } // Return original object if new value is the same as current


  if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
    return obj;
  }

  if (value === undefined) {
    delete resVal[pathArray[i]];
  } else {
    resVal[pathArray[i]] = value;
  } // If the path array has a single element, the loop did not run.
  // Deleting on `resVal` had no effect in this scenario, so we delete on the result instead.


  if (i === 0 && value === undefined) {
    delete res[pathArray[i]];
  }

  return res;
}
/**
 * Recursively a set the same value for all keys and arrays nested object, cloning
 * @param object
 * @param value
 * @param visited
 * @param response
 */

function setNestedObjectValues(object, value, visited, response) {
  if (visited === void 0) {
    visited = new WeakMap();
  }

  if (response === void 0) {
    response = {};
  }

  for (var _i = 0, _Object$keys = Object.keys(object); _i < _Object$keys.length; _i++) {
    var k = _Object$keys[_i];
    var val = object[k];

    if (isObject(val)) {
      if (!visited.get(val)) {
        visited.set(val, true); // In order to keep array values consistent for both dot path  and
        // bracket syntax, we need to check if this is an array so that
        // this will output  { friends: [true] } and not { friends: { "0": true } }

        response[k] = Array.isArray(val) ? [] : {};
        setNestedObjectValues(val, value, visited, response[k]);
      }
    } else {
      response[k] = value;
    }
  }

  return response;
}

var FormikContext =
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined);
var FormikProvider = FormikContext.Provider;
var FormikConsumer = FormikContext.Consumer;
function useFormikContext() {
  var formik = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(FormikContext);
  !!!formik ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : undefined : void 0;
  return formik;
}

function formikReducer(state, msg) {
  switch (msg.type) {
    case 'SET_VALUES':
      return _extends({}, state, {
        values: msg.payload
      });

    case 'SET_TOUCHED':
      return _extends({}, state, {
        touched: msg.payload
      });

    case 'SET_ERRORS':
      if (react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(state.errors, msg.payload)) {
        return state;
      }

      return _extends({}, state, {
        errors: msg.payload
      });

    case 'SET_STATUS':
      return _extends({}, state, {
        status: msg.payload
      });

    case 'SET_ISSUBMITTING':
      return _extends({}, state, {
        isSubmitting: msg.payload
      });

    case 'SET_ISVALIDATING':
      return _extends({}, state, {
        isValidating: msg.payload
      });

    case 'SET_FIELD_VALUE':
      return _extends({}, state, {
        values: setIn(state.values, msg.payload.field, msg.payload.value)
      });

    case 'SET_FIELD_TOUCHED':
      return _extends({}, state, {
        touched: setIn(state.touched, msg.payload.field, msg.payload.value)
      });

    case 'SET_FIELD_ERROR':
      return _extends({}, state, {
        errors: setIn(state.errors, msg.payload.field, msg.payload.value)
      });

    case 'RESET_FORM':
      return _extends({}, state, {}, msg.payload);

    case 'SET_FORMIK_STATE':
      return msg.payload(state);

    case 'SUBMIT_ATTEMPT':
      return _extends({}, state, {
        touched: setNestedObjectValues(state.values, true),
        isSubmitting: true,
        submitCount: state.submitCount + 1
      });

    case 'SUBMIT_FAILURE':
      return _extends({}, state, {
        isSubmitting: false
      });

    case 'SUBMIT_SUCCESS':
      return _extends({}, state, {
        isSubmitting: false
      });

    default:
      return state;
  }
} // Initial empty states // objects


var emptyErrors = {};
var emptyTouched = {};
function useFormik(_ref) {
  var _ref$validateOnChange = _ref.validateOnChange,
      validateOnChange = _ref$validateOnChange === void 0 ? true : _ref$validateOnChange,
      _ref$validateOnBlur = _ref.validateOnBlur,
      validateOnBlur = _ref$validateOnBlur === void 0 ? true : _ref$validateOnBlur,
      _ref$validateOnMount = _ref.validateOnMount,
      validateOnMount = _ref$validateOnMount === void 0 ? false : _ref$validateOnMount,
      isInitialValid = _ref.isInitialValid,
      _ref$enableReinitiali = _ref.enableReinitialize,
      enableReinitialize = _ref$enableReinitiali === void 0 ? false : _ref$enableReinitiali,
      onSubmit = _ref.onSubmit,
      rest = _objectWithoutPropertiesLoose(_ref, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]);

  var props = _extends({
    validateOnChange: validateOnChange,
    validateOnBlur: validateOnBlur,
    validateOnMount: validateOnMount,
    onSubmit: onSubmit
  }, rest);

  var initialValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(props.initialValues);
  var initialErrors = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(props.initialErrors || emptyErrors);
  var initialTouched = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(props.initialTouched || emptyTouched);
  var initialStatus = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(props.initialStatus);
  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var fieldRegistry = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (true) {
      !(typeof isInitialValid === 'undefined') ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.') : undefined : void 0;
    } // eslint-disable-next-line

  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []);

  var _React$useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(formikReducer, {
    values: props.initialValues,
    errors: props.initialErrors || emptyErrors,
    touched: props.initialTouched || emptyTouched,
    status: props.initialStatus,
    isSubmitting: false,
    isValidating: false,
    submitCount: 0
  }),
      state = _React$useReducer[0],
      dispatch = _React$useReducer[1];

  var runValidateHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (values, field) {
    return new Promise(function (resolve, reject) {
      var maybePromisedErrors = props.validate(values, field);

      if (maybePromisedErrors == null) {
        // use loose null check here on purpose
        resolve(emptyErrors);
      } else if (isPromise(maybePromisedErrors)) {
        maybePromisedErrors.then(function (errors) {
          resolve(errors || emptyErrors);
        }, function (actualException) {
          if (true) {
            console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", actualException);
          }

          reject(actualException);
        });
      } else {
        resolve(maybePromisedErrors);
      }
    });
  }, [props.validate]);
  /**
   * Run validation against a Yup schema and optionally run a function if successful
   */

  var runValidationSchema = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (values, field) {
    var validationSchema = props.validationSchema;
    var schema = isFunction(validationSchema) ? validationSchema(field) : validationSchema;
    var promise = field && schema.validateAt ? schema.validateAt(field, values) : validateYupSchema(values, schema);
    return new Promise(function (resolve, reject) {
      promise.then(function () {
        resolve(emptyErrors);
      }, function (err) {
        // Yup will throw a validation error if validation fails. We catch those and
        // resolve them into Formik errors. We can sniff if something is a Yup error
        // by checking error.name.
        // @see https://github.com/jquense/yup#validationerrorerrors-string--arraystring-value-any-path-string
        if (err.name === 'ValidationError') {
          resolve(yupToFormErrors(err));
        } else {
          // We throw any other errors
          if (true) {
            console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", err);
          }

          reject(err);
        }
      });
    });
  }, [props.validationSchema]);
  var runSingleFieldLevelValidation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (field, value) {
    return new Promise(function (resolve) {
      return resolve(fieldRegistry.current[field].validate(value));
    });
  }, []);
  var runFieldLevelValidations = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (values) {
    var fieldKeysWithValidation = Object.keys(fieldRegistry.current).filter(function (f) {
      return isFunction(fieldRegistry.current[f].validate);
    }); // Construct an array with all of the field validation functions

    var fieldValidations = fieldKeysWithValidation.length > 0 ? fieldKeysWithValidation.map(function (f) {
      return runSingleFieldLevelValidation(f, getIn(values, f));
    }) : [Promise.resolve('DO_NOT_DELETE_YOU_WILL_BE_FIRED')]; // use special case ;)

    return Promise.all(fieldValidations).then(function (fieldErrorsList) {
      return fieldErrorsList.reduce(function (prev, curr, index) {
        if (curr === 'DO_NOT_DELETE_YOU_WILL_BE_FIRED') {
          return prev;
        }

        if (curr) {
          prev = setIn(prev, fieldKeysWithValidation[index], curr);
        }

        return prev;
      }, {});
    });
  }, [runSingleFieldLevelValidation]); // Run all validations and return the result

  var runAllValidations = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (values) {
    return Promise.all([runFieldLevelValidations(values), props.validationSchema ? runValidationSchema(values) : {}, props.validate ? runValidateHandler(values) : {}]).then(function (_ref2) {
      var fieldErrors = _ref2[0],
          schemaErrors = _ref2[1],
          validateErrors = _ref2[2];
      var combinedErrors = deepmerge__WEBPACK_IMPORTED_MODULE_2__["default"].all([fieldErrors, schemaErrors, validateErrors], {
        arrayMerge: arrayMerge
      });
      return combinedErrors;
    });
  }, [props.validate, props.validationSchema, runFieldLevelValidations, runValidateHandler, runValidationSchema]); // Run validations and dispatching the result as low-priority via rAF.
  //
  // The thinking is that validation as a result of onChange and onBlur
  // should never block user input. Note: This method should never be called
  // during the submission phase because validation prior to submission
  // is actaully high-priority since we absolutely need to guarantee the
  // form is valid before executing props.onSubmit.

  var validateFormWithLowPriority = useEventCallback(function (values) {
    if (values === void 0) {
      values = state.values;
    }

    return Object(scheduler__WEBPACK_IMPORTED_MODULE_7__["unstable_runWithPriority"])(scheduler__WEBPACK_IMPORTED_MODULE_7__["LowPriority"], function () {
      return runAllValidations(values).then(function (combinedErrors) {
        if (!!isMounted.current) {
          dispatch({
            type: 'SET_ERRORS',
            payload: combinedErrors
          });
        }

        return combinedErrors;
      })["catch"](function (actualException) {
        if (true) {
          // Users can throw during validate, however they have no way of handling their error on touch / blur. In low priority, we need to handle it
          console.warn("Warning: An unhandled error was caught during low priority validation in <Formik validate />", actualException);
        }
      });
    });
  }); // Run all validations methods and update state accordingly

  var validateFormWithHighPriority = useEventCallback(function (values) {
    if (values === void 0) {
      values = state.values;
    }

    dispatch({
      type: 'SET_ISVALIDATING',
      payload: true
    });
    return runAllValidations(values).then(function (combinedErrors) {
      if (!!isMounted.current) {
        dispatch({
          type: 'SET_ISVALIDATING',
          payload: false
        });

        if (!react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(state.errors, combinedErrors)) {
          dispatch({
            type: 'SET_ERRORS',
            payload: combinedErrors
          });
        }
      }

      return combinedErrors;
    });
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (validateOnMount && isMounted.current === true) {
      validateFormWithLowPriority(initialValues.current);
    }
  }, [validateOnMount, validateFormWithLowPriority]);
  var resetForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (nextState) {
    var values = nextState && nextState.values ? nextState.values : initialValues.current;
    var errors = nextState && nextState.errors ? nextState.errors : initialErrors.current ? initialErrors.current : props.initialErrors || {};
    var touched = nextState && nextState.touched ? nextState.touched : initialTouched.current ? initialTouched.current : props.initialTouched || {};
    var status = nextState && nextState.status ? nextState.status : initialStatus.current ? initialStatus.current : props.initialStatus;
    initialValues.current = values;
    initialErrors.current = errors;
    initialTouched.current = touched;
    initialStatus.current = status;

    var dispatchFn = function dispatchFn() {
      dispatch({
        type: 'RESET_FORM',
        payload: {
          isSubmitting: !!nextState && !!nextState.isSubmitting,
          errors: errors,
          touched: touched,
          status: status,
          values: values,
          isValidating: !!nextState && !!nextState.isValidating,
          submitCount: !!nextState && !!nextState.submitCount && typeof nextState.submitCount === 'number' ? nextState.submitCount : 0
        }
      });
    };

    if (props.onReset) {
      var maybePromisedOnReset = props.onReset(state.values, imperativeMethods);

      if (isPromise(maybePromisedOnReset)) {
        maybePromisedOnReset.then(dispatchFn);
      } else {
        dispatchFn();
      }
    } else {
      dispatchFn();
    }
  }, [props.initialErrors, props.initialStatus, props.initialTouched]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!enableReinitialize) {
      initialValues.current = props.initialValues;
    }
  }, [enableReinitialize, props.initialValues]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (enableReinitialize && isMounted.current === true && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialValues.current, props.initialValues)) {
      initialValues.current = props.initialValues;
      resetForm();
    }
  }, [enableReinitialize, props.initialValues, resetForm]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (enableReinitialize && isMounted.current === true && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialErrors.current, props.initialErrors)) {
      initialErrors.current = props.initialErrors || emptyErrors;
      dispatch({
        type: 'SET_ERRORS',
        payload: props.initialErrors || emptyErrors
      });
    }
  }, [enableReinitialize, props.initialErrors]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (enableReinitialize && isMounted.current === true && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialTouched.current, props.initialTouched)) {
      initialTouched.current = props.initialTouched || emptyTouched;
      dispatch({
        type: 'SET_TOUCHED',
        payload: props.initialTouched || emptyTouched
      });
    }
  }, [enableReinitialize, props.initialTouched]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (enableReinitialize && isMounted.current === true && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialStatus.current, props.initialStatus)) {
      initialStatus.current = props.initialStatus;
      dispatch({
        type: 'SET_STATUS',
        payload: props.initialStatus
      });
    }
  }, [enableReinitialize, props.initialStatus, props.initialTouched]);
  var validateField = useEventCallback(function (name) {
    // This will efficiently validate a single field by avoiding state
    // changes if the validation function is synchronous. It's different from
    // what is called when using validateForm.
    if (isFunction(fieldRegistry.current[name].validate)) {
      var value = getIn(state.values, name);
      var maybePromise = fieldRegistry.current[name].validate(value);

      if (isPromise(maybePromise)) {
        // Only flip isValidating if the function is async.
        dispatch({
          type: 'SET_ISVALIDATING',
          payload: true
        });
        return maybePromise.then(function (x) {
          return x;
        }).then(function (error) {
          dispatch({
            type: 'SET_FIELD_ERROR',
            payload: {
              field: name,
              value: error
            }
          });
          dispatch({
            type: 'SET_ISVALIDATING',
            payload: false
          });
        });
      } else {
        dispatch({
          type: 'SET_FIELD_ERROR',
          payload: {
            field: name,
            value: maybePromise
          }
        });
        return Promise.resolve(maybePromise);
      }
    } else if (props.validationSchema) {
      dispatch({
        type: 'SET_ISVALIDATING',
        payload: true
      });
      return runValidationSchema(state.values, name).then(function (x) {
        return x;
      }).then(function (error) {
        dispatch({
          type: 'SET_FIELD_ERROR',
          payload: {
            field: name,
            value: error[name]
          }
        });
        dispatch({
          type: 'SET_ISVALIDATING',
          payload: false
        });
      });
    }

    return Promise.resolve();
  });
  var registerField = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (name, _ref3) {
    var validate = _ref3.validate;
    fieldRegistry.current[name] = {
      validate: validate
    };
  }, []);
  var unregisterField = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (name) {
    delete fieldRegistry.current[name];
  }, []);
  var setTouched = useEventCallback(function (touched, shouldValidate) {
    dispatch({
      type: 'SET_TOUCHED',
      payload: touched
    });
    var willValidate = shouldValidate === undefined ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithLowPriority(state.values) : Promise.resolve();
  });
  var setErrors = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (errors) {
    dispatch({
      type: 'SET_ERRORS',
      payload: errors
    });
  }, []);
  var setValues = useEventCallback(function (values, shouldValidate) {
    dispatch({
      type: 'SET_VALUES',
      payload: values
    });
    var willValidate = shouldValidate === undefined ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithLowPriority(values) : Promise.resolve();
  });
  var setFieldError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (field, value) {
    dispatch({
      type: 'SET_FIELD_ERROR',
      payload: {
        field: field,
        value: value
      }
    });
  }, []);
  var setFieldValue = useEventCallback(function (field, value, shouldValidate) {
    dispatch({
      type: 'SET_FIELD_VALUE',
      payload: {
        field: field,
        value: value
      }
    });
    var willValidate = shouldValidate === undefined ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithLowPriority(setIn(state.values, field, value)) : Promise.resolve();
  });
  var executeChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (eventOrTextValue, maybePath) {
    // By default, assume that the first argument is a string. This allows us to use
    // handleChange with React Native and React Native Web's onChangeText prop which
    // provides just the value of the input.
    var field = maybePath;
    var val = eventOrTextValue;
    var parsed; // If the first argument is not a string though, it has to be a synthetic React Event (or a fake one),
    // so we handle like we would a normal HTML change event.

    if (!isString(eventOrTextValue)) {
      // If we can, persist the event
      // @see https://reactjs.org/docs/events.html#event-pooling
      if (eventOrTextValue.persist) {
        eventOrTextValue.persist();
      }

      var target = eventOrTextValue.target ? eventOrTextValue.target : eventOrTextValue.currentTarget;
      var type = target.type,
          name = target.name,
          id = target.id,
          value = target.value,
          checked = target.checked,
          outerHTML = target.outerHTML,
          options = target.options,
          multiple = target.multiple;
      field = maybePath ? maybePath : name ? name : id;

      if (!field && "development" !== "production") {
        warnAboutMissingIdentifier({
          htmlContent: outerHTML,
          documentationAnchorLink: 'handlechange-e-reactchangeeventany--void',
          handlerName: 'handleChange'
        });
      }

      val = /number|range/.test(type) ? (parsed = parseFloat(value), isNaN(parsed) ? '' : parsed) : /checkbox/.test(type) // checkboxes
      ? getValueForCheckbox(getIn(state.values, field), checked, value) : !!multiple // <select multiple>
      ? getSelectedValues(options) : value;
    }

    if (field) {
      // Set form fields by name
      setFieldValue(field, val);
    }
  }, [setFieldValue, state.values]);
  var handleChange = useEventCallback(function (eventOrPath) {
    if (isString(eventOrPath)) {
      return function (event) {
        return executeChange(event, eventOrPath);
      };
    } else {
      executeChange(eventOrPath);
    }
  });
  var setFieldTouched = useEventCallback(function (field, touched, shouldValidate) {
    if (touched === void 0) {
      touched = true;
    }

    dispatch({
      type: 'SET_FIELD_TOUCHED',
      payload: {
        field: field,
        value: touched
      }
    });
    var willValidate = shouldValidate === undefined ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithLowPriority(state.values) : Promise.resolve();
  });
  var executeBlur = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e, path) {
    if (e.persist) {
      e.persist();
    }

    var _e$target = e.target,
        name = _e$target.name,
        id = _e$target.id,
        outerHTML = _e$target.outerHTML;
    var field = path ? path : name ? name : id;

    if (!field && "development" !== "production") {
      warnAboutMissingIdentifier({
        htmlContent: outerHTML,
        documentationAnchorLink: 'handleblur-e-any--void',
        handlerName: 'handleBlur'
      });
    }

    setFieldTouched(field, true);
  }, [setFieldTouched]);
  var handleBlur = useEventCallback(function (eventOrString) {
    if (isString(eventOrString)) {
      return function (event) {
        return executeBlur(event, eventOrString);
      };
    } else {
      executeBlur(eventOrString);
    }
  });
  var setFormikState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (stateOrCb) {
    if (isFunction(stateOrCb)) {
      dispatch({
        type: 'SET_FORMIK_STATE',
        payload: stateOrCb
      });
    } else {
      dispatch({
        type: 'SET_FORMIK_STATE',
        payload: function payload() {
          return stateOrCb;
        }
      });
    }
  }, []);
  var setStatus = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (status) {
    dispatch({
      type: 'SET_STATUS',
      payload: status
    });
  }, []);
  var setSubmitting = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (isSubmitting) {
    dispatch({
      type: 'SET_ISSUBMITTING',
      payload: isSubmitting
    });
  }, []);
  var submitForm = useEventCallback(function () {
    dispatch({
      type: 'SUBMIT_ATTEMPT'
    });
    return validateFormWithHighPriority().then(function (combinedErrors) {
      // In case an error was thrown and passed to the resolved Promise,
      // `combinedErrors` can be an instance of an Error. We need to check
      // that and abort the submit.
      // If we don't do that, calling `Object.keys(new Error())` yields an
      // empty array, which causes the validation to pass and the form
      // to be submitted.
      var isInstanceOfError = combinedErrors instanceof Error;
      var isActuallyValid = !isInstanceOfError && Object.keys(combinedErrors).length === 0;

      if (isActuallyValid) {
        // Proceed with submit...
        //
        // To respect sync submit fns, we can't simply wrap executeSubmit in a promise and
        // _always_ dispatch SUBMIT_SUCCESS because isSubmitting would then always be false.
        // This would be fine in simple cases, but make it impossible to disable submit
        // buttons where people use callbacks or promises as side effects (which is basically
        // all of v1 Formik code). Instead, recall that we are inside of a promise chain already,
        //  so we can try/catch executeSubmit(), if it returns undefined, then just bail.
        // If there are errors, throw em. Otherwise, wrap executeSubmit in a promise and handle
        // cleanup of isSubmitting on behalf of the consumer.
        var promiseOrUndefined;

        try {
          promiseOrUndefined = executeSubmit(); // Bail if it's sync, consumer is responsible for cleaning up
          // via setSubmitting(false)

          if (promiseOrUndefined === undefined) {
            return;
          }
        } catch (error) {
          throw error;
        }

        return Promise.resolve(promiseOrUndefined).then(function () {
          if (!!isMounted.current) {
            dispatch({
              type: 'SUBMIT_SUCCESS'
            });
          }
        })["catch"](function (_errors) {
          if (!!isMounted.current) {
            dispatch({
              type: 'SUBMIT_FAILURE'
            }); // This is a legit error rejected by the onSubmit fn
            // so we don't want to break the promise chain

            throw _errors;
          }
        });
      } else if (!!isMounted.current) {
        // ^^^ Make sure Formik is still mounted before updating state
        dispatch({
          type: 'SUBMIT_FAILURE'
        }); // throw combinedErrors;

        if (isInstanceOfError) {
          throw combinedErrors;
        }
      }

      return;
    });
  });
  var handleSubmit = useEventCallback(function (e) {
    if (e && e.preventDefault && isFunction(e.preventDefault)) {
      e.preventDefault();
    }

    if (e && e.stopPropagation && isFunction(e.stopPropagation)) {
      e.stopPropagation();
    } // Warn if form submission is triggered by a <button> without a
    // specified `type` attribute during development. This mitigates
    // a common gotcha in forms with both reset and submit buttons,
    // where the dev forgets to add type="button" to the reset button.


    if ( true && typeof document !== 'undefined') {
      // Safely get the active element (works with IE)
      var activeElement = getActiveElement();

      if (activeElement !== null && activeElement instanceof HTMLButtonElement) {
        !(activeElement.attributes && activeElement.attributes.getNamedItem('type')) ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : undefined : void 0;
      }
    }

    submitForm()["catch"](function (reason) {
      console.warn("Warning: An unhandled error was caught from submitForm()", reason);
    });
  });
  var imperativeMethods = {
    resetForm: resetForm,
    validateForm: validateFormWithHighPriority,
    validateField: validateField,
    setErrors: setErrors,
    setFieldError: setFieldError,
    setFieldTouched: setFieldTouched,
    setFieldValue: setFieldValue,
    setStatus: setStatus,
    setSubmitting: setSubmitting,
    setTouched: setTouched,
    setValues: setValues,
    setFormikState: setFormikState,
    submitForm: submitForm
  };
  var executeSubmit = useEventCallback(function () {
    return onSubmit(state.values, imperativeMethods);
  });
  var handleReset = useEventCallback(function (e) {
    if (e && e.preventDefault && isFunction(e.preventDefault)) {
      e.preventDefault();
    }

    if (e && e.stopPropagation && isFunction(e.stopPropagation)) {
      e.stopPropagation();
    }

    resetForm();
  });
  var getFieldMeta = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (name) {
    return {
      value: getIn(state.values, name),
      error: getIn(state.errors, name),
      touched: !!getIn(state.touched, name),
      initialValue: getIn(initialValues.current, name),
      initialTouched: !!getIn(initialTouched.current, name),
      initialError: getIn(initialErrors.current, name)
    };
  }, [state.errors, state.touched, state.values]);
  var getFieldHelpers = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (name) {
    return {
      setValue: function setValue(value) {
        return setFieldValue(name, value);
      },
      setTouched: function setTouched(value) {
        return setFieldTouched(name, value);
      },
      setError: function setError(value) {
        return setFieldError(name, value);
      }
    };
  }, [setFieldValue, setFieldTouched, setFieldError]);
  var getFieldProps = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (nameOrOptions) {
    var isAnObject = isObject(nameOrOptions);
    var name = isAnObject ? nameOrOptions.name : nameOrOptions;
    var valueState = getIn(state.values, name);
    var field = {
      name: name,
      value: valueState,
      onChange: handleChange,
      onBlur: handleBlur
    };

    if (isAnObject) {
      var type = nameOrOptions.type,
          valueProp = nameOrOptions.value,
          is = nameOrOptions.as,
          multiple = nameOrOptions.multiple;

      if (type === 'checkbox') {
        if (valueProp === undefined) {
          field.checked = !!valueState;
        } else {
          field.checked = !!(Array.isArray(valueState) && ~valueState.indexOf(valueProp));
          field.value = valueProp;
        }
      } else if (type === 'radio') {
        field.checked = valueState === valueProp;
        field.value = valueProp;
      } else if (is === 'select' && multiple) {
        field.value = field.value || [];
        field.multiple = true;
      }
    }

    return field;
  }, [handleBlur, handleChange, state.values]);
  var dirty = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialValues.current, state.values);
  }, [initialValues.current, state.values]);
  var isValid = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return typeof isInitialValid !== 'undefined' ? dirty ? state.errors && Object.keys(state.errors).length === 0 : isInitialValid !== false && isFunction(isInitialValid) ? isInitialValid(props) : isInitialValid : state.errors && Object.keys(state.errors).length === 0;
  }, [isInitialValid, dirty, state.errors, props]);

  var ctx = _extends({}, state, {
    initialValues: initialValues.current,
    initialErrors: initialErrors.current,
    initialTouched: initialTouched.current,
    initialStatus: initialStatus.current,
    handleBlur: handleBlur,
    handleChange: handleChange,
    handleReset: handleReset,
    handleSubmit: handleSubmit,
    resetForm: resetForm,
    setErrors: setErrors,
    setFormikState: setFormikState,
    setFieldTouched: setFieldTouched,
    setFieldValue: setFieldValue,
    setFieldError: setFieldError,
    setStatus: setStatus,
    setSubmitting: setSubmitting,
    setTouched: setTouched,
    setValues: setValues,
    submitForm: submitForm,
    validateForm: validateFormWithHighPriority,
    validateField: validateField,
    isValid: isValid,
    dirty: dirty,
    unregisterField: unregisterField,
    registerField: registerField,
    getFieldProps: getFieldProps,
    getFieldMeta: getFieldMeta,
    getFieldHelpers: getFieldHelpers,
    validateOnBlur: validateOnBlur,
    validateOnChange: validateOnChange,
    validateOnMount: validateOnMount
  });

  return ctx;
}
function Formik(props) {
  var formikbag = useFormik(props);
  var component = props.component,
      children = props.children,
      render = props.render,
      innerRef = props.innerRef; // This allows folks to pass a ref to <Formik />

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(innerRef, function () {
    return formikbag;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (true) {
      !!props.render ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "<Formik render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Formik render={(props) => ...} /> with <Formik>{(props) => ...}</Formik>") : undefined : void 0;
    } // eslint-disable-next-line

  }, []);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormikProvider, {
    value: formikbag
  }, component ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, formikbag) : render ? render(formikbag) : children // children come last, always called
  ? isFunction(children) ? children(formikbag) : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children) : null : null);
}

function warnAboutMissingIdentifier(_ref4) {
  var htmlContent = _ref4.htmlContent,
      documentationAnchorLink = _ref4.documentationAnchorLink,
      handlerName = _ref4.handlerName;
  console.warn("Warning: Formik called `" + handlerName + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + htmlContent + "\n    Formik cannot determine which value to update. For more info see https://github.com/jaredpalmer/formik#" + documentationAnchorLink + "\n  ");
}
/**
 * Transform Yup ValidationError to a more usable object
 */


function yupToFormErrors(yupError) {
  var errors = {};

  if (yupError.inner) {
    if (yupError.inner.length === 0) {
      return setIn(errors, yupError.path, yupError.message);
    }

    for (var _iterator = yupError.inner, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref5;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref5 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref5 = _i.value;
      }

      var err = _ref5;

      if (!getIn(errors, err.path)) {
        errors = setIn(errors, err.path, err.message);
      }
    }
  }

  return errors;
}
/**
 * Validate a yup schema.
 */

function validateYupSchema(values, schema, sync, context) {
  if (sync === void 0) {
    sync = false;
  }

  if (context === void 0) {
    context = {};
  }

  var validateData = prepareDataForValidation(values);
  return schema[sync ? 'validateSync' : 'validate'](validateData, {
    abortEarly: false,
    context: context
  });
}
/**
 * Recursively prepare values.
 */

function prepareDataForValidation(values) {
  var data = {};

  for (var k in values) {
    if (Object.prototype.hasOwnProperty.call(values, k)) {
      var key = String(k);

      if (Array.isArray(values[key]) === true) {
        data[key] = values[key].map(function (value) {
          if (Array.isArray(value) === true || Object(lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
            return prepareDataForValidation(value);
          } else {
            return value !== '' ? value : undefined;
          }
        });
      } else if (Object(lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_3__["default"])(values[key])) {
        data[key] = prepareDataForValidation(values[key]);
      } else {
        data[key] = values[key] !== '' ? values[key] : undefined;
      }
    }
  }

  return data;
}
/**
 * deepmerge array merging algorithm
 * https://github.com/KyleAMathews/deepmerge#combine-array
 */

function arrayMerge(target, source, options) {
  var destination = target.slice();
  source.forEach(function (e, i) {
    if (typeof destination[i] === 'undefined') {
      var cloneRequested = options.clone !== false;
      var shouldClone = cloneRequested && options.isMergeableObject(e);
      destination[i] = shouldClone ? Object(deepmerge__WEBPACK_IMPORTED_MODULE_2__["default"])(Array.isArray(e) ? [] : {}, e, options) : e;
    } else if (options.isMergeableObject(e)) {
      destination[i] = Object(deepmerge__WEBPACK_IMPORTED_MODULE_2__["default"])(target[i], e, options);
    } else if (target.indexOf(e) === -1) {
      destination.push(e);
    }
  });
  return destination;
}
/** Return multi select values based on an array of options */


function getSelectedValues(options) {
  return Array.from(options).filter(function (el) {
    return el.selected;
  }).map(function (el) {
    return el.value;
  });
}
/** Return the next value for a checkbox */


function getValueForCheckbox(currentValue, checked, valueProp) {
  // If the current value was a boolean, return a boolean
  if (typeof currentValue === 'boolean') {
    return Boolean(checked);
  } // If the currentValue was not a boolean we want to return an array


  var currentArrayOfValues = [];
  var isValueInArray = false;
  var index = -1;

  if (!Array.isArray(currentValue)) {
    // eslint-disable-next-line eqeqeq
    if (!valueProp || valueProp == 'true' || valueProp == 'false') {
      return Boolean(checked);
    }
  } else {
    // If the current value is already an array, use it
    currentArrayOfValues = currentValue;
    index = currentValue.indexOf(valueProp);
    isValueInArray = index >= 0;
  } // If the checkbox was checked and the value is not already present in the aray we want to add the new value to the array of values


  if (checked && valueProp && !isValueInArray) {
    return currentArrayOfValues.concat(valueProp);
  } // If the checkbox was unchecked and the value is not in the array, simply return the already existing array of values


  if (!isValueInArray) {
    return currentArrayOfValues;
  } // If the checkbox was unchecked and the value is in the array, remove the value and return the array


  return currentArrayOfValues.slice(0, index).concat(currentArrayOfValues.slice(index + 1));
} // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
// @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85


var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];

function useEventCallback(fn) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(fn); // we copy a ref to the callback scoped to the current state/props on each render

  useIsomorphicLayoutEffect(function () {
    ref.current = fn;
  });
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ref.current.apply(void 0, args);
  }, []);
}

function useField(propsOrFieldName) {
  var formik = useFormikContext();
  var getFieldProps = formik.getFieldProps,
      getFieldMeta = formik.getFieldMeta,
      getFieldHelpers = formik.getFieldHelpers,
      registerField = formik.registerField,
      unregisterField = formik.unregisterField;
  var isAnObject = isObject(propsOrFieldName); // Normalize propsOrFieldName to FieldHookConfig<Val>

  var props = isAnObject ? propsOrFieldName : {
    name: propsOrFieldName
  };
  var fieldName = props.name,
      validateFn = props.validate;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (fieldName) {
      registerField(fieldName, {
        validate: validateFn
      });
    }

    return function () {
      if (fieldName) {
        unregisterField(fieldName);
      }
    };
  }, [registerField, unregisterField, fieldName, validateFn]);

  if (true) {
    !formik ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'useField() / <Field /> must be used underneath a <Formik> component or withFormik() higher order component') : undefined : void 0;
  }

  !fieldName ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'Invalid field name. Either pass `useField` a string or an object containing a `name` key.') : undefined : void 0;
  return [getFieldProps(props), getFieldMeta(fieldName), getFieldHelpers(fieldName)];
}
function Field(_ref) {
  var validate = _ref.validate,
      name = _ref.name,
      render = _ref.render,
      children = _ref.children,
      is = _ref.as,
      component = _ref.component,
      props = _objectWithoutPropertiesLoose(_ref, ["validate", "name", "render", "children", "as", "component"]);

  var _useFormikContext = useFormikContext(),
      formik = _objectWithoutPropertiesLoose(_useFormikContext, ["validate", "validationSchema"]);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (true) {
      !!render ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "<Field render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Field name=\"" + name + "\" render={({field, form}) => ...} /> with <Field name=\"" + name + "\">{({field, form, meta}) => ...}</Field>") : undefined : void 0;
      !!(is && children && isFunction(children)) ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You should not use <Field as> and <Field children> as a function in the same <Field> component; <Field as> will be ignored.') : undefined : void 0;
      !!(component && children && isFunction(children)) ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You should not use <Field component> and <Field children> as a function in the same <Field> component; <Field component> will be ignored.') : undefined : void 0;
      !!(render && children && !isEmptyChildren(children)) ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You should not use <Field render> and <Field children> in the same <Field> component; <Field children> will be ignored') : undefined : void 0;
    } // eslint-disable-next-line

  }, []); // Register field and field-level validation with parent <Formik>

  var registerField = formik.registerField,
      unregisterField = formik.unregisterField;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    registerField(name, {
      validate: validate
    });
    return function () {
      unregisterField(name);
    };
  }, [registerField, unregisterField, name, validate]);
  var field = formik.getFieldProps(_extends({
    name: name
  }, props));
  var meta = formik.getFieldMeta(name);
  var legacyBag = {
    field: field,
    form: formik
  };

  if (render) {
    return render(_extends({}, legacyBag, {
      meta: meta
    }));
  }

  if (isFunction(children)) {
    return children(_extends({}, legacyBag, {
      meta: meta
    }));
  }

  if (component) {
    // This behavior is backwards compat with earlier Formik 0.9 to 1.x
    if (typeof component === 'string') {
      var innerRef = props.innerRef,
          rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, _extends({
        ref: innerRef
      }, field, {}, rest), children);
    } // We don't pass `meta` for backwards compat


    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, _extends({
      field: field,
      form: formik
    }, props), children);
  } // default to input here so we can check for both `as` and `children` above


  var asElement = is || 'input';

  if (typeof asElement === 'string') {
    var _innerRef = props.innerRef,
        _rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(asElement, _extends({
      ref: _innerRef
    }, field, {}, _rest), children);
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(asElement, _extends({}, field, {}, props), children);
}

var Form =
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  // iOS needs an "action" attribute for nice input: https://stackoverflow.com/a/39485162/406725
  // We default the action to "#" in case the preventDefault fails (just updates the URL hash)
  var action = props.action,
      rest = _objectWithoutPropertiesLoose(props, ["action"]);

  var _action = action || '#';

  var _useFormikContext = useFormikContext(),
      handleReset = _useFormikContext.handleReset,
      handleSubmit = _useFormikContext.handleSubmit;

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("form", Object.assign({
    onSubmit: handleSubmit,
    ref: ref,
    onReset: handleReset,
    action: _action
  }, rest));
});
Form.displayName = 'Form';

/**
 * A public higher-order component to access the imperative API
 */

function withFormik(_ref) {
  var _ref$mapPropsToValues = _ref.mapPropsToValues,
      mapPropsToValues = _ref$mapPropsToValues === void 0 ? function (vanillaProps) {
    var val = {};

    for (var k in vanillaProps) {
      if (vanillaProps.hasOwnProperty(k) && typeof vanillaProps[k] !== 'function') {
        // @todo TypeScript fix
        val[k] = vanillaProps[k];
      }
    }

    return val;
  } : _ref$mapPropsToValues,
      config = _objectWithoutPropertiesLoose(_ref, ["mapPropsToValues"]);

  return function createFormik(Component$1) {
    var componentDisplayName = Component$1.displayName || Component$1.name || Component$1.constructor && Component$1.constructor.name || 'Component';
    /**
     * We need to use closures here for to provide the wrapped component's props to
     * the respective withFormik config methods.
     */

    var C =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(C, _React$Component);

      function C() {
        var _this;

        _this = _React$Component.apply(this, arguments) || this;

        _this.validate = function (values) {
          return config.validate(values, _this.props);
        };

        _this.validationSchema = function () {
          return isFunction(config.validationSchema) ? config.validationSchema(_this.props) : config.validationSchema;
        };

        _this.handleSubmit = function (values, actions) {
          return config.handleSubmit(values, _extends({}, actions, {
            props: _this.props
          }));
        };
        /**
         * Just avoiding a render callback for perf here
         */


        _this.renderFormComponent = function (formikProps) {
          return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component$1, Object.assign({}, _this.props, formikProps));
        };

        return _this;
      }

      var _proto = C.prototype;

      _proto.render = function render() {
        var _this$props = this.props,
            props = _objectWithoutPropertiesLoose(_this$props, ["children"]);

        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Formik, Object.assign({}, props, config, {
          validate: config.validate && this.validate,
          validationSchema: config.validationSchema && this.validationSchema,
          initialValues: mapPropsToValues(this.props),
          initialStatus: config.mapPropsToStatus && config.mapPropsToStatus(this.props),
          initialErrors: config.mapPropsToErrors && config.mapPropsToErrors(this.props),
          initialTouched: config.mapPropsToTouched && config.mapPropsToTouched(this.props),
          onSubmit: this.handleSubmit,
          children: this.renderFormComponent
        }));
      };

      return C;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    C.displayName = "WithFormik(" + componentDisplayName + ")";
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8___default()(C, Component$1 // cast type to ComponentClass (even if SFC)
    );
  };
}

/**
 * Connect any component to Formik context, and inject as a prop called `formik`;
 * @param Comp React Component
 */

function connect(Comp) {
  var C = function C(props) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormikConsumer, null, function (formik) {
      !!!formik ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "Formik context is undefined, please verify you are rendering <Form>, <Field>, <FastField>, <FieldArray>, or your custom context-using component as a child of a <Formik> component. Component name: " + Comp.name) : undefined : void 0;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Comp, Object.assign({}, props, {
        formik: formik
      }));
    });
  };

  var componentDisplayName = Comp.displayName || Comp.name || Comp.constructor && Comp.constructor.name || 'Component'; // Assign Comp to C.WrappedComponent so we can access the inner component in tests
  // For example, <Field.WrappedComponent /> gets us <FieldInner/>

  C.WrappedComponent = Comp;
  C.displayName = "FormikConnect(" + componentDisplayName + ")";
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8___default()(C, Comp // cast type to ComponentClass (even if SFC)
  );
}

/**
 * Some array helpers!
 */

var move = function move(array, from, to) {
  var copy = copyArrayLike(array);
  var value = copy[from];
  copy.splice(from, 1);
  copy.splice(to, 0, value);
  return copy;
};
var swap = function swap(arrayLike, indexA, indexB) {
  var copy = copyArrayLike(arrayLike);
  var a = copy[indexA];
  copy[indexA] = copy[indexB];
  copy[indexB] = a;
  return copy;
};
var insert = function insert(arrayLike, index, value) {
  var copy = copyArrayLike(arrayLike);
  copy.splice(index, 0, value);
  return copy;
};
var replace = function replace(arrayLike, index, value) {
  var copy = copyArrayLike(arrayLike);
  copy[index] = value;
  return copy;
};

var copyArrayLike = function copyArrayLike(arrayLike) {
  if (!arrayLike) {
    return [];
  } else if (Array.isArray(arrayLike)) {
    return [].concat(arrayLike);
  } else {
    var maxIndex = Object.keys(arrayLike).map(function (key) {
      return parseInt(key);
    }).reduce(function (max, el) {
      return el > max ? el : max;
    }, 0);
    return Array.from(_extends({}, arrayLike, {
      length: maxIndex + 1
    }));
  }
};

var FieldArrayInner =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(FieldArrayInner, _React$Component);

  function FieldArrayInner(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.updateArrayField = function (fn, alterTouched, alterErrors) {
      var _this$props = _this.props,
          name = _this$props.name,
          setFormikState = _this$props.formik.setFormikState;
      setFormikState(function (prevState) {
        var updateErrors = typeof alterErrors === 'function' ? alterErrors : fn;
        var updateTouched = typeof alterTouched === 'function' ? alterTouched : fn; // values fn should be executed before updateErrors and updateTouched,
        // otherwise it causes an error with unshift.

        var values = setIn(prevState.values, name, fn(getIn(prevState.values, name)));
        var fieldError = alterErrors ? updateErrors(getIn(prevState.errors, name)) : undefined;
        var fieldTouched = alterTouched ? updateTouched(getIn(prevState.touched, name)) : undefined;

        if (isEmptyArray(fieldError)) {
          fieldError = undefined;
        }

        if (isEmptyArray(fieldTouched)) {
          fieldTouched = undefined;
        }

        return _extends({}, prevState, {
          values: values,
          errors: alterErrors ? setIn(prevState.errors, name, fieldError) : prevState.errors,
          touched: alterTouched ? setIn(prevState.touched, name, fieldTouched) : prevState.touched
        });
      });
    };

    _this.push = function (value) {
      return _this.updateArrayField(function (arrayLike) {
        return [].concat(copyArrayLike(arrayLike), [Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_9__["default"])(value)]);
      }, false, false);
    };

    _this.handlePush = function (value) {
      return function () {
        return _this.push(value);
      };
    };

    _this.swap = function (indexA, indexB) {
      return _this.updateArrayField(function (array) {
        return swap(array, indexA, indexB);
      }, true, true);
    };

    _this.handleSwap = function (indexA, indexB) {
      return function () {
        return _this.swap(indexA, indexB);
      };
    };

    _this.move = function (from, to) {
      return _this.updateArrayField(function (array) {
        return move(array, from, to);
      }, true, true);
    };

    _this.handleMove = function (from, to) {
      return function () {
        return _this.move(from, to);
      };
    };

    _this.insert = function (index, value) {
      return _this.updateArrayField(function (array) {
        return insert(array, index, value);
      }, function (array) {
        return insert(array, index, null);
      }, function (array) {
        return insert(array, index, null);
      });
    };

    _this.handleInsert = function (index, value) {
      return function () {
        return _this.insert(index, value);
      };
    };

    _this.replace = function (index, value) {
      return _this.updateArrayField(function (array) {
        return replace(array, index, value);
      }, false, false);
    };

    _this.handleReplace = function (index, value) {
      return function () {
        return _this.replace(index, value);
      };
    };

    _this.unshift = function (value) {
      var length = -1;

      _this.updateArrayField(function (array) {
        var arr = array ? [value].concat(array) : [value];

        if (length < 0) {
          length = arr.length;
        }

        return arr;
      }, function (array) {
        var arr = array ? [null].concat(array) : [null];

        if (length < 0) {
          length = arr.length;
        }

        return arr;
      }, function (array) {
        var arr = array ? [null].concat(array) : [null];

        if (length < 0) {
          length = arr.length;
        }

        return arr;
      });

      return length;
    };

    _this.handleUnshift = function (value) {
      return function () {
        return _this.unshift(value);
      };
    };

    _this.handleRemove = function (index) {
      return function () {
        return _this.remove(index);
      };
    };

    _this.handlePop = function () {
      return function () {
        return _this.pop();
      };
    }; // We need TypeScript generics on these, so we'll bind them in the constructor
    // @todo Fix TS 3.2.1


    _this.remove = _this.remove.bind(_assertThisInitialized(_this));
    _this.pop = _this.pop.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = FieldArrayInner.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (!react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(getIn(prevProps.formik.values, prevProps.name), getIn(this.props.formik.values, this.props.name)) && this.props.formik.validateOnChange) {
      this.props.formik.validateForm(this.props.formik.values);
    }
  };

  _proto.remove = function remove(index) {
    // We need to make sure we also remove relevant pieces of `touched` and `errors`
    var result;
    this.updateArrayField( // so this gets call 3 times
    function (array) {
      var copy = array ? copyArrayLike(array) : [];

      if (!result) {
        result = copy[index];
      }

      if (isFunction(copy.splice)) {
        copy.splice(index, 1);
      }

      return copy;
    }, true, true);
    return result;
  };

  _proto.pop = function pop() {
    // Remove relevant pieces of `touched` and `errors` too!
    var result;
    this.updateArrayField( // so this gets call 3 times
    function (array) {
      var tmp = array;

      if (!result) {
        result = tmp && tmp.pop && tmp.pop();
      }

      return tmp;
    }, true, true);
    return result;
  };

  _proto.render = function render() {
    var arrayHelpers = {
      push: this.push,
      pop: this.pop,
      swap: this.swap,
      move: this.move,
      insert: this.insert,
      replace: this.replace,
      unshift: this.unshift,
      remove: this.remove,
      handlePush: this.handlePush,
      handlePop: this.handlePop,
      handleSwap: this.handleSwap,
      handleMove: this.handleMove,
      handleInsert: this.handleInsert,
      handleReplace: this.handleReplace,
      handleUnshift: this.handleUnshift,
      handleRemove: this.handleRemove
    };

    var _this$props2 = this.props,
        component = _this$props2.component,
        render = _this$props2.render,
        children = _this$props2.children,
        name = _this$props2.name,
        _this$props2$formik = _this$props2.formik,
        restOfFormik = _objectWithoutPropertiesLoose(_this$props2$formik, ["validate", "validationSchema"]);

    var props = _extends({}, arrayHelpers, {
      form: restOfFormik,
      name: name
    });

    return component ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, props) : render ? render(props) : children // children come last, always called
    ? typeof children === 'function' ? children(props) : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children) : null : null;
  };

  return FieldArrayInner;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

FieldArrayInner.defaultProps = {
  validateOnChange: true
};
var FieldArray =
/*#__PURE__*/
connect(FieldArrayInner);

var ErrorMessageImpl =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ErrorMessageImpl, _React$Component);

  function ErrorMessageImpl() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ErrorMessageImpl.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (getIn(this.props.formik.errors, this.props.name) !== getIn(props.formik.errors, this.props.name) || getIn(this.props.formik.touched, this.props.name) !== getIn(props.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(props).length) {
      return true;
    } else {
      return false;
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        component = _this$props.component,
        formik = _this$props.formik,
        render = _this$props.render,
        children = _this$props.children,
        name = _this$props.name,
        rest = _objectWithoutPropertiesLoose(_this$props, ["component", "formik", "render", "children", "name"]);

    var touch = getIn(formik.touched, name);
    var error = getIn(formik.errors, name);
    return !!touch && !!error ? render ? isFunction(render) ? render(error) : null : children ? isFunction(children) ? children(error) : null : component ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, rest, error) : error : null;
  };

  return ErrorMessageImpl;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var ErrorMessage =
/*#__PURE__*/
connect(ErrorMessageImpl);

/**
 * Custom Field component for quickly hooking into Formik
 * context and wiring up forms.
 */

var FastFieldInner =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(FastFieldInner, _React$Component);

  function FastFieldInner(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    var render = props.render,
        children = props.children,
        component = props.component,
        is = props.as,
        name = props.name;
    !!render ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "<FastField render> has been deprecated. Please use a child callback function instead: <FastField name={" + name + "}>{props => ...}</FastField> instead.") : undefined : void 0;
    !!(component && render) ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You should not use <FastField component> and <FastField render> in the same <FastField> component; <FastField component> will be ignored') : undefined : void 0;
    !!(is && children && isFunction(children)) ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You should not use <FastField as> and <FastField children> as a function in the same <FastField> component; <FastField as> will be ignored.') : undefined : void 0;
    !!(component && children && isFunction(children)) ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You should not use <FastField component> and <FastField children> as a function in the same <FastField> component; <FastField component> will be ignored.') : undefined : void 0;
    !!(render && children && !isEmptyChildren(children)) ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You should not use <FastField render> and <FastField children> in the same <FastField> component; <FastField children> will be ignored') : undefined : void 0;
    return _this;
  }

  var _proto = FastFieldInner.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (this.props.shouldUpdate) {
      return this.props.shouldUpdate(props, this.props);
    } else if (props.name !== this.props.name || getIn(props.formik.values, this.props.name) !== getIn(this.props.formik.values, this.props.name) || getIn(props.formik.errors, this.props.name) !== getIn(this.props.formik.errors, this.props.name) || getIn(props.formik.touched, this.props.name) !== getIn(this.props.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(props).length || props.formik.isSubmitting !== this.props.formik.isSubmitting) {
      return true;
    } else {
      return false;
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Register the Field with the parent Formik. Parent will cycle through
    // registered Field's validate fns right prior to submit
    this.props.formik.registerField(this.props.name, {
      validate: this.props.validate
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      this.props.formik.unregisterField(prevProps.name);
      this.props.formik.registerField(this.props.name, {
        validate: this.props.validate
      });
    }

    if (this.props.validate !== prevProps.validate) {
      this.props.formik.registerField(this.props.name, {
        validate: this.props.validate
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.formik.unregisterField(this.props.name);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        name = _this$props.name,
        render = _this$props.render,
        is = _this$props.as,
        children = _this$props.children,
        component = _this$props.component,
        formik = _this$props.formik,
        props = _objectWithoutPropertiesLoose(_this$props, ["validate", "name", "render", "as", "children", "component", "shouldUpdate", "formik"]);

    var restOfFormik = _objectWithoutPropertiesLoose(formik, ["validate", "validationSchema"]);

    var field = {
      value: props.type === 'radio' || props.type === 'checkbox' ? props.value // React uses checked={} for these inputs
      : getIn(formik.values, name),
      name: name,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur
    };
    var meta = {
      value: getIn(formik.values, name),
      error: getIn(formik.errors, name),
      touched: !!getIn(formik.touched, name),
      initialValue: getIn(formik.initialValues, name),
      initialTouched: !!getIn(formik.initialTouched, name),
      initialError: getIn(formik.initialErrors, name)
    };
    var bag = {
      field: field,
      meta: meta,
      form: restOfFormik
    };

    if (render) {
      return render(bag);
    }

    if (isFunction(children)) {
      return children(bag);
    }

    if (component) {
      // This behavior is backwards compat with earlier Formik 0.9 to 1.x
      if (typeof component === 'string') {
        var innerRef = props.innerRef,
            rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, _extends({
          ref: innerRef
        }, field, {}, rest), children);
      } // We don't pass `meta` for backwards compat


      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, _extends({
        field: field,
        form: formik
      }, props), children);
    } // default to input here so we can check for both `as` and `children` above


    var asElement = is || 'input';

    if (typeof asElement === 'string') {
      var _innerRef = props.innerRef,
          _rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(asElement, _extends({
        ref: _innerRef
      }, field, {}, _rest), children);
    }

    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(asElement, _extends({}, field, {}, props), children);
  };

  return FastFieldInner;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var FastField =
/*#__PURE__*/
connect(FastFieldInner);


//# sourceMappingURL=formik.esm.js.map


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/lodash-es/_DataView.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_DataView.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var DataView = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'DataView');

/* harmony default export */ __webpack_exports__["default"] = (DataView);


/***/ }),

/***/ "./node_modules/lodash-es/_Hash.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_Hash.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hashClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_hashClear.js */ "./node_modules/lodash-es/_hashClear.js");
/* harmony import */ var _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hashDelete.js */ "./node_modules/lodash-es/_hashDelete.js");
/* harmony import */ var _hashGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_hashGet.js */ "./node_modules/lodash-es/_hashGet.js");
/* harmony import */ var _hashHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_hashHas.js */ "./node_modules/lodash-es/_hashHas.js");
/* harmony import */ var _hashSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_hashSet.js */ "./node_modules/lodash-es/_hashSet.js");






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
Hash.prototype['delete'] = _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Hash.prototype.get = _hashGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Hash.prototype.has = _hashHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Hash.prototype.set = _hashSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ __webpack_exports__["default"] = (Hash);


/***/ }),

/***/ "./node_modules/lodash-es/_ListCache.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_ListCache.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_listCacheClear.js */ "./node_modules/lodash-es/_listCacheClear.js");
/* harmony import */ var _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_listCacheDelete.js */ "./node_modules/lodash-es/_listCacheDelete.js");
/* harmony import */ var _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_listCacheGet.js */ "./node_modules/lodash-es/_listCacheGet.js");
/* harmony import */ var _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_listCacheHas.js */ "./node_modules/lodash-es/_listCacheHas.js");
/* harmony import */ var _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_listCacheSet.js */ "./node_modules/lodash-es/_listCacheSet.js");






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
ListCache.prototype['delete'] = _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
ListCache.prototype.get = _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
ListCache.prototype.has = _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
ListCache.prototype.set = _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ __webpack_exports__["default"] = (ListCache);


/***/ }),

/***/ "./node_modules/lodash-es/_Map.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Map.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Map = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Map');

/* harmony default export */ __webpack_exports__["default"] = (Map);


/***/ }),

/***/ "./node_modules/lodash-es/_MapCache.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_MapCache.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_mapCacheClear.js */ "./node_modules/lodash-es/_mapCacheClear.js");
/* harmony import */ var _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_mapCacheDelete.js */ "./node_modules/lodash-es/_mapCacheDelete.js");
/* harmony import */ var _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_mapCacheGet.js */ "./node_modules/lodash-es/_mapCacheGet.js");
/* harmony import */ var _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_mapCacheHas.js */ "./node_modules/lodash-es/_mapCacheHas.js");
/* harmony import */ var _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_mapCacheSet.js */ "./node_modules/lodash-es/_mapCacheSet.js");






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
MapCache.prototype['delete'] = _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
MapCache.prototype.get = _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
MapCache.prototype.has = _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
MapCache.prototype.set = _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ __webpack_exports__["default"] = (MapCache);


/***/ }),

/***/ "./node_modules/lodash-es/_Promise.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_Promise.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Promise = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Promise');

/* harmony default export */ __webpack_exports__["default"] = (Promise);


/***/ }),

/***/ "./node_modules/lodash-es/_Set.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Set.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Set = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Set');

/* harmony default export */ __webpack_exports__["default"] = (Set);


/***/ }),

/***/ "./node_modules/lodash-es/_Stack.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_Stack.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _stackClear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stackClear.js */ "./node_modules/lodash-es/_stackClear.js");
/* harmony import */ var _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stackDelete.js */ "./node_modules/lodash-es/_stackDelete.js");
/* harmony import */ var _stackGet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_stackGet.js */ "./node_modules/lodash-es/_stackGet.js");
/* harmony import */ var _stackHas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_stackHas.js */ "./node_modules/lodash-es/_stackHas.js");
/* harmony import */ var _stackSet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_stackSet.js */ "./node_modules/lodash-es/_stackSet.js");







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"](entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Stack.prototype['delete'] = _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Stack.prototype.get = _stackGet_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Stack.prototype.has = _stackHas_js__WEBPACK_IMPORTED_MODULE_4__["default"];
Stack.prototype.set = _stackSet_js__WEBPACK_IMPORTED_MODULE_5__["default"];

/* harmony default export */ __webpack_exports__["default"] = (Stack);


/***/ }),

/***/ "./node_modules/lodash-es/_Symbol.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;

/* harmony default export */ __webpack_exports__["default"] = (Symbol);


/***/ }),

/***/ "./node_modules/lodash-es/_Uint8Array.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_Uint8Array.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Uint8Array = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Uint8Array;

/* harmony default export */ __webpack_exports__["default"] = (Uint8Array);


/***/ }),

/***/ "./node_modules/lodash-es/_WeakMap.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_WeakMap.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var WeakMap = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'WeakMap');

/* harmony default export */ __webpack_exports__["default"] = (WeakMap);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayEach.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arrayEach.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayEach);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayFilter.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_arrayFilter.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayFilter);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayLikeKeys.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_arrayLikeKeys.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseTimes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseTimes.js */ "./node_modules/lodash-es/_baseTimes.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/lodash-es/isArguments.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isBuffer.js */ "./node_modules/lodash-es/isBuffer.js");
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_isIndex.js */ "./node_modules/lodash-es/_isIndex.js");
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isTypedArray.js */ "./node_modules/lodash-es/isTypedArray.js");







/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = Object(_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value),
      isArg = !isArr && Object(_isArguments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value),
      isBuff = !isArr && !isArg && Object(_isBuffer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value),
      isType = !isArr && !isArg && !isBuff && Object(_isTypedArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? Object(_baseTimes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           Object(_isIndex_js__WEBPACK_IMPORTED_MODULE_4__["default"])(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayLikeKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayMap.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_arrayMap.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayMap);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayPush.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arrayPush.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayPush);


/***/ }),

/***/ "./node_modules/lodash-es/_assignValue.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_assignValue.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseAssignValue.js */ "./node_modules/lodash-es/_baseAssignValue.js");
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eq.js */ "./node_modules/lodash-es/eq.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && Object(_eq_js__WEBPACK_IMPORTED_MODULE_1__["default"])(objValue, value)) ||
      (value === undefined && !(key in object))) {
    Object(_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, value);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (assignValue);


/***/ }),

/***/ "./node_modules/lodash-es/_assocIndexOf.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_assocIndexOf.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ "./node_modules/lodash-es/eq.js");


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (Object(_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ __webpack_exports__["default"] = (assocIndexOf);


/***/ }),

/***/ "./node_modules/lodash-es/_baseAssign.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseAssign.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/lodash-es/keys.js");



/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && Object(_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ __webpack_exports__["default"] = (baseAssign);


/***/ }),

/***/ "./node_modules/lodash-es/_baseAssignIn.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseAssignIn.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keysIn.js */ "./node_modules/lodash-es/keysIn.js");



/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && Object(_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, Object(_keysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ __webpack_exports__["default"] = (baseAssignIn);


/***/ }),

/***/ "./node_modules/lodash-es/_baseAssignValue.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseAssignValue.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defineProperty.js */ "./node_modules/lodash-es/_defineProperty.js");


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (baseAssignValue);


/***/ }),

/***/ "./node_modules/lodash-es/_baseClone.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseClone.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Stack.js */ "./node_modules/lodash-es/_Stack.js");
/* harmony import */ var _arrayEach_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayEach.js */ "./node_modules/lodash-es/_arrayEach.js");
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_assignValue.js */ "./node_modules/lodash-es/_assignValue.js");
/* harmony import */ var _baseAssign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseAssign.js */ "./node_modules/lodash-es/_baseAssign.js");
/* harmony import */ var _baseAssignIn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_baseAssignIn.js */ "./node_modules/lodash-es/_baseAssignIn.js");
/* harmony import */ var _cloneBuffer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_cloneBuffer.js */ "./node_modules/lodash-es/_cloneBuffer.js");
/* harmony import */ var _copyArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_copyArray.js */ "./node_modules/lodash-es/_copyArray.js");
/* harmony import */ var _copySymbols_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_copySymbols.js */ "./node_modules/lodash-es/_copySymbols.js");
/* harmony import */ var _copySymbolsIn_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_copySymbolsIn.js */ "./node_modules/lodash-es/_copySymbolsIn.js");
/* harmony import */ var _getAllKeys_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_getAllKeys.js */ "./node_modules/lodash-es/_getAllKeys.js");
/* harmony import */ var _getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_getAllKeysIn.js */ "./node_modules/lodash-es/_getAllKeysIn.js");
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_getTag.js */ "./node_modules/lodash-es/_getTag.js");
/* harmony import */ var _initCloneArray_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_initCloneArray.js */ "./node_modules/lodash-es/_initCloneArray.js");
/* harmony import */ var _initCloneByTag_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_initCloneByTag.js */ "./node_modules/lodash-es/_initCloneByTag.js");
/* harmony import */ var _initCloneObject_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_initCloneObject.js */ "./node_modules/lodash-es/_initCloneObject.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./isBuffer.js */ "./node_modules/lodash-es/isBuffer.js");
/* harmony import */ var _isMap_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./isMap.js */ "./node_modules/lodash-es/isMap.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _isSet_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./isSet.js */ "./node_modules/lodash-es/isSet.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./keys.js */ "./node_modules/lodash-es/keys.js");






















/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_18__["default"])(value)) {
    return value;
  }
  var isArr = Object(_isArray_js__WEBPACK_IMPORTED_MODULE_15__["default"])(value);
  if (isArr) {
    result = Object(_initCloneArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(value);
    if (!isDeep) {
      return Object(_copyArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value, result);
    }
  } else {
    var tag = Object(_getTag_js__WEBPACK_IMPORTED_MODULE_11__["default"])(value),
        isFunc = tag == funcTag || tag == genTag;

    if (Object(_isBuffer_js__WEBPACK_IMPORTED_MODULE_16__["default"])(value)) {
      return Object(_cloneBuffer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : Object(_initCloneObject_js__WEBPACK_IMPORTED_MODULE_14__["default"])(value);
      if (!isDeep) {
        return isFlat
          ? Object(_copySymbolsIn_js__WEBPACK_IMPORTED_MODULE_8__["default"])(value, Object(_baseAssignIn_js__WEBPACK_IMPORTED_MODULE_4__["default"])(result, value))
          : Object(_copySymbols_js__WEBPACK_IMPORTED_MODULE_7__["default"])(value, Object(_baseAssign_js__WEBPACK_IMPORTED_MODULE_3__["default"])(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = Object(_initCloneByTag_js__WEBPACK_IMPORTED_MODULE_13__["default"])(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (Object(_isSet_js__WEBPACK_IMPORTED_MODULE_19__["default"])(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (Object(_isMap_js__WEBPACK_IMPORTED_MODULE_17__["default"])(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? _getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_10__["default"] : _getAllKeys_js__WEBPACK_IMPORTED_MODULE_9__["default"])
    : (isFlat ? keysIn : _keys_js__WEBPACK_IMPORTED_MODULE_20__["default"]);

  var props = isArr ? undefined : keysFunc(value);
  Object(_arrayEach_js__WEBPACK_IMPORTED_MODULE_1__["default"])(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    Object(_assignValue_js__WEBPACK_IMPORTED_MODULE_2__["default"])(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseClone);


/***/ }),

/***/ "./node_modules/lodash-es/_baseCreate.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseCreate.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");


/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/* harmony default export */ __webpack_exports__["default"] = (baseCreate);


/***/ }),

/***/ "./node_modules/lodash-es/_baseGetAllKeys.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_baseGetAllKeys.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayPush.js */ "./node_modules/lodash-es/_arrayPush.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");



/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return Object(_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object) ? result : Object(_arrayPush_js__WEBPACK_IMPORTED_MODULE_0__["default"])(result, symbolsFunc(object));
}

/* harmony default export */ __webpack_exports__["default"] = (baseGetAllKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_baseGetTag.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ "./node_modules/lodash-es/_getRawTag.js");
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ "./node_modules/lodash-es/_objectToString.js");




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)
    : Object(_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (baseGetTag);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsArguments.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsArguments.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) == argsTag;
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsArguments);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsMap.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseIsMap.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getTag.js */ "./node_modules/lodash-es/_getTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_getTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) == mapTag;
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsMap);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsNative.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsNative.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/lodash-es/isFunction.js");
/* harmony import */ var _isMasked_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isMasked.js */ "./node_modules/lodash-es/_isMasked.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toSource.js */ "./node_modules/lodash-es/_toSource.js");





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || Object(_isMasked_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return false;
  }
  var pattern = Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) ? reIsNative : reIsHostCtor;
  return pattern.test(Object(_toSource_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value));
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsNative);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseIsSet.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getTag.js */ "./node_modules/lodash-es/_getTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_getTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) == setTag;
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsSet);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsTypedArray.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsTypedArray.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isLength.js */ "./node_modules/lodash-es/isLength.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");




/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) &&
    Object(_isLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value.length) && !!typedArrayTags[Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)];
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsTypedArray);


/***/ }),

/***/ "./node_modules/lodash-es/_baseKeys.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseKeys.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPrototype.js */ "./node_modules/lodash-es/_isPrototype.js");
/* harmony import */ var _nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nativeKeys.js */ "./node_modules/lodash-es/_nativeKeys.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!Object(_isPrototype_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return Object(_nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_baseKeysIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseKeysIn.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isPrototype.js */ "./node_modules/lodash-es/_isPrototype.js");
/* harmony import */ var _nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_nativeKeysIn.js */ "./node_modules/lodash-es/_nativeKeysIn.js");




/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return Object(_nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);
  }
  var isProto = Object(_isPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseKeysIn);


/***/ }),

/***/ "./node_modules/lodash-es/_baseTimes.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseTimes.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseTimes);


/***/ }),

/***/ "./node_modules/lodash-es/_baseToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseToString.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayMap.js */ "./node_modules/lodash-es/_arrayMap.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");





/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return Object(_arrayMap_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, baseToString) + '';
  }
  if (Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseToString);


/***/ }),

/***/ "./node_modules/lodash-es/_baseUnary.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseUnary.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (baseUnary);


/***/ }),

/***/ "./node_modules/lodash-es/_cloneArrayBuffer.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_cloneArrayBuffer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Uint8Array.js */ "./node_modules/lodash-es/_Uint8Array.js");


/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](result).set(new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](arrayBuffer));
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (cloneArrayBuffer);


/***/ }),

/***/ "./node_modules/lodash-es/_cloneBuffer.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneBuffer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (cloneBuffer);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash-es/_cloneDataView.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_cloneDataView.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "./node_modules/lodash-es/_cloneArrayBuffer.js");


/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? Object(_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/* harmony default export */ __webpack_exports__["default"] = (cloneDataView);


/***/ }),

/***/ "./node_modules/lodash-es/_cloneRegExp.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneRegExp.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (cloneRegExp);


/***/ }),

/***/ "./node_modules/lodash-es/_cloneSymbol.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneSymbol.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");


/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/* harmony default export */ __webpack_exports__["default"] = (cloneSymbol);


/***/ }),

/***/ "./node_modules/lodash-es/_cloneTypedArray.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_cloneTypedArray.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "./node_modules/lodash-es/_cloneArrayBuffer.js");


/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? Object(_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/* harmony default export */ __webpack_exports__["default"] = (cloneTypedArray);


/***/ }),

/***/ "./node_modules/lodash-es/_copyArray.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_copyArray.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/* harmony default export */ __webpack_exports__["default"] = (copyArray);


/***/ }),

/***/ "./node_modules/lodash-es/_copyObject.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_copyObject.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assignValue.js */ "./node_modules/lodash-es/_assignValue.js");
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseAssignValue.js */ "./node_modules/lodash-es/_baseAssignValue.js");



/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      Object(_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, newValue);
    } else {
      Object(_assignValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, newValue);
    }
  }
  return object;
}

/* harmony default export */ __webpack_exports__["default"] = (copyObject);


/***/ }),

/***/ "./node_modules/lodash-es/_copySymbols.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_copySymbols.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbols.js */ "./node_modules/lodash-es/_getSymbols.js");



/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return Object(_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, Object(_getSymbols_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ __webpack_exports__["default"] = (copySymbols);


/***/ }),

/***/ "./node_modules/lodash-es/_copySymbolsIn.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_copySymbolsIn.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbolsIn.js */ "./node_modules/lodash-es/_getSymbolsIn.js");



/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return Object(_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, Object(_getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ __webpack_exports__["default"] = (copySymbolsIn);


/***/ }),

/***/ "./node_modules/lodash-es/_coreJsData.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_coreJsData.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Used to detect overreaching core-js shims. */
var coreJsData = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"]['__core-js_shared__'];

/* harmony default export */ __webpack_exports__["default"] = (coreJsData);


/***/ }),

/***/ "./node_modules/lodash-es/_defineProperty.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_defineProperty.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");


var defineProperty = (function() {
  try {
    var func = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* harmony default export */ __webpack_exports__["default"] = (defineProperty);


/***/ }),

/***/ "./node_modules/lodash-es/_freeGlobal.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["default"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash-es/_getAllKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getAllKeys.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys.js */ "./node_modules/lodash-es/_baseGetAllKeys.js");
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbols.js */ "./node_modules/lodash-es/_getSymbols.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ "./node_modules/lodash-es/keys.js");




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return Object(_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keys_js__WEBPACK_IMPORTED_MODULE_2__["default"], _getSymbols_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/* harmony default export */ __webpack_exports__["default"] = (getAllKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_getAllKeysIn.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getAllKeysIn.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys.js */ "./node_modules/lodash-es/_baseGetAllKeys.js");
/* harmony import */ var _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbolsIn.js */ "./node_modules/lodash-es/_getSymbolsIn.js");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keysIn.js */ "./node_modules/lodash-es/keysIn.js");




/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return Object(_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keysIn_js__WEBPACK_IMPORTED_MODULE_2__["default"], _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/* harmony default export */ __webpack_exports__["default"] = (getAllKeysIn);


/***/ }),

/***/ "./node_modules/lodash-es/_getMapData.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getMapData.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isKeyable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isKeyable.js */ "./node_modules/lodash-es/_isKeyable.js");


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return Object(_isKeyable_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ __webpack_exports__["default"] = (getMapData);


/***/ }),

/***/ "./node_modules/lodash-es/_getNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getNative.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsNative.js */ "./node_modules/lodash-es/_baseIsNative.js");
/* harmony import */ var _getValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getValue.js */ "./node_modules/lodash-es/_getValue.js");



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = Object(_getValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key);
  return Object(_baseIsNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) ? value : undefined;
}

/* harmony default export */ __webpack_exports__["default"] = (getNative);


/***/ }),

/***/ "./node_modules/lodash-es/_getPrototype.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getPrototype.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ "./node_modules/lodash-es/_overArg.js");


/** Built-in value references. */
var getPrototype = Object(_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["default"] = (getPrototype);


/***/ }),

/***/ "./node_modules/lodash-es/_getRawTag.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getRawTag.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (getRawTag);


/***/ }),

/***/ "./node_modules/lodash-es/_getSymbols.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getSymbols.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayFilter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayFilter.js */ "./node_modules/lodash-es/_arrayFilter.js");
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stubArray.js */ "./node_modules/lodash-es/stubArray.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_1__["default"] : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return Object(_arrayFilter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (getSymbols);


/***/ }),

/***/ "./node_modules/lodash-es/_getSymbolsIn.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getSymbolsIn.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayPush.js */ "./node_modules/lodash-es/_arrayPush.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getPrototype.js */ "./node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbols.js */ "./node_modules/lodash-es/_getSymbols.js");
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stubArray.js */ "./node_modules/lodash-es/stubArray.js");





/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_3__["default"] : function(object) {
  var result = [];
  while (object) {
    Object(_arrayPush_js__WEBPACK_IMPORTED_MODULE_0__["default"])(result, Object(_getSymbols_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object));
    object = Object(_getPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (getSymbolsIn);


/***/ }),

/***/ "./node_modules/lodash-es/_getTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_getTag.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_DataView.js */ "./node_modules/lodash-es/_DataView.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ "./node_modules/lodash-es/_Map.js");
/* harmony import */ var _Promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Promise.js */ "./node_modules/lodash-es/_Promise.js");
/* harmony import */ var _Set_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Set.js */ "./node_modules/lodash-es/_Set.js");
/* harmony import */ var _WeakMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_WeakMap.js */ "./node_modules/lodash-es/_WeakMap.js");
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_toSource.js */ "./node_modules/lodash-es/_toSource.js");








/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_DataView_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
    mapCtorString = Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
    promiseCtorString = Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_Promise_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
    setCtorString = Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_Set_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
    weakMapCtorString = Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_WeakMap_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag_js__WEBPACK_IMPORTED_MODULE_5__["default"];

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView_js__WEBPACK_IMPORTED_MODULE_0__["default"] && getTag(new _DataView_js__WEBPACK_IMPORTED_MODULE_0__["default"](new ArrayBuffer(1))) != dataViewTag) ||
    (_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"] && getTag(new _Map_js__WEBPACK_IMPORTED_MODULE_1__["default"]) != mapTag) ||
    (_Promise_js__WEBPACK_IMPORTED_MODULE_2__["default"] && getTag(_Promise_js__WEBPACK_IMPORTED_MODULE_2__["default"].resolve()) != promiseTag) ||
    (_Set_js__WEBPACK_IMPORTED_MODULE_3__["default"] && getTag(new _Set_js__WEBPACK_IMPORTED_MODULE_3__["default"]) != setTag) ||
    (_WeakMap_js__WEBPACK_IMPORTED_MODULE_4__["default"] && getTag(new _WeakMap_js__WEBPACK_IMPORTED_MODULE_4__["default"]) != weakMapTag)) {
  getTag = function(value) {
    var result = Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (getTag);


/***/ }),

/***/ "./node_modules/lodash-es/_getValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_getValue.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ __webpack_exports__["default"] = (getValue);


/***/ }),

/***/ "./node_modules/lodash-es/_hashClear.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_hashClear.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? Object(_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(null) : {};
  this.size = 0;
}

/* harmony default export */ __webpack_exports__["default"] = (hashClear);


/***/ }),

/***/ "./node_modules/lodash-es/_hashDelete.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_hashDelete.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (hashDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_hashGet.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashGet.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ __webpack_exports__["default"] = (hashGet);


/***/ }),

/***/ "./node_modules/lodash-es/_hashHas.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashHas.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/* harmony default export */ __webpack_exports__["default"] = (hashHas);


/***/ }),

/***/ "./node_modules/lodash-es/_hashSet.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashSet.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (hashSet);


/***/ }),

/***/ "./node_modules/lodash-es/_initCloneArray.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneArray.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (initCloneArray);


/***/ }),

/***/ "./node_modules/lodash-es/_initCloneByTag.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneByTag.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "./node_modules/lodash-es/_cloneArrayBuffer.js");
/* harmony import */ var _cloneDataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cloneDataView.js */ "./node_modules/lodash-es/_cloneDataView.js");
/* harmony import */ var _cloneRegExp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cloneRegExp.js */ "./node_modules/lodash-es/_cloneRegExp.js");
/* harmony import */ var _cloneSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_cloneSymbol.js */ "./node_modules/lodash-es/_cloneSymbol.js");
/* harmony import */ var _cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_cloneTypedArray.js */ "./node_modules/lodash-es/_cloneTypedArray.js");






/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return Object(_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return Object(_cloneDataView_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return Object(_cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return Object(_cloneRegExp_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return Object(_cloneSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (initCloneByTag);


/***/ }),

/***/ "./node_modules/lodash-es/_initCloneObject.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneObject.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseCreate.js */ "./node_modules/lodash-es/_baseCreate.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getPrototype.js */ "./node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isPrototype.js */ "./node_modules/lodash-es/_isPrototype.js");




/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !Object(_isPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object))
    ? Object(_baseCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_getPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object))
    : {};
}

/* harmony default export */ __webpack_exports__["default"] = (initCloneObject);


/***/ }),

/***/ "./node_modules/lodash-es/_isIndex.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_isIndex.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/* harmony default export */ __webpack_exports__["default"] = (isIndex);


/***/ }),

/***/ "./node_modules/lodash-es/_isKeyable.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_isKeyable.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/* harmony default export */ __webpack_exports__["default"] = (isKeyable);


/***/ }),

/***/ "./node_modules/lodash-es/_isMasked.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_isMasked.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_coreJsData.js */ "./node_modules/lodash-es/_coreJsData.js");


/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/* harmony default export */ __webpack_exports__["default"] = (isMasked);


/***/ }),

/***/ "./node_modules/lodash-es/_isPrototype.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_isPrototype.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/* harmony default export */ __webpack_exports__["default"] = (isPrototype);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheClear.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheClear.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheClear);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheDelete.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheDelete.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = Object(_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheGet.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheGet.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = Object(_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheGet);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheHas.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheHas.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return Object(_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.__data__, key) > -1;
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheHas);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheSet.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheSet.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = Object(_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheSet);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheClear.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheClear.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Hash.js */ "./node_modules/lodash-es/_Hash.js");
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Map.js */ "./node_modules/lodash-es/_Map.js");




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    'map': new (_Map_js__WEBPACK_IMPORTED_MODULE_2__["default"] || _ListCache_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
    'string': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"]
  };
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheClear);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheDelete.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheDelete.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = Object(_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheGet.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheGet.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return Object(_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).get(key);
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheGet);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheHas.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheHas.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return Object(_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).has(key);
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheHas);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheSet.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheSet.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = Object(_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheSet);


/***/ }),

/***/ "./node_modules/lodash-es/_memoizeCapped.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_memoizeCapped.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _memoize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memoize.js */ "./node_modules/lodash-es/memoize.js");


/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = Object(_memoize_js__WEBPACK_IMPORTED_MODULE_0__["default"])(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeCapped);


/***/ }),

/***/ "./node_modules/lodash-es/_nativeCreate.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_nativeCreate.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");


/* Built-in method references that are verified to be native. */
var nativeCreate = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'create');

/* harmony default export */ __webpack_exports__["default"] = (nativeCreate);


/***/ }),

/***/ "./node_modules/lodash-es/_nativeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_nativeKeys.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ "./node_modules/lodash-es/_overArg.js");


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = Object(_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.keys, Object);

/* harmony default export */ __webpack_exports__["default"] = (nativeKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_nativeKeysIn.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_nativeKeysIn.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (nativeKeysIn);


/***/ }),

/***/ "./node_modules/lodash-es/_nodeUtil.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_nodeUtil.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"].process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* harmony default export */ __webpack_exports__["default"] = (nodeUtil);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash-es/_objectToString.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_objectToString.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["default"] = (objectToString);


/***/ }),

/***/ "./node_modules/lodash-es/_overArg.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_overArg.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (overArg);


/***/ }),

/***/ "./node_modules/lodash-es/_root.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_root.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["default"] = (root);


/***/ }),

/***/ "./node_modules/lodash-es/_stackClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_stackClear.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  this.size = 0;
}

/* harmony default export */ __webpack_exports__["default"] = (stackClear);


/***/ }),

/***/ "./node_modules/lodash-es/_stackDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_stackDelete.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (stackDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_stackGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackGet.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/* harmony default export */ __webpack_exports__["default"] = (stackGet);


/***/ }),

/***/ "./node_modules/lodash-es/_stackHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackHas.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/* harmony default export */ __webpack_exports__["default"] = (stackHas);


/***/ }),

/***/ "./node_modules/lodash-es/_stackSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackSet.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ "./node_modules/lodash-es/_Map.js");
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_MapCache.js */ "./node_modules/lodash-es/_MapCache.js");




/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var pairs = data.__data__;
    if (!_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"] || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache_js__WEBPACK_IMPORTED_MODULE_2__["default"](pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (stackSet);


/***/ }),

/***/ "./node_modules/lodash-es/_stringToPath.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_stringToPath.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _memoizeCapped_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_memoizeCapped.js */ "./node_modules/lodash-es/_memoizeCapped.js");


/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = Object(_memoizeCapped_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (stringToPath);


/***/ }),

/***/ "./node_modules/lodash-es/_toKey.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_toKey.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");


/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ __webpack_exports__["default"] = (toKey);


/***/ }),

/***/ "./node_modules/lodash-es/_toSource.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_toSource.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/* harmony default export */ __webpack_exports__["default"] = (toSource);


/***/ }),

/***/ "./node_modules/lodash-es/clone.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/clone.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseClone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseClone.js */ "./node_modules/lodash-es/_baseClone.js");


/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return Object(_baseClone_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, CLONE_SYMBOLS_FLAG);
}

/* harmony default export */ __webpack_exports__["default"] = (clone);


/***/ }),

/***/ "./node_modules/lodash-es/cloneDeep.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/cloneDeep.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseClone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseClone.js */ "./node_modules/lodash-es/_baseClone.js");


/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return Object(_baseClone_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

/* harmony default export */ __webpack_exports__["default"] = (cloneDeep);


/***/ }),

/***/ "./node_modules/lodash-es/eq.js":
/*!**************************************!*\
  !*** ./node_modules/lodash-es/eq.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/* harmony default export */ __webpack_exports__["default"] = (eq);


/***/ }),

/***/ "./node_modules/lodash-es/isArguments.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArguments.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsArguments.js */ "./node_modules/lodash-es/_baseIsArguments.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = Object(_baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function() { return arguments; }()) ? _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function(value) {
  return Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/* harmony default export */ __webpack_exports__["default"] = (isArguments);


/***/ }),

/***/ "./node_modules/lodash-es/isArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/isArray.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/* harmony default export */ __webpack_exports__["default"] = (isArray);


/***/ }),

/***/ "./node_modules/lodash-es/isArrayLike.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArrayLike.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/lodash-es/isFunction.js");
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isLength.js */ "./node_modules/lodash-es/isLength.js");



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && Object(_isLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value.length) && !Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (isArrayLike);


/***/ }),

/***/ "./node_modules/lodash-es/isBuffer.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isBuffer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");
/* harmony import */ var _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stubFalse.js */ "./node_modules/lodash-es/stubFalse.js");



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__["default"];

/* harmony default export */ __webpack_exports__["default"] = (isBuffer);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash-es/isFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/isFunction.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ __webpack_exports__["default"] = (isFunction);


/***/ }),

/***/ "./node_modules/lodash-es/isLength.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isLength.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/* harmony default export */ __webpack_exports__["default"] = (isLength);


/***/ }),

/***/ "./node_modules/lodash-es/isMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/isMap.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsMap.js */ "./node_modules/lodash-es/_baseIsMap.js");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ "./node_modules/lodash-es/_baseUnary.js");
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_nodeUtil.js */ "./node_modules/lodash-es/_nodeUtil.js");




/* Node.js helper references. */
var nodeIsMap = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"].isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? Object(_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsMap) : _baseIsMap_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (isMap);


/***/ }),

/***/ "./node_modules/lodash-es/isObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isObject.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ __webpack_exports__["default"] = (isObject);


/***/ }),

/***/ "./node_modules/lodash-es/isObjectLike.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["default"] = (isObjectLike);


/***/ }),

/***/ "./node_modules/lodash-es/isPlainObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/isPlainObject.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getPrototype.js */ "./node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) != objectTag) {
    return false;
  }
  var proto = Object(_getPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["default"] = (isPlainObject);


/***/ }),

/***/ "./node_modules/lodash-es/isSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/isSet.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsSet.js */ "./node_modules/lodash-es/_baseIsSet.js");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ "./node_modules/lodash-es/_baseUnary.js");
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_nodeUtil.js */ "./node_modules/lodash-es/_nodeUtil.js");




/* Node.js helper references. */
var nodeIsSet = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"].isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? Object(_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsSet) : _baseIsSet_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (isSet);


/***/ }),

/***/ "./node_modules/lodash-es/isSymbol.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isSymbol.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) == symbolTag);
}

/* harmony default export */ __webpack_exports__["default"] = (isSymbol);


/***/ }),

/***/ "./node_modules/lodash-es/isTypedArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isTypedArray.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsTypedArray.js */ "./node_modules/lodash-es/_baseIsTypedArray.js");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ "./node_modules/lodash-es/_baseUnary.js");
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_nodeUtil.js */ "./node_modules/lodash-es/_nodeUtil.js");




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"].isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? Object(_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsTypedArray) : _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (isTypedArray);


/***/ }),

/***/ "./node_modules/lodash-es/keys.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/keys.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ "./node_modules/lodash-es/_arrayLikeKeys.js");
/* harmony import */ var _baseKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseKeys.js */ "./node_modules/lodash-es/_baseKeys.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");




/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object) ? Object(_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) : Object(_baseKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
}

/* harmony default export */ __webpack_exports__["default"] = (keys);


/***/ }),

/***/ "./node_modules/lodash-es/keysIn.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/keysIn.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ "./node_modules/lodash-es/_arrayLikeKeys.js");
/* harmony import */ var _baseKeysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseKeysIn.js */ "./node_modules/lodash-es/_baseKeysIn.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");




/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object) ? Object(_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, true) : Object(_baseKeysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
}

/* harmony default export */ __webpack_exports__["default"] = (keysIn);


/***/ }),

/***/ "./node_modules/lodash-es/memoize.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/memoize.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_MapCache.js */ "./node_modules/lodash-es/_MapCache.js");


/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/lodash-es/stubArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubArray.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/* harmony default export */ __webpack_exports__["default"] = (stubArray);


/***/ }),

/***/ "./node_modules/lodash-es/stubFalse.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubFalse.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (stubFalse);


/***/ }),

/***/ "./node_modules/lodash-es/toPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/toPath.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayMap.js */ "./node_modules/lodash-es/_arrayMap.js");
/* harmony import */ var _copyArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_copyArray.js */ "./node_modules/lodash-es/_copyArray.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");
/* harmony import */ var _stringToPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_stringToPath.js */ "./node_modules/lodash-es/_stringToPath.js");
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_toKey.js */ "./node_modules/lodash-es/_toKey.js");
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toString.js */ "./node_modules/lodash-es/toString.js");








/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)) {
    return Object(_arrayMap_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, _toKey_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  }
  return Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value) ? [value] : Object(_copyArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_stringToPath_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_toString_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value)));
}

/* harmony default export */ __webpack_exports__["default"] = (toPath);


/***/ }),

/***/ "./node_modules/lodash-es/toString.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toString.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseToString.js */ "./node_modules/lodash-es/_baseToString.js");


/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : Object(_baseToString_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (toString);


/***/ }),

/***/ "./node_modules/react-fast-compare/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== 'undefined';

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;
    // end fast-deep-equal

    // start react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element && b instanceof Element)
      return a === b;

    // custom handling for React
    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    }
    // end react-fast-compare

    // fast-deep-equal index.js 2.0.1
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message && error.message.match(/stack|recursion/i)) || (error.number === -2146828260)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.development.js":
/*!*************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.development.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.18.0
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enableSchedulerDebugging = false;
var enableIsInputPending = false;
var enableProfiling = true;

var requestHostCallback;

var requestHostTimeout;
var cancelHostTimeout;
var shouldYieldToHost;
var requestPaint;



if ( // If Scheduler runs in a non-DOM environment, it falls back to a naive
// implementation using setTimeout.
typeof window === 'undefined' || // Check if MessageChannel is supported, too.
typeof MessageChannel !== 'function') {
  // If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,
  // fallback to a naive implementation.
  var _callback = null;
  var _timeoutID = null;

  var _flushCallback = function () {
    if (_callback !== null) {
      try {
        var currentTime = exports.unstable_now();
        var hasRemainingTime = true;

        _callback(hasRemainingTime, currentTime);

        _callback = null;
      } catch (e) {
        setTimeout(_flushCallback, 0);
        throw e;
      }
    }
  };

  var initialTime = Date.now();

  exports.unstable_now = function () {
    return Date.now() - initialTime;
  };

  requestHostCallback = function (cb) {
    if (_callback !== null) {
      // Protect against re-entrancy.
      setTimeout(requestHostCallback, 0, cb);
    } else {
      _callback = cb;
      setTimeout(_flushCallback, 0);
    }
  };

  requestHostTimeout = function (cb, ms) {
    _timeoutID = setTimeout(cb, ms);
  };

  cancelHostTimeout = function () {
    clearTimeout(_timeoutID);
  };

  shouldYieldToHost = function () {
    return false;
  };

  requestPaint = exports.unstable_forceFrameRate = function () {};
} else {
  // Capture local references to native APIs, in case a polyfill overrides them.
  var performance = window.performance;
  var _Date = window.Date;
  var _setTimeout = window.setTimeout;
  var _clearTimeout = window.clearTimeout;

  if (typeof console !== 'undefined') {
    // TODO: Scheduler no longer requires these methods to be polyfilled. But
    // maybe we want to continue warning if they don't exist, to preserve the
    // option to rely on it in the future?
    var requestAnimationFrame = window.requestAnimationFrame;
    var cancelAnimationFrame = window.cancelAnimationFrame; // TODO: Remove fb.me link

    if (typeof requestAnimationFrame !== 'function') {
      console.error("This browser doesn't support requestAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
    }

    if (typeof cancelAnimationFrame !== 'function') {
      console.error("This browser doesn't support cancelAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
    }
  }

  if (typeof performance === 'object' && typeof performance.now === 'function') {
    exports.unstable_now = function () {
      return performance.now();
    };
  } else {
    var _initialTime = _Date.now();

    exports.unstable_now = function () {
      return _Date.now() - _initialTime;
    };
  }

  var isMessageLoopRunning = false;
  var scheduledHostCallback = null;
  var taskTimeoutID = -1; // Scheduler periodically yields in case there is other work on the main
  // thread, like user events. By default, it yields multiple times per frame.
  // It does not attempt to align with frame boundaries, since most tasks don't
  // need to be frame aligned; for those that do, use requestAnimationFrame.

  var yieldInterval = 5;
  var deadline = 0; // TODO: Make this configurable
  // TODO: Adjust this based on priority?

  var maxYieldInterval = 300;
  var needsPaint = false;

  if (enableIsInputPending && navigator !== undefined && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined) {
    var scheduling = navigator.scheduling;

    shouldYieldToHost = function () {
      var currentTime = exports.unstable_now();

      if (currentTime >= deadline) {
        // There's no time left. We may want to yield control of the main
        // thread, so the browser can perform high priority tasks. The main ones
        // are painting and user input. If there's a pending paint or a pending
        // input, then we should yield. But if there's neither, then we can
        // yield less often while remaining responsive. We'll eventually yield
        // regardless, since there could be a pending paint that wasn't
        // accompanied by a call to `requestPaint`, or other main thread tasks
        // like network events.
        if (needsPaint || scheduling.isInputPending()) {
          // There is either a pending paint or a pending input.
          return true;
        } // There's no pending input. Only yield if we've reached the max
        // yield interval.


        return currentTime >= maxYieldInterval;
      } else {
        // There's still time left in the frame.
        return false;
      }
    };

    requestPaint = function () {
      needsPaint = true;
    };
  } else {
    // `isInputPending` is not available. Since we have no way of knowing if
    // there's pending input, always yield at the end of the frame.
    shouldYieldToHost = function () {
      return exports.unstable_now() >= deadline;
    }; // Since we yield every frame regardless, `requestPaint` has no effect.


    requestPaint = function () {};
  }

  exports.unstable_forceFrameRate = function (fps) {
    if (fps < 0 || fps > 125) {
      console.error('forceFrameRate takes a positive int between 0 and 125, ' + 'forcing framerates higher than 125 fps is not unsupported');
      return;
    }

    if (fps > 0) {
      yieldInterval = Math.floor(1000 / fps);
    } else {
      // reset the framerate
      yieldInterval = 5;
    }
  };

  var performWorkUntilDeadline = function () {
    if (scheduledHostCallback !== null) {
      var currentTime = exports.unstable_now(); // Yield after `yieldInterval` ms, regardless of where we are in the vsync
      // cycle. This means there's always time remaining at the beginning of
      // the message event.

      deadline = currentTime + yieldInterval;
      var hasTimeRemaining = true;

      try {
        var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);

        if (!hasMoreWork) {
          isMessageLoopRunning = false;
          scheduledHostCallback = null;
        } else {
          // If there's more work, schedule the next message event at the end
          // of the preceding one.
          port.postMessage(null);
        }
      } catch (error) {
        // If a scheduler task throws, exit the current browser task so the
        // error can be observed.
        port.postMessage(null);
        throw error;
      }
    } else {
      isMessageLoopRunning = false;
    } // Yielding to the browser will give it a chance to paint, so we can
    // reset this.


    needsPaint = false;
  };

  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = performWorkUntilDeadline;

  requestHostCallback = function (callback) {
    scheduledHostCallback = callback;

    if (!isMessageLoopRunning) {
      isMessageLoopRunning = true;
      port.postMessage(null);
    }
  };

  requestHostTimeout = function (callback, ms) {
    taskTimeoutID = _setTimeout(function () {
      callback(exports.unstable_now());
    }, ms);
  };

  cancelHostTimeout = function () {
    _clearTimeout(taskTimeoutID);

    taskTimeoutID = -1;
  };
}

function push(heap, node) {
  var index = heap.length;
  heap.push(node);
  siftUp(heap, node, index);
}
function peek(heap) {
  var first = heap[0];
  return first === undefined ? null : first;
}
function pop(heap) {
  var first = heap[0];

  if (first !== undefined) {
    var last = heap.pop();

    if (last !== first) {
      heap[0] = last;
      siftDown(heap, last, 0);
    }

    return first;
  } else {
    return null;
  }
}

function siftUp(heap, node, i) {
  var index = i;

  while (true) {
    var parentIndex = Math.floor((index - 1) / 2);
    var parent = heap[parentIndex];

    if (parent !== undefined && compare(parent, node) > 0) {
      // The parent is larger. Swap positions.
      heap[parentIndex] = node;
      heap[index] = parent;
      index = parentIndex;
    } else {
      // The parent is smaller. Exit.
      return;
    }
  }
}

function siftDown(heap, node, i) {
  var index = i;
  var length = heap.length;

  while (index < length) {
    var leftIndex = (index + 1) * 2 - 1;
    var left = heap[leftIndex];
    var rightIndex = leftIndex + 1;
    var right = heap[rightIndex]; // If the left or right node is smaller, swap with the smaller of those.

    if (left !== undefined && compare(left, node) < 0) {
      if (right !== undefined && compare(right, left) < 0) {
        heap[index] = right;
        heap[rightIndex] = node;
        index = rightIndex;
      } else {
        heap[index] = left;
        heap[leftIndex] = node;
        index = leftIndex;
      }
    } else if (right !== undefined && compare(right, node) < 0) {
      heap[index] = right;
      heap[rightIndex] = node;
      index = rightIndex;
    } else {
      // Neither child is smaller. Exit.
      return;
    }
  }
}

function compare(a, b) {
  // Compare sort index first, then task id.
  var diff = a.sortIndex - b.sortIndex;
  return diff !== 0 ? diff : a.id - b.id;
}

// TODO: Use symbols?
var NoPriority = 0;
var ImmediatePriority = 1;
var UserBlockingPriority = 2;
var NormalPriority = 3;
var LowPriority = 4;
var IdlePriority = 5;

var runIdCounter = 0;
var mainThreadIdCounter = 0;
var profilingStateSize = 4;
var sharedProfilingBuffer = enableProfiling ? // $FlowFixMe Flow doesn't know about SharedArrayBuffer
typeof SharedArrayBuffer === 'function' ? new SharedArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT) : // $FlowFixMe Flow doesn't know about ArrayBuffer
typeof ArrayBuffer === 'function' ? new ArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT) : null // Don't crash the init path on IE9
: null;
var profilingState = enableProfiling && sharedProfilingBuffer !== null ? new Int32Array(sharedProfilingBuffer) : []; // We can't read this but it helps save bytes for null checks

var PRIORITY = 0;
var CURRENT_TASK_ID = 1;
var CURRENT_RUN_ID = 2;
var QUEUE_SIZE = 3;

if (enableProfiling) {
  profilingState[PRIORITY] = NoPriority; // This is maintained with a counter, because the size of the priority queue
  // array might include canceled tasks.

  profilingState[QUEUE_SIZE] = 0;
  profilingState[CURRENT_TASK_ID] = 0;
} // Bytes per element is 4


var INITIAL_EVENT_LOG_SIZE = 131072;
var MAX_EVENT_LOG_SIZE = 524288; // Equivalent to 2 megabytes

var eventLogSize = 0;
var eventLogBuffer = null;
var eventLog = null;
var eventLogIndex = 0;
var TaskStartEvent = 1;
var TaskCompleteEvent = 2;
var TaskErrorEvent = 3;
var TaskCancelEvent = 4;
var TaskRunEvent = 5;
var TaskYieldEvent = 6;
var SchedulerSuspendEvent = 7;
var SchedulerResumeEvent = 8;

function logEvent(entries) {
  if (eventLog !== null) {
    var offset = eventLogIndex;
    eventLogIndex += entries.length;

    if (eventLogIndex + 1 > eventLogSize) {
      eventLogSize *= 2;

      if (eventLogSize > MAX_EVENT_LOG_SIZE) {
        console.error("Scheduler Profiling: Event log exceeded maximum size. Don't " + 'forget to call `stopLoggingProfilingEvents()`.');
        stopLoggingProfilingEvents();
        return;
      }

      var newEventLog = new Int32Array(eventLogSize * 4);
      newEventLog.set(eventLog);
      eventLogBuffer = newEventLog.buffer;
      eventLog = newEventLog;
    }

    eventLog.set(entries, offset);
  }
}

function startLoggingProfilingEvents() {
  eventLogSize = INITIAL_EVENT_LOG_SIZE;
  eventLogBuffer = new ArrayBuffer(eventLogSize * 4);
  eventLog = new Int32Array(eventLogBuffer);
  eventLogIndex = 0;
}
function stopLoggingProfilingEvents() {
  var buffer = eventLogBuffer;
  eventLogSize = 0;
  eventLogBuffer = null;
  eventLog = null;
  eventLogIndex = 0;
  return buffer;
}
function markTaskStart(task, ms) {
  if (enableProfiling) {
    profilingState[QUEUE_SIZE]++;

    if (eventLog !== null) {
      // performance.now returns a float, representing milliseconds. When the
      // event is logged, it's coerced to an int. Convert to microseconds to
      // maintain extra degrees of precision.
      logEvent([TaskStartEvent, ms * 1000, task.id, task.priorityLevel]);
    }
  }
}
function markTaskCompleted(task, ms) {
  if (enableProfiling) {
    profilingState[PRIORITY] = NoPriority;
    profilingState[CURRENT_TASK_ID] = 0;
    profilingState[QUEUE_SIZE]--;

    if (eventLog !== null) {
      logEvent([TaskCompleteEvent, ms * 1000, task.id]);
    }
  }
}
function markTaskCanceled(task, ms) {
  if (enableProfiling) {
    profilingState[QUEUE_SIZE]--;

    if (eventLog !== null) {
      logEvent([TaskCancelEvent, ms * 1000, task.id]);
    }
  }
}
function markTaskErrored(task, ms) {
  if (enableProfiling) {
    profilingState[PRIORITY] = NoPriority;
    profilingState[CURRENT_TASK_ID] = 0;
    profilingState[QUEUE_SIZE]--;

    if (eventLog !== null) {
      logEvent([TaskErrorEvent, ms * 1000, task.id]);
    }
  }
}
function markTaskRun(task, ms) {
  if (enableProfiling) {
    runIdCounter++;
    profilingState[PRIORITY] = task.priorityLevel;
    profilingState[CURRENT_TASK_ID] = task.id;
    profilingState[CURRENT_RUN_ID] = runIdCounter;

    if (eventLog !== null) {
      logEvent([TaskRunEvent, ms * 1000, task.id, runIdCounter]);
    }
  }
}
function markTaskYield(task, ms) {
  if (enableProfiling) {
    profilingState[PRIORITY] = NoPriority;
    profilingState[CURRENT_TASK_ID] = 0;
    profilingState[CURRENT_RUN_ID] = 0;

    if (eventLog !== null) {
      logEvent([TaskYieldEvent, ms * 1000, task.id, runIdCounter]);
    }
  }
}
function markSchedulerSuspended(ms) {
  if (enableProfiling) {
    mainThreadIdCounter++;

    if (eventLog !== null) {
      logEvent([SchedulerSuspendEvent, ms * 1000, mainThreadIdCounter]);
    }
  }
}
function markSchedulerUnsuspended(ms) {
  if (enableProfiling) {
    if (eventLog !== null) {
      logEvent([SchedulerResumeEvent, ms * 1000, mainThreadIdCounter]);
    }
  }
}

/* eslint-disable no-var */
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111

var maxSigned31BitInt = 1073741823; // Times out immediately

var IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out

var USER_BLOCKING_PRIORITY = 250;
var NORMAL_PRIORITY_TIMEOUT = 5000;
var LOW_PRIORITY_TIMEOUT = 10000; // Never times out

var IDLE_PRIORITY = maxSigned31BitInt; // Tasks are stored on a min heap

var taskQueue = [];
var timerQueue = []; // Incrementing id counter. Used to maintain insertion order.

var taskIdCounter = 1; // Pausing the scheduler is useful for debugging.

var isSchedulerPaused = false;
var currentTask = null;
var currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrancy.

var isPerformingWork = false;
var isHostCallbackScheduled = false;
var isHostTimeoutScheduled = false;

function advanceTimers(currentTime) {
  // Check for tasks that are no longer delayed and add them to the queue.
  var timer = peek(timerQueue);

  while (timer !== null) {
    if (timer.callback === null) {
      // Timer was cancelled.
      pop(timerQueue);
    } else if (timer.startTime <= currentTime) {
      // Timer fired. Transfer to the task queue.
      pop(timerQueue);
      timer.sortIndex = timer.expirationTime;
      push(taskQueue, timer);

      if (enableProfiling) {
        markTaskStart(timer, currentTime);
        timer.isQueued = true;
      }
    } else {
      // Remaining timers are pending.
      return;
    }

    timer = peek(timerQueue);
  }
}

function handleTimeout(currentTime) {
  isHostTimeoutScheduled = false;
  advanceTimers(currentTime);

  if (!isHostCallbackScheduled) {
    if (peek(taskQueue) !== null) {
      isHostCallbackScheduled = true;
      requestHostCallback(flushWork);
    } else {
      var firstTimer = peek(timerQueue);

      if (firstTimer !== null) {
        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
      }
    }
  }
}

function flushWork(hasTimeRemaining, initialTime) {
  if (enableProfiling) {
    markSchedulerUnsuspended(initialTime);
  } // We'll need a host callback the next time work is scheduled.


  isHostCallbackScheduled = false;

  if (isHostTimeoutScheduled) {
    // We scheduled a timeout but it's no longer needed. Cancel it.
    isHostTimeoutScheduled = false;
    cancelHostTimeout();
  }

  isPerformingWork = true;
  var previousPriorityLevel = currentPriorityLevel;

  try {
    if (enableProfiling) {
      try {
        return workLoop(hasTimeRemaining, initialTime);
      } catch (error) {
        if (currentTask !== null) {
          var currentTime = exports.unstable_now();
          markTaskErrored(currentTask, currentTime);
          currentTask.isQueued = false;
        }

        throw error;
      }
    } else {
      // No catch in prod codepath.
      return workLoop(hasTimeRemaining, initialTime);
    }
  } finally {
    currentTask = null;
    currentPriorityLevel = previousPriorityLevel;
    isPerformingWork = false;

    if (enableProfiling) {
      var _currentTime = exports.unstable_now();

      markSchedulerSuspended(_currentTime);
    }
  }
}

function workLoop(hasTimeRemaining, initialTime) {
  var currentTime = initialTime;
  advanceTimers(currentTime);
  currentTask = peek(taskQueue);

  while (currentTask !== null && !(enableSchedulerDebugging && isSchedulerPaused)) {
    if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {
      // This currentTask hasn't expired, and we've reached the deadline.
      break;
    }

    var callback = currentTask.callback;

    if (callback !== null) {
      currentTask.callback = null;
      currentPriorityLevel = currentTask.priorityLevel;
      var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
      markTaskRun(currentTask, currentTime);
      var continuationCallback = callback(didUserCallbackTimeout);
      currentTime = exports.unstable_now();

      if (typeof continuationCallback === 'function') {
        currentTask.callback = continuationCallback;
        markTaskYield(currentTask, currentTime);
      } else {
        if (enableProfiling) {
          markTaskCompleted(currentTask, currentTime);
          currentTask.isQueued = false;
        }

        if (currentTask === peek(taskQueue)) {
          pop(taskQueue);
        }
      }

      advanceTimers(currentTime);
    } else {
      pop(taskQueue);
    }

    currentTask = peek(taskQueue);
  } // Return whether there's additional work


  if (currentTask !== null) {
    return true;
  } else {
    var firstTimer = peek(timerQueue);

    if (firstTimer !== null) {
      requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
    }

    return false;
  }
}

function unstable_runWithPriority(priorityLevel, eventHandler) {
  switch (priorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
    case LowPriority:
    case IdlePriority:
      break;

    default:
      priorityLevel = NormalPriority;
  }

  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;

  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
}

function unstable_next(eventHandler) {
  var priorityLevel;

  switch (currentPriorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
      // Shift down to normal priority
      priorityLevel = NormalPriority;
      break;

    default:
      // Anything lower than normal priority should remain at the current level.
      priorityLevel = currentPriorityLevel;
      break;
  }

  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;

  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
}

function unstable_wrapCallback(callback) {
  var parentPriorityLevel = currentPriorityLevel;
  return function () {
    // This is a fork of runWithPriority, inlined for performance.
    var previousPriorityLevel = currentPriorityLevel;
    currentPriorityLevel = parentPriorityLevel;

    try {
      return callback.apply(this, arguments);
    } finally {
      currentPriorityLevel = previousPriorityLevel;
    }
  };
}

function timeoutForPriorityLevel(priorityLevel) {
  switch (priorityLevel) {
    case ImmediatePriority:
      return IMMEDIATE_PRIORITY_TIMEOUT;

    case UserBlockingPriority:
      return USER_BLOCKING_PRIORITY;

    case IdlePriority:
      return IDLE_PRIORITY;

    case LowPriority:
      return LOW_PRIORITY_TIMEOUT;

    case NormalPriority:
    default:
      return NORMAL_PRIORITY_TIMEOUT;
  }
}

function unstable_scheduleCallback(priorityLevel, callback, options) {
  var currentTime = exports.unstable_now();
  var startTime;
  var timeout;

  if (typeof options === 'object' && options !== null) {
    var delay = options.delay;

    if (typeof delay === 'number' && delay > 0) {
      startTime = currentTime + delay;
    } else {
      startTime = currentTime;
    }

    timeout = typeof options.timeout === 'number' ? options.timeout : timeoutForPriorityLevel(priorityLevel);
  } else {
    timeout = timeoutForPriorityLevel(priorityLevel);
    startTime = currentTime;
  }

  var expirationTime = startTime + timeout;
  var newTask = {
    id: taskIdCounter++,
    callback: callback,
    priorityLevel: priorityLevel,
    startTime: startTime,
    expirationTime: expirationTime,
    sortIndex: -1
  };

  if (enableProfiling) {
    newTask.isQueued = false;
  }

  if (startTime > currentTime) {
    // This is a delayed task.
    newTask.sortIndex = startTime;
    push(timerQueue, newTask);

    if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
      // All tasks are delayed, and this is the task with the earliest delay.
      if (isHostTimeoutScheduled) {
        // Cancel an existing timeout.
        cancelHostTimeout();
      } else {
        isHostTimeoutScheduled = true;
      } // Schedule a timeout.


      requestHostTimeout(handleTimeout, startTime - currentTime);
    }
  } else {
    newTask.sortIndex = expirationTime;
    push(taskQueue, newTask);

    if (enableProfiling) {
      markTaskStart(newTask, currentTime);
      newTask.isQueued = true;
    } // Schedule a host callback, if needed. If we're already performing work,
    // wait until the next time we yield.


    if (!isHostCallbackScheduled && !isPerformingWork) {
      isHostCallbackScheduled = true;
      requestHostCallback(flushWork);
    }
  }

  return newTask;
}

function unstable_pauseExecution() {
  isSchedulerPaused = true;
}

function unstable_continueExecution() {
  isSchedulerPaused = false;

  if (!isHostCallbackScheduled && !isPerformingWork) {
    isHostCallbackScheduled = true;
    requestHostCallback(flushWork);
  }
}

function unstable_getFirstCallbackNode() {
  return peek(taskQueue);
}

function unstable_cancelCallback(task) {
  if (enableProfiling) {
    if (task.isQueued) {
      var currentTime = exports.unstable_now();
      markTaskCanceled(task, currentTime);
      task.isQueued = false;
    }
  } // Null out the callback to indicate the task has been canceled. (Can't
  // remove from the queue because you can't remove arbitrary nodes from an
  // array based heap, only the first one.)


  task.callback = null;
}

function unstable_getCurrentPriorityLevel() {
  return currentPriorityLevel;
}

function unstable_shouldYield() {
  var currentTime = exports.unstable_now();
  advanceTimers(currentTime);
  var firstTask = peek(taskQueue);
  return firstTask !== currentTask && currentTask !== null && firstTask !== null && firstTask.callback !== null && firstTask.startTime <= currentTime && firstTask.expirationTime < currentTask.expirationTime || shouldYieldToHost();
}

var unstable_requestPaint = requestPaint;
var unstable_Profiling = enableProfiling ? {
  startLoggingProfilingEvents: startLoggingProfilingEvents,
  stopLoggingProfilingEvents: stopLoggingProfilingEvents,
  sharedProfilingBuffer: sharedProfilingBuffer
} : null;

exports.unstable_ImmediatePriority = ImmediatePriority;
exports.unstable_UserBlockingPriority = UserBlockingPriority;
exports.unstable_NormalPriority = NormalPriority;
exports.unstable_IdlePriority = IdlePriority;
exports.unstable_LowPriority = LowPriority;
exports.unstable_runWithPriority = unstable_runWithPriority;
exports.unstable_next = unstable_next;
exports.unstable_scheduleCallback = unstable_scheduleCallback;
exports.unstable_cancelCallback = unstable_cancelCallback;
exports.unstable_wrapCallback = unstable_wrapCallback;
exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
exports.unstable_shouldYield = unstable_shouldYield;
exports.unstable_requestPaint = unstable_requestPaint;
exports.unstable_continueExecution = unstable_continueExecution;
exports.unstable_pauseExecution = unstable_pauseExecution;
exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
exports.unstable_Profiling = unstable_Profiling;
  })();
}


/***/ }),

/***/ "./node_modules/scheduler/index.js":
/*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/scheduler.development.js */ "./node_modules/scheduler/cjs/scheduler.development.js");
}


/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warning);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVlcG1lcmdlL2Rpc3QvZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zvcm1pay9kaXN0L2Zvcm1pay5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX0RhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19Qcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19TdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2FycmF5RWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19hcnJheUxpa2VLZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2FycmF5TWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19hc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlQXNzaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUFzc2lnblZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VDbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VHZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VJc01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUlzU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUtleXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlVGltZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZVRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19jbG9uZUFycmF5QnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Nsb25lQnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Nsb25lRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY2xvbmVSZWdFeHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY2xvbmVTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY2xvbmVUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2NvcHlBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19jb3B5T2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2NvcHlTeW1ib2xzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2NvcHlTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0QWxsS2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldE1hcERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0TmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2hhc2hHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faGFzaEhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19oYXNoU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2luaXRDbG9uZUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2luaXRDbG9uZUJ5VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2luaXRDbG9uZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19pc0luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2lzS2V5YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19pc1Byb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19tYXBDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19tZW1vaXplQ2FwcGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX25hdGl2ZUNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19uYXRpdmVLZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX25hdGl2ZUtleXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fc3RhY2tDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19zdGFja0RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19zdGFja0dldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19zdGFja0hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19zdGFja1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19zdHJpbmdUb1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fdG9LZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9jbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2Nsb25lRGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2VxLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc0J1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9rZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9tZW1vaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvc3R1YkFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvdG9QYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvdG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWZhc3QtY29tcGFyZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2Nqcy9zY2hlZHVsZXIuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NjaGVkdWxlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS13YXJuaW5nL2Rpc3QvdGlueS13YXJuaW5nLmVzbS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxF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QUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRCxtRUFBUztBQUM3RCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVMseURBQU87QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDs7QUFFM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLDhCQUE4Qjs7QUFFOUI7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0hBQW9IOztBQUVwSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1DQUFtQzs7QUFFbkMsb0NBQW9DOztBQUVwQztBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQyxzQ0FBc0M7O0FBRXRDO0FBQ0Esb0JBQW9COztBQUVwQixzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUN2NEJhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELG1CQUFtQixtQkFBTyxDQUFDLDZGQUFnQztBQUMzRDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUEsbUJBQW1CLGFBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFZSxzRUFBTyxFQUFDOzs7Ozs7Ozs7Ozs7QUNuQnZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpc01lcmdlYWJsZU9iamVjdCA9IGZ1bmN0aW9uIGlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSB7XG5cdHJldHVybiBpc05vbk51bGxPYmplY3QodmFsdWUpXG5cdFx0JiYgIWlzU3BlY2lhbCh2YWx1ZSlcbn07XG5cbmZ1bmN0aW9uIGlzTm9uTnVsbE9iamVjdCh2YWx1ZSkge1xuXHRyZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbmZ1bmN0aW9uIGlzU3BlY2lhbCh2YWx1ZSkge1xuXHR2YXIgc3RyaW5nVmFsdWUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXG5cdHJldHVybiBzdHJpbmdWYWx1ZSA9PT0gJ1tvYmplY3QgUmVnRXhwXSdcblx0XHR8fCBzdHJpbmdWYWx1ZSA9PT0gJ1tvYmplY3QgRGF0ZV0nXG5cdFx0fHwgaXNSZWFjdEVsZW1lbnQodmFsdWUpXG59XG5cbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9iNWFjOTYzZmI3OTFkMTI5OGU3ZjM5NjIzNjM4M2JjOTU1ZjkxNmMxL3NyYy9pc29tb3JwaGljL2NsYXNzaWMvZWxlbWVudC9SZWFjdEVsZW1lbnQuanMjTDIxLUwyNVxudmFyIGNhblVzZVN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBjYW5Vc2VTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG5cbmZ1bmN0aW9uIGlzUmVhY3RFbGVtZW50KHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFXG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFyZ2V0KHZhbCkge1xuXHRyZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gW10gOiB7fVxufVxuXG5mdW5jdGlvbiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCh2YWx1ZSwgb3B0aW9ucykge1xuXHRyZXR1cm4gKG9wdGlvbnMuY2xvbmUgIT09IGZhbHNlICYmIG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QodmFsdWUpKVxuXHRcdD8gZGVlcG1lcmdlKGVtcHR5VGFyZ2V0KHZhbHVlKSwgdmFsdWUsIG9wdGlvbnMpXG5cdFx0OiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0QXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHRyZXR1cm4gdGFyZ2V0LmNvbmNhdChzb3VyY2UpLm1hcChmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0cmV0dXJuIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKGVsZW1lbnQsIG9wdGlvbnMpXG5cdH0pXG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG5cdHZhciBkZXN0aW5hdGlvbiA9IHt9O1xuXHRpZiAob3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCh0YXJnZXQpKSB7XG5cdFx0T2JqZWN0LmtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHRhcmdldFtrZXldLCBvcHRpb25zKTtcblx0XHR9KTtcblx0fVxuXHRPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG5cdFx0aWYgKCFvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHNvdXJjZVtrZXldKSB8fCAhdGFyZ2V0W2tleV0pIHtcblx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChzb3VyY2Vba2V5XSwgb3B0aW9ucyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBvcHRpb25zKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gZGVzdGluYXRpb25cbn1cblxuZnVuY3Rpb24gZGVlcG1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRvcHRpb25zLmFycmF5TWVyZ2UgPSBvcHRpb25zLmFycmF5TWVyZ2UgfHwgZGVmYXVsdEFycmF5TWVyZ2U7XG5cdG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QgPSBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0IHx8IGlzTWVyZ2VhYmxlT2JqZWN0O1xuXG5cdHZhciBzb3VyY2VJc0FycmF5ID0gQXJyYXkuaXNBcnJheShzb3VyY2UpO1xuXHR2YXIgdGFyZ2V0SXNBcnJheSA9IEFycmF5LmlzQXJyYXkodGFyZ2V0KTtcblx0dmFyIHNvdXJjZUFuZFRhcmdldFR5cGVzTWF0Y2ggPSBzb3VyY2VJc0FycmF5ID09PSB0YXJnZXRJc0FycmF5O1xuXG5cdGlmICghc291cmNlQW5kVGFyZ2V0VHlwZXNNYXRjaCkge1xuXHRcdHJldHVybiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChzb3VyY2UsIG9wdGlvbnMpXG5cdH0gZWxzZSBpZiAoc291cmNlSXNBcnJheSkge1xuXHRcdHJldHVybiBvcHRpb25zLmFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpXG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zKVxuXHR9XG59XG5cbmRlZXBtZXJnZS5hbGwgPSBmdW5jdGlvbiBkZWVwbWVyZ2VBbGwoYXJyYXksIG9wdGlvbnMpIHtcblx0aWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignZmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5Jylcblx0fVxuXG5cdHJldHVybiBhcnJheS5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgbmV4dCkge1xuXHRcdHJldHVybiBkZWVwbWVyZ2UocHJldiwgbmV4dCwgb3B0aW9ucylcblx0fSwge30pXG59O1xuXG52YXIgZGVlcG1lcmdlXzEgPSBkZWVwbWVyZ2U7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZXBtZXJnZV8xO1xuIiwiaW1wb3J0IHsgQ2hpbGRyZW4sIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlSW1wZXJhdGl2ZUhhbmRsZSwgY3JlYXRlRWxlbWVudCwgdXNlTGF5b3V0RWZmZWN0LCBmb3J3YXJkUmVmLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaXNFcXVhbCBmcm9tICdyZWFjdC1mYXN0LWNvbXBhcmUnO1xuaW1wb3J0IGRlZXBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnO1xuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoLWVzL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IGNsb25lIGZyb20gJ2xvZGFzaC1lcy9jbG9uZSc7XG5pbXBvcnQgdG9QYXRoIGZyb20gJ2xvZGFzaC1lcy90b1BhdGgnO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LXdhcm5pbmcnO1xuaW1wb3J0IHsgdW5zdGFibGVfcnVuV2l0aFByaW9yaXR5LCBMb3dQcmlvcml0eSB9IGZyb20gJ3NjaGVkdWxlcic7XG5pbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IGNsb25lRGVlcCBmcm9tICdsb2Rhc2gtZXMvY2xvbmVEZWVwJztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuLyoqIEBwcml2YXRlIGlzIHRoZSB2YWx1ZSBhbiBlbXB0eSBhcnJheT8gKi9cblxudmFyIGlzRW1wdHlBcnJheSA9IGZ1bmN0aW9uIGlzRW1wdHlBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwO1xufTtcbi8qKiBAcHJpdmF0ZSBpcyB0aGUgZ2l2ZW4gb2JqZWN0IGEgRnVuY3Rpb24/ICovXG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbic7XG59O1xuLyoqIEBwcml2YXRlIGlzIHRoZSBnaXZlbiBvYmplY3QgYW4gT2JqZWN0PyAqL1xuXG52YXIgaXNPYmplY3QgPSBmdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn07XG4vKiogQHByaXZhdGUgaXMgdGhlIGdpdmVuIG9iamVjdCBhbiBpbnRlZ2VyPyAqL1xuXG52YXIgaXNJbnRlZ2VyID0gZnVuY3Rpb24gaXNJbnRlZ2VyKG9iaikge1xuICByZXR1cm4gU3RyaW5nKE1hdGguZmxvb3IoTnVtYmVyKG9iaikpKSA9PT0gb2JqO1xufTtcbi8qKiBAcHJpdmF0ZSBpcyB0aGUgZ2l2ZW4gb2JqZWN0IGEgc3RyaW5nPyAqL1xuXG52YXIgaXNTdHJpbmcgPSBmdW5jdGlvbiBpc1N0cmluZyhvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBTdHJpbmddJztcbn07XG4vKiogQHByaXZhdGUgaXMgdGhlIGdpdmVuIG9iamVjdCBhIE5hTj8gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcblxudmFyIGlzTmFOJDEgPSBmdW5jdGlvbiBpc05hTihvYmopIHtcbiAgcmV0dXJuIG9iaiAhPT0gb2JqO1xufTtcbi8qKiBAcHJpdmF0ZSBEb2VzIGEgUmVhY3QgY29tcG9uZW50IGhhdmUgZXhhY3RseSAwIGNoaWxkcmVuPyAqL1xuXG52YXIgaXNFbXB0eUNoaWxkcmVuID0gZnVuY3Rpb24gaXNFbXB0eUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHJldHVybiBDaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPT09IDA7XG59O1xuLyoqIEBwcml2YXRlIGlzIHRoZSBnaXZlbiBvYmplY3QvdmFsdWUgYSBwcm9taXNlPyAqL1xuXG52YXIgaXNQcm9taXNlID0gZnVuY3Rpb24gaXNQcm9taXNlKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgaXNGdW5jdGlvbih2YWx1ZS50aGVuKTtcbn07XG4vKiogQHByaXZhdGUgaXMgdGhlIGdpdmVuIG9iamVjdC92YWx1ZSBhIHR5cGUgb2Ygc3ludGhldGljIGV2ZW50PyAqL1xuXG52YXIgaXNJbnB1dEV2ZW50ID0gZnVuY3Rpb24gaXNJbnB1dEV2ZW50KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBpc09iamVjdCh2YWx1ZSkgJiYgaXNPYmplY3QodmFsdWUudGFyZ2V0KTtcbn07XG4vKipcclxuICogU2FtZSBhcyBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGJ1dCB3cmFwcyBpbiBhIHRyeS1jYXRjaCBibG9jay4gSW4gSUUgaXQgaXNcclxuICogbm90IHNhZmUgdG8gY2FsbCBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGlmIHRoZXJlIGlzIG5vdGhpbmcgZm9jdXNlZC5cclxuICpcclxuICogVGhlIGFjdGl2ZUVsZW1lbnQgd2lsbCBiZSBudWxsIG9ubHkgaWYgdGhlIGRvY3VtZW50IG9yIGRvY3VtZW50IGJvZHkgaXMgbm90XHJcbiAqIHlldCBkZWZpbmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0gez9Eb2N1bWVudH0gZG9jIERlZmF1bHRzIHRvIGN1cnJlbnQgZG9jdW1lbnQuXHJcbiAqIEByZXR1cm4ge0VsZW1lbnQgfCBudWxsfVxyXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2ZianMvc3JjL2NvcmUvZG9tL2dldEFjdGl2ZUVsZW1lbnQuanNcclxuICovXG5cbmZ1bmN0aW9uIGdldEFjdGl2ZUVsZW1lbnQoZG9jKSB7XG4gIGRvYyA9IGRvYyB8fCAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogdW5kZWZpbmVkKTtcblxuICBpZiAodHlwZW9mIGRvYyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGRvYy5hY3RpdmVFbGVtZW50IHx8IGRvYy5ib2R5O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGRvYy5ib2R5O1xuICB9XG59XG4vKipcclxuICogRGVlcGx5IGdldCBhIHZhbHVlIGZyb20gYW4gb2JqZWN0IHZpYSBpdHMgcGF0aC5cclxuICovXG5cbmZ1bmN0aW9uIGdldEluKG9iaiwga2V5LCBkZWYsIHApIHtcbiAgaWYgKHAgPT09IHZvaWQgMCkge1xuICAgIHAgPSAwO1xuICB9XG5cbiAgdmFyIHBhdGggPSB0b1BhdGgoa2V5KTtcblxuICB3aGlsZSAob2JqICYmIHAgPCBwYXRoLmxlbmd0aCkge1xuICAgIG9iaiA9IG9ialtwYXRoW3ArK11dO1xuICB9XG5cbiAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkID8gZGVmIDogb2JqO1xufVxuLyoqXHJcbiAqIERlZXBseSBzZXQgYSB2YWx1ZSBmcm9tIGluIG9iamVjdCB2aWEgaXQncyBwYXRoLiBJZiB0aGUgdmFsdWUgYXQgYHBhdGhgXHJcbiAqIGhhcyBjaGFuZ2VkLCByZXR1cm4gYSBzaGFsbG93IGNvcHkgb2Ygb2JqIHdpdGggYHZhbHVlYCBzZXQgYXQgYHBhdGhgLlxyXG4gKiBJZiBgdmFsdWVgIGhhcyBub3QgY2hhbmdlZCwgcmV0dXJuIHRoZSBvcmlnaW5hbCBgb2JqYC5cclxuICpcclxuICogRXhpc3Rpbmcgb2JqZWN0cyAvIGFycmF5cyBhbG9uZyBgcGF0aGAgYXJlIGFsc28gc2hhbGxvdyBjb3BpZWQuIFNpYmxpbmdcclxuICogb2JqZWN0cyBhbG9uZyBwYXRoIHJldGFpbiB0aGUgc2FtZSBpbnRlcm5hbCBqcyByZWZlcmVuY2UuIFNpbmNlIG5ld1xyXG4gKiBvYmplY3RzIC8gYXJyYXlzIGFyZSBvbmx5IGNyZWF0ZWQgYWxvbmcgYHBhdGhgLCB3ZSBjYW4gdGVzdCBpZiBhbnl0aGluZ1xyXG4gKiBjaGFuZ2VkIGluIGEgbmVzdGVkIHN0cnVjdHVyZSBieSBjb21wYXJpbmcgdGhlIG9iamVjdCdzIHJlZmVyZW5jZSBpblxyXG4gKiB0aGUgb2xkIGFuZCBuZXcgb2JqZWN0LCBzaW1pbGFyIHRvIGhvdyBydXNzaWFuIGRvbGwgY2FjaGUgaW52YWxpZGF0aW9uXHJcbiAqIHdvcmtzLlxyXG4gKlxyXG4gKiBJbiBlYXJsaWVyIHZlcnNpb25zIG9mIHRoaXMgZnVuY3Rpb24sIHdoaWNoIHVzZWQgY2xvbmVEZWVwLCB0aGVyZSB3ZXJlXHJcbiAqIGlzc3VlcyB3aGVyZWJ5IHNldHRpbmdzIGEgbmVzdGVkIHZhbHVlIHdvdWxkIG11dGF0ZSB0aGUgcGFyZW50XHJcbiAqIGluc3RlYWQgb2YgY3JlYXRpbmcgYSBuZXcgb2JqZWN0LiBgY2xvbmVgIGF2b2lkcyB0aGF0IGJ1ZyBtYWtpbmcgYVxyXG4gKiBzaGFsbG93IGNvcHkgb2YgdGhlIG9iamVjdHMgYWxvbmcgdGhlIHVwZGF0ZSBwYXRoXHJcbiAqIHNvIG5vIG9iamVjdCBpcyBtdXRhdGVkIGluIHBsYWNlLlxyXG4gKlxyXG4gKiBCZWZvcmUgY2hhbmdpbmcgdGhpcyBmdW5jdGlvbiwgcGxlYXNlIHJlYWQgdGhyb3VnaCB0aGUgZm9sbG93aW5nXHJcbiAqIGRpc2N1c3Npb25zLlxyXG4gKlxyXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbGlua3N0YXRlXHJcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2phcmVkcGFsbWVyL2Zvcm1pay9wdWxsLzEyM1xyXG4gKi9cblxuZnVuY3Rpb24gc2V0SW4ob2JqLCBwYXRoLCB2YWx1ZSkge1xuICB2YXIgcmVzID0gY2xvbmUob2JqKTsgLy8gdGhpcyBrZWVwcyBpbmhlcml0YW5jZSB3aGVuIG9iaiBpcyBhIGNsYXNzXG5cbiAgdmFyIHJlc1ZhbCA9IHJlcztcbiAgdmFyIGkgPSAwO1xuICB2YXIgcGF0aEFycmF5ID0gdG9QYXRoKHBhdGgpO1xuXG4gIGZvciAoOyBpIDwgcGF0aEFycmF5Lmxlbmd0aCAtIDE7IGkrKykge1xuICAgIHZhciBjdXJyZW50UGF0aCA9IHBhdGhBcnJheVtpXTtcbiAgICB2YXIgY3VycmVudE9iaiA9IGdldEluKG9iaiwgcGF0aEFycmF5LnNsaWNlKDAsIGkgKyAxKSk7XG5cbiAgICBpZiAoY3VycmVudE9iaiAmJiAoaXNPYmplY3QoY3VycmVudE9iaikgfHwgQXJyYXkuaXNBcnJheShjdXJyZW50T2JqKSkpIHtcbiAgICAgIHJlc1ZhbCA9IHJlc1ZhbFtjdXJyZW50UGF0aF0gPSBjbG9uZShjdXJyZW50T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG5leHRQYXRoID0gcGF0aEFycmF5W2kgKyAxXTtcbiAgICAgIHJlc1ZhbCA9IHJlc1ZhbFtjdXJyZW50UGF0aF0gPSBpc0ludGVnZXIobmV4dFBhdGgpICYmIE51bWJlcihuZXh0UGF0aCkgPj0gMCA/IFtdIDoge307XG4gICAgfVxuICB9IC8vIFJldHVybiBvcmlnaW5hbCBvYmplY3QgaWYgbmV3IHZhbHVlIGlzIHRoZSBzYW1lIGFzIGN1cnJlbnRcblxuXG4gIGlmICgoaSA9PT0gMCA/IG9iaiA6IHJlc1ZhbClbcGF0aEFycmF5W2ldXSA9PT0gdmFsdWUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICBkZWxldGUgcmVzVmFsW3BhdGhBcnJheVtpXV07XG4gIH0gZWxzZSB7XG4gICAgcmVzVmFsW3BhdGhBcnJheVtpXV0gPSB2YWx1ZTtcbiAgfSAvLyBJZiB0aGUgcGF0aCBhcnJheSBoYXMgYSBzaW5nbGUgZWxlbWVudCwgdGhlIGxvb3AgZGlkIG5vdCBydW4uXG4gIC8vIERlbGV0aW5nIG9uIGByZXNWYWxgIGhhZCBubyBlZmZlY3QgaW4gdGhpcyBzY2VuYXJpbywgc28gd2UgZGVsZXRlIG9uIHRoZSByZXN1bHQgaW5zdGVhZC5cblxuXG4gIGlmIChpID09PSAwICYmIHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICBkZWxldGUgcmVzW3BhdGhBcnJheVtpXV07XG4gIH1cblxuICByZXR1cm4gcmVzO1xufVxuLyoqXHJcbiAqIFJlY3Vyc2l2ZWx5IGEgc2V0IHRoZSBzYW1lIHZhbHVlIGZvciBhbGwga2V5cyBhbmQgYXJyYXlzIG5lc3RlZCBvYmplY3QsIGNsb25pbmdcclxuICogQHBhcmFtIG9iamVjdFxyXG4gKiBAcGFyYW0gdmFsdWVcclxuICogQHBhcmFtIHZpc2l0ZWRcclxuICogQHBhcmFtIHJlc3BvbnNlXHJcbiAqL1xuXG5mdW5jdGlvbiBzZXROZXN0ZWRPYmplY3RWYWx1ZXMob2JqZWN0LCB2YWx1ZSwgdmlzaXRlZCwgcmVzcG9uc2UpIHtcbiAgaWYgKHZpc2l0ZWQgPT09IHZvaWQgMCkge1xuICAgIHZpc2l0ZWQgPSBuZXcgV2Vha01hcCgpO1xuICB9XG5cbiAgaWYgKHJlc3BvbnNlID09PSB2b2lkIDApIHtcbiAgICByZXNwb25zZSA9IHt9O1xuICB9XG5cbiAgZm9yICh2YXIgX2kgPSAwLCBfT2JqZWN0JGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBfaSA8IF9PYmplY3Qka2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgayA9IF9PYmplY3Qka2V5c1tfaV07XG4gICAgdmFyIHZhbCA9IG9iamVjdFtrXTtcblxuICAgIGlmIChpc09iamVjdCh2YWwpKSB7XG4gICAgICBpZiAoIXZpc2l0ZWQuZ2V0KHZhbCkpIHtcbiAgICAgICAgdmlzaXRlZC5zZXQodmFsLCB0cnVlKTsgLy8gSW4gb3JkZXIgdG8ga2VlcCBhcnJheSB2YWx1ZXMgY29uc2lzdGVudCBmb3IgYm90aCBkb3QgcGF0aCAgYW5kXG4gICAgICAgIC8vIGJyYWNrZXQgc3ludGF4LCB3ZSBuZWVkIHRvIGNoZWNrIGlmIHRoaXMgaXMgYW4gYXJyYXkgc28gdGhhdFxuICAgICAgICAvLyB0aGlzIHdpbGwgb3V0cHV0ICB7IGZyaWVuZHM6IFt0cnVlXSB9IGFuZCBub3QgeyBmcmllbmRzOiB7IFwiMFwiOiB0cnVlIH0gfVxuXG4gICAgICAgIHJlc3BvbnNlW2tdID0gQXJyYXkuaXNBcnJheSh2YWwpID8gW10gOiB7fTtcbiAgICAgICAgc2V0TmVzdGVkT2JqZWN0VmFsdWVzKHZhbCwgdmFsdWUsIHZpc2l0ZWQsIHJlc3BvbnNlW2tdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzcG9uc2Vba10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2U7XG59XG5cbnZhciBGb3JtaWtDb250ZXh0ID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcbnZhciBGb3JtaWtQcm92aWRlciA9IEZvcm1pa0NvbnRleHQuUHJvdmlkZXI7XG52YXIgRm9ybWlrQ29uc3VtZXIgPSBGb3JtaWtDb250ZXh0LkNvbnN1bWVyO1xuZnVuY3Rpb24gdXNlRm9ybWlrQ29udGV4dCgpIHtcbiAgdmFyIGZvcm1payA9IHVzZUNvbnRleHQoRm9ybWlrQ29udGV4dCk7XG4gICEhIWZvcm1payA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJGb3JtaWsgY29udGV4dCBpcyB1bmRlZmluZWQsIHBsZWFzZSB2ZXJpZnkgeW91IGFyZSBjYWxsaW5nIHVzZUZvcm1pa0NvbnRleHQoKSBhcyBjaGlsZCBvZiBhIDxGb3JtaWs+IGNvbXBvbmVudC5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gZm9ybWlrO1xufVxuXG5mdW5jdGlvbiBmb3JtaWtSZWR1Y2VyKHN0YXRlLCBtc2cpIHtcbiAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgIGNhc2UgJ1NFVF9WQUxVRVMnOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICB2YWx1ZXM6IG1zZy5wYXlsb2FkXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1NFVF9UT1VDSEVEJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgdG91Y2hlZDogbXNnLnBheWxvYWRcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnU0VUX0VSUk9SUyc6XG4gICAgICBpZiAoaXNFcXVhbChzdGF0ZS5lcnJvcnMsIG1zZy5wYXlsb2FkKSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZXJyb3JzOiBtc2cucGF5bG9hZFxuICAgICAgfSk7XG5cbiAgICBjYXNlICdTRVRfU1RBVFVTJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgc3RhdHVzOiBtc2cucGF5bG9hZFxuICAgICAgfSk7XG5cbiAgICBjYXNlICdTRVRfSVNTVUJNSVRUSU5HJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNTdWJtaXR0aW5nOiBtc2cucGF5bG9hZFxuICAgICAgfSk7XG5cbiAgICBjYXNlICdTRVRfSVNWQUxJREFUSU5HJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNWYWxpZGF0aW5nOiBtc2cucGF5bG9hZFxuICAgICAgfSk7XG5cbiAgICBjYXNlICdTRVRfRklFTERfVkFMVUUnOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICB2YWx1ZXM6IHNldEluKHN0YXRlLnZhbHVlcywgbXNnLnBheWxvYWQuZmllbGQsIG1zZy5wYXlsb2FkLnZhbHVlKVxuICAgICAgfSk7XG5cbiAgICBjYXNlICdTRVRfRklFTERfVE9VQ0hFRCc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHRvdWNoZWQ6IHNldEluKHN0YXRlLnRvdWNoZWQsIG1zZy5wYXlsb2FkLmZpZWxkLCBtc2cucGF5bG9hZC52YWx1ZSlcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnU0VUX0ZJRUxEX0VSUk9SJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZXJyb3JzOiBzZXRJbihzdGF0ZS5lcnJvcnMsIG1zZy5wYXlsb2FkLmZpZWxkLCBtc2cucGF5bG9hZC52YWx1ZSlcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUkVTRVRfRk9STSc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7fSwgbXNnLnBheWxvYWQpO1xuXG4gICAgY2FzZSAnU0VUX0ZPUk1JS19TVEFURSc6XG4gICAgICByZXR1cm4gbXNnLnBheWxvYWQoc3RhdGUpO1xuXG4gICAgY2FzZSAnU1VCTUlUX0FUVEVNUFQnOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICB0b3VjaGVkOiBzZXROZXN0ZWRPYmplY3RWYWx1ZXMoc3RhdGUudmFsdWVzLCB0cnVlKSxcbiAgICAgICAgaXNTdWJtaXR0aW5nOiB0cnVlLFxuICAgICAgICBzdWJtaXRDb3VudDogc3RhdGUuc3VibWl0Q291bnQgKyAxXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1NVQk1JVF9GQUlMVVJFJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNTdWJtaXR0aW5nOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICBjYXNlICdTVUJNSVRfU1VDQ0VTUyc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGlzU3VibWl0dGluZzogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSAvLyBJbml0aWFsIGVtcHR5IHN0YXRlcyAvLyBvYmplY3RzXG5cblxudmFyIGVtcHR5RXJyb3JzID0ge307XG52YXIgZW1wdHlUb3VjaGVkID0ge307XG5mdW5jdGlvbiB1c2VGb3JtaWsoX3JlZikge1xuICB2YXIgX3JlZiR2YWxpZGF0ZU9uQ2hhbmdlID0gX3JlZi52YWxpZGF0ZU9uQ2hhbmdlLFxuICAgICAgdmFsaWRhdGVPbkNoYW5nZSA9IF9yZWYkdmFsaWRhdGVPbkNoYW5nZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYkdmFsaWRhdGVPbkNoYW5nZSxcbiAgICAgIF9yZWYkdmFsaWRhdGVPbkJsdXIgPSBfcmVmLnZhbGlkYXRlT25CbHVyLFxuICAgICAgdmFsaWRhdGVPbkJsdXIgPSBfcmVmJHZhbGlkYXRlT25CbHVyID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiR2YWxpZGF0ZU9uQmx1cixcbiAgICAgIF9yZWYkdmFsaWRhdGVPbk1vdW50ID0gX3JlZi52YWxpZGF0ZU9uTW91bnQsXG4gICAgICB2YWxpZGF0ZU9uTW91bnQgPSBfcmVmJHZhbGlkYXRlT25Nb3VudCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJHZhbGlkYXRlT25Nb3VudCxcbiAgICAgIGlzSW5pdGlhbFZhbGlkID0gX3JlZi5pc0luaXRpYWxWYWxpZCxcbiAgICAgIF9yZWYkZW5hYmxlUmVpbml0aWFsaSA9IF9yZWYuZW5hYmxlUmVpbml0aWFsaXplLFxuICAgICAgZW5hYmxlUmVpbml0aWFsaXplID0gX3JlZiRlbmFibGVSZWluaXRpYWxpID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZW5hYmxlUmVpbml0aWFsaSxcbiAgICAgIG9uU3VibWl0ID0gX3JlZi5vblN1Ym1pdCxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJ2YWxpZGF0ZU9uQ2hhbmdlXCIsIFwidmFsaWRhdGVPbkJsdXJcIiwgXCJ2YWxpZGF0ZU9uTW91bnRcIiwgXCJpc0luaXRpYWxWYWxpZFwiLCBcImVuYWJsZVJlaW5pdGlhbGl6ZVwiLCBcIm9uU3VibWl0XCJdKTtcblxuICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgdmFsaWRhdGVPbkNoYW5nZTogdmFsaWRhdGVPbkNoYW5nZSxcbiAgICB2YWxpZGF0ZU9uQmx1cjogdmFsaWRhdGVPbkJsdXIsXG4gICAgdmFsaWRhdGVPbk1vdW50OiB2YWxpZGF0ZU9uTW91bnQsXG4gICAgb25TdWJtaXQ6IG9uU3VibWl0XG4gIH0sIHJlc3QpO1xuXG4gIHZhciBpbml0aWFsVmFsdWVzID0gdXNlUmVmKHByb3BzLmluaXRpYWxWYWx1ZXMpO1xuICB2YXIgaW5pdGlhbEVycm9ycyA9IHVzZVJlZihwcm9wcy5pbml0aWFsRXJyb3JzIHx8IGVtcHR5RXJyb3JzKTtcbiAgdmFyIGluaXRpYWxUb3VjaGVkID0gdXNlUmVmKHByb3BzLmluaXRpYWxUb3VjaGVkIHx8IGVtcHR5VG91Y2hlZCk7XG4gIHZhciBpbml0aWFsU3RhdHVzID0gdXNlUmVmKHByb3BzLmluaXRpYWxTdGF0dXMpO1xuICB2YXIgaXNNb3VudGVkID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIGZpZWxkUmVnaXN0cnkgPSB1c2VSZWYoe30pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICEodHlwZW9mIGlzSW5pdGlhbFZhbGlkID09PSAndW5kZWZpbmVkJykgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdpc0luaXRpYWxWYWxpZCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gZnV0dXJlIHZlcnNpb25zIG9mIEZvcm1pay4gUGxlYXNlIHVzZSBpbml0aWFsRXJyb3JzIG9yIHZhbGlkYXRlT25Nb3VudCBpbnN0ZWFkLicpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpc01vdW50ZWQuY3VycmVudCA9IHRydWU7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlzTW91bnRlZC5jdXJyZW50ID0gZmFsc2U7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHZhciBfUmVhY3QkdXNlUmVkdWNlciA9IHVzZVJlZHVjZXIoZm9ybWlrUmVkdWNlciwge1xuICAgIHZhbHVlczogcHJvcHMuaW5pdGlhbFZhbHVlcyxcbiAgICBlcnJvcnM6IHByb3BzLmluaXRpYWxFcnJvcnMgfHwgZW1wdHlFcnJvcnMsXG4gICAgdG91Y2hlZDogcHJvcHMuaW5pdGlhbFRvdWNoZWQgfHwgZW1wdHlUb3VjaGVkLFxuICAgIHN0YXR1czogcHJvcHMuaW5pdGlhbFN0YXR1cyxcbiAgICBpc1N1Ym1pdHRpbmc6IGZhbHNlLFxuICAgIGlzVmFsaWRhdGluZzogZmFsc2UsXG4gICAgc3VibWl0Q291bnQ6IDBcbiAgfSksXG4gICAgICBzdGF0ZSA9IF9SZWFjdCR1c2VSZWR1Y2VyWzBdLFxuICAgICAgZGlzcGF0Y2ggPSBfUmVhY3QkdXNlUmVkdWNlclsxXTtcblxuICB2YXIgcnVuVmFsaWRhdGVIYW5kbGVyID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlcywgZmllbGQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIG1heWJlUHJvbWlzZWRFcnJvcnMgPSBwcm9wcy52YWxpZGF0ZSh2YWx1ZXMsIGZpZWxkKTtcblxuICAgICAgaWYgKG1heWJlUHJvbWlzZWRFcnJvcnMgPT0gbnVsbCkge1xuICAgICAgICAvLyB1c2UgbG9vc2UgbnVsbCBjaGVjayBoZXJlIG9uIHB1cnBvc2VcbiAgICAgICAgcmVzb2x2ZShlbXB0eUVycm9ycyk7XG4gICAgICB9IGVsc2UgaWYgKGlzUHJvbWlzZShtYXliZVByb21pc2VkRXJyb3JzKSkge1xuICAgICAgICBtYXliZVByb21pc2VkRXJyb3JzLnRoZW4oZnVuY3Rpb24gKGVycm9ycykge1xuICAgICAgICAgIHJlc29sdmUoZXJyb3JzIHx8IGVtcHR5RXJyb3JzKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGFjdHVhbEV4Y2VwdGlvbikge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJXYXJuaW5nOiBBbiB1bmhhbmRsZWQgZXJyb3Igd2FzIGNhdWdodCBkdXJpbmcgdmFsaWRhdGlvbiBpbiA8Rm9ybWlrIHZhbGlkYXRlIC8+XCIsIGFjdHVhbEV4Y2VwdGlvbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVqZWN0KGFjdHVhbEV4Y2VwdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShtYXliZVByb21pc2VkRXJyb3JzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW3Byb3BzLnZhbGlkYXRlXSk7XG4gIC8qKlxyXG4gICAqIFJ1biB2YWxpZGF0aW9uIGFnYWluc3QgYSBZdXAgc2NoZW1hIGFuZCBvcHRpb25hbGx5IHJ1biBhIGZ1bmN0aW9uIGlmIHN1Y2Nlc3NmdWxcclxuICAgKi9cblxuICB2YXIgcnVuVmFsaWRhdGlvblNjaGVtYSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZXMsIGZpZWxkKSB7XG4gICAgdmFyIHZhbGlkYXRpb25TY2hlbWEgPSBwcm9wcy52YWxpZGF0aW9uU2NoZW1hO1xuICAgIHZhciBzY2hlbWEgPSBpc0Z1bmN0aW9uKHZhbGlkYXRpb25TY2hlbWEpID8gdmFsaWRhdGlvblNjaGVtYShmaWVsZCkgOiB2YWxpZGF0aW9uU2NoZW1hO1xuICAgIHZhciBwcm9taXNlID0gZmllbGQgJiYgc2NoZW1hLnZhbGlkYXRlQXQgPyBzY2hlbWEudmFsaWRhdGVBdChmaWVsZCwgdmFsdWVzKSA6IHZhbGlkYXRlWXVwU2NoZW1hKHZhbHVlcywgc2NoZW1hKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVzb2x2ZShlbXB0eUVycm9ycyk7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIC8vIFl1cCB3aWxsIHRocm93IGEgdmFsaWRhdGlvbiBlcnJvciBpZiB2YWxpZGF0aW9uIGZhaWxzLiBXZSBjYXRjaCB0aG9zZSBhbmRcbiAgICAgICAgLy8gcmVzb2x2ZSB0aGVtIGludG8gRm9ybWlrIGVycm9ycy4gV2UgY2FuIHNuaWZmIGlmIHNvbWV0aGluZyBpcyBhIFl1cCBlcnJvclxuICAgICAgICAvLyBieSBjaGVja2luZyBlcnJvci5uYW1lLlxuICAgICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlbnNlL3l1cCN2YWxpZGF0aW9uZXJyb3JlcnJvcnMtc3RyaW5nLS1hcnJheXN0cmluZy12YWx1ZS1hbnktcGF0aC1zdHJpbmdcbiAgICAgICAgaWYgKGVyci5uYW1lID09PSAnVmFsaWRhdGlvbkVycm9yJykge1xuICAgICAgICAgIHJlc29sdmUoeXVwVG9Gb3JtRXJyb3JzKGVycikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFdlIHRocm93IGFueSBvdGhlciBlcnJvcnNcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiV2FybmluZzogQW4gdW5oYW5kbGVkIGVycm9yIHdhcyBjYXVnaHQgZHVyaW5nIHZhbGlkYXRpb24gaW4gPEZvcm1payB2YWxpZGF0aW9uU2NoZW1hIC8+XCIsIGVycik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LCBbcHJvcHMudmFsaWRhdGlvblNjaGVtYV0pO1xuICB2YXIgcnVuU2luZ2xlRmllbGRMZXZlbFZhbGlkYXRpb24gPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZShmaWVsZFJlZ2lzdHJ5LmN1cnJlbnRbZmllbGRdLnZhbGlkYXRlKHZhbHVlKSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgdmFyIHJ1bkZpZWxkTGV2ZWxWYWxpZGF0aW9ucyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICB2YXIgZmllbGRLZXlzV2l0aFZhbGlkYXRpb24gPSBPYmplY3Qua2V5cyhmaWVsZFJlZ2lzdHJ5LmN1cnJlbnQpLmZpbHRlcihmdW5jdGlvbiAoZikge1xuICAgICAgcmV0dXJuIGlzRnVuY3Rpb24oZmllbGRSZWdpc3RyeS5jdXJyZW50W2ZdLnZhbGlkYXRlKTtcbiAgICB9KTsgLy8gQ29uc3RydWN0IGFuIGFycmF5IHdpdGggYWxsIG9mIHRoZSBmaWVsZCB2YWxpZGF0aW9uIGZ1bmN0aW9uc1xuXG4gICAgdmFyIGZpZWxkVmFsaWRhdGlvbnMgPSBmaWVsZEtleXNXaXRoVmFsaWRhdGlvbi5sZW5ndGggPiAwID8gZmllbGRLZXlzV2l0aFZhbGlkYXRpb24ubWFwKGZ1bmN0aW9uIChmKSB7XG4gICAgICByZXR1cm4gcnVuU2luZ2xlRmllbGRMZXZlbFZhbGlkYXRpb24oZiwgZ2V0SW4odmFsdWVzLCBmKSk7XG4gICAgfSkgOiBbUHJvbWlzZS5yZXNvbHZlKCdET19OT1RfREVMRVRFX1lPVV9XSUxMX0JFX0ZJUkVEJyldOyAvLyB1c2Ugc3BlY2lhbCBjYXNlIDspXG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoZmllbGRWYWxpZGF0aW9ucykudGhlbihmdW5jdGlvbiAoZmllbGRFcnJvcnNMaXN0KSB7XG4gICAgICByZXR1cm4gZmllbGRFcnJvcnNMaXN0LnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VyciwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGN1cnIgPT09ICdET19OT1RfREVMRVRFX1lPVV9XSUxMX0JFX0ZJUkVEJykge1xuICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnIpIHtcbiAgICAgICAgICBwcmV2ID0gc2V0SW4ocHJldiwgZmllbGRLZXlzV2l0aFZhbGlkYXRpb25baW5kZXhdLCBjdXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgfSwge30pO1xuICAgIH0pO1xuICB9LCBbcnVuU2luZ2xlRmllbGRMZXZlbFZhbGlkYXRpb25dKTsgLy8gUnVuIGFsbCB2YWxpZGF0aW9ucyBhbmQgcmV0dXJuIHRoZSByZXN1bHRcblxuICB2YXIgcnVuQWxsVmFsaWRhdGlvbnMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtydW5GaWVsZExldmVsVmFsaWRhdGlvbnModmFsdWVzKSwgcHJvcHMudmFsaWRhdGlvblNjaGVtYSA/IHJ1blZhbGlkYXRpb25TY2hlbWEodmFsdWVzKSA6IHt9LCBwcm9wcy52YWxpZGF0ZSA/IHJ1blZhbGlkYXRlSGFuZGxlcih2YWx1ZXMpIDoge31dKS50aGVuKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIGZpZWxkRXJyb3JzID0gX3JlZjJbMF0sXG4gICAgICAgICAgc2NoZW1hRXJyb3JzID0gX3JlZjJbMV0sXG4gICAgICAgICAgdmFsaWRhdGVFcnJvcnMgPSBfcmVmMlsyXTtcbiAgICAgIHZhciBjb21iaW5lZEVycm9ycyA9IGRlZXBtZXJnZS5hbGwoW2ZpZWxkRXJyb3JzLCBzY2hlbWFFcnJvcnMsIHZhbGlkYXRlRXJyb3JzXSwge1xuICAgICAgICBhcnJheU1lcmdlOiBhcnJheU1lcmdlXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjb21iaW5lZEVycm9ycztcbiAgICB9KTtcbiAgfSwgW3Byb3BzLnZhbGlkYXRlLCBwcm9wcy52YWxpZGF0aW9uU2NoZW1hLCBydW5GaWVsZExldmVsVmFsaWRhdGlvbnMsIHJ1blZhbGlkYXRlSGFuZGxlciwgcnVuVmFsaWRhdGlvblNjaGVtYV0pOyAvLyBSdW4gdmFsaWRhdGlvbnMgYW5kIGRpc3BhdGNoaW5nIHRoZSByZXN1bHQgYXMgbG93LXByaW9yaXR5IHZpYSByQUYuXG4gIC8vXG4gIC8vIFRoZSB0aGlua2luZyBpcyB0aGF0IHZhbGlkYXRpb24gYXMgYSByZXN1bHQgb2Ygb25DaGFuZ2UgYW5kIG9uQmx1clxuICAvLyBzaG91bGQgbmV2ZXIgYmxvY2sgdXNlciBpbnB1dC4gTm90ZTogVGhpcyBtZXRob2Qgc2hvdWxkIG5ldmVyIGJlIGNhbGxlZFxuICAvLyBkdXJpbmcgdGhlIHN1Ym1pc3Npb24gcGhhc2UgYmVjYXVzZSB2YWxpZGF0aW9uIHByaW9yIHRvIHN1Ym1pc3Npb25cbiAgLy8gaXMgYWN0YXVsbHkgaGlnaC1wcmlvcml0eSBzaW5jZSB3ZSBhYnNvbHV0ZWx5IG5lZWQgdG8gZ3VhcmFudGVlIHRoZVxuICAvLyBmb3JtIGlzIHZhbGlkIGJlZm9yZSBleGVjdXRpbmcgcHJvcHMub25TdWJtaXQuXG5cbiAgdmFyIHZhbGlkYXRlRm9ybVdpdGhMb3dQcmlvcml0eSA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlcykge1xuICAgIGlmICh2YWx1ZXMgPT09IHZvaWQgMCkge1xuICAgICAgdmFsdWVzID0gc3RhdGUudmFsdWVzO1xuICAgIH1cblxuICAgIHJldHVybiB1bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHkoTG93UHJpb3JpdHksIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBydW5BbGxWYWxpZGF0aW9ucyh2YWx1ZXMpLnRoZW4oZnVuY3Rpb24gKGNvbWJpbmVkRXJyb3JzKSB7XG4gICAgICAgIGlmICghIWlzTW91bnRlZC5jdXJyZW50KSB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogJ1NFVF9FUlJPUlMnLFxuICAgICAgICAgICAgcGF5bG9hZDogY29tYmluZWRFcnJvcnNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21iaW5lZEVycm9ycztcbiAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGFjdHVhbEV4Y2VwdGlvbikge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIFVzZXJzIGNhbiB0aHJvdyBkdXJpbmcgdmFsaWRhdGUsIGhvd2V2ZXIgdGhleSBoYXZlIG5vIHdheSBvZiBoYW5kbGluZyB0aGVpciBlcnJvciBvbiB0b3VjaCAvIGJsdXIuIEluIGxvdyBwcmlvcml0eSwgd2UgbmVlZCB0byBoYW5kbGUgaXRcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJXYXJuaW5nOiBBbiB1bmhhbmRsZWQgZXJyb3Igd2FzIGNhdWdodCBkdXJpbmcgbG93IHByaW9yaXR5IHZhbGlkYXRpb24gaW4gPEZvcm1payB2YWxpZGF0ZSAvPlwiLCBhY3R1YWxFeGNlcHRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7IC8vIFJ1biBhbGwgdmFsaWRhdGlvbnMgbWV0aG9kcyBhbmQgdXBkYXRlIHN0YXRlIGFjY29yZGluZ2x5XG5cbiAgdmFyIHZhbGlkYXRlRm9ybVdpdGhIaWdoUHJpb3JpdHkgPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICBpZiAodmFsdWVzID09PSB2b2lkIDApIHtcbiAgICAgIHZhbHVlcyA9IHN0YXRlLnZhbHVlcztcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0VUX0lTVkFMSURBVElORycsXG4gICAgICBwYXlsb2FkOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIHJ1bkFsbFZhbGlkYXRpb25zKHZhbHVlcykudGhlbihmdW5jdGlvbiAoY29tYmluZWRFcnJvcnMpIHtcbiAgICAgIGlmICghIWlzTW91bnRlZC5jdXJyZW50KSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnU0VUX0lTVkFMSURBVElORycsXG4gICAgICAgICAgcGF5bG9hZDogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFpc0VxdWFsKHN0YXRlLmVycm9ycywgY29tYmluZWRFcnJvcnMpKSB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogJ1NFVF9FUlJPUlMnLFxuICAgICAgICAgICAgcGF5bG9hZDogY29tYmluZWRFcnJvcnNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29tYmluZWRFcnJvcnM7XG4gICAgfSk7XG4gIH0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICh2YWxpZGF0ZU9uTW91bnQgJiYgaXNNb3VudGVkLmN1cnJlbnQgPT09IHRydWUpIHtcbiAgICAgIHZhbGlkYXRlRm9ybVdpdGhMb3dQcmlvcml0eShpbml0aWFsVmFsdWVzLmN1cnJlbnQpO1xuICAgIH1cbiAgfSwgW3ZhbGlkYXRlT25Nb3VudCwgdmFsaWRhdGVGb3JtV2l0aExvd1ByaW9yaXR5XSk7XG4gIHZhciByZXNldEZvcm0gPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmV4dFN0YXRlKSB7XG4gICAgdmFyIHZhbHVlcyA9IG5leHRTdGF0ZSAmJiBuZXh0U3RhdGUudmFsdWVzID8gbmV4dFN0YXRlLnZhbHVlcyA6IGluaXRpYWxWYWx1ZXMuY3VycmVudDtcbiAgICB2YXIgZXJyb3JzID0gbmV4dFN0YXRlICYmIG5leHRTdGF0ZS5lcnJvcnMgPyBuZXh0U3RhdGUuZXJyb3JzIDogaW5pdGlhbEVycm9ycy5jdXJyZW50ID8gaW5pdGlhbEVycm9ycy5jdXJyZW50IDogcHJvcHMuaW5pdGlhbEVycm9ycyB8fCB7fTtcbiAgICB2YXIgdG91Y2hlZCA9IG5leHRTdGF0ZSAmJiBuZXh0U3RhdGUudG91Y2hlZCA/IG5leHRTdGF0ZS50b3VjaGVkIDogaW5pdGlhbFRvdWNoZWQuY3VycmVudCA/IGluaXRpYWxUb3VjaGVkLmN1cnJlbnQgOiBwcm9wcy5pbml0aWFsVG91Y2hlZCB8fCB7fTtcbiAgICB2YXIgc3RhdHVzID0gbmV4dFN0YXRlICYmIG5leHRTdGF0ZS5zdGF0dXMgPyBuZXh0U3RhdGUuc3RhdHVzIDogaW5pdGlhbFN0YXR1cy5jdXJyZW50ID8gaW5pdGlhbFN0YXR1cy5jdXJyZW50IDogcHJvcHMuaW5pdGlhbFN0YXR1cztcbiAgICBpbml0aWFsVmFsdWVzLmN1cnJlbnQgPSB2YWx1ZXM7XG4gICAgaW5pdGlhbEVycm9ycy5jdXJyZW50ID0gZXJyb3JzO1xuICAgIGluaXRpYWxUb3VjaGVkLmN1cnJlbnQgPSB0b3VjaGVkO1xuICAgIGluaXRpYWxTdGF0dXMuY3VycmVudCA9IHN0YXR1cztcblxuICAgIHZhciBkaXNwYXRjaEZuID0gZnVuY3Rpb24gZGlzcGF0Y2hGbigpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ1JFU0VUX0ZPUk0nLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgaXNTdWJtaXR0aW5nOiAhIW5leHRTdGF0ZSAmJiAhIW5leHRTdGF0ZS5pc1N1Ym1pdHRpbmcsXG4gICAgICAgICAgZXJyb3JzOiBlcnJvcnMsXG4gICAgICAgICAgdG91Y2hlZDogdG91Y2hlZCxcbiAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgICAgICBpc1ZhbGlkYXRpbmc6ICEhbmV4dFN0YXRlICYmICEhbmV4dFN0YXRlLmlzVmFsaWRhdGluZyxcbiAgICAgICAgICBzdWJtaXRDb3VudDogISFuZXh0U3RhdGUgJiYgISFuZXh0U3RhdGUuc3VibWl0Q291bnQgJiYgdHlwZW9mIG5leHRTdGF0ZS5zdWJtaXRDb3VudCA9PT0gJ251bWJlcicgPyBuZXh0U3RhdGUuc3VibWl0Q291bnQgOiAwXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAocHJvcHMub25SZXNldCkge1xuICAgICAgdmFyIG1heWJlUHJvbWlzZWRPblJlc2V0ID0gcHJvcHMub25SZXNldChzdGF0ZS52YWx1ZXMsIGltcGVyYXRpdmVNZXRob2RzKTtcblxuICAgICAgaWYgKGlzUHJvbWlzZShtYXliZVByb21pc2VkT25SZXNldCkpIHtcbiAgICAgICAgbWF5YmVQcm9taXNlZE9uUmVzZXQudGhlbihkaXNwYXRjaEZuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BhdGNoRm4oKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2hGbigpO1xuICAgIH1cbiAgfSwgW3Byb3BzLmluaXRpYWxFcnJvcnMsIHByb3BzLmluaXRpYWxTdGF0dXMsIHByb3BzLmluaXRpYWxUb3VjaGVkXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFlbmFibGVSZWluaXRpYWxpemUpIHtcbiAgICAgIGluaXRpYWxWYWx1ZXMuY3VycmVudCA9IHByb3BzLmluaXRpYWxWYWx1ZXM7XG4gICAgfVxuICB9LCBbZW5hYmxlUmVpbml0aWFsaXplLCBwcm9wcy5pbml0aWFsVmFsdWVzXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGVuYWJsZVJlaW5pdGlhbGl6ZSAmJiBpc01vdW50ZWQuY3VycmVudCA9PT0gdHJ1ZSAmJiAhaXNFcXVhbChpbml0aWFsVmFsdWVzLmN1cnJlbnQsIHByb3BzLmluaXRpYWxWYWx1ZXMpKSB7XG4gICAgICBpbml0aWFsVmFsdWVzLmN1cnJlbnQgPSBwcm9wcy5pbml0aWFsVmFsdWVzO1xuICAgICAgcmVzZXRGb3JtKCk7XG4gICAgfVxuICB9LCBbZW5hYmxlUmVpbml0aWFsaXplLCBwcm9wcy5pbml0aWFsVmFsdWVzLCByZXNldEZvcm1dKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZW5hYmxlUmVpbml0aWFsaXplICYmIGlzTW91bnRlZC5jdXJyZW50ID09PSB0cnVlICYmICFpc0VxdWFsKGluaXRpYWxFcnJvcnMuY3VycmVudCwgcHJvcHMuaW5pdGlhbEVycm9ycykpIHtcbiAgICAgIGluaXRpYWxFcnJvcnMuY3VycmVudCA9IHByb3BzLmluaXRpYWxFcnJvcnMgfHwgZW1wdHlFcnJvcnM7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdTRVRfRVJST1JTJyxcbiAgICAgICAgcGF5bG9hZDogcHJvcHMuaW5pdGlhbEVycm9ycyB8fCBlbXB0eUVycm9yc1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbZW5hYmxlUmVpbml0aWFsaXplLCBwcm9wcy5pbml0aWFsRXJyb3JzXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGVuYWJsZVJlaW5pdGlhbGl6ZSAmJiBpc01vdW50ZWQuY3VycmVudCA9PT0gdHJ1ZSAmJiAhaXNFcXVhbChpbml0aWFsVG91Y2hlZC5jdXJyZW50LCBwcm9wcy5pbml0aWFsVG91Y2hlZCkpIHtcbiAgICAgIGluaXRpYWxUb3VjaGVkLmN1cnJlbnQgPSBwcm9wcy5pbml0aWFsVG91Y2hlZCB8fCBlbXB0eVRvdWNoZWQ7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdTRVRfVE9VQ0hFRCcsXG4gICAgICAgIHBheWxvYWQ6IHByb3BzLmluaXRpYWxUb3VjaGVkIHx8IGVtcHR5VG91Y2hlZFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbZW5hYmxlUmVpbml0aWFsaXplLCBwcm9wcy5pbml0aWFsVG91Y2hlZF0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChlbmFibGVSZWluaXRpYWxpemUgJiYgaXNNb3VudGVkLmN1cnJlbnQgPT09IHRydWUgJiYgIWlzRXF1YWwoaW5pdGlhbFN0YXR1cy5jdXJyZW50LCBwcm9wcy5pbml0aWFsU3RhdHVzKSkge1xuICAgICAgaW5pdGlhbFN0YXR1cy5jdXJyZW50ID0gcHJvcHMuaW5pdGlhbFN0YXR1cztcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ1NFVF9TVEFUVVMnLFxuICAgICAgICBwYXlsb2FkOiBwcm9wcy5pbml0aWFsU3RhdHVzXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtlbmFibGVSZWluaXRpYWxpemUsIHByb3BzLmluaXRpYWxTdGF0dXMsIHByb3BzLmluaXRpYWxUb3VjaGVkXSk7XG4gIHZhciB2YWxpZGF0ZUZpZWxkID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAobmFtZSkge1xuICAgIC8vIFRoaXMgd2lsbCBlZmZpY2llbnRseSB2YWxpZGF0ZSBhIHNpbmdsZSBmaWVsZCBieSBhdm9pZGluZyBzdGF0ZVxuICAgIC8vIGNoYW5nZXMgaWYgdGhlIHZhbGlkYXRpb24gZnVuY3Rpb24gaXMgc3luY2hyb25vdXMuIEl0J3MgZGlmZmVyZW50IGZyb21cbiAgICAvLyB3aGF0IGlzIGNhbGxlZCB3aGVuIHVzaW5nIHZhbGlkYXRlRm9ybS5cbiAgICBpZiAoaXNGdW5jdGlvbihmaWVsZFJlZ2lzdHJ5LmN1cnJlbnRbbmFtZV0udmFsaWRhdGUpKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXRJbihzdGF0ZS52YWx1ZXMsIG5hbWUpO1xuICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IGZpZWxkUmVnaXN0cnkuY3VycmVudFtuYW1lXS52YWxpZGF0ZSh2YWx1ZSk7XG5cbiAgICAgIGlmIChpc1Byb21pc2UobWF5YmVQcm9taXNlKSkge1xuICAgICAgICAvLyBPbmx5IGZsaXAgaXNWYWxpZGF0aW5nIGlmIHRoZSBmdW5jdGlvbiBpcyBhc3luYy5cbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdTRVRfSVNWQUxJREFUSU5HJyxcbiAgICAgICAgICBwYXlsb2FkOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWF5YmVQcm9taXNlLnRoZW4oZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiAnU0VUX0ZJRUxEX0VSUk9SJyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgZmllbGQ6IG5hbWUsXG4gICAgICAgICAgICAgIHZhbHVlOiBlcnJvclxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfSVNWQUxJREFUSU5HJyxcbiAgICAgICAgICAgIHBheWxvYWQ6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdTRVRfRklFTERfRVJST1InLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIGZpZWxkOiBuYW1lLFxuICAgICAgICAgICAgdmFsdWU6IG1heWJlUHJvbWlzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobWF5YmVQcm9taXNlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHByb3BzLnZhbGlkYXRpb25TY2hlbWEpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ1NFVF9JU1ZBTElEQVRJTkcnLFxuICAgICAgICBwYXlsb2FkOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBydW5WYWxpZGF0aW9uU2NoZW1hKHN0YXRlLnZhbHVlcywgbmFtZSkudGhlbihmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geDtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnU0VUX0ZJRUxEX0VSUk9SJyxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBmaWVsZDogbmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiBlcnJvcltuYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnU0VUX0lTVkFMSURBVElORycsXG4gICAgICAgICAgcGF5bG9hZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0pO1xuICB2YXIgcmVnaXN0ZXJGaWVsZCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChuYW1lLCBfcmVmMykge1xuICAgIHZhciB2YWxpZGF0ZSA9IF9yZWYzLnZhbGlkYXRlO1xuICAgIGZpZWxkUmVnaXN0cnkuY3VycmVudFtuYW1lXSA9IHtcbiAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZVxuICAgIH07XG4gIH0sIFtdKTtcbiAgdmFyIHVucmVnaXN0ZXJGaWVsZCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgZGVsZXRlIGZpZWxkUmVnaXN0cnkuY3VycmVudFtuYW1lXTtcbiAgfSwgW10pO1xuICB2YXIgc2V0VG91Y2hlZCA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKHRvdWNoZWQsIHNob3VsZFZhbGlkYXRlKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1NFVF9UT1VDSEVEJyxcbiAgICAgIHBheWxvYWQ6IHRvdWNoZWRcbiAgICB9KTtcbiAgICB2YXIgd2lsbFZhbGlkYXRlID0gc2hvdWxkVmFsaWRhdGUgPT09IHVuZGVmaW5lZCA/IHZhbGlkYXRlT25CbHVyIDogc2hvdWxkVmFsaWRhdGU7XG4gICAgcmV0dXJuIHdpbGxWYWxpZGF0ZSA/IHZhbGlkYXRlRm9ybVdpdGhMb3dQcmlvcml0eShzdGF0ZS52YWx1ZXMpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0pO1xuICB2YXIgc2V0RXJyb3JzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGVycm9ycykge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdTRVRfRVJST1JTJyxcbiAgICAgIHBheWxvYWQ6IGVycm9yc1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIHZhciBzZXRWYWx1ZXMgPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZXMsIHNob3VsZFZhbGlkYXRlKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1NFVF9WQUxVRVMnLFxuICAgICAgcGF5bG9hZDogdmFsdWVzXG4gICAgfSk7XG4gICAgdmFyIHdpbGxWYWxpZGF0ZSA9IHNob3VsZFZhbGlkYXRlID09PSB1bmRlZmluZWQgPyB2YWxpZGF0ZU9uQ2hhbmdlIDogc2hvdWxkVmFsaWRhdGU7XG4gICAgcmV0dXJuIHdpbGxWYWxpZGF0ZSA/IHZhbGlkYXRlRm9ybVdpdGhMb3dQcmlvcml0eSh2YWx1ZXMpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0pO1xuICB2YXIgc2V0RmllbGRFcnJvciA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChmaWVsZCwgdmFsdWUpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0VUX0ZJRUxEX0VSUk9SJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuICB2YXIgc2V0RmllbGRWYWx1ZSA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKGZpZWxkLCB2YWx1ZSwgc2hvdWxkVmFsaWRhdGUpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0VUX0ZJRUxEX1ZBTFVFJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgd2lsbFZhbGlkYXRlID0gc2hvdWxkVmFsaWRhdGUgPT09IHVuZGVmaW5lZCA/IHZhbGlkYXRlT25DaGFuZ2UgOiBzaG91bGRWYWxpZGF0ZTtcbiAgICByZXR1cm4gd2lsbFZhbGlkYXRlID8gdmFsaWRhdGVGb3JtV2l0aExvd1ByaW9yaXR5KHNldEluKHN0YXRlLnZhbHVlcywgZmllbGQsIHZhbHVlKSkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSk7XG4gIHZhciBleGVjdXRlQ2hhbmdlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50T3JUZXh0VmFsdWUsIG1heWJlUGF0aCkge1xuICAgIC8vIEJ5IGRlZmF1bHQsIGFzc3VtZSB0aGF0IHRoZSBmaXJzdCBhcmd1bWVudCBpcyBhIHN0cmluZy4gVGhpcyBhbGxvd3MgdXMgdG8gdXNlXG4gICAgLy8gaGFuZGxlQ2hhbmdlIHdpdGggUmVhY3QgTmF0aXZlIGFuZCBSZWFjdCBOYXRpdmUgV2ViJ3Mgb25DaGFuZ2VUZXh0IHByb3Agd2hpY2hcbiAgICAvLyBwcm92aWRlcyBqdXN0IHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQuXG4gICAgdmFyIGZpZWxkID0gbWF5YmVQYXRoO1xuICAgIHZhciB2YWwgPSBldmVudE9yVGV4dFZhbHVlO1xuICAgIHZhciBwYXJzZWQ7IC8vIElmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBub3QgYSBzdHJpbmcgdGhvdWdoLCBpdCBoYXMgdG8gYmUgYSBzeW50aGV0aWMgUmVhY3QgRXZlbnQgKG9yIGEgZmFrZSBvbmUpLFxuICAgIC8vIHNvIHdlIGhhbmRsZSBsaWtlIHdlIHdvdWxkIGEgbm9ybWFsIEhUTUwgY2hhbmdlIGV2ZW50LlxuXG4gICAgaWYgKCFpc1N0cmluZyhldmVudE9yVGV4dFZhbHVlKSkge1xuICAgICAgLy8gSWYgd2UgY2FuLCBwZXJzaXN0IHRoZSBldmVudFxuICAgICAgLy8gQHNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXZlbnRzLmh0bWwjZXZlbnQtcG9vbGluZ1xuICAgICAgaWYgKGV2ZW50T3JUZXh0VmFsdWUucGVyc2lzdCkge1xuICAgICAgICBldmVudE9yVGV4dFZhbHVlLnBlcnNpc3QoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRhcmdldCA9IGV2ZW50T3JUZXh0VmFsdWUudGFyZ2V0ID8gZXZlbnRPclRleHRWYWx1ZS50YXJnZXQgOiBldmVudE9yVGV4dFZhbHVlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICB2YXIgdHlwZSA9IHRhcmdldC50eXBlLFxuICAgICAgICAgIG5hbWUgPSB0YXJnZXQubmFtZSxcbiAgICAgICAgICBpZCA9IHRhcmdldC5pZCxcbiAgICAgICAgICB2YWx1ZSA9IHRhcmdldC52YWx1ZSxcbiAgICAgICAgICBjaGVja2VkID0gdGFyZ2V0LmNoZWNrZWQsXG4gICAgICAgICAgb3V0ZXJIVE1MID0gdGFyZ2V0Lm91dGVySFRNTCxcbiAgICAgICAgICBvcHRpb25zID0gdGFyZ2V0Lm9wdGlvbnMsXG4gICAgICAgICAgbXVsdGlwbGUgPSB0YXJnZXQubXVsdGlwbGU7XG4gICAgICBmaWVsZCA9IG1heWJlUGF0aCA/IG1heWJlUGF0aCA6IG5hbWUgPyBuYW1lIDogaWQ7XG5cbiAgICAgIGlmICghZmllbGQgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIHdhcm5BYm91dE1pc3NpbmdJZGVudGlmaWVyKHtcbiAgICAgICAgICBodG1sQ29udGVudDogb3V0ZXJIVE1MLFxuICAgICAgICAgIGRvY3VtZW50YXRpb25BbmNob3JMaW5rOiAnaGFuZGxlY2hhbmdlLWUtcmVhY3RjaGFuZ2VldmVudGFueS0tdm9pZCcsXG4gICAgICAgICAgaGFuZGxlck5hbWU6ICdoYW5kbGVDaGFuZ2UnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YWwgPSAvbnVtYmVyfHJhbmdlLy50ZXN0KHR5cGUpID8gKHBhcnNlZCA9IHBhcnNlRmxvYXQodmFsdWUpLCBpc05hTihwYXJzZWQpID8gJycgOiBwYXJzZWQpIDogL2NoZWNrYm94Ly50ZXN0KHR5cGUpIC8vIGNoZWNrYm94ZXNcbiAgICAgID8gZ2V0VmFsdWVGb3JDaGVja2JveChnZXRJbihzdGF0ZS52YWx1ZXMsIGZpZWxkKSwgY2hlY2tlZCwgdmFsdWUpIDogISFtdWx0aXBsZSAvLyA8c2VsZWN0IG11bHRpcGxlPlxuICAgICAgPyBnZXRTZWxlY3RlZFZhbHVlcyhvcHRpb25zKSA6IHZhbHVlO1xuICAgIH1cblxuICAgIGlmIChmaWVsZCkge1xuICAgICAgLy8gU2V0IGZvcm0gZmllbGRzIGJ5IG5hbWVcbiAgICAgIHNldEZpZWxkVmFsdWUoZmllbGQsIHZhbCk7XG4gICAgfVxuICB9LCBbc2V0RmllbGRWYWx1ZSwgc3RhdGUudmFsdWVzXSk7XG4gIHZhciBoYW5kbGVDaGFuZ2UgPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uIChldmVudE9yUGF0aCkge1xuICAgIGlmIChpc1N0cmluZyhldmVudE9yUGF0aCkpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGV4ZWN1dGVDaGFuZ2UoZXZlbnQsIGV2ZW50T3JQYXRoKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4ZWN1dGVDaGFuZ2UoZXZlbnRPclBhdGgpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBzZXRGaWVsZFRvdWNoZWQgPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uIChmaWVsZCwgdG91Y2hlZCwgc2hvdWxkVmFsaWRhdGUpIHtcbiAgICBpZiAodG91Y2hlZCA9PT0gdm9pZCAwKSB7XG4gICAgICB0b3VjaGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0VUX0ZJRUxEX1RPVUNIRUQnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBmaWVsZDogZmllbGQsXG4gICAgICAgIHZhbHVlOiB0b3VjaGVkXG4gICAgICB9XG4gICAgfSk7XG4gICAgdmFyIHdpbGxWYWxpZGF0ZSA9IHNob3VsZFZhbGlkYXRlID09PSB1bmRlZmluZWQgPyB2YWxpZGF0ZU9uQmx1ciA6IHNob3VsZFZhbGlkYXRlO1xuICAgIHJldHVybiB3aWxsVmFsaWRhdGUgPyB2YWxpZGF0ZUZvcm1XaXRoTG93UHJpb3JpdHkoc3RhdGUudmFsdWVzKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICB9KTtcbiAgdmFyIGV4ZWN1dGVCbHVyID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGUsIHBhdGgpIHtcbiAgICBpZiAoZS5wZXJzaXN0KSB7XG4gICAgICBlLnBlcnNpc3QoKTtcbiAgICB9XG5cbiAgICB2YXIgX2UkdGFyZ2V0ID0gZS50YXJnZXQsXG4gICAgICAgIG5hbWUgPSBfZSR0YXJnZXQubmFtZSxcbiAgICAgICAgaWQgPSBfZSR0YXJnZXQuaWQsXG4gICAgICAgIG91dGVySFRNTCA9IF9lJHRhcmdldC5vdXRlckhUTUw7XG4gICAgdmFyIGZpZWxkID0gcGF0aCA/IHBhdGggOiBuYW1lID8gbmFtZSA6IGlkO1xuXG4gICAgaWYgKCFmaWVsZCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIHdhcm5BYm91dE1pc3NpbmdJZGVudGlmaWVyKHtcbiAgICAgICAgaHRtbENvbnRlbnQ6IG91dGVySFRNTCxcbiAgICAgICAgZG9jdW1lbnRhdGlvbkFuY2hvckxpbms6ICdoYW5kbGVibHVyLWUtYW55LS12b2lkJyxcbiAgICAgICAgaGFuZGxlck5hbWU6ICdoYW5kbGVCbHVyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0RmllbGRUb3VjaGVkKGZpZWxkLCB0cnVlKTtcbiAgfSwgW3NldEZpZWxkVG91Y2hlZF0pO1xuICB2YXIgaGFuZGxlQmx1ciA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50T3JTdHJpbmcpIHtcbiAgICBpZiAoaXNTdHJpbmcoZXZlbnRPclN0cmluZykpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGV4ZWN1dGVCbHVyKGV2ZW50LCBldmVudE9yU3RyaW5nKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4ZWN1dGVCbHVyKGV2ZW50T3JTdHJpbmcpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBzZXRGb3JtaWtTdGF0ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChzdGF0ZU9yQ2IpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihzdGF0ZU9yQ2IpKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdTRVRfRk9STUlLX1NUQVRFJyxcbiAgICAgICAgcGF5bG9hZDogc3RhdGVPckNiXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnU0VUX0ZPUk1JS19TVEFURScsXG4gICAgICAgIHBheWxvYWQ6IGZ1bmN0aW9uIHBheWxvYWQoKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlT3JDYjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG4gIHZhciBzZXRTdGF0dXMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1NFVF9TVEFUVVMnLFxuICAgICAgcGF5bG9hZDogc3RhdHVzXG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgdmFyIHNldFN1Ym1pdHRpbmcgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoaXNTdWJtaXR0aW5nKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1NFVF9JU1NVQk1JVFRJTkcnLFxuICAgICAgcGF5bG9hZDogaXNTdWJtaXR0aW5nXG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgdmFyIHN1Ym1pdEZvcm0gPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU1VCTUlUX0FUVEVNUFQnXG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbGlkYXRlRm9ybVdpdGhIaWdoUHJpb3JpdHkoKS50aGVuKGZ1bmN0aW9uIChjb21iaW5lZEVycm9ycykge1xuICAgICAgLy8gSW4gY2FzZSBhbiBlcnJvciB3YXMgdGhyb3duIGFuZCBwYXNzZWQgdG8gdGhlIHJlc29sdmVkIFByb21pc2UsXG4gICAgICAvLyBgY29tYmluZWRFcnJvcnNgIGNhbiBiZSBhbiBpbnN0YW5jZSBvZiBhbiBFcnJvci4gV2UgbmVlZCB0byBjaGVja1xuICAgICAgLy8gdGhhdCBhbmQgYWJvcnQgdGhlIHN1Ym1pdC5cbiAgICAgIC8vIElmIHdlIGRvbid0IGRvIHRoYXQsIGNhbGxpbmcgYE9iamVjdC5rZXlzKG5ldyBFcnJvcigpKWAgeWllbGRzIGFuXG4gICAgICAvLyBlbXB0eSBhcnJheSwgd2hpY2ggY2F1c2VzIHRoZSB2YWxpZGF0aW9uIHRvIHBhc3MgYW5kIHRoZSBmb3JtXG4gICAgICAvLyB0byBiZSBzdWJtaXR0ZWQuXG4gICAgICB2YXIgaXNJbnN0YW5jZU9mRXJyb3IgPSBjb21iaW5lZEVycm9ycyBpbnN0YW5jZW9mIEVycm9yO1xuICAgICAgdmFyIGlzQWN0dWFsbHlWYWxpZCA9ICFpc0luc3RhbmNlT2ZFcnJvciAmJiBPYmplY3Qua2V5cyhjb21iaW5lZEVycm9ycykubGVuZ3RoID09PSAwO1xuXG4gICAgICBpZiAoaXNBY3R1YWxseVZhbGlkKSB7XG4gICAgICAgIC8vIFByb2NlZWQgd2l0aCBzdWJtaXQuLi5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVG8gcmVzcGVjdCBzeW5jIHN1Ym1pdCBmbnMsIHdlIGNhbid0IHNpbXBseSB3cmFwIGV4ZWN1dGVTdWJtaXQgaW4gYSBwcm9taXNlIGFuZFxuICAgICAgICAvLyBfYWx3YXlzXyBkaXNwYXRjaCBTVUJNSVRfU1VDQ0VTUyBiZWNhdXNlIGlzU3VibWl0dGluZyB3b3VsZCB0aGVuIGFsd2F5cyBiZSBmYWxzZS5cbiAgICAgICAgLy8gVGhpcyB3b3VsZCBiZSBmaW5lIGluIHNpbXBsZSBjYXNlcywgYnV0IG1ha2UgaXQgaW1wb3NzaWJsZSB0byBkaXNhYmxlIHN1Ym1pdFxuICAgICAgICAvLyBidXR0b25zIHdoZXJlIHBlb3BsZSB1c2UgY2FsbGJhY2tzIG9yIHByb21pc2VzIGFzIHNpZGUgZWZmZWN0cyAod2hpY2ggaXMgYmFzaWNhbGx5XG4gICAgICAgIC8vIGFsbCBvZiB2MSBGb3JtaWsgY29kZSkuIEluc3RlYWQsIHJlY2FsbCB0aGF0IHdlIGFyZSBpbnNpZGUgb2YgYSBwcm9taXNlIGNoYWluIGFscmVhZHksXG4gICAgICAgIC8vICBzbyB3ZSBjYW4gdHJ5L2NhdGNoIGV4ZWN1dGVTdWJtaXQoKSwgaWYgaXQgcmV0dXJucyB1bmRlZmluZWQsIHRoZW4ganVzdCBiYWlsLlxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgZXJyb3JzLCB0aHJvdyBlbS4gT3RoZXJ3aXNlLCB3cmFwIGV4ZWN1dGVTdWJtaXQgaW4gYSBwcm9taXNlIGFuZCBoYW5kbGVcbiAgICAgICAgLy8gY2xlYW51cCBvZiBpc1N1Ym1pdHRpbmcgb24gYmVoYWxmIG9mIHRoZSBjb25zdW1lci5cbiAgICAgICAgdmFyIHByb21pc2VPclVuZGVmaW5lZDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHByb21pc2VPclVuZGVmaW5lZCA9IGV4ZWN1dGVTdWJtaXQoKTsgLy8gQmFpbCBpZiBpdCdzIHN5bmMsIGNvbnN1bWVyIGlzIHJlc3BvbnNpYmxlIGZvciBjbGVhbmluZyB1cFxuICAgICAgICAgIC8vIHZpYSBzZXRTdWJtaXR0aW5nKGZhbHNlKVxuXG4gICAgICAgICAgaWYgKHByb21pc2VPclVuZGVmaW5lZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwcm9taXNlT3JVbmRlZmluZWQpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghIWlzTW91bnRlZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdTVUJNSVRfU1VDQ0VTUydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoX2Vycm9ycykge1xuICAgICAgICAgIGlmICghIWlzTW91bnRlZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdTVUJNSVRfRkFJTFVSRSdcbiAgICAgICAgICAgIH0pOyAvLyBUaGlzIGlzIGEgbGVnaXQgZXJyb3IgcmVqZWN0ZWQgYnkgdGhlIG9uU3VibWl0IGZuXG4gICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCB3YW50IHRvIGJyZWFrIHRoZSBwcm9taXNlIGNoYWluXG5cbiAgICAgICAgICAgIHRocm93IF9lcnJvcnM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoISFpc01vdW50ZWQuY3VycmVudCkge1xuICAgICAgICAvLyBeXl4gTWFrZSBzdXJlIEZvcm1payBpcyBzdGlsbCBtb3VudGVkIGJlZm9yZSB1cGRhdGluZyBzdGF0ZVxuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ1NVQk1JVF9GQUlMVVJFJ1xuICAgICAgICB9KTsgLy8gdGhyb3cgY29tYmluZWRFcnJvcnM7XG5cbiAgICAgICAgaWYgKGlzSW5zdGFuY2VPZkVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgY29tYmluZWRFcnJvcnM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICB9KTtcbiAgdmFyIGhhbmRsZVN1Ym1pdCA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZSAmJiBlLnByZXZlbnREZWZhdWx0ICYmIGlzRnVuY3Rpb24oZS5wcmV2ZW50RGVmYXVsdCkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoZSAmJiBlLnN0b3BQcm9wYWdhdGlvbiAmJiBpc0Z1bmN0aW9uKGUuc3RvcFByb3BhZ2F0aW9uKSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9IC8vIFdhcm4gaWYgZm9ybSBzdWJtaXNzaW9uIGlzIHRyaWdnZXJlZCBieSBhIDxidXR0b24+IHdpdGhvdXQgYVxuICAgIC8vIHNwZWNpZmllZCBgdHlwZWAgYXR0cmlidXRlIGR1cmluZyBkZXZlbG9wbWVudC4gVGhpcyBtaXRpZ2F0ZXNcbiAgICAvLyBhIGNvbW1vbiBnb3RjaGEgaW4gZm9ybXMgd2l0aCBib3RoIHJlc2V0IGFuZCBzdWJtaXQgYnV0dG9ucyxcbiAgICAvLyB3aGVyZSB0aGUgZGV2IGZvcmdldHMgdG8gYWRkIHR5cGU9XCJidXR0b25cIiB0byB0aGUgcmVzZXQgYnV0dG9uLlxuXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFNhZmVseSBnZXQgdGhlIGFjdGl2ZSBlbGVtZW50ICh3b3JrcyB3aXRoIElFKVxuICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBnZXRBY3RpdmVFbGVtZW50KCk7XG5cbiAgICAgIGlmIChhY3RpdmVFbGVtZW50ICE9PSBudWxsICYmIGFjdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCkge1xuICAgICAgICAhKGFjdGl2ZUVsZW1lbnQuYXR0cmlidXRlcyAmJiBhY3RpdmVFbGVtZW50LmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKCd0eXBlJykpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnWW91IHN1Ym1pdHRlZCBhIEZvcm1payBmb3JtIHVzaW5nIGEgYnV0dG9uIHdpdGggYW4gdW5zcGVjaWZpZWQgYHR5cGVgIGF0dHJpYnV0ZS4gIE1vc3QgYnJvd3NlcnMgZGVmYXVsdCBidXR0b24gZWxlbWVudHMgdG8gYHR5cGU9XCJzdWJtaXRcImAuIElmIHRoaXMgaXMgbm90IGEgc3VibWl0IGJ1dHRvbiwgcGxlYXNlIGFkZCBgdHlwZT1cImJ1dHRvblwiYC4nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3VibWl0Rm9ybSgpW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgY29uc29sZS53YXJuKFwiV2FybmluZzogQW4gdW5oYW5kbGVkIGVycm9yIHdhcyBjYXVnaHQgZnJvbSBzdWJtaXRGb3JtKClcIiwgcmVhc29uKTtcbiAgICB9KTtcbiAgfSk7XG4gIHZhciBpbXBlcmF0aXZlTWV0aG9kcyA9IHtcbiAgICByZXNldEZvcm06IHJlc2V0Rm9ybSxcbiAgICB2YWxpZGF0ZUZvcm06IHZhbGlkYXRlRm9ybVdpdGhIaWdoUHJpb3JpdHksXG4gICAgdmFsaWRhdGVGaWVsZDogdmFsaWRhdGVGaWVsZCxcbiAgICBzZXRFcnJvcnM6IHNldEVycm9ycyxcbiAgICBzZXRGaWVsZEVycm9yOiBzZXRGaWVsZEVycm9yLFxuICAgIHNldEZpZWxkVG91Y2hlZDogc2V0RmllbGRUb3VjaGVkLFxuICAgIHNldEZpZWxkVmFsdWU6IHNldEZpZWxkVmFsdWUsXG4gICAgc2V0U3RhdHVzOiBzZXRTdGF0dXMsXG4gICAgc2V0U3VibWl0dGluZzogc2V0U3VibWl0dGluZyxcbiAgICBzZXRUb3VjaGVkOiBzZXRUb3VjaGVkLFxuICAgIHNldFZhbHVlczogc2V0VmFsdWVzLFxuICAgIHNldEZvcm1pa1N0YXRlOiBzZXRGb3JtaWtTdGF0ZSxcbiAgICBzdWJtaXRGb3JtOiBzdWJtaXRGb3JtXG4gIH07XG4gIHZhciBleGVjdXRlU3VibWl0ID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG9uU3VibWl0KHN0YXRlLnZhbHVlcywgaW1wZXJhdGl2ZU1ldGhvZHMpO1xuICB9KTtcbiAgdmFyIGhhbmRsZVJlc2V0ID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlICYmIGUucHJldmVudERlZmF1bHQgJiYgaXNGdW5jdGlvbihlLnByZXZlbnREZWZhdWx0KSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmIChlICYmIGUuc3RvcFByb3BhZ2F0aW9uICYmIGlzRnVuY3Rpb24oZS5zdG9wUHJvcGFnYXRpb24pKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHJlc2V0Rm9ybSgpO1xuICB9KTtcbiAgdmFyIGdldEZpZWxkTWV0YSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBnZXRJbihzdGF0ZS52YWx1ZXMsIG5hbWUpLFxuICAgICAgZXJyb3I6IGdldEluKHN0YXRlLmVycm9ycywgbmFtZSksXG4gICAgICB0b3VjaGVkOiAhIWdldEluKHN0YXRlLnRvdWNoZWQsIG5hbWUpLFxuICAgICAgaW5pdGlhbFZhbHVlOiBnZXRJbihpbml0aWFsVmFsdWVzLmN1cnJlbnQsIG5hbWUpLFxuICAgICAgaW5pdGlhbFRvdWNoZWQ6ICEhZ2V0SW4oaW5pdGlhbFRvdWNoZWQuY3VycmVudCwgbmFtZSksXG4gICAgICBpbml0aWFsRXJyb3I6IGdldEluKGluaXRpYWxFcnJvcnMuY3VycmVudCwgbmFtZSlcbiAgICB9O1xuICB9LCBbc3RhdGUuZXJyb3JzLCBzdGF0ZS50b3VjaGVkLCBzdGF0ZS52YWx1ZXNdKTtcbiAgdmFyIGdldEZpZWxkSGVscGVycyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNldFZhbHVlOiBmdW5jdGlvbiBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gc2V0RmllbGRWYWx1ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgc2V0VG91Y2hlZDogZnVuY3Rpb24gc2V0VG91Y2hlZCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gc2V0RmllbGRUb3VjaGVkKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0sXG4gICAgICBzZXRFcnJvcjogZnVuY3Rpb24gc2V0RXJyb3IodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHNldEZpZWxkRXJyb3IobmFtZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtzZXRGaWVsZFZhbHVlLCBzZXRGaWVsZFRvdWNoZWQsIHNldEZpZWxkRXJyb3JdKTtcbiAgdmFyIGdldEZpZWxkUHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmFtZU9yT3B0aW9ucykge1xuICAgIHZhciBpc0FuT2JqZWN0ID0gaXNPYmplY3QobmFtZU9yT3B0aW9ucyk7XG4gICAgdmFyIG5hbWUgPSBpc0FuT2JqZWN0ID8gbmFtZU9yT3B0aW9ucy5uYW1lIDogbmFtZU9yT3B0aW9ucztcbiAgICB2YXIgdmFsdWVTdGF0ZSA9IGdldEluKHN0YXRlLnZhbHVlcywgbmFtZSk7XG4gICAgdmFyIGZpZWxkID0ge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVN0YXRlLFxuICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgIG9uQmx1cjogaGFuZGxlQmx1clxuICAgIH07XG5cbiAgICBpZiAoaXNBbk9iamVjdCkge1xuICAgICAgdmFyIHR5cGUgPSBuYW1lT3JPcHRpb25zLnR5cGUsXG4gICAgICAgICAgdmFsdWVQcm9wID0gbmFtZU9yT3B0aW9ucy52YWx1ZSxcbiAgICAgICAgICBpcyA9IG5hbWVPck9wdGlvbnMuYXMsXG4gICAgICAgICAgbXVsdGlwbGUgPSBuYW1lT3JPcHRpb25zLm11bHRpcGxlO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICBpZiAodmFsdWVQcm9wID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBmaWVsZC5jaGVja2VkID0gISF2YWx1ZVN0YXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpZWxkLmNoZWNrZWQgPSAhIShBcnJheS5pc0FycmF5KHZhbHVlU3RhdGUpICYmIH52YWx1ZVN0YXRlLmluZGV4T2YodmFsdWVQcm9wKSk7XG4gICAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZVByb3A7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICBmaWVsZC5jaGVja2VkID0gdmFsdWVTdGF0ZSA9PT0gdmFsdWVQcm9wO1xuICAgICAgICBmaWVsZC52YWx1ZSA9IHZhbHVlUHJvcDtcbiAgICAgIH0gZWxzZSBpZiAoaXMgPT09ICdzZWxlY3QnICYmIG11bHRpcGxlKSB7XG4gICAgICAgIGZpZWxkLnZhbHVlID0gZmllbGQudmFsdWUgfHwgW107XG4gICAgICAgIGZpZWxkLm11bHRpcGxlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmllbGQ7XG4gIH0sIFtoYW5kbGVCbHVyLCBoYW5kbGVDaGFuZ2UsIHN0YXRlLnZhbHVlc10pO1xuICB2YXIgZGlydHkgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gIWlzRXF1YWwoaW5pdGlhbFZhbHVlcy5jdXJyZW50LCBzdGF0ZS52YWx1ZXMpO1xuICB9LCBbaW5pdGlhbFZhbHVlcy5jdXJyZW50LCBzdGF0ZS52YWx1ZXNdKTtcbiAgdmFyIGlzVmFsaWQgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIGlzSW5pdGlhbFZhbGlkICE9PSAndW5kZWZpbmVkJyA/IGRpcnR5ID8gc3RhdGUuZXJyb3JzICYmIE9iamVjdC5rZXlzKHN0YXRlLmVycm9ycykubGVuZ3RoID09PSAwIDogaXNJbml0aWFsVmFsaWQgIT09IGZhbHNlICYmIGlzRnVuY3Rpb24oaXNJbml0aWFsVmFsaWQpID8gaXNJbml0aWFsVmFsaWQocHJvcHMpIDogaXNJbml0aWFsVmFsaWQgOiBzdGF0ZS5lcnJvcnMgJiYgT2JqZWN0LmtleXMoc3RhdGUuZXJyb3JzKS5sZW5ndGggPT09IDA7XG4gIH0sIFtpc0luaXRpYWxWYWxpZCwgZGlydHksIHN0YXRlLmVycm9ycywgcHJvcHNdKTtcblxuICB2YXIgY3R4ID0gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgaW5pdGlhbFZhbHVlczogaW5pdGlhbFZhbHVlcy5jdXJyZW50LFxuICAgIGluaXRpYWxFcnJvcnM6IGluaXRpYWxFcnJvcnMuY3VycmVudCxcbiAgICBpbml0aWFsVG91Y2hlZDogaW5pdGlhbFRvdWNoZWQuY3VycmVudCxcbiAgICBpbml0aWFsU3RhdHVzOiBpbml0aWFsU3RhdHVzLmN1cnJlbnQsXG4gICAgaGFuZGxlQmx1cjogaGFuZGxlQmx1cixcbiAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICBoYW5kbGVSZXNldDogaGFuZGxlUmVzZXQsXG4gICAgaGFuZGxlU3VibWl0OiBoYW5kbGVTdWJtaXQsXG4gICAgcmVzZXRGb3JtOiByZXNldEZvcm0sXG4gICAgc2V0RXJyb3JzOiBzZXRFcnJvcnMsXG4gICAgc2V0Rm9ybWlrU3RhdGU6IHNldEZvcm1pa1N0YXRlLFxuICAgIHNldEZpZWxkVG91Y2hlZDogc2V0RmllbGRUb3VjaGVkLFxuICAgIHNldEZpZWxkVmFsdWU6IHNldEZpZWxkVmFsdWUsXG4gICAgc2V0RmllbGRFcnJvcjogc2V0RmllbGRFcnJvcixcbiAgICBzZXRTdGF0dXM6IHNldFN0YXR1cyxcbiAgICBzZXRTdWJtaXR0aW5nOiBzZXRTdWJtaXR0aW5nLFxuICAgIHNldFRvdWNoZWQ6IHNldFRvdWNoZWQsXG4gICAgc2V0VmFsdWVzOiBzZXRWYWx1ZXMsXG4gICAgc3VibWl0Rm9ybTogc3VibWl0Rm9ybSxcbiAgICB2YWxpZGF0ZUZvcm06IHZhbGlkYXRlRm9ybVdpdGhIaWdoUHJpb3JpdHksXG4gICAgdmFsaWRhdGVGaWVsZDogdmFsaWRhdGVGaWVsZCxcbiAgICBpc1ZhbGlkOiBpc1ZhbGlkLFxuICAgIGRpcnR5OiBkaXJ0eSxcbiAgICB1bnJlZ2lzdGVyRmllbGQ6IHVucmVnaXN0ZXJGaWVsZCxcbiAgICByZWdpc3RlckZpZWxkOiByZWdpc3RlckZpZWxkLFxuICAgIGdldEZpZWxkUHJvcHM6IGdldEZpZWxkUHJvcHMsXG4gICAgZ2V0RmllbGRNZXRhOiBnZXRGaWVsZE1ldGEsXG4gICAgZ2V0RmllbGRIZWxwZXJzOiBnZXRGaWVsZEhlbHBlcnMsXG4gICAgdmFsaWRhdGVPbkJsdXI6IHZhbGlkYXRlT25CbHVyLFxuICAgIHZhbGlkYXRlT25DaGFuZ2U6IHZhbGlkYXRlT25DaGFuZ2UsXG4gICAgdmFsaWRhdGVPbk1vdW50OiB2YWxpZGF0ZU9uTW91bnRcbiAgfSk7XG5cbiAgcmV0dXJuIGN0eDtcbn1cbmZ1bmN0aW9uIEZvcm1payhwcm9wcykge1xuICB2YXIgZm9ybWlrYmFnID0gdXNlRm9ybWlrKHByb3BzKTtcbiAgdmFyIGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICByZW5kZXIgPSBwcm9wcy5yZW5kZXIsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmOyAvLyBUaGlzIGFsbG93cyBmb2xrcyB0byBwYXNzIGEgcmVmIHRvIDxGb3JtaWsgLz5cblxuICB1c2VJbXBlcmF0aXZlSGFuZGxlKGlubmVyUmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZvcm1pa2JhZztcbiAgfSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgISFwcm9wcy5yZW5kZXIgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiPEZvcm1payByZW5kZXI+IGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgRm9ybWlrLiBQbGVhc2UgdXNlIGEgY2hpbGQgY2FsbGJhY2sgZnVuY3Rpb24gaW5zdGVhZC4gVG8gZ2V0IHJpZCBvZiB0aGlzIHdhcm5pbmcsIHJlcGxhY2UgPEZvcm1payByZW5kZXI9eyhwcm9wcykgPT4gLi4ufSAvPiB3aXRoIDxGb3JtaWs+eyhwcm9wcykgPT4gLi4ufTwvRm9ybWlrPlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICB9LCBbXSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KEZvcm1pa1Byb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGZvcm1pa2JhZ1xuICB9LCBjb21wb25lbnQgPyBjcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgZm9ybWlrYmFnKSA6IHJlbmRlciA/IHJlbmRlcihmb3JtaWtiYWcpIDogY2hpbGRyZW4gLy8gY2hpbGRyZW4gY29tZSBsYXN0LCBhbHdheXMgY2FsbGVkXG4gID8gaXNGdW5jdGlvbihjaGlsZHJlbikgPyBjaGlsZHJlbihmb3JtaWtiYWcpIDogIWlzRW1wdHlDaGlsZHJlbihjaGlsZHJlbikgPyBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKSA6IG51bGwgOiBudWxsKTtcbn1cblxuZnVuY3Rpb24gd2FybkFib3V0TWlzc2luZ0lkZW50aWZpZXIoX3JlZjQpIHtcbiAgdmFyIGh0bWxDb250ZW50ID0gX3JlZjQuaHRtbENvbnRlbnQsXG4gICAgICBkb2N1bWVudGF0aW9uQW5jaG9yTGluayA9IF9yZWY0LmRvY3VtZW50YXRpb25BbmNob3JMaW5rLFxuICAgICAgaGFuZGxlck5hbWUgPSBfcmVmNC5oYW5kbGVyTmFtZTtcbiAgY29uc29sZS53YXJuKFwiV2FybmluZzogRm9ybWlrIGNhbGxlZCBgXCIgKyBoYW5kbGVyTmFtZSArIFwiYCwgYnV0IHlvdSBmb3Jnb3QgdG8gcGFzcyBhbiBgaWRgIG9yIGBuYW1lYCBhdHRyaWJ1dGUgdG8geW91ciBpbnB1dDpcXG4gICAgXCIgKyBodG1sQ29udGVudCArIFwiXFxuICAgIEZvcm1payBjYW5ub3QgZGV0ZXJtaW5lIHdoaWNoIHZhbHVlIHRvIHVwZGF0ZS4gRm9yIG1vcmUgaW5mbyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2phcmVkcGFsbWVyL2Zvcm1payNcIiArIGRvY3VtZW50YXRpb25BbmNob3JMaW5rICsgXCJcXG4gIFwiKTtcbn1cbi8qKlxyXG4gKiBUcmFuc2Zvcm0gWXVwIFZhbGlkYXRpb25FcnJvciB0byBhIG1vcmUgdXNhYmxlIG9iamVjdFxyXG4gKi9cblxuXG5mdW5jdGlvbiB5dXBUb0Zvcm1FcnJvcnMoeXVwRXJyb3IpIHtcbiAgdmFyIGVycm9ycyA9IHt9O1xuXG4gIGlmICh5dXBFcnJvci5pbm5lcikge1xuICAgIGlmICh5dXBFcnJvci5pbm5lci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBzZXRJbihlcnJvcnMsIHl1cEVycm9yLnBhdGgsIHl1cEVycm9yLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHl1cEVycm9yLmlubmVyLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgdmFyIF9yZWY1O1xuXG4gICAgICBpZiAoX2lzQXJyYXkpIHtcbiAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgICBfcmVmNSA9IF9pdGVyYXRvcltfaSsrXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9pID0gX2l0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuICAgICAgICBfcmVmNSA9IF9pLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgZXJyID0gX3JlZjU7XG5cbiAgICAgIGlmICghZ2V0SW4oZXJyb3JzLCBlcnIucGF0aCkpIHtcbiAgICAgICAgZXJyb3JzID0gc2V0SW4oZXJyb3JzLCBlcnIucGF0aCwgZXJyLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnM7XG59XG4vKipcclxuICogVmFsaWRhdGUgYSB5dXAgc2NoZW1hLlxyXG4gKi9cblxuZnVuY3Rpb24gdmFsaWRhdGVZdXBTY2hlbWEodmFsdWVzLCBzY2hlbWEsIHN5bmMsIGNvbnRleHQpIHtcbiAgaWYgKHN5bmMgPT09IHZvaWQgMCkge1xuICAgIHN5bmMgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHtcbiAgICBjb250ZXh0ID0ge307XG4gIH1cblxuICB2YXIgdmFsaWRhdGVEYXRhID0gcHJlcGFyZURhdGFGb3JWYWxpZGF0aW9uKHZhbHVlcyk7XG4gIHJldHVybiBzY2hlbWFbc3luYyA/ICd2YWxpZGF0ZVN5bmMnIDogJ3ZhbGlkYXRlJ10odmFsaWRhdGVEYXRhLCB7XG4gICAgYWJvcnRFYXJseTogZmFsc2UsXG4gICAgY29udGV4dDogY29udGV4dFxuICB9KTtcbn1cbi8qKlxyXG4gKiBSZWN1cnNpdmVseSBwcmVwYXJlIHZhbHVlcy5cclxuICovXG5cbmZ1bmN0aW9uIHByZXBhcmVEYXRhRm9yVmFsaWRhdGlvbih2YWx1ZXMpIHtcbiAgdmFyIGRhdGEgPSB7fTtcblxuICBmb3IgKHZhciBrIGluIHZhbHVlcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWVzLCBrKSkge1xuICAgICAgdmFyIGtleSA9IFN0cmluZyhrKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVzW2tleV0pID09PSB0cnVlKSB7XG4gICAgICAgIGRhdGFba2V5XSA9IHZhbHVlc1trZXldLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPT09IHRydWUgfHwgaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVwYXJlRGF0YUZvclZhbGlkYXRpb24odmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09ICcnID8gdmFsdWUgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWx1ZXNba2V5XSkpIHtcbiAgICAgICAgZGF0YVtrZXldID0gcHJlcGFyZURhdGFGb3JWYWxpZGF0aW9uKHZhbHVlc1trZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGFba2V5XSA9IHZhbHVlc1trZXldICE9PSAnJyA/IHZhbHVlc1trZXldIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuLyoqXHJcbiAqIGRlZXBtZXJnZSBhcnJheSBtZXJnaW5nIGFsZ29yaXRobVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vS3lsZUFNYXRoZXdzL2RlZXBtZXJnZSNjb21iaW5lLWFycmF5XHJcbiAqL1xuXG5mdW5jdGlvbiBhcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBkZXN0aW5hdGlvbiA9IHRhcmdldC5zbGljZSgpO1xuICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAoZSwgaSkge1xuICAgIGlmICh0eXBlb2YgZGVzdGluYXRpb25baV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgY2xvbmVSZXF1ZXN0ZWQgPSBvcHRpb25zLmNsb25lICE9PSBmYWxzZTtcbiAgICAgIHZhciBzaG91bGRDbG9uZSA9IGNsb25lUmVxdWVzdGVkICYmIG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QoZSk7XG4gICAgICBkZXN0aW5hdGlvbltpXSA9IHNob3VsZENsb25lID8gZGVlcG1lcmdlKEFycmF5LmlzQXJyYXkoZSkgPyBbXSA6IHt9LCBlLCBvcHRpb25zKSA6IGU7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KGUpKSB7XG4gICAgICBkZXN0aW5hdGlvbltpXSA9IGRlZXBtZXJnZSh0YXJnZXRbaV0sIGUsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0LmluZGV4T2YoZSkgPT09IC0xKSB7XG4gICAgICBkZXN0aW5hdGlvbi5wdXNoKGUpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkZXN0aW5hdGlvbjtcbn1cbi8qKiBSZXR1cm4gbXVsdGkgc2VsZWN0IHZhbHVlcyBiYXNlZCBvbiBhbiBhcnJheSBvZiBvcHRpb25zICovXG5cblxuZnVuY3Rpb24gZ2V0U2VsZWN0ZWRWYWx1ZXMob3B0aW9ucykge1xuICByZXR1cm4gQXJyYXkuZnJvbShvcHRpb25zKS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgcmV0dXJuIGVsLnNlbGVjdGVkO1xuICB9KS5tYXAoZnVuY3Rpb24gKGVsKSB7XG4gICAgcmV0dXJuIGVsLnZhbHVlO1xuICB9KTtcbn1cbi8qKiBSZXR1cm4gdGhlIG5leHQgdmFsdWUgZm9yIGEgY2hlY2tib3ggKi9cblxuXG5mdW5jdGlvbiBnZXRWYWx1ZUZvckNoZWNrYm94KGN1cnJlbnRWYWx1ZSwgY2hlY2tlZCwgdmFsdWVQcm9wKSB7XG4gIC8vIElmIHRoZSBjdXJyZW50IHZhbHVlIHdhcyBhIGJvb2xlYW4sIHJldHVybiBhIGJvb2xlYW5cbiAgaWYgKHR5cGVvZiBjdXJyZW50VmFsdWUgPT09ICdib29sZWFuJykge1xuICAgIHJldHVybiBCb29sZWFuKGNoZWNrZWQpO1xuICB9IC8vIElmIHRoZSBjdXJyZW50VmFsdWUgd2FzIG5vdCBhIGJvb2xlYW4gd2Ugd2FudCB0byByZXR1cm4gYW4gYXJyYXlcblxuXG4gIHZhciBjdXJyZW50QXJyYXlPZlZhbHVlcyA9IFtdO1xuICB2YXIgaXNWYWx1ZUluQXJyYXkgPSBmYWxzZTtcbiAgdmFyIGluZGV4ID0gLTE7XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGN1cnJlbnRWYWx1ZSkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG4gICAgaWYgKCF2YWx1ZVByb3AgfHwgdmFsdWVQcm9wID09ICd0cnVlJyB8fCB2YWx1ZVByb3AgPT0gJ2ZhbHNlJykge1xuICAgICAgcmV0dXJuIEJvb2xlYW4oY2hlY2tlZCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIElmIHRoZSBjdXJyZW50IHZhbHVlIGlzIGFscmVhZHkgYW4gYXJyYXksIHVzZSBpdFxuICAgIGN1cnJlbnRBcnJheU9mVmFsdWVzID0gY3VycmVudFZhbHVlO1xuICAgIGluZGV4ID0gY3VycmVudFZhbHVlLmluZGV4T2YodmFsdWVQcm9wKTtcbiAgICBpc1ZhbHVlSW5BcnJheSA9IGluZGV4ID49IDA7XG4gIH0gLy8gSWYgdGhlIGNoZWNrYm94IHdhcyBjaGVja2VkIGFuZCB0aGUgdmFsdWUgaXMgbm90IGFscmVhZHkgcHJlc2VudCBpbiB0aGUgYXJheSB3ZSB3YW50IHRvIGFkZCB0aGUgbmV3IHZhbHVlIHRvIHRoZSBhcnJheSBvZiB2YWx1ZXNcblxuXG4gIGlmIChjaGVja2VkICYmIHZhbHVlUHJvcCAmJiAhaXNWYWx1ZUluQXJyYXkpIHtcbiAgICByZXR1cm4gY3VycmVudEFycmF5T2ZWYWx1ZXMuY29uY2F0KHZhbHVlUHJvcCk7XG4gIH0gLy8gSWYgdGhlIGNoZWNrYm94IHdhcyB1bmNoZWNrZWQgYW5kIHRoZSB2YWx1ZSBpcyBub3QgaW4gdGhlIGFycmF5LCBzaW1wbHkgcmV0dXJuIHRoZSBhbHJlYWR5IGV4aXN0aW5nIGFycmF5IG9mIHZhbHVlc1xuXG5cbiAgaWYgKCFpc1ZhbHVlSW5BcnJheSkge1xuICAgIHJldHVybiBjdXJyZW50QXJyYXlPZlZhbHVlcztcbiAgfSAvLyBJZiB0aGUgY2hlY2tib3ggd2FzIHVuY2hlY2tlZCBhbmQgdGhlIHZhbHVlIGlzIGluIHRoZSBhcnJheSwgcmVtb3ZlIHRoZSB2YWx1ZSBhbmQgcmV0dXJuIHRoZSBhcnJheVxuXG5cbiAgcmV0dXJuIGN1cnJlbnRBcnJheU9mVmFsdWVzLnNsaWNlKDAsIGluZGV4KS5jb25jYXQoY3VycmVudEFycmF5T2ZWYWx1ZXMuc2xpY2UoaW5kZXggKyAxKSk7XG59IC8vIFJlYWN0IGN1cnJlbnRseSB0aHJvd3MgYSB3YXJuaW5nIHdoZW4gdXNpbmcgdXNlTGF5b3V0RWZmZWN0IG9uIHRoZSBzZXJ2ZXIuXG4vLyBUbyBnZXQgYXJvdW5kIGl0LCB3ZSBjYW4gY29uZGl0aW9uYWxseSB1c2VFZmZlY3Qgb24gdGhlIHNlcnZlciAobm8tb3ApIGFuZFxuLy8gdXNlTGF5b3V0RWZmZWN0IGluIHRoZSBicm93c2VyLlxuLy8gQHNlZSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9nYWVhcm9uL2U3ZDk3Y2RmMzhhMjkwNzkyNGVhMTJlNGViZGYzYzg1XG5cblxudmFyIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09ICd1bmRlZmluZWQnID8gdXNlTGF5b3V0RWZmZWN0IDogdXNlRWZmZWN0O1xuXG5mdW5jdGlvbiB1c2VFdmVudENhbGxiYWNrKGZuKSB7XG4gIHZhciByZWYgPSB1c2VSZWYoZm4pOyAvLyB3ZSBjb3B5IGEgcmVmIHRvIHRoZSBjYWxsYmFjayBzY29wZWQgdG8gdGhlIGN1cnJlbnQgc3RhdGUvcHJvcHMgb24gZWFjaCByZW5kZXJcblxuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZWYuY3VycmVudCA9IGZuO1xuICB9KTtcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZi5jdXJyZW50LmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gdXNlRmllbGQocHJvcHNPckZpZWxkTmFtZSkge1xuICB2YXIgZm9ybWlrID0gdXNlRm9ybWlrQ29udGV4dCgpO1xuICB2YXIgZ2V0RmllbGRQcm9wcyA9IGZvcm1pay5nZXRGaWVsZFByb3BzLFxuICAgICAgZ2V0RmllbGRNZXRhID0gZm9ybWlrLmdldEZpZWxkTWV0YSxcbiAgICAgIGdldEZpZWxkSGVscGVycyA9IGZvcm1pay5nZXRGaWVsZEhlbHBlcnMsXG4gICAgICByZWdpc3RlckZpZWxkID0gZm9ybWlrLnJlZ2lzdGVyRmllbGQsXG4gICAgICB1bnJlZ2lzdGVyRmllbGQgPSBmb3JtaWsudW5yZWdpc3RlckZpZWxkO1xuICB2YXIgaXNBbk9iamVjdCA9IGlzT2JqZWN0KHByb3BzT3JGaWVsZE5hbWUpOyAvLyBOb3JtYWxpemUgcHJvcHNPckZpZWxkTmFtZSB0byBGaWVsZEhvb2tDb25maWc8VmFsPlxuXG4gIHZhciBwcm9wcyA9IGlzQW5PYmplY3QgPyBwcm9wc09yRmllbGROYW1lIDoge1xuICAgIG5hbWU6IHByb3BzT3JGaWVsZE5hbWVcbiAgfTtcbiAgdmFyIGZpZWxkTmFtZSA9IHByb3BzLm5hbWUsXG4gICAgICB2YWxpZGF0ZUZuID0gcHJvcHMudmFsaWRhdGU7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGZpZWxkTmFtZSkge1xuICAgICAgcmVnaXN0ZXJGaWVsZChmaWVsZE5hbWUsIHtcbiAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlRm5cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZmllbGROYW1lKSB7XG4gICAgICAgIHVucmVnaXN0ZXJGaWVsZChmaWVsZE5hbWUpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtyZWdpc3RlckZpZWxkLCB1bnJlZ2lzdGVyRmllbGQsIGZpZWxkTmFtZSwgdmFsaWRhdGVGbl0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAhZm9ybWlrID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAndXNlRmllbGQoKSAvIDxGaWVsZCAvPiBtdXN0IGJlIHVzZWQgdW5kZXJuZWF0aCBhIDxGb3JtaWs+IGNvbXBvbmVudCBvciB3aXRoRm9ybWlrKCkgaGlnaGVyIG9yZGVyIGNvbXBvbmVudCcpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgfVxuXG4gICFmaWVsZE5hbWUgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdJbnZhbGlkIGZpZWxkIG5hbWUuIEVpdGhlciBwYXNzIGB1c2VGaWVsZGAgYSBzdHJpbmcgb3IgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYSBgbmFtZWAga2V5LicpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIFtnZXRGaWVsZFByb3BzKHByb3BzKSwgZ2V0RmllbGRNZXRhKGZpZWxkTmFtZSksIGdldEZpZWxkSGVscGVycyhmaWVsZE5hbWUpXTtcbn1cbmZ1bmN0aW9uIEZpZWxkKF9yZWYpIHtcbiAgdmFyIHZhbGlkYXRlID0gX3JlZi52YWxpZGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICByZW5kZXIgPSBfcmVmLnJlbmRlcixcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGlzID0gX3JlZi5hcyxcbiAgICAgIGNvbXBvbmVudCA9IF9yZWYuY29tcG9uZW50LFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJ2YWxpZGF0ZVwiLCBcIm5hbWVcIiwgXCJyZW5kZXJcIiwgXCJjaGlsZHJlblwiLCBcImFzXCIsIFwiY29tcG9uZW50XCJdKTtcblxuICB2YXIgX3VzZUZvcm1pa0NvbnRleHQgPSB1c2VGb3JtaWtDb250ZXh0KCksXG4gICAgICBmb3JtaWsgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdXNlRm9ybWlrQ29udGV4dCwgW1widmFsaWRhdGVcIiwgXCJ2YWxpZGF0aW9uU2NoZW1hXCJdKTtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICEhcmVuZGVyID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIjxGaWVsZCByZW5kZXI+IGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgRm9ybWlrLiBQbGVhc2UgdXNlIGEgY2hpbGQgY2FsbGJhY2sgZnVuY3Rpb24gaW5zdGVhZC4gVG8gZ2V0IHJpZCBvZiB0aGlzIHdhcm5pbmcsIHJlcGxhY2UgPEZpZWxkIG5hbWU9XFxcIlwiICsgbmFtZSArIFwiXFxcIiByZW5kZXI9eyh7ZmllbGQsIGZvcm19KSA9PiAuLi59IC8+IHdpdGggPEZpZWxkIG5hbWU9XFxcIlwiICsgbmFtZSArIFwiXFxcIj57KHtmaWVsZCwgZm9ybSwgbWV0YX0pID0+IC4uLn08L0ZpZWxkPlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICAhIShpcyAmJiBjaGlsZHJlbiAmJiBpc0Z1bmN0aW9uKGNoaWxkcmVuKSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdZb3Ugc2hvdWxkIG5vdCB1c2UgPEZpZWxkIGFzPiBhbmQgPEZpZWxkIGNoaWxkcmVuPiBhcyBhIGZ1bmN0aW9uIGluIHRoZSBzYW1lIDxGaWVsZD4gY29tcG9uZW50OyA8RmllbGQgYXM+IHdpbGwgYmUgaWdub3JlZC4nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICAhIShjb21wb25lbnQgJiYgY2hpbGRyZW4gJiYgaXNGdW5jdGlvbihjaGlsZHJlbikpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnWW91IHNob3VsZCBub3QgdXNlIDxGaWVsZCBjb21wb25lbnQ+IGFuZCA8RmllbGQgY2hpbGRyZW4+IGFzIGEgZnVuY3Rpb24gaW4gdGhlIHNhbWUgPEZpZWxkPiBjb21wb25lbnQ7IDxGaWVsZCBjb21wb25lbnQ+IHdpbGwgYmUgaWdub3JlZC4nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICAhIShyZW5kZXIgJiYgY2hpbGRyZW4gJiYgIWlzRW1wdHlDaGlsZHJlbihjaGlsZHJlbikpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnWW91IHNob3VsZCBub3QgdXNlIDxGaWVsZCByZW5kZXI+IGFuZCA8RmllbGQgY2hpbGRyZW4+IGluIHRoZSBzYW1lIDxGaWVsZD4gY29tcG9uZW50OyA8RmllbGQgY2hpbGRyZW4+IHdpbGwgYmUgaWdub3JlZCcpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gIH0sIFtdKTsgLy8gUmVnaXN0ZXIgZmllbGQgYW5kIGZpZWxkLWxldmVsIHZhbGlkYXRpb24gd2l0aCBwYXJlbnQgPEZvcm1paz5cblxuICB2YXIgcmVnaXN0ZXJGaWVsZCA9IGZvcm1pay5yZWdpc3RlckZpZWxkLFxuICAgICAgdW5yZWdpc3RlckZpZWxkID0gZm9ybWlrLnVucmVnaXN0ZXJGaWVsZDtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZWdpc3RlckZpZWxkKG5hbWUsIHtcbiAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB1bnJlZ2lzdGVyRmllbGQobmFtZSk7XG4gICAgfTtcbiAgfSwgW3JlZ2lzdGVyRmllbGQsIHVucmVnaXN0ZXJGaWVsZCwgbmFtZSwgdmFsaWRhdGVdKTtcbiAgdmFyIGZpZWxkID0gZm9ybWlrLmdldEZpZWxkUHJvcHMoX2V4dGVuZHMoe1xuICAgIG5hbWU6IG5hbWVcbiAgfSwgcHJvcHMpKTtcbiAgdmFyIG1ldGEgPSBmb3JtaWsuZ2V0RmllbGRNZXRhKG5hbWUpO1xuICB2YXIgbGVnYWN5QmFnID0ge1xuICAgIGZpZWxkOiBmaWVsZCxcbiAgICBmb3JtOiBmb3JtaWtcbiAgfTtcblxuICBpZiAocmVuZGVyKSB7XG4gICAgcmV0dXJuIHJlbmRlcihfZXh0ZW5kcyh7fSwgbGVnYWN5QmFnLCB7XG4gICAgICBtZXRhOiBtZXRhXG4gICAgfSkpO1xuICB9XG5cbiAgaWYgKGlzRnVuY3Rpb24oY2hpbGRyZW4pKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuKF9leHRlbmRzKHt9LCBsZWdhY3lCYWcsIHtcbiAgICAgIG1ldGE6IG1ldGFcbiAgICB9KSk7XG4gIH1cblxuICBpZiAoY29tcG9uZW50KSB7XG4gICAgLy8gVGhpcyBiZWhhdmlvciBpcyBiYWNrd2FyZHMgY29tcGF0IHdpdGggZWFybGllciBGb3JtaWsgMC45IHRvIDEueFxuICAgIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJpbm5lclJlZlwiXSk7XG5cbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgICByZWY6IGlubmVyUmVmXG4gICAgICB9LCBmaWVsZCwge30sIHJlc3QpLCBjaGlsZHJlbik7XG4gICAgfSAvLyBXZSBkb24ndCBwYXNzIGBtZXRhYCBmb3IgYmFja3dhcmRzIGNvbXBhdFxuXG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChjb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAgIGZpZWxkOiBmaWVsZCxcbiAgICAgIGZvcm06IGZvcm1pa1xuICAgIH0sIHByb3BzKSwgY2hpbGRyZW4pO1xuICB9IC8vIGRlZmF1bHQgdG8gaW5wdXQgaGVyZSBzbyB3ZSBjYW4gY2hlY2sgZm9yIGJvdGggYGFzYCBhbmQgYGNoaWxkcmVuYCBhYm92ZVxuXG5cbiAgdmFyIGFzRWxlbWVudCA9IGlzIHx8ICdpbnB1dCc7XG5cbiAgaWYgKHR5cGVvZiBhc0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIF9pbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgICBfcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJpbm5lclJlZlwiXSk7XG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChhc0VsZW1lbnQsIF9leHRlbmRzKHtcbiAgICAgIHJlZjogX2lubmVyUmVmXG4gICAgfSwgZmllbGQsIHt9LCBfcmVzdCksIGNoaWxkcmVuKTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KGFzRWxlbWVudCwgX2V4dGVuZHMoe30sIGZpZWxkLCB7fSwgcHJvcHMpLCBjaGlsZHJlbik7XG59XG5cbnZhciBGb3JtID1cbi8qI19fUFVSRV9fKi9cbmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgLy8gaU9TIG5lZWRzIGFuIFwiYWN0aW9uXCIgYXR0cmlidXRlIGZvciBuaWNlIGlucHV0OiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk0ODUxNjIvNDA2NzI1XG4gIC8vIFdlIGRlZmF1bHQgdGhlIGFjdGlvbiB0byBcIiNcIiBpbiBjYXNlIHRoZSBwcmV2ZW50RGVmYXVsdCBmYWlscyAoanVzdCB1cGRhdGVzIHRoZSBVUkwgaGFzaClcbiAgdmFyIGFjdGlvbiA9IHByb3BzLmFjdGlvbixcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiYWN0aW9uXCJdKTtcblxuICB2YXIgX2FjdGlvbiA9IGFjdGlvbiB8fCAnIyc7XG5cbiAgdmFyIF91c2VGb3JtaWtDb250ZXh0ID0gdXNlRm9ybWlrQ29udGV4dCgpLFxuICAgICAgaGFuZGxlUmVzZXQgPSBfdXNlRm9ybWlrQ29udGV4dC5oYW5kbGVSZXNldCxcbiAgICAgIGhhbmRsZVN1Ym1pdCA9IF91c2VGb3JtaWtDb250ZXh0LmhhbmRsZVN1Ym1pdDtcblxuICByZXR1cm4gY3JlYXRlRWxlbWVudChcImZvcm1cIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgb25TdWJtaXQ6IGhhbmRsZVN1Ym1pdCxcbiAgICByZWY6IHJlZixcbiAgICBvblJlc2V0OiBoYW5kbGVSZXNldCxcbiAgICBhY3Rpb246IF9hY3Rpb25cbiAgfSwgcmVzdCkpO1xufSk7XG5Gb3JtLmRpc3BsYXlOYW1lID0gJ0Zvcm0nO1xuXG4vKipcclxuICogQSBwdWJsaWMgaGlnaGVyLW9yZGVyIGNvbXBvbmVudCB0byBhY2Nlc3MgdGhlIGltcGVyYXRpdmUgQVBJXHJcbiAqL1xuXG5mdW5jdGlvbiB3aXRoRm9ybWlrKF9yZWYpIHtcbiAgdmFyIF9yZWYkbWFwUHJvcHNUb1ZhbHVlcyA9IF9yZWYubWFwUHJvcHNUb1ZhbHVlcyxcbiAgICAgIG1hcFByb3BzVG9WYWx1ZXMgPSBfcmVmJG1hcFByb3BzVG9WYWx1ZXMgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh2YW5pbGxhUHJvcHMpIHtcbiAgICB2YXIgdmFsID0ge307XG5cbiAgICBmb3IgKHZhciBrIGluIHZhbmlsbGFQcm9wcykge1xuICAgICAgaWYgKHZhbmlsbGFQcm9wcy5oYXNPd25Qcm9wZXJ0eShrKSAmJiB0eXBlb2YgdmFuaWxsYVByb3BzW2tdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEB0b2RvIFR5cGVTY3JpcHQgZml4XG4gICAgICAgIHZhbFtrXSA9IHZhbmlsbGFQcm9wc1trXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsO1xuICB9IDogX3JlZiRtYXBQcm9wc1RvVmFsdWVzLFxuICAgICAgY29uZmlnID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wibWFwUHJvcHNUb1ZhbHVlc1wiXSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZUZvcm1payhDb21wb25lbnQkMSkge1xuICAgIHZhciBjb21wb25lbnREaXNwbGF5TmFtZSA9IENvbXBvbmVudCQxLmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudCQxLm5hbWUgfHwgQ29tcG9uZW50JDEuY29uc3RydWN0b3IgJiYgQ29tcG9uZW50JDEuY29uc3RydWN0b3IubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgICAvKipcclxuICAgICAqIFdlIG5lZWQgdG8gdXNlIGNsb3N1cmVzIGhlcmUgZm9yIHRvIHByb3ZpZGUgdGhlIHdyYXBwZWQgY29tcG9uZW50J3MgcHJvcHMgdG9cclxuICAgICAqIHRoZSByZXNwZWN0aXZlIHdpdGhGb3JtaWsgY29uZmlnIG1ldGhvZHMuXHJcbiAgICAgKi9cblxuICAgIHZhciBDID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0c0xvb3NlKEMsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBDKCkge1xuICAgICAgICB2YXIgX3RoaXM7XG5cbiAgICAgICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcblxuICAgICAgICBfdGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgICByZXR1cm4gY29uZmlnLnZhbGlkYXRlKHZhbHVlcywgX3RoaXMucHJvcHMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIF90aGlzLnZhbGlkYXRpb25TY2hlbWEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGlzRnVuY3Rpb24oY29uZmlnLnZhbGlkYXRpb25TY2hlbWEpID8gY29uZmlnLnZhbGlkYXRpb25TY2hlbWEoX3RoaXMucHJvcHMpIDogY29uZmlnLnZhbGlkYXRpb25TY2hlbWE7XG4gICAgICAgIH07XG5cbiAgICAgICAgX3RoaXMuaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24gKHZhbHVlcywgYWN0aW9ucykge1xuICAgICAgICAgIHJldHVybiBjb25maWcuaGFuZGxlU3VibWl0KHZhbHVlcywgX2V4dGVuZHMoe30sIGFjdGlvbnMsIHtcbiAgICAgICAgICAgIHByb3BzOiBfdGhpcy5wcm9wc1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSnVzdCBhdm9pZGluZyBhIHJlbmRlciBjYWxsYmFjayBmb3IgcGVyZiBoZXJlXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBfdGhpcy5yZW5kZXJGb3JtQ29tcG9uZW50ID0gZnVuY3Rpb24gKGZvcm1pa1Byb3BzKSB7XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50JDEsIE9iamVjdC5hc3NpZ24oe30sIF90aGlzLnByb3BzLCBmb3JtaWtQcm9wcykpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIF9wcm90byA9IEMucHJvdG90eXBlO1xuXG4gICAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiY2hpbGRyZW5cIl0pO1xuXG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KEZvcm1paywgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIGNvbmZpZywge1xuICAgICAgICAgIHZhbGlkYXRlOiBjb25maWcudmFsaWRhdGUgJiYgdGhpcy52YWxpZGF0ZSxcbiAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hOiBjb25maWcudmFsaWRhdGlvblNjaGVtYSAmJiB0aGlzLnZhbGlkYXRpb25TY2hlbWEsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlczogbWFwUHJvcHNUb1ZhbHVlcyh0aGlzLnByb3BzKSxcbiAgICAgICAgICBpbml0aWFsU3RhdHVzOiBjb25maWcubWFwUHJvcHNUb1N0YXR1cyAmJiBjb25maWcubWFwUHJvcHNUb1N0YXR1cyh0aGlzLnByb3BzKSxcbiAgICAgICAgICBpbml0aWFsRXJyb3JzOiBjb25maWcubWFwUHJvcHNUb0Vycm9ycyAmJiBjb25maWcubWFwUHJvcHNUb0Vycm9ycyh0aGlzLnByb3BzKSxcbiAgICAgICAgICBpbml0aWFsVG91Y2hlZDogY29uZmlnLm1hcFByb3BzVG9Ub3VjaGVkICYmIGNvbmZpZy5tYXBQcm9wc1RvVG91Y2hlZCh0aGlzLnByb3BzKSxcbiAgICAgICAgICBvblN1Ym1pdDogdGhpcy5oYW5kbGVTdWJtaXQsXG4gICAgICAgICAgY2hpbGRyZW46IHRoaXMucmVuZGVyRm9ybUNvbXBvbmVudFxuICAgICAgICB9KSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gQztcbiAgICB9KENvbXBvbmVudCk7XG5cbiAgICBDLmRpc3BsYXlOYW1lID0gXCJXaXRoRm9ybWlrKFwiICsgY29tcG9uZW50RGlzcGxheU5hbWUgKyBcIilcIjtcbiAgICByZXR1cm4gaG9pc3ROb25SZWFjdFN0YXRpY3MoQywgQ29tcG9uZW50JDEgLy8gY2FzdCB0eXBlIHRvIENvbXBvbmVudENsYXNzIChldmVuIGlmIFNGQylcbiAgICApO1xuICB9O1xufVxuXG4vKipcclxuICogQ29ubmVjdCBhbnkgY29tcG9uZW50IHRvIEZvcm1payBjb250ZXh0LCBhbmQgaW5qZWN0IGFzIGEgcHJvcCBjYWxsZWQgYGZvcm1pa2A7XHJcbiAqIEBwYXJhbSBDb21wIFJlYWN0IENvbXBvbmVudFxyXG4gKi9cblxuZnVuY3Rpb24gY29ubmVjdChDb21wKSB7XG4gIHZhciBDID0gZnVuY3Rpb24gQyhwcm9wcykge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KEZvcm1pa0NvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoZm9ybWlrKSB7XG4gICAgICAhISFmb3JtaWsgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiRm9ybWlrIGNvbnRleHQgaXMgdW5kZWZpbmVkLCBwbGVhc2UgdmVyaWZ5IHlvdSBhcmUgcmVuZGVyaW5nIDxGb3JtPiwgPEZpZWxkPiwgPEZhc3RGaWVsZD4sIDxGaWVsZEFycmF5Piwgb3IgeW91ciBjdXN0b20gY29udGV4dC11c2luZyBjb21wb25lbnQgYXMgYSBjaGlsZCBvZiBhIDxGb3JtaWs+IGNvbXBvbmVudC4gQ29tcG9uZW50IG5hbWU6IFwiICsgQ29tcC5uYW1lKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChDb21wLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICBmb3JtaWs6IGZvcm1pa1xuICAgICAgfSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBjb21wb25lbnREaXNwbGF5TmFtZSA9IENvbXAuZGlzcGxheU5hbWUgfHwgQ29tcC5uYW1lIHx8IENvbXAuY29uc3RydWN0b3IgJiYgQ29tcC5jb25zdHJ1Y3Rvci5uYW1lIHx8ICdDb21wb25lbnQnOyAvLyBBc3NpZ24gQ29tcCB0byBDLldyYXBwZWRDb21wb25lbnQgc28gd2UgY2FuIGFjY2VzcyB0aGUgaW5uZXIgY29tcG9uZW50IGluIHRlc3RzXG4gIC8vIEZvciBleGFtcGxlLCA8RmllbGQuV3JhcHBlZENvbXBvbmVudCAvPiBnZXRzIHVzIDxGaWVsZElubmVyLz5cblxuICBDLldyYXBwZWRDb21wb25lbnQgPSBDb21wO1xuICBDLmRpc3BsYXlOYW1lID0gXCJGb3JtaWtDb25uZWN0KFwiICsgY29tcG9uZW50RGlzcGxheU5hbWUgKyBcIilcIjtcbiAgcmV0dXJuIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKEMsIENvbXAgLy8gY2FzdCB0eXBlIHRvIENvbXBvbmVudENsYXNzIChldmVuIGlmIFNGQylcbiAgKTtcbn1cblxuLyoqXHJcbiAqIFNvbWUgYXJyYXkgaGVscGVycyFcclxuICovXG5cbnZhciBtb3ZlID0gZnVuY3Rpb24gbW92ZShhcnJheSwgZnJvbSwgdG8pIHtcbiAgdmFyIGNvcHkgPSBjb3B5QXJyYXlMaWtlKGFycmF5KTtcbiAgdmFyIHZhbHVlID0gY29weVtmcm9tXTtcbiAgY29weS5zcGxpY2UoZnJvbSwgMSk7XG4gIGNvcHkuc3BsaWNlKHRvLCAwLCB2YWx1ZSk7XG4gIHJldHVybiBjb3B5O1xufTtcbnZhciBzd2FwID0gZnVuY3Rpb24gc3dhcChhcnJheUxpa2UsIGluZGV4QSwgaW5kZXhCKSB7XG4gIHZhciBjb3B5ID0gY29weUFycmF5TGlrZShhcnJheUxpa2UpO1xuICB2YXIgYSA9IGNvcHlbaW5kZXhBXTtcbiAgY29weVtpbmRleEFdID0gY29weVtpbmRleEJdO1xuICBjb3B5W2luZGV4Ql0gPSBhO1xuICByZXR1cm4gY29weTtcbn07XG52YXIgaW5zZXJ0ID0gZnVuY3Rpb24gaW5zZXJ0KGFycmF5TGlrZSwgaW5kZXgsIHZhbHVlKSB7XG4gIHZhciBjb3B5ID0gY29weUFycmF5TGlrZShhcnJheUxpa2UpO1xuICBjb3B5LnNwbGljZShpbmRleCwgMCwgdmFsdWUpO1xuICByZXR1cm4gY29weTtcbn07XG52YXIgcmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UoYXJyYXlMaWtlLCBpbmRleCwgdmFsdWUpIHtcbiAgdmFyIGNvcHkgPSBjb3B5QXJyYXlMaWtlKGFycmF5TGlrZSk7XG4gIGNvcHlbaW5kZXhdID0gdmFsdWU7XG4gIHJldHVybiBjb3B5O1xufTtcblxudmFyIGNvcHlBcnJheUxpa2UgPSBmdW5jdGlvbiBjb3B5QXJyYXlMaWtlKGFycmF5TGlrZSkge1xuICBpZiAoIWFycmF5TGlrZSkge1xuICAgIHJldHVybiBbXTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFycmF5TGlrZSkpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KGFycmF5TGlrZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1heEluZGV4ID0gT2JqZWN0LmtleXMoYXJyYXlMaWtlKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KGtleSk7XG4gICAgfSkucmVkdWNlKGZ1bmN0aW9uIChtYXgsIGVsKSB7XG4gICAgICByZXR1cm4gZWwgPiBtYXggPyBlbCA6IG1heDtcbiAgICB9LCAwKTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShfZXh0ZW5kcyh7fSwgYXJyYXlMaWtlLCB7XG4gICAgICBsZW5ndGg6IG1heEluZGV4ICsgMVxuICAgIH0pKTtcbiAgfVxufTtcblxudmFyIEZpZWxkQXJyYXlJbm5lciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShGaWVsZEFycmF5SW5uZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEZpZWxkQXJyYXlJbm5lcihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuXG4gICAgX3RoaXMudXBkYXRlQXJyYXlGaWVsZCA9IGZ1bmN0aW9uIChmbiwgYWx0ZXJUb3VjaGVkLCBhbHRlckVycm9ycykge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgbmFtZSA9IF90aGlzJHByb3BzLm5hbWUsXG4gICAgICAgICAgc2V0Rm9ybWlrU3RhdGUgPSBfdGhpcyRwcm9wcy5mb3JtaWsuc2V0Rm9ybWlrU3RhdGU7XG4gICAgICBzZXRGb3JtaWtTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgIHZhciB1cGRhdGVFcnJvcnMgPSB0eXBlb2YgYWx0ZXJFcnJvcnMgPT09ICdmdW5jdGlvbicgPyBhbHRlckVycm9ycyA6IGZuO1xuICAgICAgICB2YXIgdXBkYXRlVG91Y2hlZCA9IHR5cGVvZiBhbHRlclRvdWNoZWQgPT09ICdmdW5jdGlvbicgPyBhbHRlclRvdWNoZWQgOiBmbjsgLy8gdmFsdWVzIGZuIHNob3VsZCBiZSBleGVjdXRlZCBiZWZvcmUgdXBkYXRlRXJyb3JzIGFuZCB1cGRhdGVUb3VjaGVkLFxuICAgICAgICAvLyBvdGhlcndpc2UgaXQgY2F1c2VzIGFuIGVycm9yIHdpdGggdW5zaGlmdC5cblxuICAgICAgICB2YXIgdmFsdWVzID0gc2V0SW4ocHJldlN0YXRlLnZhbHVlcywgbmFtZSwgZm4oZ2V0SW4ocHJldlN0YXRlLnZhbHVlcywgbmFtZSkpKTtcbiAgICAgICAgdmFyIGZpZWxkRXJyb3IgPSBhbHRlckVycm9ycyA/IHVwZGF0ZUVycm9ycyhnZXRJbihwcmV2U3RhdGUuZXJyb3JzLCBuYW1lKSkgOiB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBmaWVsZFRvdWNoZWQgPSBhbHRlclRvdWNoZWQgPyB1cGRhdGVUb3VjaGVkKGdldEluKHByZXZTdGF0ZS50b3VjaGVkLCBuYW1lKSkgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKGlzRW1wdHlBcnJheShmaWVsZEVycm9yKSkge1xuICAgICAgICAgIGZpZWxkRXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNFbXB0eUFycmF5KGZpZWxkVG91Y2hlZCkpIHtcbiAgICAgICAgICBmaWVsZFRvdWNoZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHByZXZTdGF0ZSwge1xuICAgICAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgICAgIGVycm9yczogYWx0ZXJFcnJvcnMgPyBzZXRJbihwcmV2U3RhdGUuZXJyb3JzLCBuYW1lLCBmaWVsZEVycm9yKSA6IHByZXZTdGF0ZS5lcnJvcnMsXG4gICAgICAgICAgdG91Y2hlZDogYWx0ZXJUb3VjaGVkID8gc2V0SW4ocHJldlN0YXRlLnRvdWNoZWQsIG5hbWUsIGZpZWxkVG91Y2hlZCkgOiBwcmV2U3RhdGUudG91Y2hlZFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5wdXNoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gX3RoaXMudXBkYXRlQXJyYXlGaWVsZChmdW5jdGlvbiAoYXJyYXlMaWtlKSB7XG4gICAgICAgIHJldHVybiBbXS5jb25jYXQoY29weUFycmF5TGlrZShhcnJheUxpa2UpLCBbY2xvbmVEZWVwKHZhbHVlKV0pO1xuICAgICAgfSwgZmFsc2UsIGZhbHNlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlUHVzaCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnB1c2godmFsdWUpO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc3dhcCA9IGZ1bmN0aW9uIChpbmRleEEsIGluZGV4Qikge1xuICAgICAgcmV0dXJuIF90aGlzLnVwZGF0ZUFycmF5RmllbGQoZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBzd2FwKGFycmF5LCBpbmRleEEsIGluZGV4Qik7XG4gICAgICB9LCB0cnVlLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlU3dhcCA9IGZ1bmN0aW9uIChpbmRleEEsIGluZGV4Qikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnN3YXAoaW5kZXhBLCBpbmRleEIpO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgX3RoaXMubW92ZSA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICAgICAgcmV0dXJuIF90aGlzLnVwZGF0ZUFycmF5RmllbGQoZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBtb3ZlKGFycmF5LCBmcm9tLCB0byk7XG4gICAgICB9LCB0cnVlLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlTW92ZSA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLm1vdmUoZnJvbSwgdG8pO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaW5zZXJ0ID0gZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIF90aGlzLnVwZGF0ZUFycmF5RmllbGQoZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBpbnNlcnQoYXJyYXksIGluZGV4LCB2YWx1ZSk7XG4gICAgICB9LCBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGluc2VydChhcnJheSwgaW5kZXgsIG51bGwpO1xuICAgICAgfSwgZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBpbnNlcnQoYXJyYXksIGluZGV4LCBudWxsKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVJbnNlcnQgPSBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuaW5zZXJ0KGluZGV4LCB2YWx1ZSk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBfdGhpcy5yZXBsYWNlID0gZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIF90aGlzLnVwZGF0ZUFycmF5RmllbGQoZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgIHJldHVybiByZXBsYWNlKGFycmF5LCBpbmRleCwgdmFsdWUpO1xuICAgICAgfSwgZmFsc2UsIGZhbHNlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlUmVwbGFjZSA9IGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZXBsYWNlKGluZGV4LCB2YWx1ZSk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBfdGhpcy51bnNoaWZ0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gLTE7XG5cbiAgICAgIF90aGlzLnVwZGF0ZUFycmF5RmllbGQoZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgIHZhciBhcnIgPSBhcnJheSA/IFt2YWx1ZV0uY29uY2F0KGFycmF5KSA6IFt2YWx1ZV07XG5cbiAgICAgICAgaWYgKGxlbmd0aCA8IDApIHtcbiAgICAgICAgICBsZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgIH0sIGZ1bmN0aW9uIChhcnJheSkge1xuICAgICAgICB2YXIgYXJyID0gYXJyYXkgPyBbbnVsbF0uY29uY2F0KGFycmF5KSA6IFtudWxsXTtcblxuICAgICAgICBpZiAobGVuZ3RoIDwgMCkge1xuICAgICAgICAgIGxlbmd0aCA9IGFyci5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyO1xuICAgICAgfSwgZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgIHZhciBhcnIgPSBhcnJheSA/IFtudWxsXS5jb25jYXQoYXJyYXkpIDogW251bGxdO1xuXG4gICAgICAgIGlmIChsZW5ndGggPCAwKSB7XG4gICAgICAgICAgbGVuZ3RoID0gYXJyLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlVW5zaGlmdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnVuc2hpZnQodmFsdWUpO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlUmVtb3ZlID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVtb3ZlKGluZGV4KTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZVBvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wb3AoKTtcbiAgICAgIH07XG4gICAgfTsgLy8gV2UgbmVlZCBUeXBlU2NyaXB0IGdlbmVyaWNzIG9uIHRoZXNlLCBzbyB3ZSdsbCBiaW5kIHRoZW0gaW4gdGhlIGNvbnN0cnVjdG9yXG4gICAgLy8gQHRvZG8gRml4IFRTIDMuMi4xXG5cblxuICAgIF90aGlzLnJlbW92ZSA9IF90aGlzLnJlbW92ZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5wb3AgPSBfdGhpcy5wb3AuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEZpZWxkQXJyYXlJbm5lci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAoIWlzRXF1YWwoZ2V0SW4ocHJldlByb3BzLmZvcm1pay52YWx1ZXMsIHByZXZQcm9wcy5uYW1lKSwgZ2V0SW4odGhpcy5wcm9wcy5mb3JtaWsudmFsdWVzLCB0aGlzLnByb3BzLm5hbWUpKSAmJiB0aGlzLnByb3BzLmZvcm1pay52YWxpZGF0ZU9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLmZvcm1pay52YWxpZGF0ZUZvcm0odGhpcy5wcm9wcy5mb3JtaWsudmFsdWVzKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShpbmRleCkge1xuICAgIC8vIFdlIG5lZWQgdG8gbWFrZSBzdXJlIHdlIGFsc28gcmVtb3ZlIHJlbGV2YW50IHBpZWNlcyBvZiBgdG91Y2hlZGAgYW5kIGBlcnJvcnNgXG4gICAgdmFyIHJlc3VsdDtcbiAgICB0aGlzLnVwZGF0ZUFycmF5RmllbGQoIC8vIHNvIHRoaXMgZ2V0cyBjYWxsIDMgdGltZXNcbiAgICBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgIHZhciBjb3B5ID0gYXJyYXkgPyBjb3B5QXJyYXlMaWtlKGFycmF5KSA6IFtdO1xuXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICByZXN1bHQgPSBjb3B5W2luZGV4XTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRnVuY3Rpb24oY29weS5zcGxpY2UpKSB7XG4gICAgICAgIGNvcHkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvcHk7XG4gICAgfSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBfcHJvdG8ucG9wID0gZnVuY3Rpb24gcG9wKCkge1xuICAgIC8vIFJlbW92ZSByZWxldmFudCBwaWVjZXMgb2YgYHRvdWNoZWRgIGFuZCBgZXJyb3JzYCB0b28hXG4gICAgdmFyIHJlc3VsdDtcbiAgICB0aGlzLnVwZGF0ZUFycmF5RmllbGQoIC8vIHNvIHRoaXMgZ2V0cyBjYWxsIDMgdGltZXNcbiAgICBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgIHZhciB0bXAgPSBhcnJheTtcblxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0ID0gdG1wICYmIHRtcC5wb3AgJiYgdG1wLnBvcCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG1wO1xuICAgIH0sIHRydWUsIHRydWUpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgYXJyYXlIZWxwZXJzID0ge1xuICAgICAgcHVzaDogdGhpcy5wdXNoLFxuICAgICAgcG9wOiB0aGlzLnBvcCxcbiAgICAgIHN3YXA6IHRoaXMuc3dhcCxcbiAgICAgIG1vdmU6IHRoaXMubW92ZSxcbiAgICAgIGluc2VydDogdGhpcy5pbnNlcnQsXG4gICAgICByZXBsYWNlOiB0aGlzLnJlcGxhY2UsXG4gICAgICB1bnNoaWZ0OiB0aGlzLnVuc2hpZnQsXG4gICAgICByZW1vdmU6IHRoaXMucmVtb3ZlLFxuICAgICAgaGFuZGxlUHVzaDogdGhpcy5oYW5kbGVQdXNoLFxuICAgICAgaGFuZGxlUG9wOiB0aGlzLmhhbmRsZVBvcCxcbiAgICAgIGhhbmRsZVN3YXA6IHRoaXMuaGFuZGxlU3dhcCxcbiAgICAgIGhhbmRsZU1vdmU6IHRoaXMuaGFuZGxlTW92ZSxcbiAgICAgIGhhbmRsZUluc2VydDogdGhpcy5oYW5kbGVJbnNlcnQsXG4gICAgICBoYW5kbGVSZXBsYWNlOiB0aGlzLmhhbmRsZVJlcGxhY2UsXG4gICAgICBoYW5kbGVVbnNoaWZ0OiB0aGlzLmhhbmRsZVVuc2hpZnQsXG4gICAgICBoYW5kbGVSZW1vdmU6IHRoaXMuaGFuZGxlUmVtb3ZlXG4gICAgfTtcblxuICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBjb21wb25lbnQgPSBfdGhpcyRwcm9wczIuY29tcG9uZW50LFxuICAgICAgICByZW5kZXIgPSBfdGhpcyRwcm9wczIucmVuZGVyLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMi5jaGlsZHJlbixcbiAgICAgICAgbmFtZSA9IF90aGlzJHByb3BzMi5uYW1lLFxuICAgICAgICBfdGhpcyRwcm9wczIkZm9ybWlrID0gX3RoaXMkcHJvcHMyLmZvcm1payxcbiAgICAgICAgcmVzdE9mRm9ybWlrID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMyJGZvcm1paywgW1widmFsaWRhdGVcIiwgXCJ2YWxpZGF0aW9uU2NoZW1hXCJdKTtcblxuICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCBhcnJheUhlbHBlcnMsIHtcbiAgICAgIGZvcm06IHJlc3RPZkZvcm1payxcbiAgICAgIG5hbWU6IG5hbWVcbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wb25lbnQgPyBjcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMpIDogcmVuZGVyID8gcmVuZGVyKHByb3BzKSA6IGNoaWxkcmVuIC8vIGNoaWxkcmVuIGNvbWUgbGFzdCwgYWx3YXlzIGNhbGxlZFxuICAgID8gdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nID8gY2hpbGRyZW4ocHJvcHMpIDogIWlzRW1wdHlDaGlsZHJlbihjaGlsZHJlbikgPyBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKSA6IG51bGwgOiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBGaWVsZEFycmF5SW5uZXI7XG59KENvbXBvbmVudCk7XG5cbkZpZWxkQXJyYXlJbm5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIHZhbGlkYXRlT25DaGFuZ2U6IHRydWVcbn07XG52YXIgRmllbGRBcnJheSA9XG4vKiNfX1BVUkVfXyovXG5jb25uZWN0KEZpZWxkQXJyYXlJbm5lcik7XG5cbnZhciBFcnJvck1lc3NhZ2VJbXBsID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEVycm9yTWVzc2FnZUltcGwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEVycm9yTWVzc2FnZUltcGwoKSB7XG4gICAgcmV0dXJuIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEVycm9yTWVzc2FnZUltcGwucHJvdG90eXBlO1xuXG4gIF9wcm90by5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUocHJvcHMpIHtcbiAgICBpZiAoZ2V0SW4odGhpcy5wcm9wcy5mb3JtaWsuZXJyb3JzLCB0aGlzLnByb3BzLm5hbWUpICE9PSBnZXRJbihwcm9wcy5mb3JtaWsuZXJyb3JzLCB0aGlzLnByb3BzLm5hbWUpIHx8IGdldEluKHRoaXMucHJvcHMuZm9ybWlrLnRvdWNoZWQsIHRoaXMucHJvcHMubmFtZSkgIT09IGdldEluKHByb3BzLmZvcm1pay50b3VjaGVkLCB0aGlzLnByb3BzLm5hbWUpIHx8IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjb21wb25lbnQgPSBfdGhpcyRwcm9wcy5jb21wb25lbnQsXG4gICAgICAgIGZvcm1payA9IF90aGlzJHByb3BzLmZvcm1payxcbiAgICAgICAgcmVuZGVyID0gX3RoaXMkcHJvcHMucmVuZGVyLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBuYW1lID0gX3RoaXMkcHJvcHMubmFtZSxcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjb21wb25lbnRcIiwgXCJmb3JtaWtcIiwgXCJyZW5kZXJcIiwgXCJjaGlsZHJlblwiLCBcIm5hbWVcIl0pO1xuXG4gICAgdmFyIHRvdWNoID0gZ2V0SW4oZm9ybWlrLnRvdWNoZWQsIG5hbWUpO1xuICAgIHZhciBlcnJvciA9IGdldEluKGZvcm1pay5lcnJvcnMsIG5hbWUpO1xuICAgIHJldHVybiAhIXRvdWNoICYmICEhZXJyb3IgPyByZW5kZXIgPyBpc0Z1bmN0aW9uKHJlbmRlcikgPyByZW5kZXIoZXJyb3IpIDogbnVsbCA6IGNoaWxkcmVuID8gaXNGdW5jdGlvbihjaGlsZHJlbikgPyBjaGlsZHJlbihlcnJvcikgOiBudWxsIDogY29tcG9uZW50ID8gY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHJlc3QsIGVycm9yKSA6IGVycm9yIDogbnVsbDtcbiAgfTtcblxuICByZXR1cm4gRXJyb3JNZXNzYWdlSW1wbDtcbn0oQ29tcG9uZW50KTtcblxudmFyIEVycm9yTWVzc2FnZSA9XG4vKiNfX1BVUkVfXyovXG5jb25uZWN0KEVycm9yTWVzc2FnZUltcGwpO1xuXG4vKipcclxuICogQ3VzdG9tIEZpZWxkIGNvbXBvbmVudCBmb3IgcXVpY2tseSBob29raW5nIGludG8gRm9ybWlrXHJcbiAqIGNvbnRleHQgYW5kIHdpcmluZyB1cCBmb3Jtcy5cclxuICovXG5cbnZhciBGYXN0RmllbGRJbm5lciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShGYXN0RmllbGRJbm5lciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRmFzdEZpZWxkSW5uZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICB2YXIgcmVuZGVyID0gcHJvcHMucmVuZGVyLFxuICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICAgIGlzID0gcHJvcHMuYXMsXG4gICAgICAgIG5hbWUgPSBwcm9wcy5uYW1lO1xuICAgICEhcmVuZGVyID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIjxGYXN0RmllbGQgcmVuZGVyPiBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGEgY2hpbGQgY2FsbGJhY2sgZnVuY3Rpb24gaW5zdGVhZDogPEZhc3RGaWVsZCBuYW1lPXtcIiArIG5hbWUgKyBcIn0+e3Byb3BzID0+IC4uLn08L0Zhc3RGaWVsZD4gaW5zdGVhZC5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICEhKGNvbXBvbmVudCAmJiByZW5kZXIpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnWW91IHNob3VsZCBub3QgdXNlIDxGYXN0RmllbGQgY29tcG9uZW50PiBhbmQgPEZhc3RGaWVsZCByZW5kZXI+IGluIHRoZSBzYW1lIDxGYXN0RmllbGQ+IGNvbXBvbmVudDsgPEZhc3RGaWVsZCBjb21wb25lbnQ+IHdpbGwgYmUgaWdub3JlZCcpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAhIShpcyAmJiBjaGlsZHJlbiAmJiBpc0Z1bmN0aW9uKGNoaWxkcmVuKSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdZb3Ugc2hvdWxkIG5vdCB1c2UgPEZhc3RGaWVsZCBhcz4gYW5kIDxGYXN0RmllbGQgY2hpbGRyZW4+IGFzIGEgZnVuY3Rpb24gaW4gdGhlIHNhbWUgPEZhc3RGaWVsZD4gY29tcG9uZW50OyA8RmFzdEZpZWxkIGFzPiB3aWxsIGJlIGlnbm9yZWQuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICEhKGNvbXBvbmVudCAmJiBjaGlsZHJlbiAmJiBpc0Z1bmN0aW9uKGNoaWxkcmVuKSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdZb3Ugc2hvdWxkIG5vdCB1c2UgPEZhc3RGaWVsZCBjb21wb25lbnQ+IGFuZCA8RmFzdEZpZWxkIGNoaWxkcmVuPiBhcyBhIGZ1bmN0aW9uIGluIHRoZSBzYW1lIDxGYXN0RmllbGQ+IGNvbXBvbmVudDsgPEZhc3RGaWVsZCBjb21wb25lbnQ+IHdpbGwgYmUgaWdub3JlZC4nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgISEocmVuZGVyICYmIGNoaWxkcmVuICYmICFpc0VtcHR5Q2hpbGRyZW4oY2hpbGRyZW4pKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgJ1lvdSBzaG91bGQgbm90IHVzZSA8RmFzdEZpZWxkIHJlbmRlcj4gYW5kIDxGYXN0RmllbGQgY2hpbGRyZW4+IGluIHRoZSBzYW1lIDxGYXN0RmllbGQ+IGNvbXBvbmVudDsgPEZhc3RGaWVsZCBjaGlsZHJlbj4gd2lsbCBiZSBpZ25vcmVkJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBGYXN0RmllbGRJbm5lci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShwcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLnNob3VsZFVwZGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2hvdWxkVXBkYXRlKHByb3BzLCB0aGlzLnByb3BzKTtcbiAgICB9IGVsc2UgaWYgKHByb3BzLm5hbWUgIT09IHRoaXMucHJvcHMubmFtZSB8fCBnZXRJbihwcm9wcy5mb3JtaWsudmFsdWVzLCB0aGlzLnByb3BzLm5hbWUpICE9PSBnZXRJbih0aGlzLnByb3BzLmZvcm1pay52YWx1ZXMsIHRoaXMucHJvcHMubmFtZSkgfHwgZ2V0SW4ocHJvcHMuZm9ybWlrLmVycm9ycywgdGhpcy5wcm9wcy5uYW1lKSAhPT0gZ2V0SW4odGhpcy5wcm9wcy5mb3JtaWsuZXJyb3JzLCB0aGlzLnByb3BzLm5hbWUpIHx8IGdldEluKHByb3BzLmZvcm1pay50b3VjaGVkLCB0aGlzLnByb3BzLm5hbWUpICE9PSBnZXRJbih0aGlzLnByb3BzLmZvcm1pay50b3VjaGVkLCB0aGlzLnByb3BzLm5hbWUpIHx8IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCB8fCBwcm9wcy5mb3JtaWsuaXNTdWJtaXR0aW5nICE9PSB0aGlzLnByb3BzLmZvcm1pay5pc1N1Ym1pdHRpbmcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFJlZ2lzdGVyIHRoZSBGaWVsZCB3aXRoIHRoZSBwYXJlbnQgRm9ybWlrLiBQYXJlbnQgd2lsbCBjeWNsZSB0aHJvdWdoXG4gICAgLy8gcmVnaXN0ZXJlZCBGaWVsZCdzIHZhbGlkYXRlIGZucyByaWdodCBwcmlvciB0byBzdWJtaXRcbiAgICB0aGlzLnByb3BzLmZvcm1pay5yZWdpc3RlckZpZWxkKHRoaXMucHJvcHMubmFtZSwge1xuICAgICAgdmFsaWRhdGU6IHRoaXMucHJvcHMudmFsaWRhdGVcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLm5hbWUgIT09IHByZXZQcm9wcy5uYW1lKSB7XG4gICAgICB0aGlzLnByb3BzLmZvcm1pay51bnJlZ2lzdGVyRmllbGQocHJldlByb3BzLm5hbWUpO1xuICAgICAgdGhpcy5wcm9wcy5mb3JtaWsucmVnaXN0ZXJGaWVsZCh0aGlzLnByb3BzLm5hbWUsIHtcbiAgICAgICAgdmFsaWRhdGU6IHRoaXMucHJvcHMudmFsaWRhdGVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnZhbGlkYXRlICE9PSBwcmV2UHJvcHMudmFsaWRhdGUpIHtcbiAgICAgIHRoaXMucHJvcHMuZm9ybWlrLnJlZ2lzdGVyRmllbGQodGhpcy5wcm9wcy5uYW1lLCB7XG4gICAgICAgIHZhbGlkYXRlOiB0aGlzLnByb3BzLnZhbGlkYXRlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5mb3JtaWsudW5yZWdpc3RlckZpZWxkKHRoaXMucHJvcHMubmFtZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBuYW1lID0gX3RoaXMkcHJvcHMubmFtZSxcbiAgICAgICAgcmVuZGVyID0gX3RoaXMkcHJvcHMucmVuZGVyLFxuICAgICAgICBpcyA9IF90aGlzJHByb3BzLmFzLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBjb21wb25lbnQgPSBfdGhpcyRwcm9wcy5jb21wb25lbnQsXG4gICAgICAgIGZvcm1payA9IF90aGlzJHByb3BzLmZvcm1payxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1widmFsaWRhdGVcIiwgXCJuYW1lXCIsIFwicmVuZGVyXCIsIFwiYXNcIiwgXCJjaGlsZHJlblwiLCBcImNvbXBvbmVudFwiLCBcInNob3VsZFVwZGF0ZVwiLCBcImZvcm1pa1wiXSk7XG5cbiAgICB2YXIgcmVzdE9mRm9ybWlrID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoZm9ybWlrLCBbXCJ2YWxpZGF0ZVwiLCBcInZhbGlkYXRpb25TY2hlbWFcIl0pO1xuXG4gICAgdmFyIGZpZWxkID0ge1xuICAgICAgdmFsdWU6IHByb3BzLnR5cGUgPT09ICdyYWRpbycgfHwgcHJvcHMudHlwZSA9PT0gJ2NoZWNrYm94JyA/IHByb3BzLnZhbHVlIC8vIFJlYWN0IHVzZXMgY2hlY2tlZD17fSBmb3IgdGhlc2UgaW5wdXRzXG4gICAgICA6IGdldEluKGZvcm1pay52YWx1ZXMsIG5hbWUpLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIG9uQ2hhbmdlOiBmb3JtaWsuaGFuZGxlQ2hhbmdlLFxuICAgICAgb25CbHVyOiBmb3JtaWsuaGFuZGxlQmx1clxuICAgIH07XG4gICAgdmFyIG1ldGEgPSB7XG4gICAgICB2YWx1ZTogZ2V0SW4oZm9ybWlrLnZhbHVlcywgbmFtZSksXG4gICAgICBlcnJvcjogZ2V0SW4oZm9ybWlrLmVycm9ycywgbmFtZSksXG4gICAgICB0b3VjaGVkOiAhIWdldEluKGZvcm1pay50b3VjaGVkLCBuYW1lKSxcbiAgICAgIGluaXRpYWxWYWx1ZTogZ2V0SW4oZm9ybWlrLmluaXRpYWxWYWx1ZXMsIG5hbWUpLFxuICAgICAgaW5pdGlhbFRvdWNoZWQ6ICEhZ2V0SW4oZm9ybWlrLmluaXRpYWxUb3VjaGVkLCBuYW1lKSxcbiAgICAgIGluaXRpYWxFcnJvcjogZ2V0SW4oZm9ybWlrLmluaXRpYWxFcnJvcnMsIG5hbWUpXG4gICAgfTtcbiAgICB2YXIgYmFnID0ge1xuICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgbWV0YTogbWV0YSxcbiAgICAgIGZvcm06IHJlc3RPZkZvcm1pa1xuICAgIH07XG5cbiAgICBpZiAocmVuZGVyKSB7XG4gICAgICByZXR1cm4gcmVuZGVyKGJhZyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRnVuY3Rpb24oY2hpbGRyZW4pKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW4oYmFnKTtcbiAgICB9XG5cbiAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAvLyBUaGlzIGJlaGF2aW9yIGlzIGJhY2t3YXJkcyBjb21wYXQgd2l0aCBlYXJsaWVyIEZvcm1payAwLjkgdG8gMS54XG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcImlubmVyUmVmXCJdKTtcblxuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChjb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAgICAgICByZWY6IGlubmVyUmVmXG4gICAgICAgIH0sIGZpZWxkLCB7fSwgcmVzdCksIGNoaWxkcmVuKTtcbiAgICAgIH0gLy8gV2UgZG9uJ3QgcGFzcyBgbWV0YWAgZm9yIGJhY2t3YXJkcyBjb21wYXRcblxuXG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChjb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgICBmb3JtOiBmb3JtaWtcbiAgICAgIH0sIHByb3BzKSwgY2hpbGRyZW4pO1xuICAgIH0gLy8gZGVmYXVsdCB0byBpbnB1dCBoZXJlIHNvIHdlIGNhbiBjaGVjayBmb3IgYm90aCBgYXNgIGFuZCBgY2hpbGRyZW5gIGFib3ZlXG5cblxuICAgIHZhciBhc0VsZW1lbnQgPSBpcyB8fCAnaW5wdXQnO1xuXG4gICAgaWYgKHR5cGVvZiBhc0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgX2lubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgICAgX3Jlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiaW5uZXJSZWZcIl0pO1xuXG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChhc0VsZW1lbnQsIF9leHRlbmRzKHtcbiAgICAgICAgcmVmOiBfaW5uZXJSZWZcbiAgICAgIH0sIGZpZWxkLCB7fSwgX3Jlc3QpLCBjaGlsZHJlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoYXNFbGVtZW50LCBfZXh0ZW5kcyh7fSwgZmllbGQsIHt9LCBwcm9wcyksIGNoaWxkcmVuKTtcbiAgfTtcblxuICByZXR1cm4gRmFzdEZpZWxkSW5uZXI7XG59KENvbXBvbmVudCk7XG5cbnZhciBGYXN0RmllbGQgPVxuLyojX19QVVJFX18qL1xuY29ubmVjdChGYXN0RmllbGRJbm5lcik7XG5cbmV4cG9ydCB7IEVycm9yTWVzc2FnZSwgRmFzdEZpZWxkLCBGaWVsZCwgRmllbGRBcnJheSwgRm9ybSwgRm9ybWlrLCBGb3JtaWtDb25zdW1lciwgRm9ybWlrQ29udGV4dCwgRm9ybWlrUHJvdmlkZXIsIGNvbm5lY3QsIGdldEFjdGl2ZUVsZW1lbnQsIGdldEluLCBpbnNlcnQsIGlzRW1wdHlBcnJheSwgaXNFbXB0eUNoaWxkcmVuLCBpc0Z1bmN0aW9uLCBpc0lucHV0RXZlbnQsIGlzSW50ZWdlciwgaXNOYU4kMSBhcyBpc05hTiwgaXNPYmplY3QsIGlzUHJvbWlzZSwgaXNTdHJpbmcsIG1vdmUsIHByZXBhcmVEYXRhRm9yVmFsaWRhdGlvbiwgcmVwbGFjZSwgc2V0SW4sIHNldE5lc3RlZE9iamVjdFZhbHVlcywgc3dhcCwgdXNlRmllbGQsIHVzZUZvcm1paywgdXNlRm9ybWlrQ29udGV4dCwgdmFsaWRhdGVZdXBTY2hlbWEsIHdpdGhGb3JtaWssIHl1cFRvRm9ybUVycm9ycyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWlrLmVzbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIG1peGluczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7fTtcblRZUEVfU1RBVElDU1tyZWFjdElzLkZvcndhcmRSZWZdID0gRk9SV0FSRF9SRUZfU1RBVElDUztcblRZUEVfU1RBVElDU1tyZWFjdElzLk1lbW9dID0gTUVNT19TVEFUSUNTO1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICAvLyBSZWFjdCB2MTYuMTEgYW5kIGJlbG93XG4gIGlmIChyZWFjdElzLmlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfSAvLyBSZWFjdCB2MTYuMTIgYW5kIGFib3ZlXG5cblxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFsnJCR0eXBlb2YnXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgdmFyIHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwiaW1wb3J0IGdldE5hdGl2ZSBmcm9tICcuL19nZXROYXRpdmUuanMnO1xuaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0YVZpZXc7XG4iLCJpbXBvcnQgaGFzaENsZWFyIGZyb20gJy4vX2hhc2hDbGVhci5qcyc7XG5pbXBvcnQgaGFzaERlbGV0ZSBmcm9tICcuL19oYXNoRGVsZXRlLmpzJztcbmltcG9ydCBoYXNoR2V0IGZyb20gJy4vX2hhc2hHZXQuanMnO1xuaW1wb3J0IGhhc2hIYXMgZnJvbSAnLi9faGFzaEhhcy5qcyc7XG5pbXBvcnQgaGFzaFNldCBmcm9tICcuL19oYXNoU2V0LmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbmV4cG9ydCBkZWZhdWx0IEhhc2g7XG4iLCJpbXBvcnQgbGlzdENhY2hlQ2xlYXIgZnJvbSAnLi9fbGlzdENhY2hlQ2xlYXIuanMnO1xuaW1wb3J0IGxpc3RDYWNoZURlbGV0ZSBmcm9tICcuL19saXN0Q2FjaGVEZWxldGUuanMnO1xuaW1wb3J0IGxpc3RDYWNoZUdldCBmcm9tICcuL19saXN0Q2FjaGVHZXQuanMnO1xuaW1wb3J0IGxpc3RDYWNoZUhhcyBmcm9tICcuL19saXN0Q2FjaGVIYXMuanMnO1xuaW1wb3J0IGxpc3RDYWNoZVNldCBmcm9tICcuL19saXN0Q2FjaGVTZXQuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RDYWNoZTtcbiIsImltcG9ydCBnZXROYXRpdmUgZnJvbSAnLi9fZ2V0TmF0aXZlLmpzJztcbmltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFwO1xuIiwiaW1wb3J0IG1hcENhY2hlQ2xlYXIgZnJvbSAnLi9fbWFwQ2FjaGVDbGVhci5qcyc7XG5pbXBvcnQgbWFwQ2FjaGVEZWxldGUgZnJvbSAnLi9fbWFwQ2FjaGVEZWxldGUuanMnO1xuaW1wb3J0IG1hcENhY2hlR2V0IGZyb20gJy4vX21hcENhY2hlR2V0LmpzJztcbmltcG9ydCBtYXBDYWNoZUhhcyBmcm9tICcuL19tYXBDYWNoZUhhcy5qcyc7XG5pbXBvcnQgbWFwQ2FjaGVTZXQgZnJvbSAnLi9fbWFwQ2FjaGVTZXQuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxuZXhwb3J0IGRlZmF1bHQgTWFwQ2FjaGU7XG4iLCJpbXBvcnQgZ2V0TmF0aXZlIGZyb20gJy4vX2dldE5hdGl2ZS5qcyc7XG5pbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvbWlzZTtcbiIsImltcG9ydCBnZXROYXRpdmUgZnJvbSAnLi9fZ2V0TmF0aXZlLmpzJztcbmltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0O1xuIiwiaW1wb3J0IExpc3RDYWNoZSBmcm9tICcuL19MaXN0Q2FjaGUuanMnO1xuaW1wb3J0IHN0YWNrQ2xlYXIgZnJvbSAnLi9fc3RhY2tDbGVhci5qcyc7XG5pbXBvcnQgc3RhY2tEZWxldGUgZnJvbSAnLi9fc3RhY2tEZWxldGUuanMnO1xuaW1wb3J0IHN0YWNrR2V0IGZyb20gJy4vX3N0YWNrR2V0LmpzJztcbmltcG9ydCBzdGFja0hhcyBmcm9tICcuL19zdGFja0hhcy5qcyc7XG5pbXBvcnQgc3RhY2tTZXQgZnJvbSAnLi9fc3RhY2tTZXQuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWNrO1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5leHBvcnQgZGVmYXVsdCBTeW1ib2w7XG4iLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxuZXhwb3J0IGRlZmF1bHQgVWludDhBcnJheTtcbiIsImltcG9ydCBnZXROYXRpdmUgZnJvbSAnLi9fZ2V0TmF0aXZlLmpzJztcbmltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5leHBvcnQgZGVmYXVsdCBXZWFrTWFwO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZm9yRWFjaGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RWFjaChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkgPT09IGZhbHNlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcnJheUVhY2g7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFycmF5RmlsdGVyO1xuIiwiaW1wb3J0IGJhc2VUaW1lcyBmcm9tICcuL19iYXNlVGltZXMuanMnO1xuaW1wb3J0IGlzQXJndW1lbnRzIGZyb20gJy4vaXNBcmd1bWVudHMuanMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5LmpzJztcbmltcG9ydCBpc0J1ZmZlciBmcm9tICcuL2lzQnVmZmVyLmpzJztcbmltcG9ydCBpc0luZGV4IGZyb20gJy4vX2lzSW5kZXguanMnO1xuaW1wb3J0IGlzVHlwZWRBcnJheSBmcm9tICcuL2lzVHlwZWRBcnJheS5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXJyYXlMaWtlS2V5cztcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFycmF5TWFwO1xuIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcnJheVB1c2g7XG4iLCJpbXBvcnQgYmFzZUFzc2lnblZhbHVlIGZyb20gJy4vX2Jhc2VBc3NpZ25WYWx1ZS5qcyc7XG5pbXBvcnQgZXEgZnJvbSAnLi9lcS5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzc2lnblZhbHVlO1xuIiwiaW1wb3J0IGVxIGZyb20gJy4vZXEuanMnO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3NvY0luZGV4T2Y7XG4iLCJpbXBvcnQgY29weU9iamVjdCBmcm9tICcuL19jb3B5T2JqZWN0LmpzJztcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cy5qcyc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUFzc2lnbjtcbiIsImltcG9ydCBjb3B5T2JqZWN0IGZyb20gJy4vX2NvcHlPYmplY3QuanMnO1xuaW1wb3J0IGtleXNJbiBmcm9tICcuL2tleXNJbi5qcyc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduSW5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25JbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzSW4oc291cmNlKSwgb2JqZWN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUFzc2lnbkluO1xuIiwiaW1wb3J0IGRlZmluZVByb3BlcnR5IGZyb20gJy4vX2RlZmluZVByb3BlcnR5LmpzJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYXNzaWduVmFsdWVgIGFuZCBgYXNzaWduTWVyZ2VWYWx1ZWAgd2l0aG91dFxuICogdmFsdWUgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSA9PSAnX19wcm90b19fJyAmJiBkZWZpbmVQcm9wZXJ0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG4gICAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAgICdlbnVtZXJhYmxlJzogdHJ1ZSxcbiAgICAgICd2YWx1ZSc6IHZhbHVlLFxuICAgICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUFzc2lnblZhbHVlO1xuIiwiaW1wb3J0IFN0YWNrIGZyb20gJy4vX1N0YWNrLmpzJztcbmltcG9ydCBhcnJheUVhY2ggZnJvbSAnLi9fYXJyYXlFYWNoLmpzJztcbmltcG9ydCBhc3NpZ25WYWx1ZSBmcm9tICcuL19hc3NpZ25WYWx1ZS5qcyc7XG5pbXBvcnQgYmFzZUFzc2lnbiBmcm9tICcuL19iYXNlQXNzaWduLmpzJztcbmltcG9ydCBiYXNlQXNzaWduSW4gZnJvbSAnLi9fYmFzZUFzc2lnbkluLmpzJztcbmltcG9ydCBjbG9uZUJ1ZmZlciBmcm9tICcuL19jbG9uZUJ1ZmZlci5qcyc7XG5pbXBvcnQgY29weUFycmF5IGZyb20gJy4vX2NvcHlBcnJheS5qcyc7XG5pbXBvcnQgY29weVN5bWJvbHMgZnJvbSAnLi9fY29weVN5bWJvbHMuanMnO1xuaW1wb3J0IGNvcHlTeW1ib2xzSW4gZnJvbSAnLi9fY29weVN5bWJvbHNJbi5qcyc7XG5pbXBvcnQgZ2V0QWxsS2V5cyBmcm9tICcuL19nZXRBbGxLZXlzLmpzJztcbmltcG9ydCBnZXRBbGxLZXlzSW4gZnJvbSAnLi9fZ2V0QWxsS2V5c0luLmpzJztcbmltcG9ydCBnZXRUYWcgZnJvbSAnLi9fZ2V0VGFnLmpzJztcbmltcG9ydCBpbml0Q2xvbmVBcnJheSBmcm9tICcuL19pbml0Q2xvbmVBcnJheS5qcyc7XG5pbXBvcnQgaW5pdENsb25lQnlUYWcgZnJvbSAnLi9faW5pdENsb25lQnlUYWcuanMnO1xuaW1wb3J0IGluaXRDbG9uZU9iamVjdCBmcm9tICcuL19pbml0Q2xvbmVPYmplY3QuanMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5LmpzJztcbmltcG9ydCBpc0J1ZmZlciBmcm9tICcuL2lzQnVmZmVyLmpzJztcbmltcG9ydCBpc01hcCBmcm9tICcuL2lzTWFwLmpzJztcbmltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0LmpzJztcbmltcG9ydCBpc1NldCBmcm9tICcuL2lzU2V0LmpzJztcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cy5qcyc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMSxcbiAgICBDTE9ORV9GTEFUX0ZMQUcgPSAyLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgc3VwcG9ydGVkIGJ5IGBfLmNsb25lYC4gKi9cbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuY2xvbmVhYmxlVGFnc1thcnJheUJ1ZmZlclRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGFWaWV3VGFnXSA9XG5jbG9uZWFibGVUYWdzW2Jvb2xUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRlVGFnXSA9XG5jbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID0gY2xvbmVhYmxlVGFnc1tmbG9hdDY0VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDhUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQxNlRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW21hcFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID1cbmNsb25lYWJsZVRhZ3NbcmVnZXhwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc2V0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3N0cmluZ1RhZ10gPSBjbG9uZWFibGVUYWdzW3N5bWJvbFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbmNsb25lYWJsZVRhZ3NbZXJyb3JUYWddID0gY2xvbmVhYmxlVGFnc1tmdW5jVGFnXSA9XG5jbG9uZWFibGVUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBEZWVwIGNsb25lXG4gKiAgMiAtIEZsYXR0ZW4gaW5oZXJpdGVkIHByb3BlcnRpZXNcbiAqICA0IC0gQ2xvbmUgc3ltYm9sc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgdGhlaXIgY2xvbmUgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIG9iamVjdCwgc3RhY2spIHtcbiAgdmFyIHJlc3VsdCxcbiAgICAgIGlzRGVlcCA9IGJpdG1hc2sgJiBDTE9ORV9ERUVQX0ZMQUcsXG4gICAgICBpc0ZsYXQgPSBiaXRtYXNrICYgQ0xPTkVfRkxBVF9GTEFHLFxuICAgICAgaXNGdWxsID0gYml0bWFzayAmIENMT05FX1NZTUJPTFNfRkxBRztcblxuICBpZiAoY3VzdG9taXplcikge1xuICAgIHJlc3VsdCA9IG9iamVjdCA/IGN1c3RvbWl6ZXIodmFsdWUsIGtleSwgb2JqZWN0LCBzdGFjaykgOiBjdXN0b21pemVyKHZhbHVlKTtcbiAgfVxuICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpO1xuICBpZiAoaXNBcnIpIHtcbiAgICByZXN1bHQgPSBpbml0Q2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgaWYgKCFpc0RlZXApIHtcbiAgICAgIHJldHVybiBjb3B5QXJyYXkodmFsdWUsIHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpLFxuICAgICAgICBpc0Z1bmMgPSB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xuXG4gICAgaWYgKGlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNsb25lQnVmZmVyKHZhbHVlLCBpc0RlZXApO1xuICAgIH1cbiAgICBpZiAodGFnID09IG9iamVjdFRhZyB8fCB0YWcgPT0gYXJnc1RhZyB8fCAoaXNGdW5jICYmICFvYmplY3QpKSB7XG4gICAgICByZXN1bHQgPSAoaXNGbGF0IHx8IGlzRnVuYykgPyB7fSA6IGluaXRDbG9uZU9iamVjdCh2YWx1ZSk7XG4gICAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgICByZXR1cm4gaXNGbGF0XG4gICAgICAgICAgPyBjb3B5U3ltYm9sc0luKHZhbHVlLCBiYXNlQXNzaWduSW4ocmVzdWx0LCB2YWx1ZSkpXG4gICAgICAgICAgOiBjb3B5U3ltYm9scyh2YWx1ZSwgYmFzZUFzc2lnbihyZXN1bHQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xvbmVhYmxlVGFnc1t0YWddKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lQnlUYWcodmFsdWUsIHRhZywgaXNEZWVwKTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIHJldHVybiBpdHMgY29ycmVzcG9uZGluZyBjbG9uZS5cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQodmFsdWUpO1xuICBpZiAoc3RhY2tlZCkge1xuICAgIHJldHVybiBzdGFja2VkO1xuICB9XG4gIHN0YWNrLnNldCh2YWx1ZSwgcmVzdWx0KTtcblxuICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbihzdWJWYWx1ZSkge1xuICAgICAgcmVzdWx0LmFkZChiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN1YlZhbHVlLCB2YWx1ZSwgc3RhY2spKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChpc01hcCh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIga2V5c0Z1bmMgPSBpc0Z1bGxcbiAgICA/IChpc0ZsYXQgPyBnZXRBbGxLZXlzSW4gOiBnZXRBbGxLZXlzKVxuICAgIDogKGlzRmxhdCA/IGtleXNJbiA6IGtleXMpO1xuXG4gIHZhciBwcm9wcyA9IGlzQXJyID8gdW5kZWZpbmVkIDoga2V5c0Z1bmModmFsdWUpO1xuICBhcnJheUVhY2gocHJvcHMgfHwgdmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIGtleSA9IHN1YlZhbHVlO1xuICAgICAgc3ViVmFsdWUgPSB2YWx1ZVtrZXldO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBwb3B1bGF0ZSBjbG9uZSAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGFzc2lnblZhbHVlKHJlc3VsdCwga2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlQ2xvbmU7XG4iLCJpbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byBUaGUgb2JqZWN0IHRvIGluaGVyaXQgZnJvbS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbnZhciBiYXNlQ3JlYXRlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBvYmplY3QoKSB7fVxuICByZXR1cm4gZnVuY3Rpb24ocHJvdG8pIHtcbiAgICBpZiAoIWlzT2JqZWN0KHByb3RvKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBpZiAob2JqZWN0Q3JlYXRlKSB7XG4gICAgICByZXR1cm4gb2JqZWN0Q3JlYXRlKHByb3RvKTtcbiAgICB9XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHByb3RvO1xuICAgIHZhciByZXN1bHQgPSBuZXcgb2JqZWN0O1xuICAgIG9iamVjdC5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn0oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VDcmVhdGU7XG4iLCJpbXBvcnQgYXJyYXlQdXNoIGZyb20gJy4vX2FycmF5UHVzaC5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VHZXRBbGxLZXlzO1xuIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuaW1wb3J0IGdldFJhd1RhZyBmcm9tICcuL19nZXRSYXdUYWcuanMnO1xuaW1wb3J0IG9iamVjdFRvU3RyaW5nIGZyb20gJy4vX29iamVjdFRvU3RyaW5nLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VHZXRUYWc7XG4iLCJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlSXNBcmd1bWVudHM7XG4iLCJpbXBvcnQgZ2V0VGFnIGZyb20gJy4vX2dldFRhZy5qcyc7XG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJy4vaXNPYmplY3RMaWtlLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTWFwYCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG1hcCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXAodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSBtYXBUYWc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VJc01hcDtcbiIsImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbi5qcyc7XG5pbXBvcnQgaXNNYXNrZWQgZnJvbSAnLi9faXNNYXNrZWQuanMnO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QuanMnO1xuaW1wb3J0IHRvU291cmNlIGZyb20gJy4vX3RvU291cmNlLmpzJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUlzTmF0aXZlO1xuIiwiaW1wb3J0IGdldFRhZyBmcm9tICcuL19nZXRUYWcuanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzZXRUYWcgPSAnW29iamVjdCBTZXRdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1NldGAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzZXQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzU2V0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGdldFRhZyh2YWx1ZSkgPT0gc2V0VGFnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlSXNTZXQ7XG4iLCJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBpc0xlbmd0aCBmcm9tICcuL2lzTGVuZ3RoLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VJc1R5cGVkQXJyYXk7XG4iLCJpbXBvcnQgaXNQcm90b3R5cGUgZnJvbSAnLi9faXNQcm90b3R5cGUuanMnO1xuaW1wb3J0IG5hdGl2ZUtleXMgZnJvbSAnLi9fbmF0aXZlS2V5cy5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUtleXM7XG4iLCJpbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5pbXBvcnQgaXNQcm90b3R5cGUgZnJvbSAnLi9faXNQcm90b3R5cGUuanMnO1xuaW1wb3J0IG5hdGl2ZUtleXNJbiBmcm9tICcuL19uYXRpdmVLZXlzSW4uanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNJbmAgd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5c0luKG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5c0luKG9iamVjdCk7XG4gIH1cbiAgdmFyIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlS2V5c0luO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZVRpbWVzO1xuIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuaW1wb3J0IGFycmF5TWFwIGZyb20gJy4vX2FycmF5TWFwLmpzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheS5qcyc7XG5pbXBvcnQgaXNTeW1ib2wgZnJvbSAnLi9pc1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIGJhc2VUb1N0cmluZykgKyAnJztcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VUb1N0cmluZztcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZVVuYXJ5O1xuIiwiaW1wb3J0IFVpbnQ4QXJyYXkgZnJvbSAnLi9fVWludDhBcnJheS5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xvbmVBcnJheUJ1ZmZlcjtcbiIsImltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBhbGxvY1Vuc2FmZSA9IEJ1ZmZlciA/IEJ1ZmZlci5hbGxvY1Vuc2FmZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgIGBidWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge0J1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFsbG9jVW5zYWZlID8gYWxsb2NVbnNhZmUobGVuZ3RoKSA6IG5ldyBidWZmZXIuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9uZUJ1ZmZlcjtcbiIsImltcG9ydCBjbG9uZUFycmF5QnVmZmVyIGZyb20gJy4vX2Nsb25lQXJyYXlCdWZmZXIuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgZGF0YVZpZXdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVZpZXcgVGhlIGRhdGEgdmlldyB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgZGF0YSB2aWV3LlxuICovXG5mdW5jdGlvbiBjbG9uZURhdGFWaWV3KGRhdGFWaWV3LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIoZGF0YVZpZXcuYnVmZmVyKSA6IGRhdGFWaWV3LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyBkYXRhVmlldy5jb25zdHJ1Y3RvcihidWZmZXIsIGRhdGFWaWV3LmJ5dGVPZmZzZXQsIGRhdGFWaWV3LmJ5dGVMZW5ndGgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9uZURhdGFWaWV3O1xuIiwiLyoqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgZmxhZ3MgZnJvbSB0aGVpciBjb2VyY2VkIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVGbGFncyA9IC9cXHcqJC87XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGByZWdleHBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcmVnZXhwIFRoZSByZWdleHAgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBjbG9uZVJlZ0V4cChyZWdleHApIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyByZWdleHAuY29uc3RydWN0b3IocmVnZXhwLnNvdXJjZSwgcmVGbGFncy5leGVjKHJlZ2V4cCkpO1xuICByZXN1bHQubGFzdEluZGV4ID0gcmVnZXhwLmxhc3RJbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xvbmVSZWdFeHA7XG4iLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGUgYHN5bWJvbGAgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc3ltYm9sIFRoZSBzeW1ib2wgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHN5bWJvbCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNsb25lU3ltYm9sKHN5bWJvbCkge1xuICByZXR1cm4gc3ltYm9sVmFsdWVPZiA/IE9iamVjdChzeW1ib2xWYWx1ZU9mLmNhbGwoc3ltYm9sKSkgOiB7fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xvbmVTeW1ib2w7XG4iLCJpbXBvcnQgY2xvbmVBcnJheUJ1ZmZlciBmcm9tICcuL19jbG9uZUFycmF5QnVmZmVyLmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xvbmVUeXBlZEFycmF5O1xuIiwiLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvcHlBcnJheTtcbiIsImltcG9ydCBhc3NpZ25WYWx1ZSBmcm9tICcuL19hc3NpZ25WYWx1ZS5qcyc7XG5pbXBvcnQgYmFzZUFzc2lnblZhbHVlIGZyb20gJy4vX2Jhc2VBc3NpZ25WYWx1ZS5qcyc7XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIHZhciBpc05ldyA9ICFvYmplY3Q7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb3B5T2JqZWN0O1xuIiwiaW1wb3J0IGNvcHlPYmplY3QgZnJvbSAnLi9fY29weU9iamVjdC5qcyc7XG5pbXBvcnQgZ2V0U3ltYm9scyBmcm9tICcuL19nZXRTeW1ib2xzLmpzJztcblxuLyoqXG4gKiBDb3BpZXMgb3duIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9scyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb3B5U3ltYm9scztcbiIsImltcG9ydCBjb3B5T2JqZWN0IGZyb20gJy4vX2NvcHlPYmplY3QuanMnO1xuaW1wb3J0IGdldFN5bWJvbHNJbiBmcm9tICcuL19nZXRTeW1ib2xzSW4uanMnO1xuXG4vKipcbiAqIENvcGllcyBvd24gYW5kIGluaGVyaXRlZCBzeW1ib2xzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9sc0luKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9sc0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvcHlTeW1ib2xzSW47XG4iLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuZXhwb3J0IGRlZmF1bHQgY29yZUpzRGF0YTtcbiIsImltcG9ydCBnZXROYXRpdmUgZnJvbSAnLi9fZ2V0TmF0aXZlLmpzJztcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZVByb3BlcnR5O1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuZXhwb3J0IGRlZmF1bHQgZnJlZUdsb2JhbDtcbiIsImltcG9ydCBiYXNlR2V0QWxsS2V5cyBmcm9tICcuL19iYXNlR2V0QWxsS2V5cy5qcyc7XG5pbXBvcnQgZ2V0U3ltYm9scyBmcm9tICcuL19nZXRTeW1ib2xzLmpzJztcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cy5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEFsbEtleXM7XG4iLCJpbXBvcnQgYmFzZUdldEFsbEtleXMgZnJvbSAnLi9fYmFzZUdldEFsbEtleXMuanMnO1xuaW1wb3J0IGdldFN5bWJvbHNJbiBmcm9tICcuL19nZXRTeW1ib2xzSW4uanMnO1xuaW1wb3J0IGtleXNJbiBmcm9tICcuL2tleXNJbi5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzSW4sIGdldFN5bWJvbHNJbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEFsbEtleXNJbjtcbiIsImltcG9ydCBpc0tleWFibGUgZnJvbSAnLi9faXNLZXlhYmxlLmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRNYXBEYXRhO1xuIiwiaW1wb3J0IGJhc2VJc05hdGl2ZSBmcm9tICcuL19iYXNlSXNOYXRpdmUuanMnO1xuaW1wb3J0IGdldFZhbHVlIGZyb20gJy4vX2dldFZhbHVlLmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0TmF0aXZlO1xuIiwiaW1wb3J0IG92ZXJBcmcgZnJvbSAnLi9fb3ZlckFyZy5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRQcm90b3R5cGU7XG4iLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UmF3VGFnO1xuIiwiaW1wb3J0IGFycmF5RmlsdGVyIGZyb20gJy4vX2FycmF5RmlsdGVyLmpzJztcbmltcG9ydCBzdHViQXJyYXkgZnJvbSAnLi9zdHViQXJyYXkuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFN5bWJvbHM7XG4iLCJpbXBvcnQgYXJyYXlQdXNoIGZyb20gJy4vX2FycmF5UHVzaC5qcyc7XG5pbXBvcnQgZ2V0UHJvdG90eXBlIGZyb20gJy4vX2dldFByb3RvdHlwZS5qcyc7XG5pbXBvcnQgZ2V0U3ltYm9scyBmcm9tICcuL19nZXRTeW1ib2xzLmpzJztcbmltcG9ydCBzdHViQXJyYXkgZnJvbSAnLi9zdHViQXJyYXkuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzSW4gPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHdoaWxlIChvYmplY3QpIHtcbiAgICBhcnJheVB1c2gocmVzdWx0LCBnZXRTeW1ib2xzKG9iamVjdCkpO1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZShvYmplY3QpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRTeW1ib2xzSW47XG4iLCJpbXBvcnQgRGF0YVZpZXcgZnJvbSAnLi9fRGF0YVZpZXcuanMnO1xuaW1wb3J0IE1hcCBmcm9tICcuL19NYXAuanMnO1xuaW1wb3J0IFByb21pc2UgZnJvbSAnLi9fUHJvbWlzZS5qcyc7XG5pbXBvcnQgU2V0IGZyb20gJy4vX1NldC5qcyc7XG5pbXBvcnQgV2Vha01hcCBmcm9tICcuL19XZWFrTWFwLmpzJztcbmltcG9ydCBiYXNlR2V0VGFnIGZyb20gJy4vX2Jhc2VHZXRUYWcuanMnO1xuaW1wb3J0IHRvU291cmNlIGZyb20gJy4vX3RvU291cmNlLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0VGFnO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFZhbHVlO1xuIiwiaW1wb3J0IG5hdGl2ZUNyZWF0ZSBmcm9tICcuL19uYXRpdmVDcmVhdGUuanMnO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFzaENsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFzaERlbGV0ZTtcbiIsImltcG9ydCBuYXRpdmVDcmVhdGUgZnJvbSAnLi9fbmF0aXZlQ3JlYXRlLmpzJztcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYXNoR2V0O1xuIiwiaW1wb3J0IG5hdGl2ZUNyZWF0ZSBmcm9tICcuL19uYXRpdmVDcmVhdGUuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhc2hIYXM7XG4iLCJpbXBvcnQgbmF0aXZlQ3JlYXRlIGZyb20gJy4vX25hdGl2ZUNyZWF0ZS5qcyc7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYXNoU2V0O1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBhcnJheSBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQXJyYXkoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IG5ldyBhcnJheS5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIC8vIEFkZCBwcm9wZXJ0aWVzIGFzc2lnbmVkIGJ5IGBSZWdFeHAjZXhlY2AuXG4gIGlmIChsZW5ndGggJiYgdHlwZW9mIGFycmF5WzBdID09ICdzdHJpbmcnICYmIGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksICdpbmRleCcpKSB7XG4gICAgcmVzdWx0LmluZGV4ID0gYXJyYXkuaW5kZXg7XG4gICAgcmVzdWx0LmlucHV0ID0gYXJyYXkuaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdENsb25lQXJyYXk7XG4iLCJpbXBvcnQgY2xvbmVBcnJheUJ1ZmZlciBmcm9tICcuL19jbG9uZUFycmF5QnVmZmVyLmpzJztcbmltcG9ydCBjbG9uZURhdGFWaWV3IGZyb20gJy4vX2Nsb25lRGF0YVZpZXcuanMnO1xuaW1wb3J0IGNsb25lUmVnRXhwIGZyb20gJy4vX2Nsb25lUmVnRXhwLmpzJztcbmltcG9ydCBjbG9uZVN5bWJvbCBmcm9tICcuL19jbG9uZVN5bWJvbC5qcyc7XG5pbXBvcnQgY2xvbmVUeXBlZEFycmF5IGZyb20gJy4vX2Nsb25lVHlwZWRBcnJheS5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZSBiYXNlZCBvbiBpdHMgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNsb25pbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBNYXBgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIGBTZXRgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVCeVRhZyhvYmplY3QsIHRhZywgaXNEZWVwKSB7XG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVBcnJheUJ1ZmZlcihvYmplY3QpO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3Rvcigrb2JqZWN0KTtcblxuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICByZXR1cm4gY2xvbmVEYXRhVmlldyhvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIGZsb2F0MzJUYWc6IGNhc2UgZmxvYXQ2NFRhZzpcbiAgICBjYXNlIGludDhUYWc6IGNhc2UgaW50MTZUYWc6IGNhc2UgaW50MzJUYWc6XG4gICAgY2FzZSB1aW50OFRhZzogY2FzZSB1aW50OENsYW1wZWRUYWc6IGNhc2UgdWludDE2VGFnOiBjYXNlIHVpbnQzMlRhZzpcbiAgICAgIHJldHVybiBjbG9uZVR5cGVkQXJyYXkob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3I7XG5cbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcihvYmplY3QpO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVSZWdFeHAob2JqZWN0KTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yO1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTeW1ib2wob2JqZWN0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0Q2xvbmVCeVRhZztcbiIsImltcG9ydCBiYXNlQ3JlYXRlIGZyb20gJy4vX2Jhc2VDcmVhdGUuanMnO1xuaW1wb3J0IGdldFByb3RvdHlwZSBmcm9tICcuL19nZXRQcm90b3R5cGUuanMnO1xuaW1wb3J0IGlzUHJvdG90eXBlIGZyb20gJy4vX2lzUHJvdG90eXBlLmpzJztcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0Q2xvbmVPYmplY3Q7XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcblxuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZSA9PSAnbnVtYmVyJyB8fFxuICAgICAgKHR5cGUgIT0gJ3N5bWJvbCcgJiYgcmVJc1VpbnQudGVzdCh2YWx1ZSkpKSAmJlxuICAgICAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzSW5kZXg7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzS2V5YWJsZTtcbiIsImltcG9ydCBjb3JlSnNEYXRhIGZyb20gJy4vX2NvcmVKc0RhdGEuanMnO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc01hc2tlZDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNQcm90b3R5cGU7XG4iLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RDYWNoZUNsZWFyO1xuIiwiaW1wb3J0IGFzc29jSW5kZXhPZiBmcm9tICcuL19hc3NvY0luZGV4T2YuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RDYWNoZURlbGV0ZTtcbiIsImltcG9ydCBhc3NvY0luZGV4T2YgZnJvbSAnLi9fYXNzb2NJbmRleE9mLmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdENhY2hlR2V0O1xuIiwiaW1wb3J0IGFzc29jSW5kZXhPZiBmcm9tICcuL19hc3NvY0luZGV4T2YuanMnO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdENhY2hlSGFzO1xuIiwiaW1wb3J0IGFzc29jSW5kZXhPZiBmcm9tICcuL19hc3NvY0luZGV4T2YuanMnO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RDYWNoZVNldDtcbiIsImltcG9ydCBIYXNoIGZyb20gJy4vX0hhc2guanMnO1xuaW1wb3J0IExpc3RDYWNoZSBmcm9tICcuL19MaXN0Q2FjaGUuanMnO1xuaW1wb3J0IE1hcCBmcm9tICcuL19NYXAuanMnO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hcENhY2hlQ2xlYXI7XG4iLCJpbXBvcnQgZ2V0TWFwRGF0YSBmcm9tICcuL19nZXRNYXBEYXRhLmpzJztcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hcENhY2hlRGVsZXRlO1xuIiwiaW1wb3J0IGdldE1hcERhdGEgZnJvbSAnLi9fZ2V0TWFwRGF0YS5qcyc7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFwQ2FjaGVHZXQ7XG4iLCJpbXBvcnQgZ2V0TWFwRGF0YSBmcm9tICcuL19nZXRNYXBEYXRhLmpzJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFwQ2FjaGVIYXM7XG4iLCJpbXBvcnQgZ2V0TWFwRGF0YSBmcm9tICcuL19nZXRNYXBEYXRhLmpzJztcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYXBDYWNoZVNldDtcbiIsImltcG9ydCBtZW1vaXplIGZyb20gJy4vbWVtb2l6ZS5qcyc7XG5cbi8qKiBVc2VkIGFzIHRoZSBtYXhpbXVtIG1lbW9pemUgY2FjaGUgc2l6ZS4gKi9cbnZhciBNQVhfTUVNT0laRV9TSVpFID0gNTAwO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tZW1vaXplYCB3aGljaCBjbGVhcnMgdGhlIG1lbW9pemVkIGZ1bmN0aW9uJ3NcbiAqIGNhY2hlIHdoZW4gaXQgZXhjZWVkcyBgTUFYX01FTU9JWkVfU0laRWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtZW1vaXplQ2FwcGVkKGZ1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IG1lbW9pemUoZnVuYywgZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGNhY2hlLnNpemUgPT09IE1BWF9NRU1PSVpFX1NJWkUpIHtcbiAgICAgIGNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH0pO1xuXG4gIHZhciBjYWNoZSA9IHJlc3VsdC5jYWNoZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZUNhcHBlZDtcbiIsImltcG9ydCBnZXROYXRpdmUgZnJvbSAnLi9fZ2V0TmF0aXZlLmpzJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuZXhwb3J0IGRlZmF1bHQgbmF0aXZlQ3JlYXRlO1xuIiwiaW1wb3J0IG92ZXJBcmcgZnJvbSAnLi9fb3ZlckFyZy5qcyc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxuZXhwb3J0IGRlZmF1bHQgbmF0aXZlS2V5cztcbiIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlXG4gKiBbYE9iamVjdC5rZXlzYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBleGNlcHQgdGhhdCBpdCBpbmNsdWRlcyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBuYXRpdmVLZXlzSW4ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKG9iamVjdCAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuYXRpdmVLZXlzSW47XG4iLCJpbXBvcnQgZnJlZUdsb2JhbCBmcm9tICcuL19mcmVlR2xvYmFsLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBVc2UgYHV0aWwudHlwZXNgIGZvciBOb2RlLmpzIDEwKy5cbiAgICB2YXIgdHlwZXMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUucmVxdWlyZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUoJ3V0aWwnKS50eXBlcztcblxuICAgIGlmICh0eXBlcykge1xuICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIC8vIExlZ2FjeSBgcHJvY2Vzcy5iaW5kaW5nKCd1dGlsJylgIGZvciBOb2RlLmpzIDwgMTAuXG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZVV0aWw7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0VG9TdHJpbmc7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb3ZlckFyZztcbiIsImltcG9ydCBmcmVlR2xvYmFsIGZyb20gJy4vX2ZyZWVHbG9iYWwuanMnO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3Q7XG4iLCJpbXBvcnQgTGlzdENhY2hlIGZyb20gJy4vX0xpc3RDYWNoZS5qcyc7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YWNrQ2xlYXI7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YWNrRGVsZXRlO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGFja0dldDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YWNrSGFzO1xuIiwiaW1wb3J0IExpc3RDYWNoZSBmcm9tICcuL19MaXN0Q2FjaGUuanMnO1xuaW1wb3J0IE1hcCBmcm9tICcuL19NYXAuanMnO1xuaW1wb3J0IE1hcENhY2hlIGZyb20gJy4vX01hcENhY2hlLmpzJztcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YWNrU2V0O1xuIiwiaW1wb3J0IG1lbW9pemVDYXBwZWQgZnJvbSAnLi9fbWVtb2l6ZUNhcHBlZC5qcyc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG52YXIgc3RyaW5nVG9QYXRoID0gbWVtb2l6ZUNhcHBlZChmdW5jdGlvbihzdHJpbmcpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAoc3RyaW5nLmNoYXJDb2RlQXQoMCkgPT09IDQ2IC8qIC4gKi8pIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cbiAgc3RyaW5nLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN1YlN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3ViU3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5nVG9QYXRoO1xuIiwiaW1wb3J0IGlzU3ltYm9sIGZyb20gJy4vaXNTeW1ib2wuanMnO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcga2V5IGlmIGl0J3Mgbm90IGEgc3RyaW5nIG9yIHN5bWJvbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtzdHJpbmd8c3ltYm9sfSBSZXR1cm5zIHRoZSBrZXkuXG4gKi9cbmZ1bmN0aW9uIHRvS2V5KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9LZXk7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvU291cmNlO1xuIiwiaW1wb3J0IGJhc2VDbG9uZSBmcm9tICcuL19iYXNlQ2xvbmUuanMnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNoYWxsb3cgY2xvbmUgb2YgYHZhbHVlYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvbiB0aGVcbiAqIFtzdHJ1Y3R1cmVkIGNsb25lIGFsZ29yaXRobV0oaHR0cHM6Ly9tZG4uaW8vU3RydWN0dXJlZF9jbG9uZV9hbGdvcml0aG0pXG4gKiBhbmQgc3VwcG9ydHMgY2xvbmluZyBhcnJheXMsIGFycmF5IGJ1ZmZlcnMsIGJvb2xlYW5zLCBkYXRlIG9iamVjdHMsIG1hcHMsXG4gKiBudW1iZXJzLCBgT2JqZWN0YCBvYmplY3RzLCByZWdleGVzLCBzZXRzLCBzdHJpbmdzLCBzeW1ib2xzLCBhbmQgdHlwZWRcbiAqIGFycmF5cy4gVGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnRpZXMgb2YgYGFyZ3VtZW50c2Agb2JqZWN0cyBhcmUgY2xvbmVkXG4gKiBhcyBwbGFpbiBvYmplY3RzLiBBbiBlbXB0eSBvYmplY3QgaXMgcmV0dXJuZWQgZm9yIHVuY2xvbmVhYmxlIHZhbHVlcyBzdWNoXG4gKiBhcyBlcnJvciBvYmplY3RzLCBmdW5jdGlvbnMsIERPTSBub2RlcywgYW5kIFdlYWtNYXBzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBjbG9uZWQgdmFsdWUuXG4gKiBAc2VlIF8uY2xvbmVEZWVwXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBzaGFsbG93ID0gXy5jbG9uZShvYmplY3RzKTtcbiAqIGNvbnNvbGUubG9nKHNoYWxsb3dbMF0gPT09IG9iamVjdHNbMF0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjbG9uZSh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCBDTE9ORV9TWU1CT0xTX0ZMQUcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9uZTtcbiIsImltcG9ydCBiYXNlQ2xvbmUgZnJvbSAnLi9fYmFzZUNsb25lLmpzJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5jbG9uZWAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgY2xvbmVzIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlY3Vyc2l2ZWx5IGNsb25lLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGRlZXAgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBkZWVwID0gXy5jbG9uZURlZXAob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhkZWVwWzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCBDTE9ORV9ERUVQX0ZMQUcgfCBDTE9ORV9TWU1CT0xTX0ZMQUcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9uZURlZXA7XG4iLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXE7XG4iLCJpbXBvcnQgYmFzZUlzQXJndW1lbnRzIGZyb20gJy4vX2Jhc2VJc0FyZ3VtZW50cy5qcyc7XG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJy4vaXNPYmplY3RMaWtlLmpzJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzQXJndW1lbnRzO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbmV4cG9ydCBkZWZhdWx0IGlzQXJyYXk7XG4iLCJpbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuL2lzRnVuY3Rpb24uanMnO1xuaW1wb3J0IGlzTGVuZ3RoIGZyb20gJy4vaXNMZW5ndGguanMnO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNBcnJheUxpa2U7XG4iLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcbmltcG9ydCBzdHViRmFsc2UgZnJvbSAnLi9zdHViRmFsc2UuanMnO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGlzQnVmZmVyO1xuIiwiaW1wb3J0IGJhc2VHZXRUYWcgZnJvbSAnLi9fYmFzZUdldFRhZy5qcyc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzRnVuY3Rpb247XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzTGVuZ3RoO1xuIiwiaW1wb3J0IGJhc2VJc01hcCBmcm9tICcuL19iYXNlSXNNYXAuanMnO1xuaW1wb3J0IGJhc2VVbmFyeSBmcm9tICcuL19iYXNlVW5hcnkuanMnO1xuaW1wb3J0IG5vZGVVdGlsIGZyb20gJy4vX25vZGVVdGlsLmpzJztcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNNYXAgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc01hcDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYE1hcGAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbWFwLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNNYXAobmV3IE1hcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc01hcChuZXcgV2Vha01hcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNNYXAgPSBub2RlSXNNYXAgPyBiYXNlVW5hcnkobm9kZUlzTWFwKSA6IGJhc2VJc01hcDtcblxuZXhwb3J0IGRlZmF1bHQgaXNNYXA7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNPYmplY3RMaWtlO1xuIiwiaW1wb3J0IGJhc2VHZXRUYWcgZnJvbSAnLi9fYmFzZUdldFRhZy5qcyc7XG5pbXBvcnQgZ2V0UHJvdG90eXBlIGZyb20gJy4vX2dldFByb3RvdHlwZS5qcyc7XG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJy4vaXNPYmplY3RMaWtlLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGF0IGlzLCBhbiBvYmplY3QgY3JlYXRlZCBieSB0aGVcbiAqIGBPYmplY3RgIGNvbnN0cnVjdG9yIG9yIG9uZSB3aXRoIGEgYFtbUHJvdG90eXBlXV1gIG9mIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuOC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fCBiYXNlR2V0VGFnKHZhbHVlKSAhPSBvYmplY3RUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvID0gZ2V0UHJvdG90eXBlKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiZcbiAgICBmdW5jVG9TdHJpbmcuY2FsbChDdG9yKSA9PSBvYmplY3RDdG9yU3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc1BsYWluT2JqZWN0O1xuIiwiaW1wb3J0IGJhc2VJc1NldCBmcm9tICcuL19iYXNlSXNTZXQuanMnO1xuaW1wb3J0IGJhc2VVbmFyeSBmcm9tICcuL19iYXNlVW5hcnkuanMnO1xuaW1wb3J0IG5vZGVVdGlsIGZyb20gJy4vX25vZGVVdGlsLmpzJztcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNTZXQgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1NldDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFNldGAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc2V0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTZXQobmV3IFNldCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1NldChuZXcgV2Vha1NldCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNTZXQgPSBub2RlSXNTZXQgPyBiYXNlVW5hcnkobm9kZUlzU2V0KSA6IGJhc2VJc1NldDtcblxuZXhwb3J0IGRlZmF1bHQgaXNTZXQ7XG4iLCJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzU3ltYm9sO1xuIiwiaW1wb3J0IGJhc2VJc1R5cGVkQXJyYXkgZnJvbSAnLi9fYmFzZUlzVHlwZWRBcnJheS5qcyc7XG5pbXBvcnQgYmFzZVVuYXJ5IGZyb20gJy4vX2Jhc2VVbmFyeS5qcyc7XG5pbXBvcnQgbm9kZVV0aWwgZnJvbSAnLi9fbm9kZVV0aWwuanMnO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxuZXhwb3J0IGRlZmF1bHQgaXNUeXBlZEFycmF5O1xuIiwiaW1wb3J0IGFycmF5TGlrZUtleXMgZnJvbSAnLi9fYXJyYXlMaWtlS2V5cy5qcyc7XG5pbXBvcnQgYmFzZUtleXMgZnJvbSAnLi9fYmFzZUtleXMuanMnO1xuaW1wb3J0IGlzQXJyYXlMaWtlIGZyb20gJy4vaXNBcnJheUxpa2UuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQga2V5cztcbiIsImltcG9ydCBhcnJheUxpa2VLZXlzIGZyb20gJy4vX2FycmF5TGlrZUtleXMuanMnO1xuaW1wb3J0IGJhc2VLZXlzSW4gZnJvbSAnLi9fYmFzZUtleXNJbi5qcyc7XG5pbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9pc0FycmF5TGlrZS5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXNJbihuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QsIHRydWUpIDogYmFzZUtleXNJbihvYmplY3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBrZXlzSW47XG4iLCJpbXBvcnQgTWFwQ2FjaGUgZnJvbSAnLi9fTWFwQ2FjaGUuanMnO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgY2xlYXJgLCBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgIT0gbnVsbCAmJiB0eXBlb2YgcmVzb2x2ZXIgIT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgdmFyIG1lbW9pemVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGtleSA9IHJlc29sdmVyID8gcmVzb2x2ZXIuYXBwbHkodGhpcywgYXJncykgOiBhcmdzWzBdLFxuICAgICAgICBjYWNoZSA9IG1lbW9pemVkLmNhY2hlO1xuXG4gICAgaWYgKGNhY2hlLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIG1lbW9pemVkLmNhY2hlID0gY2FjaGUuc2V0KGtleSwgcmVzdWx0KSB8fCBjYWNoZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtZW1vaXplZC5jYWNoZSA9IG5ldyAobWVtb2l6ZS5DYWNoZSB8fCBNYXBDYWNoZSk7XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuLy8gRXhwb3NlIGBNYXBDYWNoZWAuXG5tZW1vaXplLkNhY2hlID0gTWFwQ2FjaGU7XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemU7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHViQXJyYXk7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0dWJGYWxzZTtcbiIsImltcG9ydCBhcnJheU1hcCBmcm9tICcuL19hcnJheU1hcC5qcyc7XG5pbXBvcnQgY29weUFycmF5IGZyb20gJy4vX2NvcHlBcnJheS5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuaW1wb3J0IGlzU3ltYm9sIGZyb20gJy4vaXNTeW1ib2wuanMnO1xuaW1wb3J0IHN0cmluZ1RvUGF0aCBmcm9tICcuL19zdHJpbmdUb1BhdGguanMnO1xuaW1wb3J0IHRvS2V5IGZyb20gJy4vX3RvS2V5LmpzJztcbmltcG9ydCB0b1N0cmluZyBmcm9tICcuL3RvU3RyaW5nLmpzJztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9QYXRoKCdhLmIuYycpO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddXG4gKlxuICogXy50b1BhdGgoJ2FbMF0uYi5jJyk7XG4gKiAvLyA9PiBbJ2EnLCAnMCcsICdiJywgJ2MnXVxuICovXG5mdW5jdGlvbiB0b1BhdGgodmFsdWUpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGFycmF5TWFwKHZhbHVlLCB0b0tleSk7XG4gIH1cbiAgcmV0dXJuIGlzU3ltYm9sKHZhbHVlKSA/IFt2YWx1ZV0gOiBjb3B5QXJyYXkoc3RyaW5nVG9QYXRoKHRvU3RyaW5nKHZhbHVlKSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b1BhdGg7XG4iLCJpbXBvcnQgYmFzZVRvU3RyaW5nIGZyb20gJy4vX2Jhc2VUb1N0cmluZy5qcyc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9TdHJpbmc7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbnZhciBrZXlMaXN0ID0gT2JqZWN0LmtleXM7XG52YXIgaGFzUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgaGFzRWxlbWVudFR5cGUgPSB0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5cbmZ1bmN0aW9uIGVxdWFsKGEsIGIpIHtcbiAgLy8gZmFzdC1kZWVwLWVxdWFsIGluZGV4LmpzIDIuMC4xXG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAoYSAmJiBiICYmIHR5cGVvZiBhID09ICdvYmplY3QnICYmIHR5cGVvZiBiID09ICdvYmplY3QnKSB7XG4gICAgdmFyIGFyckEgPSBpc0FycmF5KGEpXG4gICAgICAsIGFyckIgPSBpc0FycmF5KGIpXG4gICAgICAsIGlcbiAgICAgICwgbGVuZ3RoXG4gICAgICAsIGtleTtcblxuICAgIGlmIChhcnJBICYmIGFyckIpIHtcbiAgICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCAhPSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgICBpZiAoIWVxdWFsKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYXJyQSAhPSBhcnJCKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgZGF0ZUEgPSBhIGluc3RhbmNlb2YgRGF0ZVxuICAgICAgLCBkYXRlQiA9IGIgaW5zdGFuY2VvZiBEYXRlO1xuICAgIGlmIChkYXRlQSAhPSBkYXRlQikgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChkYXRlQSAmJiBkYXRlQikgcmV0dXJuIGEuZ2V0VGltZSgpID09IGIuZ2V0VGltZSgpO1xuXG4gICAgdmFyIHJlZ2V4cEEgPSBhIGluc3RhbmNlb2YgUmVnRXhwXG4gICAgICAsIHJlZ2V4cEIgPSBiIGluc3RhbmNlb2YgUmVnRXhwO1xuICAgIGlmIChyZWdleHBBICE9IHJlZ2V4cEIpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocmVnZXhwQSAmJiByZWdleHBCKSByZXR1cm4gYS50b1N0cmluZygpID09IGIudG9TdHJpbmcoKTtcblxuICAgIHZhciBrZXlzID0ga2V5TGlzdChhKTtcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcblxuICAgIGlmIChsZW5ndGggIT09IGtleUxpc3QoYikubGVuZ3RoKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgaWYgKCFoYXNQcm9wLmNhbGwoYiwga2V5c1tpXSkpIHJldHVybiBmYWxzZTtcbiAgICAvLyBlbmQgZmFzdC1kZWVwLWVxdWFsXG5cbiAgICAvLyBzdGFydCByZWFjdC1mYXN0LWNvbXBhcmVcbiAgICAvLyBjdXN0b20gaGFuZGxpbmcgZm9yIERPTSBlbGVtZW50c1xuICAgIGlmIChoYXNFbGVtZW50VHlwZSAmJiBhIGluc3RhbmNlb2YgRWxlbWVudCAmJiBiIGluc3RhbmNlb2YgRWxlbWVudClcbiAgICAgIHJldHVybiBhID09PSBiO1xuXG4gICAgLy8gY3VzdG9tIGhhbmRsaW5nIGZvciBSZWFjdFxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmIChrZXkgPT09ICdfb3duZXInICYmIGEuJCR0eXBlb2YpIHtcbiAgICAgICAgLy8gUmVhY3Qtc3BlY2lmaWM6IGF2b2lkIHRyYXZlcnNpbmcgUmVhY3QgZWxlbWVudHMnIF9vd25lci5cbiAgICAgICAgLy8gIF9vd25lciBjb250YWlucyBjaXJjdWxhciByZWZlcmVuY2VzXG4gICAgICAgIC8vIGFuZCBpcyBub3QgbmVlZGVkIHdoZW4gY29tcGFyaW5nIHRoZSBhY3R1YWwgZWxlbWVudHMgKGFuZCBub3QgdGhlaXIgb3duZXJzKVxuICAgICAgICAvLyAuJCR0eXBlb2YgYW5kIC5fc3RvcmUgb24ganVzdCByZWFzb25hYmxlIG1hcmtlcnMgb2YgYSByZWFjdCBlbGVtZW50XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYWxsIG90aGVyIHByb3BlcnRpZXMgc2hvdWxkIGJlIHRyYXZlcnNlZCBhcyB1c3VhbFxuICAgICAgICBpZiAoIWVxdWFsKGFba2V5XSwgYltrZXldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBlbmQgcmVhY3QtZmFzdC1jb21wYXJlXG5cbiAgICAvLyBmYXN0LWRlZXAtZXF1YWwgaW5kZXguanMgMi4wLjFcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhICE9PSBhICYmIGIgIT09IGI7XG59XG4vLyBlbmQgZmFzdC1kZWVwLWVxdWFsXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXhwb3J0ZWRFcXVhbChhLCBiKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVxdWFsKGEsIGIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmICgoZXJyb3IubWVzc2FnZSAmJiBlcnJvci5tZXNzYWdlLm1hdGNoKC9zdGFja3xyZWN1cnNpb24vaSkpIHx8IChlcnJvci5udW1iZXIgPT09IC0yMTQ2ODI4MjYwKSkge1xuICAgICAgLy8gd2FybiBvbiBjaXJjdWxhciByZWZlcmVuY2VzLCBkb24ndCBjcmFzaFxuICAgICAgLy8gYnJvd3NlcnMgZ2l2ZSB0aGlzIGRpZmZlcmVudCBlcnJvcnMgbmFtZSBhbmQgbWVzc2FnZXM6XG4gICAgICAvLyBjaHJvbWUvc2FmYXJpOiBcIlJhbmdlRXJyb3JcIiwgXCJNYXhpbXVtIGNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiXG4gICAgICAvLyBmaXJlZm94OiBcIkludGVybmFsRXJyb3JcIiwgdG9vIG11Y2ggcmVjdXJzaW9uXCJcbiAgICAgIC8vIGVkZ2U6IFwiRXJyb3JcIiwgXCJPdXQgb2Ygc3RhY2sgc3BhY2VcIlxuICAgICAgY29uc29sZS53YXJuKCdXYXJuaW5nOiByZWFjdC1mYXN0LWNvbXBhcmUgZG9lcyBub3QgaGFuZGxlIGNpcmN1bGFyIHJlZmVyZW5jZXMuJywgZXJyb3IubmFtZSwgZXJyb3IubWVzc2FnZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIHNvbWUgb3RoZXIgZXJyb3IuIHdlIHNob3VsZCBkZWZpbml0ZWx5IGtub3cgYWJvdXQgdGhlc2VcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjAuMTguMFxuICogc2NoZWR1bGVyLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBlbmFibGVTY2hlZHVsZXJEZWJ1Z2dpbmcgPSBmYWxzZTtcbnZhciBlbmFibGVJc0lucHV0UGVuZGluZyA9IGZhbHNlO1xudmFyIGVuYWJsZVByb2ZpbGluZyA9IHRydWU7XG5cbnZhciByZXF1ZXN0SG9zdENhbGxiYWNrO1xuXG52YXIgcmVxdWVzdEhvc3RUaW1lb3V0O1xudmFyIGNhbmNlbEhvc3RUaW1lb3V0O1xudmFyIHNob3VsZFlpZWxkVG9Ib3N0O1xudmFyIHJlcXVlc3RQYWludDtcblxuXG5cbmlmICggLy8gSWYgU2NoZWR1bGVyIHJ1bnMgaW4gYSBub24tRE9NIGVudmlyb25tZW50LCBpdCBmYWxscyBiYWNrIHRvIGEgbmFpdmVcbi8vIGltcGxlbWVudGF0aW9uIHVzaW5nIHNldFRpbWVvdXQuXG50eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAvLyBDaGVjayBpZiBNZXNzYWdlQ2hhbm5lbCBpcyBzdXBwb3J0ZWQsIHRvby5cbnR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAvLyBJZiB0aGlzIGFjY2lkZW50YWxseSBnZXRzIGltcG9ydGVkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQsIGUuZy4gSmF2YVNjcmlwdENvcmUsXG4gIC8vIGZhbGxiYWNrIHRvIGEgbmFpdmUgaW1wbGVtZW50YXRpb24uXG4gIHZhciBfY2FsbGJhY2sgPSBudWxsO1xuICB2YXIgX3RpbWVvdXRJRCA9IG51bGw7XG5cbiAgdmFyIF9mbHVzaENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChfY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMudW5zdGFibGVfbm93KCk7XG4gICAgICAgIHZhciBoYXNSZW1haW5pbmdUaW1lID0gdHJ1ZTtcblxuICAgICAgICBfY2FsbGJhY2soaGFzUmVtYWluaW5nVGltZSwgY3VycmVudFRpbWUpO1xuXG4gICAgICAgIF9jYWxsYmFjayA9IG51bGw7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoX2ZsdXNoQ2FsbGJhY2ssIDApO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgaW5pdGlhbFRpbWUgPSBEYXRlLm5vdygpO1xuXG4gIGV4cG9ydHMudW5zdGFibGVfbm93ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBEYXRlLm5vdygpIC0gaW5pdGlhbFRpbWU7XG4gIH07XG5cbiAgcmVxdWVzdEhvc3RDYWxsYmFjayA9IGZ1bmN0aW9uIChjYikge1xuICAgIGlmIChfY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgIC8vIFByb3RlY3QgYWdhaW5zdCByZS1lbnRyYW5jeS5cbiAgICAgIHNldFRpbWVvdXQocmVxdWVzdEhvc3RDYWxsYmFjaywgMCwgY2IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfY2FsbGJhY2sgPSBjYjtcbiAgICAgIHNldFRpbWVvdXQoX2ZsdXNoQ2FsbGJhY2ssIDApO1xuICAgIH1cbiAgfTtcblxuICByZXF1ZXN0SG9zdFRpbWVvdXQgPSBmdW5jdGlvbiAoY2IsIG1zKSB7XG4gICAgX3RpbWVvdXRJRCA9IHNldFRpbWVvdXQoY2IsIG1zKTtcbiAgfTtcblxuICBjYW5jZWxIb3N0VGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhclRpbWVvdXQoX3RpbWVvdXRJRCk7XG4gIH07XG5cbiAgc2hvdWxkWWllbGRUb0hvc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJlcXVlc3RQYWludCA9IGV4cG9ydHMudW5zdGFibGVfZm9yY2VGcmFtZVJhdGUgPSBmdW5jdGlvbiAoKSB7fTtcbn0gZWxzZSB7XG4gIC8vIENhcHR1cmUgbG9jYWwgcmVmZXJlbmNlcyB0byBuYXRpdmUgQVBJcywgaW4gY2FzZSBhIHBvbHlmaWxsIG92ZXJyaWRlcyB0aGVtLlxuICB2YXIgcGVyZm9ybWFuY2UgPSB3aW5kb3cucGVyZm9ybWFuY2U7XG4gIHZhciBfRGF0ZSA9IHdpbmRvdy5EYXRlO1xuICB2YXIgX3NldFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dDtcbiAgdmFyIF9jbGVhclRpbWVvdXQgPSB3aW5kb3cuY2xlYXJUaW1lb3V0O1xuXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBUT0RPOiBTY2hlZHVsZXIgbm8gbG9uZ2VyIHJlcXVpcmVzIHRoZXNlIG1ldGhvZHMgdG8gYmUgcG9seWZpbGxlZC4gQnV0XG4gICAgLy8gbWF5YmUgd2Ugd2FudCB0byBjb250aW51ZSB3YXJuaW5nIGlmIHRoZXkgZG9uJ3QgZXhpc3QsIHRvIHByZXNlcnZlIHRoZVxuICAgIC8vIG9wdGlvbiB0byByZWx5IG9uIGl0IGluIHRoZSBmdXR1cmU/XG4gICAgdmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gICAgdmFyIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lOyAvLyBUT0RPOiBSZW1vdmUgZmIubWUgbGlua1xuXG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZS4gXCIgKyAnTWFrZSBzdXJlIHRoYXQgeW91IGxvYWQgYSAnICsgJ3BvbHlmaWxsIGluIG9sZGVyIGJyb3dzZXJzLiBodHRwczovL2ZiLm1lL3JlYWN0LXBvbHlmaWxscycpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2FuY2VsQW5pbWF0aW9uRnJhbWUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGNhbmNlbEFuaW1hdGlvbkZyYW1lLiBcIiArICdNYWtlIHN1cmUgdGhhdCB5b3UgbG9hZCBhICcgKyAncG9seWZpbGwgaW4gb2xkZXIgYnJvd3NlcnMuIGh0dHBzOi8vZmIubWUvcmVhY3QtcG9seWZpbGxzJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBwZXJmb3JtYW5jZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHBlcmZvcm1hbmNlLm5vdyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV4cG9ydHMudW5zdGFibGVfbm93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgdmFyIF9pbml0aWFsVGltZSA9IF9EYXRlLm5vdygpO1xuXG4gICAgZXhwb3J0cy51bnN0YWJsZV9ub3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX0RhdGUubm93KCkgLSBfaW5pdGlhbFRpbWU7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBpc01lc3NhZ2VMb29wUnVubmluZyA9IGZhbHNlO1xuICB2YXIgc2NoZWR1bGVkSG9zdENhbGxiYWNrID0gbnVsbDtcbiAgdmFyIHRhc2tUaW1lb3V0SUQgPSAtMTsgLy8gU2NoZWR1bGVyIHBlcmlvZGljYWxseSB5aWVsZHMgaW4gY2FzZSB0aGVyZSBpcyBvdGhlciB3b3JrIG9uIHRoZSBtYWluXG4gIC8vIHRocmVhZCwgbGlrZSB1c2VyIGV2ZW50cy4gQnkgZGVmYXVsdCwgaXQgeWllbGRzIG11bHRpcGxlIHRpbWVzIHBlciBmcmFtZS5cbiAgLy8gSXQgZG9lcyBub3QgYXR0ZW1wdCB0byBhbGlnbiB3aXRoIGZyYW1lIGJvdW5kYXJpZXMsIHNpbmNlIG1vc3QgdGFza3MgZG9uJ3RcbiAgLy8gbmVlZCB0byBiZSBmcmFtZSBhbGlnbmVkOyBmb3IgdGhvc2UgdGhhdCBkbywgdXNlIHJlcXVlc3RBbmltYXRpb25GcmFtZS5cblxuICB2YXIgeWllbGRJbnRlcnZhbCA9IDU7XG4gIHZhciBkZWFkbGluZSA9IDA7IC8vIFRPRE86IE1ha2UgdGhpcyBjb25maWd1cmFibGVcbiAgLy8gVE9ETzogQWRqdXN0IHRoaXMgYmFzZWQgb24gcHJpb3JpdHk/XG5cbiAgdmFyIG1heFlpZWxkSW50ZXJ2YWwgPSAzMDA7XG4gIHZhciBuZWVkc1BhaW50ID0gZmFsc2U7XG5cbiAgaWYgKGVuYWJsZUlzSW5wdXRQZW5kaW5nICYmIG5hdmlnYXRvciAhPT0gdW5kZWZpbmVkICYmIG5hdmlnYXRvci5zY2hlZHVsaW5nICE9PSB1bmRlZmluZWQgJiYgbmF2aWdhdG9yLnNjaGVkdWxpbmcuaXNJbnB1dFBlbmRpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBzY2hlZHVsaW5nID0gbmF2aWdhdG9yLnNjaGVkdWxpbmc7XG5cbiAgICBzaG91bGRZaWVsZFRvSG9zdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMudW5zdGFibGVfbm93KCk7XG5cbiAgICAgIGlmIChjdXJyZW50VGltZSA+PSBkZWFkbGluZSkge1xuICAgICAgICAvLyBUaGVyZSdzIG5vIHRpbWUgbGVmdC4gV2UgbWF5IHdhbnQgdG8geWllbGQgY29udHJvbCBvZiB0aGUgbWFpblxuICAgICAgICAvLyB0aHJlYWQsIHNvIHRoZSBicm93c2VyIGNhbiBwZXJmb3JtIGhpZ2ggcHJpb3JpdHkgdGFza3MuIFRoZSBtYWluIG9uZXNcbiAgICAgICAgLy8gYXJlIHBhaW50aW5nIGFuZCB1c2VyIGlucHV0LiBJZiB0aGVyZSdzIGEgcGVuZGluZyBwYWludCBvciBhIHBlbmRpbmdcbiAgICAgICAgLy8gaW5wdXQsIHRoZW4gd2Ugc2hvdWxkIHlpZWxkLiBCdXQgaWYgdGhlcmUncyBuZWl0aGVyLCB0aGVuIHdlIGNhblxuICAgICAgICAvLyB5aWVsZCBsZXNzIG9mdGVuIHdoaWxlIHJlbWFpbmluZyByZXNwb25zaXZlLiBXZSdsbCBldmVudHVhbGx5IHlpZWxkXG4gICAgICAgIC8vIHJlZ2FyZGxlc3MsIHNpbmNlIHRoZXJlIGNvdWxkIGJlIGEgcGVuZGluZyBwYWludCB0aGF0IHdhc24ndFxuICAgICAgICAvLyBhY2NvbXBhbmllZCBieSBhIGNhbGwgdG8gYHJlcXVlc3RQYWludGAsIG9yIG90aGVyIG1haW4gdGhyZWFkIHRhc2tzXG4gICAgICAgIC8vIGxpa2UgbmV0d29yayBldmVudHMuXG4gICAgICAgIGlmIChuZWVkc1BhaW50IHx8IHNjaGVkdWxpbmcuaXNJbnB1dFBlbmRpbmcoKSkge1xuICAgICAgICAgIC8vIFRoZXJlIGlzIGVpdGhlciBhIHBlbmRpbmcgcGFpbnQgb3IgYSBwZW5kaW5nIGlucHV0LlxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IC8vIFRoZXJlJ3Mgbm8gcGVuZGluZyBpbnB1dC4gT25seSB5aWVsZCBpZiB3ZSd2ZSByZWFjaGVkIHRoZSBtYXhcbiAgICAgICAgLy8geWllbGQgaW50ZXJ2YWwuXG5cblxuICAgICAgICByZXR1cm4gY3VycmVudFRpbWUgPj0gbWF4WWllbGRJbnRlcnZhbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRoZXJlJ3Mgc3RpbGwgdGltZSBsZWZ0IGluIHRoZSBmcmFtZS5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXF1ZXN0UGFpbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBuZWVkc1BhaW50ID0gdHJ1ZTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIC8vIGBpc0lucHV0UGVuZGluZ2AgaXMgbm90IGF2YWlsYWJsZS4gU2luY2Ugd2UgaGF2ZSBubyB3YXkgb2Yga25vd2luZyBpZlxuICAgIC8vIHRoZXJlJ3MgcGVuZGluZyBpbnB1dCwgYWx3YXlzIHlpZWxkIGF0IHRoZSBlbmQgb2YgdGhlIGZyYW1lLlxuICAgIHNob3VsZFlpZWxkVG9Ib3N0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMudW5zdGFibGVfbm93KCkgPj0gZGVhZGxpbmU7XG4gICAgfTsgLy8gU2luY2Ugd2UgeWllbGQgZXZlcnkgZnJhbWUgcmVnYXJkbGVzcywgYHJlcXVlc3RQYWludGAgaGFzIG5vIGVmZmVjdC5cblxuXG4gICAgcmVxdWVzdFBhaW50ID0gZnVuY3Rpb24gKCkge307XG4gIH1cblxuICBleHBvcnRzLnVuc3RhYmxlX2ZvcmNlRnJhbWVSYXRlID0gZnVuY3Rpb24gKGZwcykge1xuICAgIGlmIChmcHMgPCAwIHx8IGZwcyA+IDEyNSkge1xuICAgICAgY29uc29sZS5lcnJvcignZm9yY2VGcmFtZVJhdGUgdGFrZXMgYSBwb3NpdGl2ZSBpbnQgYmV0d2VlbiAwIGFuZCAxMjUsICcgKyAnZm9yY2luZyBmcmFtZXJhdGVzIGhpZ2hlciB0aGFuIDEyNSBmcHMgaXMgbm90IHVuc3VwcG9ydGVkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGZwcyA+IDApIHtcbiAgICAgIHlpZWxkSW50ZXJ2YWwgPSBNYXRoLmZsb29yKDEwMDAgLyBmcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZXNldCB0aGUgZnJhbWVyYXRlXG4gICAgICB5aWVsZEludGVydmFsID0gNTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHBlcmZvcm1Xb3JrVW50aWxEZWFkbGluZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2NoZWR1bGVkSG9zdENhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLnVuc3RhYmxlX25vdygpOyAvLyBZaWVsZCBhZnRlciBgeWllbGRJbnRlcnZhbGAgbXMsIHJlZ2FyZGxlc3Mgb2Ygd2hlcmUgd2UgYXJlIGluIHRoZSB2c3luY1xuICAgICAgLy8gY3ljbGUuIFRoaXMgbWVhbnMgdGhlcmUncyBhbHdheXMgdGltZSByZW1haW5pbmcgYXQgdGhlIGJlZ2lubmluZyBvZlxuICAgICAgLy8gdGhlIG1lc3NhZ2UgZXZlbnQuXG5cbiAgICAgIGRlYWRsaW5lID0gY3VycmVudFRpbWUgKyB5aWVsZEludGVydmFsO1xuICAgICAgdmFyIGhhc1RpbWVSZW1haW5pbmcgPSB0cnVlO1xuXG4gICAgICB0cnkge1xuICAgICAgICB2YXIgaGFzTW9yZVdvcmsgPSBzY2hlZHVsZWRIb3N0Q2FsbGJhY2soaGFzVGltZVJlbWFpbmluZywgY3VycmVudFRpbWUpO1xuXG4gICAgICAgIGlmICghaGFzTW9yZVdvcmspIHtcbiAgICAgICAgICBpc01lc3NhZ2VMb29wUnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgIHNjaGVkdWxlZEhvc3RDYWxsYmFjayA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSWYgdGhlcmUncyBtb3JlIHdvcmssIHNjaGVkdWxlIHRoZSBuZXh0IG1lc3NhZ2UgZXZlbnQgYXQgdGhlIGVuZFxuICAgICAgICAgIC8vIG9mIHRoZSBwcmVjZWRpbmcgb25lLlxuICAgICAgICAgIHBvcnQucG9zdE1lc3NhZ2UobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIElmIGEgc2NoZWR1bGVyIHRhc2sgdGhyb3dzLCBleGl0IHRoZSBjdXJyZW50IGJyb3dzZXIgdGFzayBzbyB0aGVcbiAgICAgICAgLy8gZXJyb3IgY2FuIGJlIG9ic2VydmVkLlxuICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKG51bGwpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaXNNZXNzYWdlTG9vcFJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9IC8vIFlpZWxkaW5nIHRvIHRoZSBicm93c2VyIHdpbGwgZ2l2ZSBpdCBhIGNoYW5jZSB0byBwYWludCwgc28gd2UgY2FuXG4gICAgLy8gcmVzZXQgdGhpcy5cblxuXG4gICAgbmVlZHNQYWludCA9IGZhbHNlO1xuICB9O1xuXG4gIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gIHZhciBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBwZXJmb3JtV29ya1VudGlsRGVhZGxpbmU7XG5cbiAgcmVxdWVzdEhvc3RDYWxsYmFjayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHNjaGVkdWxlZEhvc3RDYWxsYmFjayA9IGNhbGxiYWNrO1xuXG4gICAgaWYgKCFpc01lc3NhZ2VMb29wUnVubmluZykge1xuICAgICAgaXNNZXNzYWdlTG9vcFJ1bm5pbmcgPSB0cnVlO1xuICAgICAgcG9ydC5wb3N0TWVzc2FnZShudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgcmVxdWVzdEhvc3RUaW1lb3V0ID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBtcykge1xuICAgIHRhc2tUaW1lb3V0SUQgPSBfc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsYmFjayhleHBvcnRzLnVuc3RhYmxlX25vdygpKTtcbiAgICB9LCBtcyk7XG4gIH07XG5cbiAgY2FuY2VsSG9zdFRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2NsZWFyVGltZW91dCh0YXNrVGltZW91dElEKTtcblxuICAgIHRhc2tUaW1lb3V0SUQgPSAtMTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcHVzaChoZWFwLCBub2RlKSB7XG4gIHZhciBpbmRleCA9IGhlYXAubGVuZ3RoO1xuICBoZWFwLnB1c2gobm9kZSk7XG4gIHNpZnRVcChoZWFwLCBub2RlLCBpbmRleCk7XG59XG5mdW5jdGlvbiBwZWVrKGhlYXApIHtcbiAgdmFyIGZpcnN0ID0gaGVhcFswXTtcbiAgcmV0dXJuIGZpcnN0ID09PSB1bmRlZmluZWQgPyBudWxsIDogZmlyc3Q7XG59XG5mdW5jdGlvbiBwb3AoaGVhcCkge1xuICB2YXIgZmlyc3QgPSBoZWFwWzBdO1xuXG4gIGlmIChmaXJzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGxhc3QgPSBoZWFwLnBvcCgpO1xuXG4gICAgaWYgKGxhc3QgIT09IGZpcnN0KSB7XG4gICAgICBoZWFwWzBdID0gbGFzdDtcbiAgICAgIHNpZnREb3duKGhlYXAsIGxhc3QsIDApO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaWZ0VXAoaGVhcCwgbm9kZSwgaSkge1xuICB2YXIgaW5kZXggPSBpO1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgdmFyIHBhcmVudEluZGV4ID0gTWF0aC5mbG9vcigoaW5kZXggLSAxKSAvIDIpO1xuICAgIHZhciBwYXJlbnQgPSBoZWFwW3BhcmVudEluZGV4XTtcblxuICAgIGlmIChwYXJlbnQgIT09IHVuZGVmaW5lZCAmJiBjb21wYXJlKHBhcmVudCwgbm9kZSkgPiAwKSB7XG4gICAgICAvLyBUaGUgcGFyZW50IGlzIGxhcmdlci4gU3dhcCBwb3NpdGlvbnMuXG4gICAgICBoZWFwW3BhcmVudEluZGV4XSA9IG5vZGU7XG4gICAgICBoZWFwW2luZGV4XSA9IHBhcmVudDtcbiAgICAgIGluZGV4ID0gcGFyZW50SW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBwYXJlbnQgaXMgc21hbGxlci4gRXhpdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2lmdERvd24oaGVhcCwgbm9kZSwgaSkge1xuICB2YXIgaW5kZXggPSBpO1xuICB2YXIgbGVuZ3RoID0gaGVhcC5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGxlZnRJbmRleCA9IChpbmRleCArIDEpICogMiAtIDE7XG4gICAgdmFyIGxlZnQgPSBoZWFwW2xlZnRJbmRleF07XG4gICAgdmFyIHJpZ2h0SW5kZXggPSBsZWZ0SW5kZXggKyAxO1xuICAgIHZhciByaWdodCA9IGhlYXBbcmlnaHRJbmRleF07IC8vIElmIHRoZSBsZWZ0IG9yIHJpZ2h0IG5vZGUgaXMgc21hbGxlciwgc3dhcCB3aXRoIHRoZSBzbWFsbGVyIG9mIHRob3NlLlxuXG4gICAgaWYgKGxlZnQgIT09IHVuZGVmaW5lZCAmJiBjb21wYXJlKGxlZnQsIG5vZGUpIDwgMCkge1xuICAgICAgaWYgKHJpZ2h0ICE9PSB1bmRlZmluZWQgJiYgY29tcGFyZShyaWdodCwgbGVmdCkgPCAwKSB7XG4gICAgICAgIGhlYXBbaW5kZXhdID0gcmlnaHQ7XG4gICAgICAgIGhlYXBbcmlnaHRJbmRleF0gPSBub2RlO1xuICAgICAgICBpbmRleCA9IHJpZ2h0SW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWFwW2luZGV4XSA9IGxlZnQ7XG4gICAgICAgIGhlYXBbbGVmdEluZGV4XSA9IG5vZGU7XG4gICAgICAgIGluZGV4ID0gbGVmdEluZGV4O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmlnaHQgIT09IHVuZGVmaW5lZCAmJiBjb21wYXJlKHJpZ2h0LCBub2RlKSA8IDApIHtcbiAgICAgIGhlYXBbaW5kZXhdID0gcmlnaHQ7XG4gICAgICBoZWFwW3JpZ2h0SW5kZXhdID0gbm9kZTtcbiAgICAgIGluZGV4ID0gcmlnaHRJbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTmVpdGhlciBjaGlsZCBpcyBzbWFsbGVyLiBFeGl0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wYXJlKGEsIGIpIHtcbiAgLy8gQ29tcGFyZSBzb3J0IGluZGV4IGZpcnN0LCB0aGVuIHRhc2sgaWQuXG4gIHZhciBkaWZmID0gYS5zb3J0SW5kZXggLSBiLnNvcnRJbmRleDtcbiAgcmV0dXJuIGRpZmYgIT09IDAgPyBkaWZmIDogYS5pZCAtIGIuaWQ7XG59XG5cbi8vIFRPRE86IFVzZSBzeW1ib2xzP1xudmFyIE5vUHJpb3JpdHkgPSAwO1xudmFyIEltbWVkaWF0ZVByaW9yaXR5ID0gMTtcbnZhciBVc2VyQmxvY2tpbmdQcmlvcml0eSA9IDI7XG52YXIgTm9ybWFsUHJpb3JpdHkgPSAzO1xudmFyIExvd1ByaW9yaXR5ID0gNDtcbnZhciBJZGxlUHJpb3JpdHkgPSA1O1xuXG52YXIgcnVuSWRDb3VudGVyID0gMDtcbnZhciBtYWluVGhyZWFkSWRDb3VudGVyID0gMDtcbnZhciBwcm9maWxpbmdTdGF0ZVNpemUgPSA0O1xudmFyIHNoYXJlZFByb2ZpbGluZ0J1ZmZlciA9IGVuYWJsZVByb2ZpbGluZyA/IC8vICRGbG93Rml4TWUgRmxvdyBkb2Vzbid0IGtub3cgYWJvdXQgU2hhcmVkQXJyYXlCdWZmZXJcbnR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBTaGFyZWRBcnJheUJ1ZmZlcihwcm9maWxpbmdTdGF0ZVNpemUgKiBJbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKSA6IC8vICRGbG93Rml4TWUgRmxvdyBkb2Vzbid0IGtub3cgYWJvdXQgQXJyYXlCdWZmZXJcbnR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBBcnJheUJ1ZmZlcihwcm9maWxpbmdTdGF0ZVNpemUgKiBJbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKSA6IG51bGwgLy8gRG9uJ3QgY3Jhc2ggdGhlIGluaXQgcGF0aCBvbiBJRTlcbjogbnVsbDtcbnZhciBwcm9maWxpbmdTdGF0ZSA9IGVuYWJsZVByb2ZpbGluZyAmJiBzaGFyZWRQcm9maWxpbmdCdWZmZXIgIT09IG51bGwgPyBuZXcgSW50MzJBcnJheShzaGFyZWRQcm9maWxpbmdCdWZmZXIpIDogW107IC8vIFdlIGNhbid0IHJlYWQgdGhpcyBidXQgaXQgaGVscHMgc2F2ZSBieXRlcyBmb3IgbnVsbCBjaGVja3NcblxudmFyIFBSSU9SSVRZID0gMDtcbnZhciBDVVJSRU5UX1RBU0tfSUQgPSAxO1xudmFyIENVUlJFTlRfUlVOX0lEID0gMjtcbnZhciBRVUVVRV9TSVpFID0gMztcblxuaWYgKGVuYWJsZVByb2ZpbGluZykge1xuICBwcm9maWxpbmdTdGF0ZVtQUklPUklUWV0gPSBOb1ByaW9yaXR5OyAvLyBUaGlzIGlzIG1haW50YWluZWQgd2l0aCBhIGNvdW50ZXIsIGJlY2F1c2UgdGhlIHNpemUgb2YgdGhlIHByaW9yaXR5IHF1ZXVlXG4gIC8vIGFycmF5IG1pZ2h0IGluY2x1ZGUgY2FuY2VsZWQgdGFza3MuXG5cbiAgcHJvZmlsaW5nU3RhdGVbUVVFVUVfU0laRV0gPSAwO1xuICBwcm9maWxpbmdTdGF0ZVtDVVJSRU5UX1RBU0tfSURdID0gMDtcbn0gLy8gQnl0ZXMgcGVyIGVsZW1lbnQgaXMgNFxuXG5cbnZhciBJTklUSUFMX0VWRU5UX0xPR19TSVpFID0gMTMxMDcyO1xudmFyIE1BWF9FVkVOVF9MT0dfU0laRSA9IDUyNDI4ODsgLy8gRXF1aXZhbGVudCB0byAyIG1lZ2FieXRlc1xuXG52YXIgZXZlbnRMb2dTaXplID0gMDtcbnZhciBldmVudExvZ0J1ZmZlciA9IG51bGw7XG52YXIgZXZlbnRMb2cgPSBudWxsO1xudmFyIGV2ZW50TG9nSW5kZXggPSAwO1xudmFyIFRhc2tTdGFydEV2ZW50ID0gMTtcbnZhciBUYXNrQ29tcGxldGVFdmVudCA9IDI7XG52YXIgVGFza0Vycm9yRXZlbnQgPSAzO1xudmFyIFRhc2tDYW5jZWxFdmVudCA9IDQ7XG52YXIgVGFza1J1bkV2ZW50ID0gNTtcbnZhciBUYXNrWWllbGRFdmVudCA9IDY7XG52YXIgU2NoZWR1bGVyU3VzcGVuZEV2ZW50ID0gNztcbnZhciBTY2hlZHVsZXJSZXN1bWVFdmVudCA9IDg7XG5cbmZ1bmN0aW9uIGxvZ0V2ZW50KGVudHJpZXMpIHtcbiAgaWYgKGV2ZW50TG9nICE9PSBudWxsKSB7XG4gICAgdmFyIG9mZnNldCA9IGV2ZW50TG9nSW5kZXg7XG4gICAgZXZlbnRMb2dJbmRleCArPSBlbnRyaWVzLmxlbmd0aDtcblxuICAgIGlmIChldmVudExvZ0luZGV4ICsgMSA+IGV2ZW50TG9nU2l6ZSkge1xuICAgICAgZXZlbnRMb2dTaXplICo9IDI7XG5cbiAgICAgIGlmIChldmVudExvZ1NpemUgPiBNQVhfRVZFTlRfTE9HX1NJWkUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlNjaGVkdWxlciBQcm9maWxpbmc6IEV2ZW50IGxvZyBleGNlZWRlZCBtYXhpbXVtIHNpemUuIERvbid0IFwiICsgJ2ZvcmdldCB0byBjYWxsIGBzdG9wTG9nZ2luZ1Byb2ZpbGluZ0V2ZW50cygpYC4nKTtcbiAgICAgICAgc3RvcExvZ2dpbmdQcm9maWxpbmdFdmVudHMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3RXZlbnRMb2cgPSBuZXcgSW50MzJBcnJheShldmVudExvZ1NpemUgKiA0KTtcbiAgICAgIG5ld0V2ZW50TG9nLnNldChldmVudExvZyk7XG4gICAgICBldmVudExvZ0J1ZmZlciA9IG5ld0V2ZW50TG9nLmJ1ZmZlcjtcbiAgICAgIGV2ZW50TG9nID0gbmV3RXZlbnRMb2c7XG4gICAgfVxuXG4gICAgZXZlbnRMb2cuc2V0KGVudHJpZXMsIG9mZnNldCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RhcnRMb2dnaW5nUHJvZmlsaW5nRXZlbnRzKCkge1xuICBldmVudExvZ1NpemUgPSBJTklUSUFMX0VWRU5UX0xPR19TSVpFO1xuICBldmVudExvZ0J1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihldmVudExvZ1NpemUgKiA0KTtcbiAgZXZlbnRMb2cgPSBuZXcgSW50MzJBcnJheShldmVudExvZ0J1ZmZlcik7XG4gIGV2ZW50TG9nSW5kZXggPSAwO1xufVxuZnVuY3Rpb24gc3RvcExvZ2dpbmdQcm9maWxpbmdFdmVudHMoKSB7XG4gIHZhciBidWZmZXIgPSBldmVudExvZ0J1ZmZlcjtcbiAgZXZlbnRMb2dTaXplID0gMDtcbiAgZXZlbnRMb2dCdWZmZXIgPSBudWxsO1xuICBldmVudExvZyA9IG51bGw7XG4gIGV2ZW50TG9nSW5kZXggPSAwO1xuICByZXR1cm4gYnVmZmVyO1xufVxuZnVuY3Rpb24gbWFya1Rhc2tTdGFydCh0YXNrLCBtcykge1xuICBpZiAoZW5hYmxlUHJvZmlsaW5nKSB7XG4gICAgcHJvZmlsaW5nU3RhdGVbUVVFVUVfU0laRV0rKztcblxuICAgIGlmIChldmVudExvZyAhPT0gbnVsbCkge1xuICAgICAgLy8gcGVyZm9ybWFuY2Uubm93IHJldHVybnMgYSBmbG9hdCwgcmVwcmVzZW50aW5nIG1pbGxpc2Vjb25kcy4gV2hlbiB0aGVcbiAgICAgIC8vIGV2ZW50IGlzIGxvZ2dlZCwgaXQncyBjb2VyY2VkIHRvIGFuIGludC4gQ29udmVydCB0byBtaWNyb3NlY29uZHMgdG9cbiAgICAgIC8vIG1haW50YWluIGV4dHJhIGRlZ3JlZXMgb2YgcHJlY2lzaW9uLlxuICAgICAgbG9nRXZlbnQoW1Rhc2tTdGFydEV2ZW50LCBtcyAqIDEwMDAsIHRhc2suaWQsIHRhc2sucHJpb3JpdHlMZXZlbF0pO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gbWFya1Rhc2tDb21wbGV0ZWQodGFzaywgbXMpIHtcbiAgaWYgKGVuYWJsZVByb2ZpbGluZykge1xuICAgIHByb2ZpbGluZ1N0YXRlW1BSSU9SSVRZXSA9IE5vUHJpb3JpdHk7XG4gICAgcHJvZmlsaW5nU3RhdGVbQ1VSUkVOVF9UQVNLX0lEXSA9IDA7XG4gICAgcHJvZmlsaW5nU3RhdGVbUVVFVUVfU0laRV0tLTtcblxuICAgIGlmIChldmVudExvZyAhPT0gbnVsbCkge1xuICAgICAgbG9nRXZlbnQoW1Rhc2tDb21wbGV0ZUV2ZW50LCBtcyAqIDEwMDAsIHRhc2suaWRdKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIG1hcmtUYXNrQ2FuY2VsZWQodGFzaywgbXMpIHtcbiAgaWYgKGVuYWJsZVByb2ZpbGluZykge1xuICAgIHByb2ZpbGluZ1N0YXRlW1FVRVVFX1NJWkVdLS07XG5cbiAgICBpZiAoZXZlbnRMb2cgIT09IG51bGwpIHtcbiAgICAgIGxvZ0V2ZW50KFtUYXNrQ2FuY2VsRXZlbnQsIG1zICogMTAwMCwgdGFzay5pZF0pO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gbWFya1Rhc2tFcnJvcmVkKHRhc2ssIG1zKSB7XG4gIGlmIChlbmFibGVQcm9maWxpbmcpIHtcbiAgICBwcm9maWxpbmdTdGF0ZVtQUklPUklUWV0gPSBOb1ByaW9yaXR5O1xuICAgIHByb2ZpbGluZ1N0YXRlW0NVUlJFTlRfVEFTS19JRF0gPSAwO1xuICAgIHByb2ZpbGluZ1N0YXRlW1FVRVVFX1NJWkVdLS07XG5cbiAgICBpZiAoZXZlbnRMb2cgIT09IG51bGwpIHtcbiAgICAgIGxvZ0V2ZW50KFtUYXNrRXJyb3JFdmVudCwgbXMgKiAxMDAwLCB0YXNrLmlkXSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBtYXJrVGFza1J1bih0YXNrLCBtcykge1xuICBpZiAoZW5hYmxlUHJvZmlsaW5nKSB7XG4gICAgcnVuSWRDb3VudGVyKys7XG4gICAgcHJvZmlsaW5nU3RhdGVbUFJJT1JJVFldID0gdGFzay5wcmlvcml0eUxldmVsO1xuICAgIHByb2ZpbGluZ1N0YXRlW0NVUlJFTlRfVEFTS19JRF0gPSB0YXNrLmlkO1xuICAgIHByb2ZpbGluZ1N0YXRlW0NVUlJFTlRfUlVOX0lEXSA9IHJ1bklkQ291bnRlcjtcblxuICAgIGlmIChldmVudExvZyAhPT0gbnVsbCkge1xuICAgICAgbG9nRXZlbnQoW1Rhc2tSdW5FdmVudCwgbXMgKiAxMDAwLCB0YXNrLmlkLCBydW5JZENvdW50ZXJdKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIG1hcmtUYXNrWWllbGQodGFzaywgbXMpIHtcbiAgaWYgKGVuYWJsZVByb2ZpbGluZykge1xuICAgIHByb2ZpbGluZ1N0YXRlW1BSSU9SSVRZXSA9IE5vUHJpb3JpdHk7XG4gICAgcHJvZmlsaW5nU3RhdGVbQ1VSUkVOVF9UQVNLX0lEXSA9IDA7XG4gICAgcHJvZmlsaW5nU3RhdGVbQ1VSUkVOVF9SVU5fSURdID0gMDtcblxuICAgIGlmIChldmVudExvZyAhPT0gbnVsbCkge1xuICAgICAgbG9nRXZlbnQoW1Rhc2tZaWVsZEV2ZW50LCBtcyAqIDEwMDAsIHRhc2suaWQsIHJ1bklkQ291bnRlcl0pO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gbWFya1NjaGVkdWxlclN1c3BlbmRlZChtcykge1xuICBpZiAoZW5hYmxlUHJvZmlsaW5nKSB7XG4gICAgbWFpblRocmVhZElkQ291bnRlcisrO1xuXG4gICAgaWYgKGV2ZW50TG9nICE9PSBudWxsKSB7XG4gICAgICBsb2dFdmVudChbU2NoZWR1bGVyU3VzcGVuZEV2ZW50LCBtcyAqIDEwMDAsIG1haW5UaHJlYWRJZENvdW50ZXJdKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIG1hcmtTY2hlZHVsZXJVbnN1c3BlbmRlZChtcykge1xuICBpZiAoZW5hYmxlUHJvZmlsaW5nKSB7XG4gICAgaWYgKGV2ZW50TG9nICE9PSBudWxsKSB7XG4gICAgICBsb2dFdmVudChbU2NoZWR1bGVyUmVzdW1lRXZlbnQsIG1zICogMTAwMCwgbWFpblRocmVhZElkQ291bnRlcl0pO1xuICAgIH1cbiAgfVxufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby12YXIgKi9cbi8vIE1hdGgucG93KDIsIDMwKSAtIDFcbi8vIDBiMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExXG5cbnZhciBtYXhTaWduZWQzMUJpdEludCA9IDEwNzM3NDE4MjM7IC8vIFRpbWVzIG91dCBpbW1lZGlhdGVseVxuXG52YXIgSU1NRURJQVRFX1BSSU9SSVRZX1RJTUVPVVQgPSAtMTsgLy8gRXZlbnR1YWxseSB0aW1lcyBvdXRcblxudmFyIFVTRVJfQkxPQ0tJTkdfUFJJT1JJVFkgPSAyNTA7XG52YXIgTk9STUFMX1BSSU9SSVRZX1RJTUVPVVQgPSA1MDAwO1xudmFyIExPV19QUklPUklUWV9USU1FT1VUID0gMTAwMDA7IC8vIE5ldmVyIHRpbWVzIG91dFxuXG52YXIgSURMRV9QUklPUklUWSA9IG1heFNpZ25lZDMxQml0SW50OyAvLyBUYXNrcyBhcmUgc3RvcmVkIG9uIGEgbWluIGhlYXBcblxudmFyIHRhc2tRdWV1ZSA9IFtdO1xudmFyIHRpbWVyUXVldWUgPSBbXTsgLy8gSW5jcmVtZW50aW5nIGlkIGNvdW50ZXIuIFVzZWQgdG8gbWFpbnRhaW4gaW5zZXJ0aW9uIG9yZGVyLlxuXG52YXIgdGFza0lkQ291bnRlciA9IDE7IC8vIFBhdXNpbmcgdGhlIHNjaGVkdWxlciBpcyB1c2VmdWwgZm9yIGRlYnVnZ2luZy5cblxudmFyIGlzU2NoZWR1bGVyUGF1c2VkID0gZmFsc2U7XG52YXIgY3VycmVudFRhc2sgPSBudWxsO1xudmFyIGN1cnJlbnRQcmlvcml0eUxldmVsID0gTm9ybWFsUHJpb3JpdHk7IC8vIFRoaXMgaXMgc2V0IHdoaWxlIHBlcmZvcm1pbmcgd29yaywgdG8gcHJldmVudCByZS1lbnRyYW5jeS5cblxudmFyIGlzUGVyZm9ybWluZ1dvcmsgPSBmYWxzZTtcbnZhciBpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCA9IGZhbHNlO1xudmFyIGlzSG9zdFRpbWVvdXRTY2hlZHVsZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gYWR2YW5jZVRpbWVycyhjdXJyZW50VGltZSkge1xuICAvLyBDaGVjayBmb3IgdGFza3MgdGhhdCBhcmUgbm8gbG9uZ2VyIGRlbGF5ZWQgYW5kIGFkZCB0aGVtIHRvIHRoZSBxdWV1ZS5cbiAgdmFyIHRpbWVyID0gcGVlayh0aW1lclF1ZXVlKTtcblxuICB3aGlsZSAodGltZXIgIT09IG51bGwpIHtcbiAgICBpZiAodGltZXIuY2FsbGJhY2sgPT09IG51bGwpIHtcbiAgICAgIC8vIFRpbWVyIHdhcyBjYW5jZWxsZWQuXG4gICAgICBwb3AodGltZXJRdWV1ZSk7XG4gICAgfSBlbHNlIGlmICh0aW1lci5zdGFydFRpbWUgPD0gY3VycmVudFRpbWUpIHtcbiAgICAgIC8vIFRpbWVyIGZpcmVkLiBUcmFuc2ZlciB0byB0aGUgdGFzayBxdWV1ZS5cbiAgICAgIHBvcCh0aW1lclF1ZXVlKTtcbiAgICAgIHRpbWVyLnNvcnRJbmRleCA9IHRpbWVyLmV4cGlyYXRpb25UaW1lO1xuICAgICAgcHVzaCh0YXNrUXVldWUsIHRpbWVyKTtcblxuICAgICAgaWYgKGVuYWJsZVByb2ZpbGluZykge1xuICAgICAgICBtYXJrVGFza1N0YXJ0KHRpbWVyLCBjdXJyZW50VGltZSk7XG4gICAgICAgIHRpbWVyLmlzUXVldWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVtYWluaW5nIHRpbWVycyBhcmUgcGVuZGluZy5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aW1lciA9IHBlZWsodGltZXJRdWV1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlVGltZW91dChjdXJyZW50VGltZSkge1xuICBpc0hvc3RUaW1lb3V0U2NoZWR1bGVkID0gZmFsc2U7XG4gIGFkdmFuY2VUaW1lcnMoY3VycmVudFRpbWUpO1xuXG4gIGlmICghaXNIb3N0Q2FsbGJhY2tTY2hlZHVsZWQpIHtcbiAgICBpZiAocGVlayh0YXNrUXVldWUpICE9PSBudWxsKSB7XG4gICAgICBpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCA9IHRydWU7XG4gICAgICByZXF1ZXN0SG9zdENhbGxiYWNrKGZsdXNoV29yayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBmaXJzdFRpbWVyID0gcGVlayh0aW1lclF1ZXVlKTtcblxuICAgICAgaWYgKGZpcnN0VGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgcmVxdWVzdEhvc3RUaW1lb3V0KGhhbmRsZVRpbWVvdXQsIGZpcnN0VGltZXIuc3RhcnRUaW1lIC0gY3VycmVudFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmbHVzaFdvcmsoaGFzVGltZVJlbWFpbmluZywgaW5pdGlhbFRpbWUpIHtcbiAgaWYgKGVuYWJsZVByb2ZpbGluZykge1xuICAgIG1hcmtTY2hlZHVsZXJVbnN1c3BlbmRlZChpbml0aWFsVGltZSk7XG4gIH0gLy8gV2UnbGwgbmVlZCBhIGhvc3QgY2FsbGJhY2sgdGhlIG5leHQgdGltZSB3b3JrIGlzIHNjaGVkdWxlZC5cblxuXG4gIGlzSG9zdENhbGxiYWNrU2NoZWR1bGVkID0gZmFsc2U7XG5cbiAgaWYgKGlzSG9zdFRpbWVvdXRTY2hlZHVsZWQpIHtcbiAgICAvLyBXZSBzY2hlZHVsZWQgYSB0aW1lb3V0IGJ1dCBpdCdzIG5vIGxvbmdlciBuZWVkZWQuIENhbmNlbCBpdC5cbiAgICBpc0hvc3RUaW1lb3V0U2NoZWR1bGVkID0gZmFsc2U7XG4gICAgY2FuY2VsSG9zdFRpbWVvdXQoKTtcbiAgfVxuXG4gIGlzUGVyZm9ybWluZ1dvcmsgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmlvcml0eUxldmVsID0gY3VycmVudFByaW9yaXR5TGV2ZWw7XG5cbiAgdHJ5IHtcbiAgICBpZiAoZW5hYmxlUHJvZmlsaW5nKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gd29ya0xvb3AoaGFzVGltZVJlbWFpbmluZywgaW5pdGlhbFRpbWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRUYXNrICE9PSBudWxsKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcbiAgICAgICAgICBtYXJrVGFza0Vycm9yZWQoY3VycmVudFRhc2ssIGN1cnJlbnRUaW1lKTtcbiAgICAgICAgICBjdXJyZW50VGFzay5pc1F1ZXVlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vIGNhdGNoIGluIHByb2QgY29kZXBhdGguXG4gICAgICByZXR1cm4gd29ya0xvb3AoaGFzVGltZVJlbWFpbmluZywgaW5pdGlhbFRpbWUpO1xuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBjdXJyZW50VGFzayA9IG51bGw7XG4gICAgY3VycmVudFByaW9yaXR5TGV2ZWwgPSBwcmV2aW91c1ByaW9yaXR5TGV2ZWw7XG4gICAgaXNQZXJmb3JtaW5nV29yayA9IGZhbHNlO1xuXG4gICAgaWYgKGVuYWJsZVByb2ZpbGluZykge1xuICAgICAgdmFyIF9jdXJyZW50VGltZSA9IGV4cG9ydHMudW5zdGFibGVfbm93KCk7XG5cbiAgICAgIG1hcmtTY2hlZHVsZXJTdXNwZW5kZWQoX2N1cnJlbnRUaW1lKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gd29ya0xvb3AoaGFzVGltZVJlbWFpbmluZywgaW5pdGlhbFRpbWUpIHtcbiAgdmFyIGN1cnJlbnRUaW1lID0gaW5pdGlhbFRpbWU7XG4gIGFkdmFuY2VUaW1lcnMoY3VycmVudFRpbWUpO1xuICBjdXJyZW50VGFzayA9IHBlZWsodGFza1F1ZXVlKTtcblxuICB3aGlsZSAoY3VycmVudFRhc2sgIT09IG51bGwgJiYgIShlbmFibGVTY2hlZHVsZXJEZWJ1Z2dpbmcgJiYgaXNTY2hlZHVsZXJQYXVzZWQpKSB7XG4gICAgaWYgKGN1cnJlbnRUYXNrLmV4cGlyYXRpb25UaW1lID4gY3VycmVudFRpbWUgJiYgKCFoYXNUaW1lUmVtYWluaW5nIHx8IHNob3VsZFlpZWxkVG9Ib3N0KCkpKSB7XG4gICAgICAvLyBUaGlzIGN1cnJlbnRUYXNrIGhhc24ndCBleHBpcmVkLCBhbmQgd2UndmUgcmVhY2hlZCB0aGUgZGVhZGxpbmUuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgY2FsbGJhY2sgPSBjdXJyZW50VGFzay5jYWxsYmFjaztcblxuICAgIGlmIChjYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgY3VycmVudFRhc2suY2FsbGJhY2sgPSBudWxsO1xuICAgICAgY3VycmVudFByaW9yaXR5TGV2ZWwgPSBjdXJyZW50VGFzay5wcmlvcml0eUxldmVsO1xuICAgICAgdmFyIGRpZFVzZXJDYWxsYmFja1RpbWVvdXQgPSBjdXJyZW50VGFzay5leHBpcmF0aW9uVGltZSA8PSBjdXJyZW50VGltZTtcbiAgICAgIG1hcmtUYXNrUnVuKGN1cnJlbnRUYXNrLCBjdXJyZW50VGltZSk7XG4gICAgICB2YXIgY29udGludWF0aW9uQ2FsbGJhY2sgPSBjYWxsYmFjayhkaWRVc2VyQ2FsbGJhY2tUaW1lb3V0KTtcbiAgICAgIGN1cnJlbnRUaW1lID0gZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcblxuICAgICAgaWYgKHR5cGVvZiBjb250aW51YXRpb25DYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjdXJyZW50VGFzay5jYWxsYmFjayA9IGNvbnRpbnVhdGlvbkNhbGxiYWNrO1xuICAgICAgICBtYXJrVGFza1lpZWxkKGN1cnJlbnRUYXNrLCBjdXJyZW50VGltZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZW5hYmxlUHJvZmlsaW5nKSB7XG4gICAgICAgICAgbWFya1Rhc2tDb21wbGV0ZWQoY3VycmVudFRhc2ssIGN1cnJlbnRUaW1lKTtcbiAgICAgICAgICBjdXJyZW50VGFzay5pc1F1ZXVlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRUYXNrID09PSBwZWVrKHRhc2tRdWV1ZSkpIHtcbiAgICAgICAgICBwb3AodGFza1F1ZXVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhZHZhbmNlVGltZXJzKGN1cnJlbnRUaW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9wKHRhc2tRdWV1ZSk7XG4gICAgfVxuXG4gICAgY3VycmVudFRhc2sgPSBwZWVrKHRhc2tRdWV1ZSk7XG4gIH0gLy8gUmV0dXJuIHdoZXRoZXIgdGhlcmUncyBhZGRpdGlvbmFsIHdvcmtcblxuXG4gIGlmIChjdXJyZW50VGFzayAhPT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBmaXJzdFRpbWVyID0gcGVlayh0aW1lclF1ZXVlKTtcblxuICAgIGlmIChmaXJzdFRpbWVyICE9PSBudWxsKSB7XG4gICAgICByZXF1ZXN0SG9zdFRpbWVvdXQoaGFuZGxlVGltZW91dCwgZmlyc3RUaW1lci5zdGFydFRpbWUgLSBjdXJyZW50VGltZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX3J1bldpdGhQcmlvcml0eShwcmlvcml0eUxldmVsLCBldmVudEhhbmRsZXIpIHtcbiAgc3dpdGNoIChwcmlvcml0eUxldmVsKSB7XG4gICAgY2FzZSBJbW1lZGlhdGVQcmlvcml0eTpcbiAgICBjYXNlIFVzZXJCbG9ja2luZ1ByaW9yaXR5OlxuICAgIGNhc2UgTm9ybWFsUHJpb3JpdHk6XG4gICAgY2FzZSBMb3dQcmlvcml0eTpcbiAgICBjYXNlIElkbGVQcmlvcml0eTpcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHByaW9yaXR5TGV2ZWwgPSBOb3JtYWxQcmlvcml0eTtcbiAgfVxuXG4gIHZhciBwcmV2aW91c1ByaW9yaXR5TGV2ZWwgPSBjdXJyZW50UHJpb3JpdHlMZXZlbDtcbiAgY3VycmVudFByaW9yaXR5TGV2ZWwgPSBwcmlvcml0eUxldmVsO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGV2ZW50SGFuZGxlcigpO1xuICB9IGZpbmFsbHkge1xuICAgIGN1cnJlbnRQcmlvcml0eUxldmVsID0gcHJldmlvdXNQcmlvcml0eUxldmVsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX25leHQoZXZlbnRIYW5kbGVyKSB7XG4gIHZhciBwcmlvcml0eUxldmVsO1xuXG4gIHN3aXRjaCAoY3VycmVudFByaW9yaXR5TGV2ZWwpIHtcbiAgICBjYXNlIEltbWVkaWF0ZVByaW9yaXR5OlxuICAgIGNhc2UgVXNlckJsb2NraW5nUHJpb3JpdHk6XG4gICAgY2FzZSBOb3JtYWxQcmlvcml0eTpcbiAgICAgIC8vIFNoaWZ0IGRvd24gdG8gbm9ybWFsIHByaW9yaXR5XG4gICAgICBwcmlvcml0eUxldmVsID0gTm9ybWFsUHJpb3JpdHk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBBbnl0aGluZyBsb3dlciB0aGFuIG5vcm1hbCBwcmlvcml0eSBzaG91bGQgcmVtYWluIGF0IHRoZSBjdXJyZW50IGxldmVsLlxuICAgICAgcHJpb3JpdHlMZXZlbCA9IGN1cnJlbnRQcmlvcml0eUxldmVsO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICB2YXIgcHJldmlvdXNQcmlvcml0eUxldmVsID0gY3VycmVudFByaW9yaXR5TGV2ZWw7XG4gIGN1cnJlbnRQcmlvcml0eUxldmVsID0gcHJpb3JpdHlMZXZlbDtcblxuICB0cnkge1xuICAgIHJldHVybiBldmVudEhhbmRsZXIoKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjdXJyZW50UHJpb3JpdHlMZXZlbCA9IHByZXZpb3VzUHJpb3JpdHlMZXZlbDtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV93cmFwQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgdmFyIHBhcmVudFByaW9yaXR5TGV2ZWwgPSBjdXJyZW50UHJpb3JpdHlMZXZlbDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUaGlzIGlzIGEgZm9yayBvZiBydW5XaXRoUHJpb3JpdHksIGlubGluZWQgZm9yIHBlcmZvcm1hbmNlLlxuICAgIHZhciBwcmV2aW91c1ByaW9yaXR5TGV2ZWwgPSBjdXJyZW50UHJpb3JpdHlMZXZlbDtcbiAgICBjdXJyZW50UHJpb3JpdHlMZXZlbCA9IHBhcmVudFByaW9yaXR5TGV2ZWw7XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGN1cnJlbnRQcmlvcml0eUxldmVsID0gcHJldmlvdXNQcmlvcml0eUxldmVsO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGltZW91dEZvclByaW9yaXR5TGV2ZWwocHJpb3JpdHlMZXZlbCkge1xuICBzd2l0Y2ggKHByaW9yaXR5TGV2ZWwpIHtcbiAgICBjYXNlIEltbWVkaWF0ZVByaW9yaXR5OlxuICAgICAgcmV0dXJuIElNTUVESUFURV9QUklPUklUWV9USU1FT1VUO1xuXG4gICAgY2FzZSBVc2VyQmxvY2tpbmdQcmlvcml0eTpcbiAgICAgIHJldHVybiBVU0VSX0JMT0NLSU5HX1BSSU9SSVRZO1xuXG4gICAgY2FzZSBJZGxlUHJpb3JpdHk6XG4gICAgICByZXR1cm4gSURMRV9QUklPUklUWTtcblxuICAgIGNhc2UgTG93UHJpb3JpdHk6XG4gICAgICByZXR1cm4gTE9XX1BSSU9SSVRZX1RJTUVPVVQ7XG5cbiAgICBjYXNlIE5vcm1hbFByaW9yaXR5OlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gTk9STUFMX1BSSU9SSVRZX1RJTUVPVVQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayhwcmlvcml0eUxldmVsLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICB2YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLnVuc3RhYmxlX25vdygpO1xuICB2YXIgc3RhcnRUaW1lO1xuICB2YXIgdGltZW91dDtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICYmIG9wdGlvbnMgIT09IG51bGwpIHtcbiAgICB2YXIgZGVsYXkgPSBvcHRpb25zLmRlbGF5O1xuXG4gICAgaWYgKHR5cGVvZiBkZWxheSA9PT0gJ251bWJlcicgJiYgZGVsYXkgPiAwKSB7XG4gICAgICBzdGFydFRpbWUgPSBjdXJyZW50VGltZSArIGRlbGF5O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICB9XG5cbiAgICB0aW1lb3V0ID0gdHlwZW9mIG9wdGlvbnMudGltZW91dCA9PT0gJ251bWJlcicgPyBvcHRpb25zLnRpbWVvdXQgOiB0aW1lb3V0Rm9yUHJpb3JpdHlMZXZlbChwcmlvcml0eUxldmVsKTtcbiAgfSBlbHNlIHtcbiAgICB0aW1lb3V0ID0gdGltZW91dEZvclByaW9yaXR5TGV2ZWwocHJpb3JpdHlMZXZlbCk7XG4gICAgc3RhcnRUaW1lID0gY3VycmVudFRpbWU7XG4gIH1cblxuICB2YXIgZXhwaXJhdGlvblRpbWUgPSBzdGFydFRpbWUgKyB0aW1lb3V0O1xuICB2YXIgbmV3VGFzayA9IHtcbiAgICBpZDogdGFza0lkQ291bnRlcisrLFxuICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICBwcmlvcml0eUxldmVsOiBwcmlvcml0eUxldmVsLFxuICAgIHN0YXJ0VGltZTogc3RhcnRUaW1lLFxuICAgIGV4cGlyYXRpb25UaW1lOiBleHBpcmF0aW9uVGltZSxcbiAgICBzb3J0SW5kZXg6IC0xXG4gIH07XG5cbiAgaWYgKGVuYWJsZVByb2ZpbGluZykge1xuICAgIG5ld1Rhc2suaXNRdWV1ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChzdGFydFRpbWUgPiBjdXJyZW50VGltZSkge1xuICAgIC8vIFRoaXMgaXMgYSBkZWxheWVkIHRhc2suXG4gICAgbmV3VGFzay5zb3J0SW5kZXggPSBzdGFydFRpbWU7XG4gICAgcHVzaCh0aW1lclF1ZXVlLCBuZXdUYXNrKTtcblxuICAgIGlmIChwZWVrKHRhc2tRdWV1ZSkgPT09IG51bGwgJiYgbmV3VGFzayA9PT0gcGVlayh0aW1lclF1ZXVlKSkge1xuICAgICAgLy8gQWxsIHRhc2tzIGFyZSBkZWxheWVkLCBhbmQgdGhpcyBpcyB0aGUgdGFzayB3aXRoIHRoZSBlYXJsaWVzdCBkZWxheS5cbiAgICAgIGlmIChpc0hvc3RUaW1lb3V0U2NoZWR1bGVkKSB7XG4gICAgICAgIC8vIENhbmNlbCBhbiBleGlzdGluZyB0aW1lb3V0LlxuICAgICAgICBjYW5jZWxIb3N0VGltZW91dCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNIb3N0VGltZW91dFNjaGVkdWxlZCA9IHRydWU7XG4gICAgICB9IC8vIFNjaGVkdWxlIGEgdGltZW91dC5cblxuXG4gICAgICByZXF1ZXN0SG9zdFRpbWVvdXQoaGFuZGxlVGltZW91dCwgc3RhcnRUaW1lIC0gY3VycmVudFRpbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBuZXdUYXNrLnNvcnRJbmRleCA9IGV4cGlyYXRpb25UaW1lO1xuICAgIHB1c2godGFza1F1ZXVlLCBuZXdUYXNrKTtcblxuICAgIGlmIChlbmFibGVQcm9maWxpbmcpIHtcbiAgICAgIG1hcmtUYXNrU3RhcnQobmV3VGFzaywgY3VycmVudFRpbWUpO1xuICAgICAgbmV3VGFzay5pc1F1ZXVlZCA9IHRydWU7XG4gICAgfSAvLyBTY2hlZHVsZSBhIGhvc3QgY2FsbGJhY2ssIGlmIG5lZWRlZC4gSWYgd2UncmUgYWxyZWFkeSBwZXJmb3JtaW5nIHdvcmssXG4gICAgLy8gd2FpdCB1bnRpbCB0aGUgbmV4dCB0aW1lIHdlIHlpZWxkLlxuXG5cbiAgICBpZiAoIWlzSG9zdENhbGxiYWNrU2NoZWR1bGVkICYmICFpc1BlcmZvcm1pbmdXb3JrKSB7XG4gICAgICBpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCA9IHRydWU7XG4gICAgICByZXF1ZXN0SG9zdENhbGxiYWNrKGZsdXNoV29yayk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld1Rhc2s7XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX3BhdXNlRXhlY3V0aW9uKCkge1xuICBpc1NjaGVkdWxlclBhdXNlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX2NvbnRpbnVlRXhlY3V0aW9uKCkge1xuICBpc1NjaGVkdWxlclBhdXNlZCA9IGZhbHNlO1xuXG4gIGlmICghaXNIb3N0Q2FsbGJhY2tTY2hlZHVsZWQgJiYgIWlzUGVyZm9ybWluZ1dvcmspIHtcbiAgICBpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCA9IHRydWU7XG4gICAgcmVxdWVzdEhvc3RDYWxsYmFjayhmbHVzaFdvcmspO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX2dldEZpcnN0Q2FsbGJhY2tOb2RlKCkge1xuICByZXR1cm4gcGVlayh0YXNrUXVldWUpO1xufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9jYW5jZWxDYWxsYmFjayh0YXNrKSB7XG4gIGlmIChlbmFibGVQcm9maWxpbmcpIHtcbiAgICBpZiAodGFzay5pc1F1ZXVlZCkge1xuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcbiAgICAgIG1hcmtUYXNrQ2FuY2VsZWQodGFzaywgY3VycmVudFRpbWUpO1xuICAgICAgdGFzay5pc1F1ZXVlZCA9IGZhbHNlO1xuICAgIH1cbiAgfSAvLyBOdWxsIG91dCB0aGUgY2FsbGJhY2sgdG8gaW5kaWNhdGUgdGhlIHRhc2sgaGFzIGJlZW4gY2FuY2VsZWQuIChDYW4ndFxuICAvLyByZW1vdmUgZnJvbSB0aGUgcXVldWUgYmVjYXVzZSB5b3UgY2FuJ3QgcmVtb3ZlIGFyYml0cmFyeSBub2RlcyBmcm9tIGFuXG4gIC8vIGFycmF5IGJhc2VkIGhlYXAsIG9ubHkgdGhlIGZpcnN0IG9uZS4pXG5cblxuICB0YXNrLmNhbGxiYWNrID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWwoKSB7XG4gIHJldHVybiBjdXJyZW50UHJpb3JpdHlMZXZlbDtcbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfc2hvdWxkWWllbGQoKSB7XG4gIHZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMudW5zdGFibGVfbm93KCk7XG4gIGFkdmFuY2VUaW1lcnMoY3VycmVudFRpbWUpO1xuICB2YXIgZmlyc3RUYXNrID0gcGVlayh0YXNrUXVldWUpO1xuICByZXR1cm4gZmlyc3RUYXNrICE9PSBjdXJyZW50VGFzayAmJiBjdXJyZW50VGFzayAhPT0gbnVsbCAmJiBmaXJzdFRhc2sgIT09IG51bGwgJiYgZmlyc3RUYXNrLmNhbGxiYWNrICE9PSBudWxsICYmIGZpcnN0VGFzay5zdGFydFRpbWUgPD0gY3VycmVudFRpbWUgJiYgZmlyc3RUYXNrLmV4cGlyYXRpb25UaW1lIDwgY3VycmVudFRhc2suZXhwaXJhdGlvblRpbWUgfHwgc2hvdWxkWWllbGRUb0hvc3QoKTtcbn1cblxudmFyIHVuc3RhYmxlX3JlcXVlc3RQYWludCA9IHJlcXVlc3RQYWludDtcbnZhciB1bnN0YWJsZV9Qcm9maWxpbmcgPSBlbmFibGVQcm9maWxpbmcgPyB7XG4gIHN0YXJ0TG9nZ2luZ1Byb2ZpbGluZ0V2ZW50czogc3RhcnRMb2dnaW5nUHJvZmlsaW5nRXZlbnRzLFxuICBzdG9wTG9nZ2luZ1Byb2ZpbGluZ0V2ZW50czogc3RvcExvZ2dpbmdQcm9maWxpbmdFdmVudHMsXG4gIHNoYXJlZFByb2ZpbGluZ0J1ZmZlcjogc2hhcmVkUHJvZmlsaW5nQnVmZmVyXG59IDogbnVsbDtcblxuZXhwb3J0cy51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eSA9IEltbWVkaWF0ZVByaW9yaXR5O1xuZXhwb3J0cy51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eSA9IFVzZXJCbG9ja2luZ1ByaW9yaXR5O1xuZXhwb3J0cy51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eSA9IE5vcm1hbFByaW9yaXR5O1xuZXhwb3J0cy51bnN0YWJsZV9JZGxlUHJpb3JpdHkgPSBJZGxlUHJpb3JpdHk7XG5leHBvcnRzLnVuc3RhYmxlX0xvd1ByaW9yaXR5ID0gTG93UHJpb3JpdHk7XG5leHBvcnRzLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eSA9IHVuc3RhYmxlX3J1bldpdGhQcmlvcml0eTtcbmV4cG9ydHMudW5zdGFibGVfbmV4dCA9IHVuc3RhYmxlX25leHQ7XG5leHBvcnRzLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2sgPSB1bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrO1xuZXhwb3J0cy51bnN0YWJsZV9jYW5jZWxDYWxsYmFjayA9IHVuc3RhYmxlX2NhbmNlbENhbGxiYWNrO1xuZXhwb3J0cy51bnN0YWJsZV93cmFwQ2FsbGJhY2sgPSB1bnN0YWJsZV93cmFwQ2FsbGJhY2s7XG5leHBvcnRzLnVuc3RhYmxlX2dldEN1cnJlbnRQcmlvcml0eUxldmVsID0gdW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWw7XG5leHBvcnRzLnVuc3RhYmxlX3Nob3VsZFlpZWxkID0gdW5zdGFibGVfc2hvdWxkWWllbGQ7XG5leHBvcnRzLnVuc3RhYmxlX3JlcXVlc3RQYWludCA9IHVuc3RhYmxlX3JlcXVlc3RQYWludDtcbmV4cG9ydHMudW5zdGFibGVfY29udGludWVFeGVjdXRpb24gPSB1bnN0YWJsZV9jb250aW51ZUV4ZWN1dGlvbjtcbmV4cG9ydHMudW5zdGFibGVfcGF1c2VFeGVjdXRpb24gPSB1bnN0YWJsZV9wYXVzZUV4ZWN1dGlvbjtcbmV4cG9ydHMudW5zdGFibGVfZ2V0Rmlyc3RDYWxsYmFja05vZGUgPSB1bnN0YWJsZV9nZXRGaXJzdENhbGxiYWNrTm9kZTtcbmV4cG9ydHMudW5zdGFibGVfUHJvZmlsaW5nID0gdW5zdGFibGVfUHJvZmlsaW5nO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZXIuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsInZhciBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFpc1Byb2R1Y3Rpb24pIHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRleHQgPSBcIldhcm5pbmc6IFwiICsgbWVzc2FnZTtcblxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUud2Fybih0ZXh0KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhyb3cgRXJyb3IodGV4dCk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3YXJuaW5nO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=