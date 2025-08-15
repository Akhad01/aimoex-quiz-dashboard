import { iconsImgs } from "../../utils/images";
import {
  ContentTopWrapper,
  ContentTopLeft,
  SidebarToggler,
  ContentTopTitle,
} from "./styled";
import { toggleSidebar } from '../../store/slices/sidebarSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

const ContentTop: React.FC = () => {
  const currentPage = useAppSelector((state) => state.sidebar.activePage) 

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
        <ContentTopTitle>{currentPage}</ContentTopTitle>
      </ContentTopLeft>
    </ContentTopWrapper>
  );
};

export default ContentTop;
