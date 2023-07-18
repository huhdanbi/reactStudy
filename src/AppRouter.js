import { useRoutes } from 'react-router-dom';

import Main from './pages/Main';
import Sub from './pages/Sub';
import Sub2 from './pages/Sub2';


const AppRouter = () => {
    return useRoutes([
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/sub",
          element: <Sub />,
        },
        {
          path: "/sub2",
          element: <Sub2 />,
        }
    ])
}

export default AppRouter;