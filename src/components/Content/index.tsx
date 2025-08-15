// import ContentMain from '../ContentMain/Index';
import { Outlet } from 'react-router-dom';
import ContentTop from '../ContentTop';
import { MainContent } from "./styled";

const Content: React.FC = () => {
  return (
    <MainContent>
      <ContentTop />
      <Outlet />
      {/* <ContentMain /> */}
    </MainContent>
  );
};

export default Content;
