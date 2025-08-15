import { Outlet } from 'react-router-dom';

import ContentTop from '../ContentTop';
import { MainContent } from "./styled";

const Content: React.FC = () => {
  return (
    <MainContent>
      <ContentTop />
      <Outlet />
    </MainContent>
  );
};

export default Content;
