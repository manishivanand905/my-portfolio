import React from "react";
import { educationalMilestones } from "../../data/educationalMilestones";
import {
  MilestonesContainer,
  SectionTitle,
  Timeline,
  Milestone,
  MilestoneIcon,
  MilestoneContent,
  Institution,
  Achievement,
} from "./EducationalMilestones.styles";

const EducationalMilestones = () => {
  return (
    <MilestonesContainer>
      <SectionTitle>Educational Milestones</SectionTitle>
      <Timeline>
        {educationalMilestones.map((milestone, index) => (
          <Milestone
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: index * 0.3,
                  duration: 0.6,
                },
              },
            }}
          >
            <MilestoneIcon>
              <i className={milestone.icon}></i>
            </MilestoneIcon>
            <MilestoneContent>
              <Institution>{milestone.institution}</Institution>
              <Achievement>{milestone.achievement}</Achievement>
            </MilestoneContent>
          </Milestone>
        ))}
      </Timeline>
    </MilestonesContainer>
  );
};

export default EducationalMilestones;
