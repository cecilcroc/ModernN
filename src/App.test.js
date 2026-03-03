// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NFTChain title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NFTChain/i);
    expect(titleElement).toBeInTheDocument();
});
