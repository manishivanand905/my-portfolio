// // import styled from 'styled-components';

// // export const HeroSection = styled.section`
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   justify-content: center;
// //   min-height: calc(100vh - 140px);
// //   text-align: center;
// //   position: relative;
// // `;

// // export const HeroTitle = styled.h1`
// //   font-size: clamp(3.5rem, 10vw, 7rem);
// //   font-weight: 700;
// //   background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%);
// //   -webkit-background-clip: text;
// //   -webkit-text-fill-color: transparent;
// //   background-clip: text;
// //   margin-bottom: 25px;
// //   animation: float 5s ease-in-out infinite;
// //   text-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
// //   letter-spacing: -2px;
// //   line-height: 1.1;
// // `;

// // export const HeroSubtitle = styled.p`
// //   font-size: clamp(1.3rem, 3.5vw, 2.2rem);
// //   color: rgba(255, 255, 255, 0.9);
// //   margin-bottom: 50px;
// //   font-weight: 400;
// //   letter-spacing: 0.5px;
// //   text-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
// // `;

// // export const CTAButton = styled.button`
// //   background: rgba(255, 255, 255, 0.2);
// //   backdrop-filter: blur(20px) saturate(180%);
// //   -webkit-backdrop-filter: blur(20px) saturate(180%);
// //   border: 2px solid rgba(255, 255, 255, 0.4);
// //   color: #ffffff;
// //   padding: 22px 60px;
// //   font-size: 19px;
// //   font-weight: 600;
// //   border-radius: 50px;
// //   cursor: pointer;
// //   transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
// //   position: relative;
// //   overflow: hidden;
// //   box-shadow:
// //     0 8px 32px rgba(0, 0, 0, 0.15),
// //     0 0 0 1px rgba(255, 255, 255, 0.1) inset;
// //   letter-spacing: 0.5px;

// //   &::before {
// //     content: '';
// //     position: absolute;
// //     top: 50%;
// //     left: 50%;
// //     width: 0;
// //     height: 0;
// //     border-radius: 50%;
// //     background: rgba(255, 255, 255, 0.3);
// //     transform: translate(-50%, -50%);
// //     transition: width 0.6s, height 0.6s;
// //   }

// //   &:hover {
// //     transform: scale(1.08) translateY(-3px);
// //     background: rgba(255, 255, 255, 0.25);
// //     box-shadow:
// //       0 15px 50px rgba(0, 0, 0, 0.2),
// //       0 0 60px rgba(255, 255, 255, 0.3),
// //       0 0 0 1px rgba(255, 255, 255, 0.3) inset;
// //     border-color: rgba(255, 255, 255, 0.6);
// //   }

// //   &:hover::before {
// //     width: 400px;
// //     height: 400px;
// //   }

// //   &:active {
// //     transform: scale(1.02);
// //   }
// // `;
// //////////////////////////////////////////////////////////////////////

// import styled, { keyframes } from "styled-components";
// import { motion } from "framer-motion";

// const float = keyframes`
//   0%, 100% { transform: translateY(0px); }
//   50% { transform: translateY(-10px); }
// `;

// const glowPulse = keyframes`
//   0%, 100% {
//     box-shadow: 0 0 30px rgba(129, 202, 252, 0.3),
//                 0 0 60px rgba(129, 202, 252, 0.2);
//   }
//   50% {
//     box-shadow: 0 0 40px rgba(129, 202, 252, 0.5),
//                 0 0 80px rgba(129, 202, 252, 0.3);
//   }
// `;

// const gradientShift = keyframes`
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// `;

// export const HeroContent = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 80px;
//   align-items: center;
//   max-width: 1400px;
//   width: 100%;
//   padding: 0 60px;

//   @media (max-width: 1024px) {
//     grid-template-columns: 1fr;
//     gap: 60px;
//     padding: 0 40px;
//     text-align: center;
//   }

//   @media (max-width: 768px) {
//     padding: 0 24px;
//     gap: 40px;
//   }
// `;

// export const HeroLeft = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 24px;

//   @media (max-width: 1024px) {
//     align-items: center;
//     order: 2;
//   }
// `;

// export const HeroRight = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media (max-width: 1024px) {
//     order: 1;
//   }
// `;

