import React from "react";
import { motion } from "framer-motion";
import GlassCard from "../Common/GlassCard";
import { SkillName } from "./SkillSphere.styles";

const SkillSphere = ({ skill, index }) => {
  return (
    <GlassCard
      as={motion.div}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
      whileHover={{ scale: 1.05, y: -8 }}
    >
      <SkillName>
        <span style={{ fontSize: "28px" }}>{skill.icon}</span>
        {skill.name}
      </SkillName>
      <div
        style={{
          marginBottom: "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          {skill.category}
        </span>
        <span style={{ color: "#ffffff", fontWeight: "600", fontSize: "15px" }}>
          {skill.level}%
        </span>
      </div>
      {/* The SkillProgress component was here. It has been removed and needs to be replaced with a new implementation. */}
      <div style={{ height: '10px', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: '20px' }}>
        <div style={{ height: '100%', width: `${skill.level}%`, backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '20px' }}></div>
      </div>
    </GlassCard>
  );
};

export default SkillSphere;