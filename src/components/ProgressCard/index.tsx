import React from "react";
import styled from "styled-components";
import { Paper, Typography, CircularProgress, Box } from "@mui/material";

interface ProgressCardProps {
  completedTests: number;
  averageScore: number; // в процентах
}

const StyledCard = styled(Paper)`
  width: 100%;
  padding: 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FEFEFE !important;
`;

const CircleWrapper = styled(Box)`
  position: relative;
  display: inline-flex;
  margin-top: 16px;
`;

const CircleText = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 18px;
`;

const ProgressCard: React.FC<ProgressCardProps> = ({ completedTests, averageScore }) => {
  return (
    <StyledCard elevation={2}>
      <Typography variant="h6" gutterBottom>
        Прогресс
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Пройдено тестов: {completedTests}
      </Typography>

      <CircleWrapper>
        <CircularProgress
          variant="determinate"
          value={averageScore}
          size={120}
          thickness={6}
          sx={{
            color: averageScore >= 70 ? "#4CAF50" : "#f44336",
            backgroundColor: "#f0f0f0",
            borderRadius: "50%",
          }}
        />
        <CircleText>{averageScore}%</CircleText>
      </CircleWrapper>
    </StyledCard>
  );
};

export default ProgressCard;
