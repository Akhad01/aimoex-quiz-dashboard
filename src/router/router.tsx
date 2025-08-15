import { createBrowserRouter } from 'react-router-dom';

import { routes } from './routes';
import App from '../app/App';
import DashboardPages from '../pages/DashboardPages';
import ProfilePage from '../pages/ProfilePage';
import RecentTestsPage from '../pages/RecentTestsPage';
import ResultsPage from '../pages/ResultsPage';
import AchievementsPage from '../pages/AchievementsPage';
import BalancePage from '../pages/BalancePage';

export const router = createBrowserRouter([
  {
    path: routes.root,
    element: <App />,
    children: [
      { path: routes.root, element: <DashboardPages /> },
      { path: routes.profile, element: <ProfilePage /> },
      { path: routes.recentTests, element: <RecentTestsPage /> },
      { path: routes.results, element: <ResultsPage /> },
      { path: routes.balance, element: <BalancePage /> },
      { path: routes.achievements, element: <AchievementsPage /> },
    ],
  },
]);