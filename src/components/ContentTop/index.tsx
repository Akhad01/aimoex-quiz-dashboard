import { iconsImgs } from "../../utils/images";
import {
  ContentTopWrapper,
  ContentTopLeft,
  SidebarToggler,
  ContentTopTitle,
} from "./styled";
import { toggleSidebar } from '../../store/slices/sidebar/sidebarSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';

const ContentTop: React.FC = () => {
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(toggleSidebar())
  }

  return (
    <ContentTopWrapper>
      <ContentTopLeft>
        <SidebarToggler onClick={handleClick}>
          <img src={iconsImgs.menu} alt="Toggle sidebar" />
        </SidebarToggler>
        <ContentTopTitle>Home</ContentTopTitle>
      </ContentTopLeft>
    </ContentTopWrapper>
  );
};

export default ContentTop;
