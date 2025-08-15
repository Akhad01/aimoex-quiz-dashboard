import styled from 'styled-components';

export const Container = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 10px 10px; 
  grid-template-areas: 
    "tets test2"
    " test3  test3"; 
` 