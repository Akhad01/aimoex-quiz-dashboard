import styled from "styled-components";

export const ContentTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const ContentTopLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const SidebarToggler = styled.button`
  display: flex;
  align-items: center;
  margin-right: 12px;

  img {
    width: 20px;
  }
`;

export const ContentTopTitle = styled.h3`
  color: var(--clr-white);
  font-size: 20px;
  font-weight: 600;
`;

