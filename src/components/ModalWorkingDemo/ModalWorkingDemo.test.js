import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalWorkingDemo from './ModalWorkingDemo';

describe('<ModalWorkingDemo />', () => {
  test('it should mount', () => {
    render(<ModalWorkingDemo />);
    
    const modalWorkingDemo = screen.getByTestId('ModalWorkingDemo');

    expect(modalWorkingDemo).toBeInTheDocument();
  });
});