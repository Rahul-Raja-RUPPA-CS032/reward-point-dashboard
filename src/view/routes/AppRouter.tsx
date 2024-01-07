import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import Home from '../container/Home';
import { RouteProps } from './types';
import Rewards from '../container/Rewards';

const routes: RouteProps[] = [
  {
    path: '*',
    element: <Home />
  },
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'rewards',
    element: <Rewards />
  }
];

const Approuter = () => {
  return (
    <main className="smart-toolbox-container-wrapper">
      <Routes>
        {routes.map((route: RouteProps, index: number) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <React.Suspense fallback={<Loader />}>
                  {route.element}
                </React.Suspense>
              }
            >
              {route.subRoutes?.map(
                (subRoute: RouteProps, subIndex: number) => {
                  return (
                    <Route
                      key={subIndex}
                      path={subRoute.path}
                      element={
                        <React.Suspense fallback={<Loader />}>
                          {route.element}
                        </React.Suspense>
                      }
                    />
                  );
                }
              )}
            </Route>
          );
        })}
      </Routes>
    </main>
  );
};

export default Approuter;
