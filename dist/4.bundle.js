(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{46:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return p}));var a=s(0),n=s.n(a),i=s(45);const l={impact:{},severeImpact:{}};var r=e=>{const t=10*e.reportedCases,s=50*e.reportedCases,a=parseInt(e.timeToElapse/3,0),n=e.timeToElapse,i=parseInt(7*e.timeToElapse/3,0),r=parseInt(30*e.timeToElapse/3,0),o=parseInt(.35*e.totalHospitalBeds,0),m=!Number.isInteger(.35*e.totalHospitalBeds,0)?o+1:o,c=e.region.avgDailyIncomeInUSD,d=e.region.avgDailyIncomePopulation;l.data=e;const p=parseInt(t*2**a,0),u=parseInt(s*2**a,0),y=parseInt(t*2**i,0),q=parseInt(s*2**i,0),T=parseInt(t*2**r,0),B=parseInt(s*2**r,0),{severeImpact:I}=l,{impact:R}=l;let f,b,E,v,h;switch(R.currentlyInfected=t,I.currentlyInfected=s,e.periodType){case"weeks":R.infectionsByRequestedTime=y,R.severeCasesByRequestedTime=parseInt(.15*R.infectionsByRequestedTime,0),R.casesForICUByRequestedTime=parseInt(.05*R.infectionsByRequestedTime,0),R.casesForVentilatorsByRequestedTime=parseInt(.02*R.infectionsByRequestedTime,0),E=R.infectionsByRequestedTime,v=E*c*d,h=v/(7*n),R.dollarsInFlight=parseInt(h,0),I.infectionsByRequestedTime=q,I.severeCasesByRequestedTime=parseInt(.15*I.infectionsByRequestedTime,0),I.casesForICUByRequestedTime=parseInt(.05*I.infectionsByRequestedTime,0),I.casesForVentilatorsByRequestedTime=parseInt(.02*I.infectionsByRequestedTime,0),f=R.severeCasesByRequestedTime,b=I.severeCasesByRequestedTime,R.hospitalBedsByRequestedTime=m-f,I.hospitalBedsByRequestedTime=m-b,E=I.infectionsByRequestedTime,v=E*c*d,h=v/(7*n),I.dollarsInFlight=parseInt(h,0);break;case"months":R.infectionsByRequestedTime=T,R.severeCasesByRequestedTime=parseInt(.15*R.infectionsByRequestedTime,0),R.casesForICUByRequestedTime=parseInt(.05*R.infectionsByRequestedTime,0),R.casesForVentilatorsByRequestedTime=parseInt(.02*R.infectionsByRequestedTime,0),E=R.infectionsByRequestedTime,v=E*c*d,h=v/(30*n),R.dollarsInFlight=parseInt(h,0),I.infectionsByRequestedTime=B,I.severeCasesByRequestedTime=parseInt(.15*I.infectionsByRequestedTime,0),I.casesForICUByRequestedTime=parseInt(.05*I.infectionsByRequestedTime,0),I.casesForVentilatorsByRequestedTime=parseInt(.02*I.infectionsByRequestedTime,0),f=R.severeCasesByRequestedTime,b=I.severeCasesByRequestedTime,R.hospitalBedsByRequestedTime=m-f,I.hospitalBedsByRequestedTime=m-b,E=I.infectionsByRequestedTime,v=E*c*d,h=v/(30*n),I.dollarsInFlight=parseInt(h,0);break;case"days":default:R.infectionsByRequestedTime=p,R.severeCasesByRequestedTime=parseInt(.15*R.infectionsByRequestedTime,0),R.casesForICUByRequestedTime=parseInt(.05*R.infectionsByRequestedTime,0),R.casesForVentilatorsByRequestedTime=parseInt(.02*R.infectionsByRequestedTime,0),E=R.infectionsByRequestedTime,v=E*c*d,h=v/n,R.dollarsInFlight=parseInt(h,0),I.infectionsByRequestedTime=u,I.severeCasesByRequestedTime=parseInt(.15*I.infectionsByRequestedTime,0),f=R.severeCasesByRequestedTime,b=I.severeCasesByRequestedTime,R.hospitalBedsByRequestedTime=m-f,I.hospitalBedsByRequestedTime=m-b,I.casesForICUByRequestedTime=parseInt(.05*I.infectionsByRequestedTime,0),I.casesForVentilatorsByRequestedTime=parseInt(.02*I.infectionsByRequestedTime,0),E=I.infectionsByRequestedTime,v=E*c*d,h=v/n,I.dollarsInFlight=parseInt(h,0)}return console.log(l),l},o=s(32),m=s.n(o);const c={overlay:{zIndex:1e3},content:{top:"2%",width:"70%"}};m.a.setAppElement("body");var d=e=>n.a.createElement(m.a,{style:c,isOpen:e.isOpen,onRequestClose:e.close,className:"modal-dialog"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal",onClick:e.close},n.a.createElement("span",{"aria-hidden":"true"},"×")),n.a.createElement("div",null,n.a.createElement("h4",null,"Impact"),n.a.createElement("b",null,"Cases for ICU by requested time: ",e.impact.casesForICUByRequestedTime),n.a.createElement("br",null),n.a.createElement("b",null,"Cases for ventilators by requested time: ",e.impact.casesForVentilatorsByRequestedTime),n.a.createElement("br",null),n.a.createElement("b",null,"Hospital beds by requested time: ",e.impact.hospitalBedsByRequestedTime),n.a.createElement("br",null),n.a.createElement("b",null,"Infections by requested time: ",e.impact.infectionsByRequestedTime),n.a.createElement("br",null),n.a.createElement("b",null,"Severe cases by requested time: ",e.impact.severeCasesByRequestedTime),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h4",null,"Severe Impact"),n.a.createElement("b",null,"Cases for ICU by requested time: ",e.severeImpact.casesForICUByRequestedTime),n.a.createElement("br",null),n.a.createElement("b",null,"Cases for ventilators by requested time: ",e.severeImpact.casesForVentilatorsByRequestedTime),n.a.createElement("br",null),n.a.createElement("b",null,"Hospital beds by requested time: ",e.severeImpact.hospitalBedsByRequestedTime),n.a.createElement("br",null),n.a.createElement("b",null,"Infections by requested time: ",e.severeImpact.infectionsByRequestedTime),n.a.createElement("br",null),n.a.createElement("b",null,"Severe cases by requested time: ",e.severeImpact.severeCasesByRequestedTime),n.a.createElement("br",null)))));class p extends n.a.Component{constructor(e){super(e),this.state={close:!0,open:!1,estimate:{}}}close(){this.setState(()=>({close:!0,open:!1}))}open(e={}){this.setState(()=>({close:!1,open:!0,estimate:e}))}render(){return n.a.createElement(a.Fragment,null,n.a.createElement(i.b,{className:"form-detail",id:"myform",initialValues:{population:"",time_to_elapse:"",reported_cases:"",total_hospital_beds:"",period_type:"days"},onSubmit:(e,{setSubmitting:t})=>{console.log(e),t(!1);const s=r({reportedCases:e.reported_cases,timeToElapse:e.time_to_elapse,totalHospitalBeds:e.total_hospital_beds,periodType:e.period_type,population:e.population,region:{name:"Africa",avgAge:19.7,avgDailyIncomeInUSD:5,avgDailyIncomePopulation:.71}});this.open(s),console.log("==> ",s)}},({values:e,handleChange:t,handleSubmit:s})=>n.a.createElement("form",{className:"form-detail",id:"myform",onSubmit:s},n.a.createElement(d,{isOpen:this.state.open,close:this.close,impact:this.state.estimate.impact,severeImpact:this.state.estimate.severeImpact}),n.a.createElement("h2",null,"INPUT DATA"),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"form-row form-row-1"},n.a.createElement("label",{htmlFor:"population"},"Population",n.a.createElement(i.a,{type:"number",name:"population",id:"population",className:"input-text",onChange:t,value:e.population,"data-population":e.population,required:!0}))),n.a.createElement("div",{className:"form-row form-row-1"},n.a.createElement("label",{htmlFor:"time_to_elapse"},"Time To Elapse",n.a.createElement(i.a,{type:"number",name:"time_to_elapse",id:"time_to_elapse",className:"input-text",onChange:t,value:e.time_to_elapse,"data-time-to-elapse":e.time_to_elapse,required:!0})))),n.a.createElement("div",{className:"form-row"},n.a.createElement("label",{htmlFor:"reported_cases"},"Reported Cases",n.a.createElement(i.a,{type:"number",name:"reported_cases",id:"reported_cases",className:"input-text",onChange:t,value:e.reported_cases,"data-reported-cases":e.reported_cases,required:!0}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"form-row form-row-1 "},n.a.createElement("label",{htmlFor:"total_hospital_beds"},"Total Hospital Beds",n.a.createElement(i.a,{type:"number",name:"total_hospital_beds",id:"total_hospital_beds",className:"input-text",onChange:t,value:e.total_hospital_beds,"data-total-hospital-beds":e.total_hospital_beds,required:!0}))),n.a.createElement("div",{className:"form-row form-row-1"},n.a.createElement("label",{htmlFor:"period_type"},"Period Type",n.a.createElement("br",null),n.a.createElement(i.a,{as:"select",className:"form-control input-text",id:"period_type",name:"period_type","data-period-type":!0},n.a.createElement("option",{defaultValue:"days"},"days"),n.a.createElement("option",{defaultValue:"weeks"},"weeks"),n.a.createElement("option",{defaultValue:"months"},"months"))))),n.a.createElement("div",{className:"form-row-last"},n.a.createElement(i.a,{type:"submit",className:"register",id:"estimate",value:"Estimate","data-go-estimate":!0})))))}}}}]);