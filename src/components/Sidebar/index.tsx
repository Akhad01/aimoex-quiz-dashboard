import { useEffect, useState } from "react";
import { NavLink as RouterLink } from 'react-router-dom'

import { personsImgs } from "../../utils/images";
import { navigationLinks } from "../../data/data";
import {
  SidebarWrapper,
  UserInfo,
  InfoImg,
  InfoName,
  Navigation,
  NavList,
  NavItem,
  NavLinkStyled,
  NavLinkIcon,
  NavLinkText,
} from "./styled";
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { setActivePage } from '../../store/slices/sidebarSlice';

const Sidebar: React.FC = () => {
  const [sidebarClass, setSidebarClass] = useState("");
  const isSidebarOpen = useAppSelector((state) => state.sidebar.isSidebarOpen)

  const dispatch = useAppDispatch()

  useEffect(() => {
    setSidebarClass(isSidebarOpen ? "sidebar-change" : "");
  }, [isSidebarOpen]);

  const handleClick = (title: string) => () => {
    dispatch((setActivePage(title)))
  }

  return (
    <SidebarWrapper className={sidebarClass}>
      <UserInfo>
        <InfoImg>
          <img src={personsImgs.person_one} alt="profile image" />
        </InfoImg>
        <InfoName>Akhad</InfoName>
      </UserInfo>

      <Navigation>
        <NavList>
          {navigationLinks.map((navigationLink) => (
            <NavItem key={navigationLink.id}>
              <NavLinkStyled
                as={RouterLink}
                to={navigationLink.link}
                onClick={handleClick(navigationLink.title)}
              >
                <NavLinkIcon src={navigationLink.image} alt={navigationLink.title} />
                <NavLinkText>{navigationLink.title}</NavLinkText>
              </NavLinkStyled>
            </NavItem>
          ))}
        </NavList>
      </Navigation>
    </SidebarWrapper>
  );
};

export default Sidebar;
