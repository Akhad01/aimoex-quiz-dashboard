import { Paper } from '@mui/material';
import styled from 'styled-components';

export const StyledCard = styled(Paper)`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 16px;
  background-color: #FEFEFE !important;
  color: #0B1C33 !important;
`;

export const OptionsContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: none;
  margin-top: 16px;
`;

export const OptionLabel = styled.label<{
  isSelected?: boolean;
  isCorrect?: boolean;
  isWrong?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px 16px;
  border-radius: 12px;
  cursor: pointer;
  border: 2px solid
    ${({ isCorrect, isWrong, isSelected }) =>
      isCorrect ? "#4CAF50" :
      isWrong ? "#f44336" :
      isSelected ? "#2b843aff" : "#d1d5db"};
  background-color: ${({ isCorrect, isWrong, isSelected }) =>
    isCorrect ? "#E8F5E9" :
    isWrong ? "#FFEBEE" :
    isSelected ? "#ecfeff" : "#fff"};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ isSelected }) => (isSelected ? "#EAF8F1" : "#27A468")};
    background-color: ${({ isSelected }) => (isSelected ? "#ecfeff" : "#f0f9ff")};
  }
`;

export const Badge = styled.span<{ correct?: boolean }>`
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 9999px;
  background-color: ${({ correct }) => (correct ? "#bbf7d0" : "#fecaca")};
  color: ${({ correct }) => (correct ? "#166534" : "#b91c1c")};
  margin-left: auto;
`;

export const HiddenRadio = styled.input`
  display: none;
`;

export const ActionsRow = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  align-items: center;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;