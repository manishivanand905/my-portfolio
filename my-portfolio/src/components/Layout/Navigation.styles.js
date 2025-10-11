// import styled from "styled-components";
// import { motion } from "framer-motion";

// export const NavContainer = styled(motion.nav)`
//   position: fixed;
//   top: 20px;
//   left: 50%;
//   transform: translateX(-50%);
//   z-index: 1000;
//   background: ${(props) =>
//     props.scrolled
//       ? props.theme.body === "#FFF"
//         ? "rgba(255, 255, 255, 0.7)"
//         : "rgba(54, 53, 55, 0.7)"
//       : props.theme.body === "#FFF"
//       ? "rgba(255, 255, 255, 0.4)"
//       : "rgba(54, 53, 55, 0.4)"};
//   backdrop-filter: blur(${(props) => (props.scrolled ? "30px" : "20px")})
//     saturate(180%);
//   -webkit-backdrop-filter: blur(
//       ${(props) => (props.scrolled ? "30px" : "20px")}
//     )
//     saturate(180%);
//   border: 1px solid
//     ${(props) =>
//       props.theme.body === "#FFF"
//         ? "rgba(255, 255, 255, 0.5)"
//         : "rgba(255, 255, 255, 0.15)"};
//   border-radius: 100px;
//   padding: ${(props) => (props.scrolled ? "12px 40px" : "16px 60px")};
//   box-shadow: ${(props) =>
//     props.theme.body === "#FFF"
//       ? `0 8px 32px rgba(0, 0, 0, 0.08),
//        0 0 0 1px rgba(255, 255, 255, 0.3) inset,
//        0 20px 60px rgba(0, 0, 0, 0.1)`
//       : `0 8px 32px rgba(0, 0, 0, 0.3),
//        0 0 0 1px rgba(255, 255, 255, 0.1) inset,
//        0 20px 60px rgba(0, 0, 0, 0.4)`};
//   transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

//   /* ✅ Full width for large and extra-large screens */
//   width: 100%;
//   max-width: 1400px;
//   margin: 0 auto;

//   &::before {
//     content: "";
//     position: absolute;
//     top: -100%;
//     left: -100%;
//     width: 300%;
//     height: 300%;
//     background: linear-gradient(
//       135deg,
//       transparent 30%,
//       ${(props) =>
//           props.theme.body === "#FFF"
//             ? "rgba(255, 255, 255, 0.2)"
//             : "rgba(255, 255, 255, 0.05)"}
//         50%,
//       transparent 70%
//     );
//     transform: rotate(45deg);
//     animation: shimmer 8s ease-in-out infinite;
//     pointer-events: none;
//   }

//   @keyframes shimmer {
//     0%,
//     100% {
//       transform: translateX(-50%) translateY(-50%) rotate(45deg);
//     }
//     50% {
//       transform: translateX(50%) translateY(50%) rotate(45deg);
//     }
//   }

//   @media (max-width: 1024px) {
//     padding: ${(props) => (props.scrolled ? "12px 30px" : "16px 40px")};
//   }

//   @media (max-width: 768px) {
//     top: 15px;
//     padding: ${(props) => (props.scrolled ? "10px 20px" : "12px 25px")};
//     border-radius: 50px;
//     width: 95%;
//   }
// `;

// export const Logo = styled(motion.div)`
//   font-size: 20px;
//   font-weight: 700;
//   background: ${(props) =>
//     props.theme.body === "#FFF"
//       ? "linear-gradient(135deg, #363537 0%, #555 100%)"
//       : "linear-gradient(135deg, #FAFAFA 0%, #FFF 100%)"};
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
//   letter-spacing: -0.5px;
//   white-space: nowrap;
//   margin-right: 10px;

//   @media (max-width: 768px) {
//     font-size: 16px;
//     margin-right: 5px;
//   }

//   @media (max-width: 480px) {
//     display: none;
//   }
// `;

// export const NavContent = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between; /* ✅ Spread items evenly */
//   gap: 20px;
//   position: relative;
//   z-index: 1;
//   width: 100%;

//   @media (max-width: 768px) {
//     gap: 10px;
//   }
// `;

// export const NavList = styled.ul`
//   display: flex;
//   gap: 8px;
//   list-style: none;
//   align-items: center;
//   margin: 0;
//   padding: 0;

//   @media (max-width: 768px) {
//     gap: 4px;
//   }
// `;

// export const NavItem = styled(motion.li)`
//   position: relative;
// `;

// export const NavLink = styled.a`
//   color: ${(props) => props.theme.text};
//   text-decoration: none;
//   font-size: 15px;
//   font-weight: 500;
//   cursor: pointer;
//   transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//   position: relative;
//   padding: 10px 18px;
//   display: block;
//   border-radius: 50px;
//   letter-spacing: 0.2px;
//   white-space: nowrap;