// export const GreetingBadge = styled.div`
//   display: inline-flex;
//   align-items: center;
//   gap: 8px;
//   background: rgba(129, 202, 252, 0.1);
//   backdrop-filter: blur(20px) saturate(150%);
//   -webkit-backdrop-filter: blur(20px) saturate(150%);
//   border: 0.5px solid rgba(129, 202, 252, 0.3);
//   padding: 10px 24px;
//   border-radius: 50px;
//   font-size: 16px;
//   font-weight: 500;
//   color: #81cafc;
//   box-shadow: 0 4px 16px rgba(129, 202, 252, 0.15),
//     inset 0 1px 0 rgba(255, 255, 255, 0.1);
//   animation: ${float} 3s ease-in-out infinite;

//   @media (max-width: 768px) {
//     font-size: 14px;
//     padding: 8px 20px;
//   }
// `;

// export const NameHighlight = styled.span`
//   background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #81cafc 100%);
//   background-size: 200% 200%;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
//   animation: ${gradientShift} 5s ease infinite;
//   font-weight: 800;
// `;

// export const SubtitleHighlight = styled.span`
//   color: #667eea;
//   font-weight: 600;
//   position: relative;

//   &::after {
//     content: "";
//     position: absolute;
//     bottom: -4px;
//     left: 0;
//     width: 100%;
//     height: 3px;
//     background: linear-gradient(90deg, #667eea, #81cafc);
//     border-radius: 2px;
//   }
// `;

// export const CTAButtonGroup = styled.div`
//   display: flex;
//   gap: 16px;
//   margin-top: 12px;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     width: 100%;
//   }
// `;

