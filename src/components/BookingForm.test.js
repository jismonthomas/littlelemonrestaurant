import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

const availableTimes = ['17:00', '17:30'];
const submitData = jest.fn();

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText('Book Now');
    expect(headingElement).toBeInTheDocument();
});

test(`disable sumbit button if fields are empty`, () => {
    render(
        <BookingForm availableTimes={availableTimes} updateTimes={submitData} />
    );

    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByText(/Confirm My Reservation/i);

    fireEvent.change(emailInput, {
        target: { value: 'johndoe@example.com' },
    });

    expect(submitButton).toBeDisabled();
});
