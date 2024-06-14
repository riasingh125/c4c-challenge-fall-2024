/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddPartner from './AddPartner';

describe('AddPartner Component', () => {
  const mockFetchPartners = jest.fn();

  test('renders AddPartner component', () => {
    render(<AddPartner fetchPartners={mockFetchPartners} />);

    expect(screen.getByText('+ Add Partner')).toBeInTheDocument();
  });

  test('toggles form visibility', () => {
    render(<AddPartner fetchPartners={mockFetchPartners} />);

    const toggleButton = screen.getByText('+ Add Partner');
    fireEvent.click(toggleButton);

    expect(screen.getByText('Add New Partner')).toBeInTheDocument();

    fireEvent.click(screen.getByText('— Minimize Form'));

    expect(screen.queryByText('Add New Partner')).not.toBeInTheDocument();
  });

  test('submits the form', async () => {
    render(<AddPartner fetchPartners={mockFetchPartners} />);

    fireEvent.click(screen.getByText('+ Add Partner'));

    fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'Test Partner' } });
    fireEvent.change(screen.getByLabelText('Logo URL:'), { target: { value: 'http://example.com/logo.png' } });
    fireEvent.change(screen.getByLabelText('Description:'), { target: { value: 'Test Description' } });

    fireEvent.click(screen.getByText('Add Partner'));

    expect(mockFetchPartners).toHaveBeenCalled();
  });
});