// export const PrimaryCTA = styled(motion.button)`
//   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//   border: none;
//   color: #ffffff;
//   padding: 16px 40px;
//   font-size: 16px;
//   font-weight: 600;
//   border-radius: 50px;
//   cursor: pointer;
//   box-shadow: 0 8px 24px rgba(102, 126, 234, 0.35),
//     inset 0 1px 0 rgba(255, 255, 255, 0.2);
//   transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//   letter-spacing: 0.01em;
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: -100%;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(
//       90deg,
//       transparent,
//       rgba(255, 255, 255, 0.3),
//       transparent
//     );
//     transition: left 0.5s;
//   }

//   &:hover::before {
//     left: 100%;
//   }

//   &:hover {
//     box-shadow: 0 12px 32px rgba(102, 126, 234, 0.45),
//       inset 0 1px 0 rgba(255, 255, 255, 0.3);
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// export const SecondaryCTA = styled(motion.button)`
//   background: rgba(255, 255, 255, 0.08);
//   backdrop-filter: blur(20px);
//   -webkit-backdrop-filter: blur(20px);
//   border: 2px solid rgba(102, 126, 234, 0.3);
//   color: #667eea;
//   padding: 14px 38px;
//   font-size: 16px;
//   font-weight: 600;
//   border-radius: 50px;
//   cursor: pointer;
//   box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1),
//     inset 0 1px 0 rgba(255, 255, 255, 0.1);
//   transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//   letter-spacing: 0.01em;

//   &:hover {
//     background: rgba(102, 126, 234, 0.1);
//     border-color: rgba(102, 126, 234, 0.5);
//     box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15),
//       inset 0 1px 0 rgba(255, 255, 255, 0.15);
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// export const SocialLinks = styled.div`
//   display: flex;
//   gap: 16px;
//   margin-top: 12px;

//   @media (max-width: 1024px) {
//     justify-content: center;
//   }
// `;

// export const SocialIcon = styled(motion.a)`
//   width: 48px;
//   height: 48px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: rgba(255, 255, 255, 0.05);
//   backdrop-filter: blur(20px);
//   -webkit-backdrop-filter: blur(20px);
//   border: 0.5px solid rgba(255, 255, 255, 0.15);
//   border-radius: 50%;
//   color: #667eea;
//   font-size: 20px;
//   cursor: pointer;
//   transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//   box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1),
//     inset 0 1px 0 rgba(255, 255, 255, 0.08);

//   &:hover {
//     background: rgba(102, 126, 234, 0.15);
//     border-color: rgba(102, 126, 234, 0.3);
//     color: #667eea;
//     box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2),
//       inset 0 1px 0 rgba(255, 255, 255, 0.15);
//   }

//   i {
//     font-size: 20px;
//   }

//   @media (max-width: 768px) {
//     width: 44px;
//     height: 44px;

//     i {
//       font-size: 18px;
//     }
//   }
// `;

// export const ImageGlow = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 110%;
//   height: 110%;
//   background: linear-gradient(
//     135deg,
//     rgba(102, 126, 234, 0.3) 0%,
//     rgba(129, 202, 252, 0.3) 100%
//   );
//   border-radius: 32px;
//   filter: blur(40px);
//   animation: ${glowPulse} 4s ease-in-out infinite;
//   z-index: -1;
// `;

// export const ProfileImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   border-radius: 32px;
//   background: rgba(255, 255, 255, 0.08);
//   backdrop-filter: blur(30px) saturate(150%);
//   -webkit-backdrop-filter: blur(30px) saturate(150%);
//   border: 0.5px solid rgba(255, 255, 255, 0.2);
//   box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3),
//     inset 0 1px 0 rgba(255, 255, 255, 0.1);
//   position: relative;
//   z-index: 1;
//   transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

//   &:hover {
//     transform: scale(1.02);
//   }
// `;
// export const HeroSection = styled.section`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   min-height: calc(100vh - 100px);
//   padding: 180px 0 40px 0; // added top padding
//   position: relative;
// `;

// export const HeroTitle = styled.h1`
//   font-size: clamp(2.5rem, 6vw, 5rem);
//   font-weight: 700;
//   color: #363537; // lightTheme text color
//   line-height: 1.2;
//   letter-spacing: -0.02em;
//   margin: 0;

//   @media (max-width: 1024px) {
//     text-align: center;
//   }
// `;

// export const HeroSubtitle = styled.h2`
//   font-size: clamp(1.5rem, 3vw, 2.5rem);
//   font-weight: 400;
//   color: #667eea; // using primary theme color
//   line-height: 1.4;
//   margin: 0;
//   letter-spacing: -0.01em;

//   @media (max-width: 1024px) {
//     text-align: center;
//   }
// `;

// export const HeroDescription = styled.p`
//   font-size: clamp(15px, 1.8vw, 17px);
//   line-height: 1.8;
//   color: #4a4a5e; // using a darker accent color
//   max-width: 620px;
//   margin: 0;
//   letter-spacing: 0.01em;

//   @media (max-width: 1024px) {
//     text-align: center;
//     max-width: 100%;
//   }

//   @media (max-width: 768px) {
//     line-height: 1.7;
//   }
// `;

// export const ProfileImageContainer = styled.div`
//   position: relative;
//   width: 400px; // smaller than before
//   height: 480px; // smaller than before
//   animation: ${float} 6s ease-in-out infinite;

//   @media (max-width: 1200px) {
//     width: 350px;
//     height: 420px;
//   }

//   @media (max-width: 1024px) {
//     width: 320px;
//     height: 380px;
//   }

//   @media (max-width: 768px) {
//     width: 280px;
//     height: 340px;
//   }

//   @media (max-width: 480px) {
//     width: 240px;
//     height: 300px;
//   }
// `;

import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const glowPulse = keyframes`
  0%, 100% { 
    box-shadow: 0 0 30px ${({ theme }) => theme.text}33,
                0 0 60px ${({ theme }) => theme.text}22;
  }
  50% { 
    box-shadow: 0 0 40px ${({ theme }) => theme.text}55,
                0 0 80px ${({ theme }) => theme.text}33;
  }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  padding: 0 60px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 60px;
    padding: 0 40px;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 0 24px;
    gap: 40px;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1024px) {
    align-items: center;
    order: 2;
  }
`;

export const HeroRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    order: 1;
  }
`;

export const GreetingBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.text}10;
  backdrop-filter: blur(20px) saturate(150%);
  -webkit-backdrop-filter: blur(20px) saturate(150%);
  border: 0.5px solid ${({ theme }) => theme.text}30;
  padding: 10px 24px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  box-shadow: 0 4px 16px ${({ theme }) => theme.text}15,
    inset 0 1px 0 ${({ theme }) => theme.text}10;
  animation: ${float} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 20px;
  }
`;

export const NameHighlight = styled.span`
  background: linear-gradient(
    135deg,
    #0000ff 0%,
    ${({ theme }) => theme.background} 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientShift} 5s ease infinite;
  font-weight: 800;
`;

