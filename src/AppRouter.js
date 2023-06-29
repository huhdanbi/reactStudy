import { useRoutes } from 'react-router-dom';

import Main from './pages/Main';
import Sub from './pages/Sub';

const AppRouter = () => {
    return useRoutes([
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/sub",
          element: <Sub />,
        }
    ])
}

export default AppRouter;