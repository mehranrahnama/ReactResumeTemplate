import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "2017 - Present",
    degree: "Senior WebDeveloper",
    content:
      "•	Development and support managing supporting systems "+
      "•	Development in .NET technologies in the backend and ReactJs in the frontend "+
      "•	Advice and support for customers in the implementation and delivery of projects  "
      , 
  },
  {
    id: 2,
    year: "2016 - 2014",
    degree: "Senior WebDeveloper ",
    content:
      "Work as a Senior  WebDeveloper  in a  Web-Application in    "+
   "●  Rapco Group GmbH in Isfahan – Iran "+
   "●	Develop and support community systems "+
   "●	Backend Technologies:  C# , ASP.NET MVC 5,  Entity Framework              "+
   "●	Front-End Technologies : javascript ,"+
  "●	 Html 5,Css 3, Html Helper and Kendu Components "+
  "●	Version Control Systems  :  svn "+
   "●	DataBase : MS-SQL Server "+
   "●	Report : StimuleSoft ",
   
  },
  {
    id: 3,
    year: "2013 - 2009",
    degree: "Senior WebDeveloper ",
    content:
      "Development and support of electricity energy consumption systems  .   "+
      " Technologies : C# , ASP.NET WebForm,ojb.net as ORM  ",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
