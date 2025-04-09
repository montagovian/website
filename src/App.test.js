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

// Add a new test for professional links
test('renders professional links correctly', () => {
  render(<App />);
  
  // Check for updated CV link text
  const cvLink = screen.getByRole('link', { name: /CV \(Résumé\)/i });
  expect(cvLink).toBeInTheDocument();
  
  // Check for LinkedIn link (as a sanity check)
  const linkedInLink = screen.getByRole('link', { name: /LinkedIn/i });
  expect(linkedInLink).toBeInTheDocument();
  
  // Check for email image by alt text
  const emailImage = screen.getByAltText(/Email address/i);
  expect(emailImage).toBeInTheDocument();
  expect(emailImage).toHaveAttribute('src', '/email.png'); // Expect root path in tests
});
