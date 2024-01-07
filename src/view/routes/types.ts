import React from 'react';

export interface RouteProps {
  path: string;
  element: React.ReactNode | null;
  subRoutes?: [
    {
      path: string;
      element: React.ReactNode | null;
    }
  ];
}
