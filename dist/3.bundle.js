(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{14:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return r}));var a=s(0),i=s.n(a);const n={impact:{},severeImpact:{}};var o=e=>{console.log(e);const t=10*e.reportedCases,s=50*e.reportedCases,a=parseInt(e.timeToElapse/3,0),i=e.timeToElapse,o=parseInt(7*e.timeToElapse/3,0),r=parseInt(30*e.timeToElapse/3,0),l=parseInt(.35*e.totalHospitalBeds,0),d=!Number.isInteger(.35*e.totalHospitalBeds,0)?l+1:l,p=e.region.avgDailyIncomeInUSD,m=e.region.avgDailyIncomePopulation;n.data=e;const u=parseInt(t*2**a,0),c=parseInt(s*2**a,0),T=parseInt(t*2**o,0),h=parseInt(s*2**o,0),y=parseInt(t*2**r,0),B=parseInt(s*2**r,0),{severeImpact:q}=n,{impact:R}=n;let I,C,f,g,b;switch(R.currentlyInfected=t,q.currentlyInfected=s,e.periodType){case"weeks":R.infectionsByRequestedTime=T,R.severeCasesByRequestedTime=parseInt(.15*R.infectionsByRequestedTime,0),R.casesForICUByRequestedTime=parseInt(.05*R.infectionsByRequestedTime,0),R.casesForVentilatorsByRequestedTime=parseInt(.02*R.infectionsByRequestedTime,0),f=R.infectionsByRequestedTime,g=f*p*m,b=g/(7*i),R.dollarsInFlight=parseInt(b,0),q.infectionsByRequestedTime=h,q.severeCasesByRequestedTime=parseInt(.15*q.infectionsByRequestedTime,0),q.casesForICUByRequestedTime=parseInt(.05*q.infectionsByRequestedTime,0),q.casesForVentilatorsByRequestedTime=parseInt(.02*q.infectionsByRequestedTime,0),I=R.severeCasesByRequestedTime,C=q.severeCasesByRequestedTime,R.hospitalBedsByRequestedTime=d-I,q.hospitalBedsByRequestedTime=d-C,f=q.infectionsByRequestedTime,g=f*p*m,b=g/(7*i),q.dollarsInFlight=parseInt(b,0);break;case"months":R.infectionsByRequestedTime=y,R.severeCasesByRequestedTime=parseInt(.15*R.infectionsByRequestedTime,0),R.casesForICUByRequestedTime=parseInt(.05*R.infectionsByRequestedTime,0),R.casesForVentilatorsByRequestedTime=parseInt(.02*R.infectionsByRequestedTime,0),f=R.infectionsByRequestedTime,g=f*p*m,b=g/(30*i),R.dollarsInFlight=parseInt(b,0),q.infectionsByRequestedTime=B,q.severeCasesByRequestedTime=parseInt(.15*q.infectionsByRequestedTime,0),q.casesForICUByRequestedTime=parseInt(.05*q.infectionsByRequestedTime,0),q.casesForVentilatorsByRequestedTime=parseInt(.02*q.infectionsByRequestedTime,0),I=R.severeCasesByRequestedTime,C=q.severeCasesByRequestedTime,R.hospitalBedsByRequestedTime=d-I,q.hospitalBedsByRequestedTime=d-C,f=q.infectionsByRequestedTime,g=f*p*m,b=g/(30*i),q.dollarsInFlight=parseInt(b,0);break;case"days":default:R.infectionsByRequestedTime=u,R.severeCasesByRequestedTime=parseInt(.15*R.infectionsByRequestedTime,0),R.casesForICUByRequestedTime=parseInt(.05*R.infectionsByRequestedTime,0),R.casesForVentilatorsByRequestedTime=parseInt(.02*R.infectionsByRequestedTime,0),f=R.infectionsByRequestedTime,g=f*p*m,b=g/i,R.dollarsInFlight=parseInt(b,0),q.infectionsByRequestedTime=c,q.severeCasesByRequestedTime=parseInt(.15*q.infectionsByRequestedTime,0),I=R.severeCasesByRequestedTime,C=q.severeCasesByRequestedTime,R.hospitalBedsByRequestedTime=d-I,q.hospitalBedsByRequestedTime=d-C,q.casesForICUByRequestedTime=parseInt(.05*q.infectionsByRequestedTime,0),q.casesForVentilatorsByRequestedTime=parseInt(.02*q.infectionsByRequestedTime,0),f=q.infectionsByRequestedTime,g=f*p*m,b=g/i,q.dollarsInFlight=parseInt(b,0)}return console.log(n),n};class r extends i.a.Component{constructor(e){super(e),this.handlePopulationChange=this.handlePopulationChange.bind(this),this.handleTimeToElapseChange=this.handleTimeToElapseChange.bind(this),this.handleReportedCasesChange=this.handleReportedCasesChange.bind(this),this.handleTotalHospitalBedsChange=this.handleTotalHospitalBedsChange.bind(this),this.handlePeriodTypeChange=this.handlePeriodTypeChange.bind(this),this.handleSubmit=this.handleSubmit.bind(this),this.state={population:"",timeToElapse:"",reportedCases:"",totalHospitalBeds:"",periodType:"days"}}handlePopulationChange(e){this.setState({population:e.target.value})}handleTimeToElapseChange(e){this.setState({timeToElapse:e.target.value})}handleReportedCasesChange(e){this.setState({reportedCases:e.target.value})}handleTotalHospitalBedsChange(e){this.setState({totalHospitalBeds:e.target.value})}handlePeriodTypeChange(e){this.setState({periodType:e.target.value})}handleSubmit(e){const t={};e.preventDefault(),t.population=parseInt(this.state.population,0),t.timeToElapse=parseInt(this.state.timeToElapse,0),t.reportedCases=parseInt(this.state.reportedCases,0),t.totalHospitalBeds=parseInt(this.state.totalHospitalBeds,0),t.region={name:"Africa",avgAge:19.7,avgDailyIncomeInUSD:5,avgDailyIncomePopulation:.71},o(t)}render(){return i.a.createElement("form",{className:"form-detail",id:"myform",onSubmit:this.handleSubmit},i.a.createElement("label",{htmlFor:"population"},"Total Population"),i.a.createElement("br",null),i.a.createElement("input",{type:"number",id:"population","data-population":!0,required:!0}),i.a.createElement("label",{htmlFor:"reportedCases"},"Reported Cases"),i.a.createElement("br",null),i.a.createElement("input",{type:"number",id:"reportedCases","data-reported-cases":!0,required:!0}),i.a.createElement("label",{htmlFor:"timeToElapse"},"Time Period"),i.a.createElement("input",{type:"number",id:"timeToElapse","data-time-to-elapse":!0,required:!0}),i.a.createElement("label",{htmlFor:"totalHospitalBeds"},"Total Hospital Beds"),i.a.createElement("br",null),i.a.createElement("input",{type:"number",id:"totalHospitalBeds","data-total-hospital-beds":!0,required:!0}),i.a.createElement("br",null),i.a.createElement("label",{htmlFor:"periodType",id:"lab"},"Period Type"),i.a.createElement("br",null),i.a.createElement("select",{id:"periodType","data-period-type":!0},i.a.createElement("option",{value:"days"},"Days"),i.a.createElement("option",{value:"weeks"},"Weeks"),i.a.createElement("option",{value:"months"},"Months")),i.a.createElement("br",null),i.a.createElement("button",{id:"estimate",type:"submit","data-go-estimate":!0},"Estimate"))}}}}]);