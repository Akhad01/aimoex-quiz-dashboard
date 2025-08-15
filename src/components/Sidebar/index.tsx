import { useEffect, useState } from "react";
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
  NavLink,
  NavLinkIcon,
  NavLinkText,
} from "./styled";
import { useAppSelector } from '../../hooks/reduxHooks';

const Sidebar: React.FC = () => {
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const isSidebarOpen = useAppSelector((state) => state.sidebar.isSidebarOpen)

  useEffect(() => {
    setSidebarClass(isSidebarOpen ? "sidebar-change" : "");
  }, [isSidebarOpen]);

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
          {navigationLinks.map((link) => (
            <NavItem key={link.id}>
              <NavLink href="#" className={link.id === activeLinkIdx ? "active" : ""}>
                <NavLinkIcon src={link.image} alt={link.title} />
                <NavLinkText>{link.title}</NavLinkText>
              </NavLink>
            </NavItem>
          ))}
        </NavList>
      </Navigation>
    </SidebarWrapper>
  );
};

export default Sidebar;