//   &.active {
//     color: ${(props) => (props.theme.body === "#FFF" ? "#000" : "#FFF")};
//     font-weight: 600;
//     background: ${(props) =>
//       props.theme.body === "#FFF"
//         ? "rgba(54, 53, 55, 0.15)"
//         : "rgba(255, 255, 255, 0.2)"};
//     backdrop-filter: blur(10px);
//     box-shadow: ${(props) =>
//       props.theme.body === "#FFF"
//         ? "0 4px 15px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)"
//         : "0 4px 15px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)"};
//   }

//   &:hover:not(.active) {
//     color: ${(props) => (props.theme.body === "#FFF" ? "#000" : "#FFF")};
//     background: ${(props) =>
//       props.theme.body === "#FFF"
//         ? "rgba(54, 53, 55, 0.08)"
//         : "rgba(255, 255, 255, 0.12)"};
//     transform: translateY(-1px);
//   }

//   @media (max-width: 768px) {
//     font-size: 13px;
//     padding: 8px 14px;
//   }
// `;

// export const ThemeToggle = styled(motion.button)`
//   background: ${(props) =>
//     props.theme.body === "#FFF"
//       ? "rgba(54, 53, 55, 0.1)"
//       : "rgba(255, 255, 255, 0.15)"};
//   border: 1px solid
//     ${(props) =>
//       props.theme.body === "#FFF"
//         ? "rgba(54, 53, 55, 0.15)"
//         : "rgba(255, 255, 255, 0.2)"};
//   color: ${(props) => props.theme.text};
//   cursor: pointer;
//   font-size: 18px;
//   padding: 8px 12px;
//   border-radius: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//   width: 40px;
//   height: 40px;

//   &:hover {
//     background: ${(props) =>
//       props.theme.body === "#FFF"
//         ? "rgba(54, 53, 55, 0.15)"
//         : "rgba(255, 255, 255, 0.25)"};
//     transform: scale(1.05);
//   }

//   @media (max-width: 768px) {
//     width: 36px;
//     height: 36px;
//     font-size: 16px;
//   }
// `;

