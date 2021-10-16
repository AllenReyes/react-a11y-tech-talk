import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalDemo from './ModalDemo';

describe('<ModalDemo />', () => {
  test('it should mount', () => {
    render(<ModalDemo />);
    
    const modalDemo = screen.getByTestId('ModalDemo');

    expect(modalDemo).toBeInTheDocument();
  });
});