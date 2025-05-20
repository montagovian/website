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

describe('Homepage main links and PDFs', () => {
  it('renders CV, LinkedIn, and research paper links', () => {
    render(<App />);
    // CV (Résumé)
    const cvLink = screen.getByRole('link', { name: /cv|résumé/i });
    expect(cvLink).toHaveAttribute('href', expect.stringContaining('/aanthony-resume-latest.pdf'));
    // LinkedIn
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/aoanthony/');
    // Email image
    const emailImg = screen.getByAltText(/email address/i);
    expect(emailImg).toBeInTheDocument();
    // Research papers
    const eefdLink = screen.getByRole('link', { name: /experience, evaluation and faultless disagreement/i });
    expect(eefdLink).toHaveAttribute('href', expect.stringContaining('/eefd.pdf'));
    const dispositionalLink = screen.getByRole('link', { name: /dispositional predicates in context/i });
    expect(dispositionalLink).toHaveAttribute('href', expect.stringContaining('/dispositionalpredicates.pdf'));
  });
});