// export const CallButton = styled(motion.button)`
//   background: ${(props) =>
//     props.theme.body === "#FFF"
//       ? "linear-gradient(135deg, #363537 0%, #555 100%)"
//       : "linear-gradient(135deg, #FAFAFA 0%, #FFF 100%)"};
//   color: ${(props) => (props.theme.body === "#FFF" ? "#FFF" : "#363537")};
//   border: none;
//   padding: 10px 24px;
//   border-radius: 50px;
//   font-size: 14px;
//   font-weight: 600;
//   cursor: pointer;
//   transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//   letter-spacing: 0.3px;
//   white-space: nowrap;
//   box-shadow: ${(props) =>
//     props.theme.body === "#FFF"
//       ? "0 4px 15px rgba(54, 53, 55, 0.3)"
//       : "0 4px 15px rgba(255, 255, 255, 0.3)"};

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: ${(props) =>
//       props.theme.body === "#FFF"
//         ? "0 6px 20px rgba(54, 53, 55, 0.4)"
//         : "0 6px 20px rgba(255, 255, 255, 0.4)"};
//   }

//   @media (max-width: 768px) {
//     padding: 8px 18px;
//     font-size: 13px;
//   }

//   @media (max-width: 480px) {
//     padding: 8px 16px;
//     font-size: 12px;
//   }
// `;

import styled from "styled-components";
import { motion } from "framer-motion";

/* Container that spans the viewport width but keeps content centered */
export const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  z-index: 1000;

  /* horizontal padding so nav isn't flush against edges */
  padding: ${(props) => (props.scrolled ? "10px 28px" : "14px 36px")};

  /* background / glass look preserved */
  background: ${(props) =>
    props.scrolled
      ? props.theme.body === "#FFF"
        ? "rgba(255, 255, 255, 0.7)"
        : "rgba(54, 53, 55, 0.7)"
      : props.theme.body === "#FFF"
      ? "rgba(255, 255, 255, 0.4)"
      : "rgba(54, 53, 55, 0.4)"};
  backdrop-filter: blur(${(props) => (props.scrolled ? "30px" : "20px")})
    saturate(180%);
  -webkit-backdrop-filter: blur(
      ${(props) => (props.scrolled ? "30px" : "20px")}
    )
    saturate(180%);
  border: 1px solid
    ${(props) =>
      props.theme.body === "#FFF"
        ? "rgba(255, 255, 255, 0.5)"
        : "rgba(255, 255, 255, 0.15)"};
  border-radius: 100px;
  box-shadow: ${(props) =>
    props.theme.body === "#FFF"
      ? `0 8px 32px rgba(0, 0, 0, 0.08),
         0 0 0 1px rgba(255, 255, 255, 0.3) inset,
         0 20px 60px rgba(0, 0, 0, 0.1)`
      : `0 8px 32px rgba(0, 0, 0, 0.3),
         0 0 0 1px rgba(255, 255, 255, 0.1) inset,
         0 20px 60px rgba(0, 0, 0, 0.4)`};
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  /* shimmer preserved */
  &::before {
    content: "";
    position: absolute;
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    background: linear-gradient(
      135deg,
      transparent 30%,
      ${(props) =>
          props.theme.body === "#FFF"
            ? "rgba(255, 255, 255, 0.2)"
            : "rgba(255, 255, 255, 0.05)"}
        50%,
      transparent 70%
    );
    transform: rotate(45deg);
    animation: shimmer 8s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes shimmer {
    0%,
    100% {
      transform: translateX(-50%) translateY(-50%) rotate(45deg);
    }
    50% {
      transform: translateX(50%) translateY(50%) rotate(45deg);
    }
  }

  /* keep container safe on small screens */
  @media (max-width: 768px) {
    top: 15px;
    padding: ${(props) => (props.scrolled ? "8px 18px" : "10px 20px")};
    border-radius: 50px;
  }
`;

/* Inner content area that centers and constrains width */
export const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Logo left, center nav, controls right */
  gap: 20px;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  min-width: 0; /* allow children to shrink */

  @media (max-width: 1024px) {
    max-width: 1100px;
  }

  @media (max-width: 768px) {
    gap: 10px;
    padding: 0 4px;
  }
`;

/* Logo */
export const Logo = styled(motion.div)`
  font-size: 20px;
  font-weight: 700;
  background: ${(props) =>
    props.theme.body === "#FFF"
      ? "linear-gradient(135deg, #363537 0%, #555 100%)"
      : "linear-gradient(135deg, #FAFAFA 0%, #FFF 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
  white-space: nowrap;
  margin-right: 10px;
  flex: 0 0 auto;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-right: 5px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

/* NAV LIST: flexible, centered, shrinks when needed and scrolls on small screens */
export const NavList = styled.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  align-items: center;
  margin: 0;
  padding: 0;
  flex: 1 1 auto; /* allow to grow and shrink */
  justify-content: center;
  min-width: 0; /* important for children to be able to shrink */

  /* on smaller screens allow horizontal scroll so right controls never get pushed out */
  @media (max-width: 768px) {
    justify-content: flex-start;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-left: 6px;

    /* hide default scrollbar */
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

/* Individual list item */
export const NavItem = styled(motion.li)`
  position: relative;
  flex: 0 0 auto; /* don't stretch */
`;

/* Link styles unchanged (kept same functionality) */
export const NavLink = styled.a`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 10px 18px;
  display: block;
  border-radius: 50px;
  letter-spacing: 0.2px;
  white-space: nowrap;

  &.active {
    color: ${(props) => (props.theme.body === "#FFF" ? "#000" : "#FFF")};
    font-weight: 600;
    background: ${(props) =>
      props.theme.body === "#FFF"
        ? "rgba(54, 53, 55, 0.15)"
        : "rgba(255, 255, 255, 0.2)"};
    backdrop-filter: blur(10px);
    box-shadow: ${(props) =>
      props.theme.body === "#FFF"
        ? "0 4px 15px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)"
        : "0 4px 15px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)"};
  }

  &:hover:not(.active) {
    color: ${(props) => (props.theme.body === "#FFF" ? "#000" : "#FFF")};
    background: ${(props) =>
      props.theme.body === "#FFF"
        ? "rgba(54, 53, 55, 0.08)"
        : "rgba(255, 255, 255, 0.12)"};
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 8px 14px;
  }
`;

/* Right controls (theme toggle + call button) */
export const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 0 0 auto;
  margin-left: 12px;
  z-index: 2;
`;

/* Toggle and Call button preserved — made sure they don't shrink */
export const ThemeToggle = styled(motion.button)`
  background: ${(props) =>
    props.theme.body === "#FFF"
      ? "rgba(54, 53, 55, 0.1)"
      : "rgba(255, 255, 255, 0.15)"};
  border: 1px solid
    ${(props) =>
      props.theme.body === "#FFF"
        ? "rgba(54, 53, 55, 0.15)"
        : "rgba(255, 255, 255, 0.2)"};
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-size: 18px;
  padding: 8px 12px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 40px;
  height: 40px;
  flex: 0 0 auto;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }
`;

export const CallButton = styled(motion.button)`
  background: ${(props) =>
    props.theme.body === "#FFF"
      ? "linear-gradient(135deg, #363537 0%, #555 100%)"
      : "linear-gradient(135deg, #FAFAFA 0%, #FFF 100%)"};
  color: ${(props) => (props.theme.body === "#FFF" ? "#FFF" : "#363537")};
  border: none;
  padding: 10px 24px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.3px;
  white-space: nowrap;
  box-shadow: ${(props) =>
    props.theme.body === "#FFF"
      ? "0 4px 15px rgba(54, 53, 55, 0.3)"
      : "0 4px 15px rgba(255, 255, 255, 0.3)"};
  flex: 0 0 auto;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 8px 14px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 12px;
  }
`;
