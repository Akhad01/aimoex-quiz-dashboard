import styled from "styled-components";

export const SidebarWrapper = styled.div`
  background-color: var(--clr-primary);
  width: 260px;
  padding: 36px 20px;
  transition: var(--transition-default);

  &.sidebar-change {
    margin-left: -260px;
  }

  @media screen and (max-width: 1400px) {
    padding: 24px 16px;
  }

  @media screen and (max-width: 1200px) {
    width: 72px;
    padding: 24px 12px;

    &.sidebar-change {
      margin-left: -72px;
    }
  }

  @media screen and (max-width: 420px) {
    margin-left: -72px;

    &.sidebar-change {
      margin-left: 0;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

export const InfoImg = styled.div`
  width: 48px;
  height: 48px;
  overflow: hidden;
  border-radius: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoName = styled.span`
  font-weight: 500;
  font-size: 20px;
  color: var(--clr-white);
  text-transform: uppercase;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const Navigation = styled.nav`
  margin-top: 28px;
  height: 600px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 18px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--clr-pumpkin);
    border-radius: 18px;
  }
`;

export const NavList = styled.ul``;

export const NavItem = styled.li`
  margin-bottom: 10px;
  margin-right: 4px;

  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: center;
    margin-bottom: 18px;
  }
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  padding: 6px 14px;
  column-gap: 12px;
  height: 44px;
  border-radius: 8px;
  letter-spacing: 0.03em;
  border: 1px solid transparent;
  transition: var(--transition-default);

  &:hover {
    border: 1px solid var(--clr-primar-light);
  }

  &.active {
    background-color: var(--clr-pumpkin);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  }

  @media screen and (max-width: 1200px) {
    padding: 0;
    justify-content: center;
    width: 32px;
    height: 32px;

    &.active,
    &:hover {
      border-radius: 100%;
    }
  }
`;

export const NavLinkIcon = styled.img`
  width: 22px;
`;

export const NavLinkText = styled.span`
  text-transform: capitalize;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
