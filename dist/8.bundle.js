(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{34:function(e,s,t){"use strict";t.r(s);const i={impact:{},severeImpact:{}};s.default=e=>{console.log(e);const s=10*e.reportedCases,t=50*e.reportedCases,n=parseInt(e.timeToElapse/3,0),a=e.timeToElapse,o=parseInt(7*e.timeToElapse/3,0),r=parseInt(30*e.timeToElapse/3,0),d=parseInt(.35*e.totalHospitalBeds,0),m=!Number.isInteger(.35*e.totalHospitalBeds,0)?d+1:d,u=e.region.avgDailyIncomeInUSD,B=e.region.avgDailyIncomePopulation;i.data=e;const y=parseInt(s*2**n,0),c=parseInt(t*2**n,0),T=parseInt(s*2**o,0),p=parseInt(t*2**o,0),q=parseInt(s*2**r,0),R=parseInt(t*2**r,0),{severeImpact:I}=i,{impact:l}=i;let f,C,F,v,h;switch(l.currentlyInfected=s,I.currentlyInfected=t,e.periodType){case"weeks":l.infectionsByRequestedTime=T,l.severeCasesByRequestedTime=parseInt(.15*l.infectionsByRequestedTime,0),l.casesForICUByRequestedTime=parseInt(.05*l.infectionsByRequestedTime,0),l.casesForVentilatorsByRequestedTime=parseInt(.02*l.infectionsByRequestedTime,0),F=l.infectionsByRequestedTime,v=F*u*B,h=v/(7*a),l.dollarsInFlight=parseInt(h,0),I.infectionsByRequestedTime=p,I.severeCasesByRequestedTime=parseInt(.15*I.infectionsByRequestedTime,0),I.casesForICUByRequestedTime=parseInt(.05*I.infectionsByRequestedTime,0),I.casesForVentilatorsByRequestedTime=parseInt(.02*I.infectionsByRequestedTime,0),f=l.severeCasesByRequestedTime,C=I.severeCasesByRequestedTime,l.hospitalBedsByRequestedTime=m-f,I.hospitalBedsByRequestedTime=m-C,F=I.infectionsByRequestedTime,v=F*u*B,h=v/(7*a),I.dollarsInFlight=parseInt(h,0);break;case"months":l.infectionsByRequestedTime=q,l.severeCasesByRequestedTime=parseInt(.15*l.infectionsByRequestedTime,0),l.casesForICUByRequestedTime=parseInt(.05*l.infectionsByRequestedTime,0),l.casesForVentilatorsByRequestedTime=parseInt(.02*l.infectionsByRequestedTime,0),F=l.infectionsByRequestedTime,v=F*u*B,h=v/(30*a),l.dollarsInFlight=parseInt(h,0),I.infectionsByRequestedTime=R,I.severeCasesByRequestedTime=parseInt(.15*I.infectionsByRequestedTime,0),I.casesForICUByRequestedTime=parseInt(.05*I.infectionsByRequestedTime,0),I.casesForVentilatorsByRequestedTime=parseInt(.02*I.infectionsByRequestedTime,0),f=l.severeCasesByRequestedTime,C=I.severeCasesByRequestedTime,l.hospitalBedsByRequestedTime=m-f,I.hospitalBedsByRequestedTime=m-C,F=I.infectionsByRequestedTime,v=F*u*B,h=v/(30*a),I.dollarsInFlight=parseInt(h,0);break;case"days":default:l.infectionsByRequestedTime=y,l.severeCasesByRequestedTime=parseInt(.15*l.infectionsByRequestedTime,0),l.casesForICUByRequestedTime=parseInt(.05*l.infectionsByRequestedTime,0),l.casesForVentilatorsByRequestedTime=parseInt(.02*l.infectionsByRequestedTime,0),F=l.infectionsByRequestedTime,v=F*u*B,h=v/a,l.dollarsInFlight=parseInt(h,0),I.infectionsByRequestedTime=c,I.severeCasesByRequestedTime=parseInt(.15*I.infectionsByRequestedTime,0),f=l.severeCasesByRequestedTime,C=I.severeCasesByRequestedTime,l.hospitalBedsByRequestedTime=m-f,I.hospitalBedsByRequestedTime=m-C,I.casesForICUByRequestedTime=parseInt(.05*I.infectionsByRequestedTime,0),I.casesForVentilatorsByRequestedTime=parseInt(.02*I.infectionsByRequestedTime,0),F=I.infectionsByRequestedTime,v=F*u*B,h=v/a,I.dollarsInFlight=parseInt(h,0)}return console.log(i),i}}}]);