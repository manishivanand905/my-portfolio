import React from "react";
import {
  MobileEducationContainer,
  SectionTitle,
  EducationList,
  EducationItem,
  Institution,
  Degree,
  Year,
} from "./MobileEducation.styles";

const educationData = [
  {
    institution: "Bharath Institute of Higher Education and Research, Chennai",
    degree: "B.Tech – Computer Science and Engineering (85.0%)",
    year: "2021 – 2025",
  },
  {
    institution: "Sri Chaitanya Junior College, Hyderabad",
    degree: "Intermediate – MPC (9.0 CGPA)",
    year: "2019 – 2021",
  },
  {
    institution: "Keshava Reddy Residential School, Chevella",
    degree: "Secondary School Certificate – SSC (9.5 CGPA)",
    year: "2014 – 2019",
  },
];

const MobileEducation = () => {
  return (
    <MobileEducationContainer>
      <SectionTitle>Educational Milestones</SectionTitle>
      <EducationList>
        {educationData.map((edu, index) => (
          <EducationItem key={index}>
            <Institution>{edu.institution}</Institution>
            <Degree>{edu.degree}</Degree>
            <Year>{edu.year}</Year>
          </EducationItem>
        ))}
      </EducationList>
    </MobileEducationContainer>
  );
};

export default MobileEducation;
