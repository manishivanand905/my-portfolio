import React from "react";
import {
  ResumeContainer,
  SectionTitle,
  ResumeFrame,
  DownloadButton,
  ResumeButtonContainer,
} from "../../pages/Resume.styles";

const Resume = () => {
  return (
    <ResumeContainer>
      <SectionTitle
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Resume
      </SectionTitle>
      <ResumeFrame src="/Mani Shivanand.pdf" title="Resume" />
      <ResumeButtonContainer
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <DownloadButton href="/Mani Shivanand.pdf" download>
          <i className="fas fa-download"></i>
          <span>Download Resume</span>
        </DownloadButton>
      </ResumeButtonContainer>
    </ResumeContainer>
  );
};

export default Resume;