export const SubtitleHighlight = styled.span`
  color: #0000FF
  font-weight: 600;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(
      90deg,
      #0000ff,
      ${({ theme }) => theme.background}
    );
    border-radius: 2px;
  }
`;

export const CTAButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const PrimaryCTA = styled(motion.button)`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.text} 0%,
    ${({ theme }) => theme.background} 100%
  );
  border: none;
  color: ${({ theme }) => theme.body};
  padding: 16px 40px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 8px 24px ${({ theme }) => theme.text}35,
    inset 0 1px 0 ${({ theme }) => theme.body}20;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.01em;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.body}30,
      transparent
    );
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    box-shadow: 0 12px 32px ${({ theme }) => theme.text}45,
      inset 0 1px 0 ${({ theme }) => theme.body}30;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SecondaryCTA = styled(motion.button)`
  background: ${({ theme }) => theme.background}10;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 2px solid ${({ theme }) => theme.text}30;
  color: ${({ theme }) => theme.text};
  padding: 14px 38px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 ${({ theme }) => theme.text}10;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.01em;

  &:hover {
    background: ${({ theme }) => theme.text}10;
    border-color: ${({ theme }) => theme.text}50;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 ${({ theme }) => theme.text}15;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const ImageGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 110%;
  height: 110%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.text}30 0%,
    ${({ theme }) => theme.background}30 100%
  );
  border-radius: 32px;
  filter: blur(40px);
  animation: ${glowPulse} 4s ease-in-out infinite;
  z-index: -1;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 32px;
  background: ${({ theme }) => theme.background}10;
  backdrop-filter: blur(30px) saturate(150%);
  -webkit-backdrop-filter: blur(30px) saturate(150%);
  border: 0.5px solid ${({ theme }) => theme.text}20;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 ${({ theme }) => theme.text}10;
  position: relative;
  z-index: 1;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.02);
  }
`;

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 100px);
  padding: 180px 0 40px 0;
  position: relative;
  background: Transparent;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 0;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  line-height: 1.4;
  margin: 0;
  letter-spacing: -0.01em;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const HeroDescription = styled.p`
  font-size: clamp(15px, 1.8vw, 17px);
  line-height: 1.8;
  color: ${({ theme }) => theme.text};
  max-width: 620px;
  margin: 0;
  letter-spacing: 0.01em;

  @media (max-width: 1024px) {
    text-align: center;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    line-height: 1.7;
  }
`;

export const ProfileImageContainer = styled.div`
  position: relative;
  width: 400px;
  height: 480px;
  animation: ${float} 6s ease-in-out infinite;

  @media (max-width: 1200px) {
    width: 350px;
    height: 420px;
  }

  @media (max-width: 1024px) {
    width: 320px;
    height: 380px;
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 340px;
  }

  @media (max-width: 480px) {
    width: 240px;
    height: 300px;
  }
`;
export const SocialIcon = styled(motion.a)`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) =>
    theme.body === "#FFF"
      ? "rgba(0, 0, 0, 0.05)"
      : "rgba(255, 255, 255, 0.08)"};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 0.5px solid
    ${({ theme }) =>
      theme.body === "#FFF"
        ? "rgba(0, 0, 0, 0.1)"
        : "rgba(255, 255, 255, 0.15)"};
  border-radius: 50%;
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px
      ${({ theme }) =>
        theme.body === "#FFF" ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.4)"},
    inset 0 1px 0 rgba(255, 255, 255, 0.08);

  &:hover {
    background: ${({ theme }) =>
      theme.body === "#FFF"
        ? "rgba(54, 53, 55, 0.1)"
        : "rgba(255, 255, 255, 0.15)"};
    border-color: ${({ theme }) =>
      theme.body === "#FFF"
        ? "rgba(54, 53, 55, 0.3)"
        : "rgba(255, 255, 255, 0.3)"};
    color: ${({ theme }) => theme.text};
    box-shadow: 0 8px 24px
        ${({ theme }) =>
          theme.body === "#FFF"
            ? "rgba(54, 53, 55, 0.2)"
            : "rgba(255, 255, 255, 0.2)"},
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }

  i {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    i {
      font-size: 18px;
    }
  }
`;
