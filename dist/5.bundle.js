(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{27:function(e,t,a){"use strict";a.r(t);var s=a(0),l=a.n(s);const r=localStorage.getItem("estimate"),m=r?JSON.parse(r):null;t.default=()=>l.a.createElement("div",{className:"form-left"},l.a.createElement("h2",null,"COVID-19 Estimator"),l.a.createElement("b",{className:"text-1"},"COVID-19 Estimator is an infection impact estimator."),m?l.a.createElement("div",null,l.a.createElement("h4",null,"Impact"),l.a.createElement("b",null,"Cases for ICU by requested time: ",m.impact.casesForICUByRequestedTime),l.a.createElement("b",null,"Cases for ventilators by requested time: ",m.impact.casesForVentilatorsByRequestedTime),l.a.createElement("b",null,"Hospital beds by requested time: ",m.impact.hospitalBedsByRequestedTime),l.a.createElement("b",null,"Infections by requested time: ",m.impact.infectionsByRequestedTime),l.a.createElement("b",null,"Severe cases by requested time: ",m.impact.severeCasesByRequestedTime),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h4",null,"Severe Impact"),l.a.createElement("b",null,"Cases for ICU by requested time: ",m.severeImpact.casesForICUByRequestedTime),l.a.createElement("b",null,"Cases for ventilators by requested time: ",m.severeImpact.casesForVentilatorsByRequestedTime),l.a.createElement("b",null,"Hospital beds by requested time: ",m.severeImpact.hospitalBedsByRequestedTime),l.a.createElement("b",null,"Infections by requested time: ",m.severeImpact.infectionsByRequestedTime),l.a.createElement("b",null,"Severe cases by requested time: ",m.severeImpact.severeCasesByRequestedTime)):null)}}]);