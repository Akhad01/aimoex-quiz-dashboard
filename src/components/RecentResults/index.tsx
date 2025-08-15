import React from "react";
import styled from "styled-components";
import { Paper, Typography, List, ListItem, ListItemText, Chip } from "@mui/material";

interface TestResult {
  title: string;
  score: number;
}

interface RecentResultsProps {
  results: TestResult[];
}

const StyledCard = styled(Paper)`
  width: 100%;
  padding: 20px;
  border-radius: 16px;
  background-color: #FEFEFE !important;
`;

const ScoreChip = styled(Chip)<{ score: number }>`
  && {
    background-color: ${({ score }) => (score >= 70 ? "#E8F5E9" : "#FFEBEE")};
    color: ${({ score }) => (score >= 70 ? "#2e7d32" : "#c62828")};
    font-weight: bold;
  }
`;

const RecentResults: React.FC<RecentResultsProps> = ({ results }) => {
  return (
    <StyledCard elevation={2}>
      <Typography variant="h6" gutterBottom>
        Последние результаты
      </Typography>
      <List>
        {results.map((result, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: index < results.length - 1 ? "1px solid #eee" : "none",
              paddingY: 1,
            }}
          >
            <ListItemText primary={result.title} />
            <ScoreChip
              label={`${result.score}%`}
              score={result.score}
              size="small"
            />
          </ListItem>
        ))}
      </List>
    </StyledCard>
  );
};

export default RecentResults;
