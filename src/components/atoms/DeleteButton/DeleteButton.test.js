import React from 'react';
import DeleteButton from './DeleteButton';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';

describe('Delete Button', () => {
  it('Renders delete button', () => {
    renderWithThemeProvider(<DeleteButton />);
  });
});
