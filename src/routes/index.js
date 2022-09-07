import { Navigate, Route, Routes } from 'react-router-dom';

import { routes } from './routes';

const AppRoutes = () => {
      let key = 1;
      return (
            <Routes>
                  {routes.map((route) => {
                        key++;
                        const Element = route.element;
                        return <Route key={key.toString()} {...route} element={<Element />} />;
                  })}
                  <Route path="*" element={<Navigate to="/" />} />
            </Routes>
      );
};
export default AppRoutes;
