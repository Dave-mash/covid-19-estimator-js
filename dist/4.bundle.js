(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{18:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return n}));var o=t(0),l=t.n(o),s=t(30);const r=l.a.lazy(()=>t.e(6).then(t.bind(null,29)));class n extends l.a.Component{constructor(e){super(e)}render(){return l.a.createElement(o.Fragment,null,l.a.createElement(s.b,{className:"form-detail",id:"myform",initialValues:{population:"",time_to_elapse:"",reported_cases:"",total_hospital_beds:"",period_type:"days"},onSubmit:(e,{setSubmitting:a})=>{console.log(e),a(!1);const t=r({reportedCases:e.reported_cases,timeToElapse:e.time_to_elapse,totalHospitalBeds:e.total_hospital_beds,periodType:e.period_type,population:e.population,region:{name:"Africa",avgAge:19.7,avgDailyIncomeInUSD:5,avgDailyIncomePopulation:.71}});localStorage.setItem("estimate",JSON.stringify(t)),console.log("==> ",JSON.parse(localStorage.getItem("estimate")))}},({values:e,handleChange:a,handleSubmit:t})=>l.a.createElement("form",{className:"form-detail",id:"myform",onSubmit:t},l.a.createElement(Estimation,{isOpen:this.state.open,close:this.close}),l.a.createElement("h2",null,"INPUT DATA"),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"form-row form-row-1"},l.a.createElement("label",{htmlFor:"population"},"Population",l.a.createElement(s.a,{type:"number",name:"population",id:"population",className:"input-text",onChange:a,value:e.population,"data-population":e.population,required:!0}))),l.a.createElement("div",{className:"form-row form-row-1"},l.a.createElement("label",{htmlFor:"time_to_elapse"},"Time To Elapse",l.a.createElement(s.a,{type:"number",name:"time_to_elapse",id:"time_to_elapse",className:"input-text",onChange:a,value:e.time_to_elapse,"data-time-to-elapse":e.time_to_elapse,required:!0})))),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{htmlFor:"reported_cases"},"Reported Cases",l.a.createElement(s.a,{type:"number",name:"reported_cases",id:"reported_cases",className:"input-text",onChange:a,value:e.reported_cases,"data-reported-cases":e.reported_cases,required:!0}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"form-row form-row-1 "},l.a.createElement("label",{htmlFor:"total_hospital_beds"},"Total Hospital Beds",l.a.createElement(s.a,{type:"number",name:"total_hospital_beds",id:"total_hospital_beds",className:"input-text",onChange:a,value:e.total_hospital_beds,"data-total-hospital-beds":e.total_hospital_beds,required:!0}))),l.a.createElement("div",{className:"form-row form-row-1"},l.a.createElement("label",{htmlFor:"period_type"},"Period Type",l.a.createElement("br",null),l.a.createElement(s.a,{as:"select",className:"form-control input-text",id:"period_type",name:"period_type","data-period-type":!0},l.a.createElement("option",{defaultValue:"days"},"days"),l.a.createElement("option",{defaultValue:"weeks"},"weeks"),l.a.createElement("option",{defaultValue:"months"},"months"))))),l.a.createElement("div",{className:"form-row-last"},l.a.createElement(s.a,{type:"submit",className:"register",id:"estimate",value:"Estimate","data-go-estimate":!0})))))}}}}]);