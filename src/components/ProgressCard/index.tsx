import React from "react";
import { Typography, CircularProgress } from "@mui/material";
import { CircleText, CircleWrapper, StyledCard } from './styled';

interface ProgressCardProps {
  title: string;
  averageScore: number;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ title, averageScore }) => {
  return (
    <StyledCard elevation={2}>
      <Typography color='#556171' variant="h6" gutterBottom>
        {title}
      </Typography>
      <CircleWrapper>
        <CircularProgress
          variant="determinate"
          value={averageScore}
          size={90}
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
