import { render, screen } from '@testing-library/react';
import Header from '../Header.component';

test('renders same text passed into title prop', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders heading element', () => {
  render(<Header title="my header" />);
  const headingElement = screen.getByRole('heading', { name: 'my header' });
  expect(headingElement).toBeInTheDocument();
});

// findByText async-await
test('renders same text passed into title prop - findByText', async () => {
  render(<Header title="My Header" />);
  const headingElement = await screen.findByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders same text passed into title prop - using getByTestId', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTestId('header1');
  expect(headingElement).toBeInTheDocument();
});
