import React from 'react';

const ConfirmedBooking = () => {
    return (
        <section className="confirmation">
            <div className="container">
                <div className="confirmationMessage">
                    <h1>Your Reservation is Confirmed!</h1>
                    <p>
                        A confirmation message has been sent to your email. We
                        look forward to hosting you for a delightful dining
                        experience.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ConfirmedBooking;
