(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{18:function(e,a,t){"use strict";t.r(a);var l=t(0),o=t.n(l),r=t(29);a.default=()=>o.a.createElement(l.Fragment,null,o.a.createElement(r.b,{className:"form-detail",id:"myform",initialValues:{population:"",time_to_elapse:"",reported_cases:"",total_hospital_beds:"",exampleFormControlSelect1:"days"},onSubmit:(e,{setSubmitting:a})=>{console.log(e),a(!1)}},({values:e,handleChange:a,handleSubmit:t})=>o.a.createElement("form",{className:"form-detail",id:"myform",onSubmit:t},o.a.createElement("h2",null,"INPUT DATA"),o.a.createElement("div",{className:"form-group"},o.a.createElement("div",{className:"form-row form-row-1"},o.a.createElement("label",{htmlFor:"population"},"Population"),o.a.createElement("label",null,o.a.createElement(r.a,{type:"number",name:"population",id:"population",className:"input-text",onChange:a,value:e.population,"data-population":"population",required:!0}))),o.a.createElement("div",{className:"form-row form-row-1"},o.a.createElement("label",{htmlFor:"time_to_elapse"},"Time To Elapse"),o.a.createElement("label",null,o.a.createElement(r.a,{type:"number",name:"time_to_elapse",id:"time_to_elapse",className:"input-text",onChange:a,value:e.time_to_elapse,"data-time-to-elapse":e.time_to_elapse,required:!0})))),o.a.createElement("div",{className:"form-row"},o.a.createElement("label",{htmlFor:"reported_cases"},"Reported Cases"),o.a.createElement("label",null,o.a.createElement(r.a,{type:"number",name:"reported_cases",id:"reported_cases",className:"input-text",onChange:a,value:e.reported_cases,"data-reported-cases":e.reported_cases,required:!0}))),o.a.createElement("div",{className:"form-group"},o.a.createElement("div",{className:"form-row form-row-1 "},o.a.createElement("label",{htmlFor:"total_hospital_beds"},"Total Hospital Beds"),o.a.createElement("label",null,o.a.createElement(r.a,{type:"number",name:"total_hospital_beds",id:"total_hospital_beds",className:"input-text",onChange:a,value:e.total_hospital_beds,"data-total-hospital-beds":e.total_hospital_beds,required:!0}))),o.a.createElement("div",{className:"form-row form-row-1"},o.a.createElement("label",{htmlFor:"exampleFormControlSelect1"},"Period Type"),o.a.createElement(r.a,{as:"select",className:"form-control input-text",id:"exampleFormControlSelect1",name:"exampleFormControlSelect1","data-period-type":e.exampleFormControlSelect1,required:!0},o.a.createElement("option",{defaultValue:"days"},"days"),o.a.createElement("option",{defaultValue:"weeks"},"weeks"),o.a.createElement("option",{defaultValue:"months"},"months")))),o.a.createElement("div",{className:"form-row-last"},o.a.createElement(r.a,{type:"submit",className:"register","data-go-estimate":e,value:"Estimate"})))))}}]);