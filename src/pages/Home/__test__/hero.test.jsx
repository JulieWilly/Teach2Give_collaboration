import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Hero from '../hero';

describe('Hero Component', () => {
  test('renders the component without crashing', () => {
    render(<Hero />);
  });

  test('renders the correct heading', () => {
    render(<Hero />);
    const headingElement = screen.getByText(/Hi, I am John,/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the correct paragraph', () => {
    render(<Hero />);
    const paragraphElement = screen.getByText(/Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint./i);
    expect(paragraphElement).toBeInTheDocument();
  });

  test('renders the image with correct attributes', () => {
    render(<Hero />);
    const imgElement = screen.getByAltText(/John/i);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', expect.stringContaining('profile%20pic.jpeg'));
  });

  test('renders the download resume button', () => {
    render(<Hero />);
    const buttonElement = screen.getByText(/Download Resume/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
