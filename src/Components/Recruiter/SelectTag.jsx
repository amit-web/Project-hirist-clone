import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import "./SelectTag.css"

export const SelectTag = (props) =>{
  

const options = [
{label:"Interim",value:"Interim" }
  ,{label:"Hadoop",value:"Hadoop"}  
  ,{label:"HTML5",value:"HTML5"}  
  ,{label:"JavaScript",value:"JavaScript"}  
  ,{label:"JQuery",value:"JQuery"}  
  ,{label:"CSS3",value:"CSS3"}  
  ,{label:"Bootstrap",value:"Bootstrap"}  
  ,{label:"Big",value:"Big"}
  ,{label:"Font",value:"Font"}  
  ,{label:"Iconic",value:"Iconic"}  
  ,{label:"JSP",value:"JSP"}  
  ,{label:"JSTL",value:"JSTL"}  
  ,{label:"AJAX",value:"AJAX"}  
  ,{label:"Apache",value:"Apache"}  
  ,{label:"SaaS",value:"SaaS"}  
  ,{label:"Cloud",value:"Cloud"}  
  ,{label:"SQL",value:"SQL"} 
  ,{label:"HTML",value:"HTML"}  
  ,{label:"CSS",value:"CSS"}  
  ,{label:"PHP",value:"PHP"}  
  ,{label:"Webspeed",value:"Webspeed"}  
  ,{label:"SpeedScript",value:"SpeedScript"}  
  ,{label:"SOA",value:"SOA"}  
  ,{label:"Progress",value:"Progress"}  
  ,{label:"firmware",value:"firmware"}  
  ,{label:"C",value:"C"} 
  ,{label:"CANopen",value:"CANopen"}  
  ,{label:"Hercules",value:"Hercules"}   
  ,{label:"C2000",value:"C2000"}  
  ,{label:"Code",value:"Code"}    
  ,{label:"UI",value:"UI"}   
  ,{label:"Financial",value:"Financial"}  
  ,{label:"Investment",value:"Investment"}  
  ,{label:"Spring",value:"Spring"}   
  ,{label:"JMS",value:"JMS"}  
  ,{label:"JBoss",value:"JBoss"}   
  ,{label:"BatooJPA",value:"BatooJPA"}  
  ,{label:"DataNucleus",value:"DataNucleus"}  
  ,{label:"EclipseLink",value:"EclipseLink"}  
  ,{label:"ObjectDB",value:"ObjectDB"}  
  ,{label:"Open",value:"Open"}   
  ,{label:"product",value:"product"}   
  ,{label:"education",value:"education"}  
  ,{label:"product",value:"product"}    
  ,{label:"market",value:"market"}   
  ,{label:"web",value:"web"}  
  ,{label:"business",value:"business"}  
  ,{label:"SAP",value:"SAP"}  
  ,{label:"Business",value:"Business"}   
  ,{label:"BOBJ",value:"BOBJ"}  
  ,{label:"Business",value:"Business"}   
  ,{label:"BW",value:"BW"}  
  ,{label:"ABAP",value:"ABAP"}  
  ,{label:"OLAP",value:"OLAP"}  
  ,{label:"XML",value:"XML"}  
  ,{label:"HTTP",value:"HTTP"}  
  ,{label:"Struts",value:"Struts"}  
  ,{label:"Spring",value:"Spring"}   
  ,{label:"data",value:"data"}   
  ,{label:"TCP",value:"TCP"}  
  ,{label:"asynchronous",value:"asynchronous"}   
  ,{label:"Hibernate",value:"Hibernate"}  
  ,{label:"MQ",value:"MQ"}  
  ,{label:"Data",value:"Data"}   
  ,{label:"SOAP",value:"SOAP"}  
  ,{label:"JSON",value:"JSON"}  
  ,{label:"REST",value:"REST"}  
  ,{label:"Spring",value:"Spring"}  
  ,{label:"JPA",value:"JPA"}  
  ,{label:"ETL",value:"ETL"}  
  ,{label:"Informatica",value:"Informatica"}  
  ,{label:"B2C",value:"B2C"}  
  ,{label:"RallyDev",value:"RallyDev"},
    { label: "Weblogic", value: "Weblogic" },
    { label: "WebSphere", value: "WebSphere" },
    { label: "EJB", value: "EJB" },
    { label: "consumer applications", value: "consumer applications" },
    { label: "android app", value: "android app" },
    { label: "web services", value: "web services" },
    { label: "RallyDev", value: "RallyDev" },
      { label: "iphone app", value: "iphone app" },
     { label: "Agile", value: "Agile" },
    { label: "PL/SQL", value: "PL/SQL" },
    { label: "Oracle", value: "Oracle" },
    { label: "Unix", value: "Unix" },
    { label: "Java", value: "Java" },
    { label: "J2EE", value: "J2EE" },
    { label: "Application Server", value: "Application Server" },
    { label: "Scripting", value: "Scripting" },

  ];

  const [selected, setSelected] = useState([]);
  const locationData = JSON.stringify(selected);
  const overrideStrings = {
    allItemsAreSelected: "All items are selected.",
    clearSearch: "Clear Search",
    noOptions: "No options",
    search: "Search job location here",
    selectAll: "Anywhere in India",
    selectSomeItems: "Location",
  };
console.log(locationData);
//   props.getlocation(locationData);
  return (
    <div>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        overrideStrings={overrideStrings}
      />
    </div>
  );
};
