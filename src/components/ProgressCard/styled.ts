import { Box, Paper } from '@mui/material';
import styled from 'styled-components';

export const StyledCard = styled(Paper)`
  width: 100%;
  padding: 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FEFEFE !important;
`;

export const CircleWrapper = styled(Box)`
  position: relative;
  display: inline-flex;
  margin-top: 16px;
  color: #0B1C33;
`;

export const CircleText = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 18px;
`;