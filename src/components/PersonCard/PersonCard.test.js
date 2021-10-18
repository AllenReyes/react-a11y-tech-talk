import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PersonCard from './PersonCard';

describe('<PersonCard />', () => {
  test('it should mount', () => {
    render(<PersonCard />);
    
    const personCard = screen.getByTestId('PersonCard');

    expect(personCard).toBeInTheDocument();
  });
});