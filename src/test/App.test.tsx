import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../view/container/CreatePrototypeRequests';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
