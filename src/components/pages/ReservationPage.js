import BookingForm from '../BookingForm';

const ReservationPage = ({ availableTimes, updateTimes }) => {
    return (
        <>
            {/* reservation header here */}
            <BookingForm
                availableTimes={availableTimes}
                updateTimes={updateTimes}
            />
        </>
    );
};

export default ReservationPage;
