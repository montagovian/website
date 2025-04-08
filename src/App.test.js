import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header content', () => {
  render(<App />);
  const nameElement = screen.getByRole('heading', { name: /Alex Anthony/i });
  expect(nameElement).toBeInTheDocument();
});

test('renders footer content', () => {
  render(<App />);
  const linkElement = screen.getByText(/Amanda Faraone/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', 'https://www.amandafaraone.com/');

  const copyrightElement = screen.getByText(/© Alex Anthony 2025/i);
  expect(copyrightElement).toBeInTheDocument();
});
