import Intro from "../components/About/Intro";
import EducationalMilestones from "../components/About/EducationalMilestones";
import Experience from "../components/About/Experience";

import {
  AboutPageContainer,
  SectionTitle,
  ResumeButtonContainer,
  ResumeButton,
} from "./About.styles";

const About = () => {
  return (
    <AboutPageContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <SectionTitle
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        About Me
      </SectionTitle>

      <Intro />

      {/* Education Section */}
      <EducationalMilestones />

      {/* Experience Section */}
      <Experience />

      {/* --- Download Resume Button --- */}
      {/* Reminder: Place your resume file (e.g., 'M_Shivanand_Resume.pdf') in the /public folder */}
      <ResumeButtonContainer
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <ResumeButton href="/Mani_Shivanand_Resume.pdf" download>
          <i className="fas fa-download"></i>
          <span>Download Resume</span>
        </ResumeButton>
      </ResumeButtonContainer>
    </AboutPageContainer>
  );
};

export default About;
