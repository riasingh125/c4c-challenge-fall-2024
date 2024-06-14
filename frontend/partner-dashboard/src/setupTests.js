// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from './SearchBar';

const mockPartners = [
  { _id: '1', name: 'Partner 1', description: 'Description 1' },
  { _id: '2', name: 'Partner 2', description: 'Description 2' },
];

describe('SearchBar Component', () => {
  test('renders SearchBar component', () => {
    render(<SearchBar partners={mockPartners} setFilteredPartners={jest.fn()} />);

    expect(screen.getByPlaceholderText('Search by title or description...')).toBeInTheDocument();
  });

  test('filters partners based on search query', () => {
    const mockSetFilteredPartners = jest.fn();
    render(<SearchBar partners={mockPartners} setFilteredPartners={mockSetFilteredPartners} />);

    fireEvent.change(screen.getByPlaceholderText('Search by title or description...'), { target: { value: 'Partner 1' } });

    expect(mockSetFilteredPartners).toHaveBeenCalledWith([mockPartners[0]]);
  });
});


