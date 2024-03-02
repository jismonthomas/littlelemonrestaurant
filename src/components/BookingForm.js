import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BookingForm = ({ availableTimes, updateTimes }) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            date: '',
            time: '',
            occasion: '',
            guests: 1,
        },
        onSubmit: async (values) => {
            // submit('/', values);
            submitForm(values);
            console.log('values to submit', values);
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            date: Yup.date().required('Required'),
            time: Yup.string().required('Required'),
            occasion: Yup.string().optional(),
            guests: Yup.number().required('Required'),
        }),
    });

    const submitForm = async (values) => {
        setLoading(true);
        const formSubmitted = await submitFormData(values);
        setLoading(false);
        if (formSubmitted) {
            navigate('/confirmed');
        }
    };

    return (
        <section className=" bookingForm">
            <div className="container">
                <h1>Book Now</h1>
                <form onSubmit={formik.handleSubmit}>
                    {loading ? (
                        <div className="overlay">Please Wait...</div>
                    ) : null}
                    <div>
                        <label htmlFor="name" className="formLabel">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={`formField ${
                                formik.touched.name && formik.errors.name
                                    ? 'errorField'
                                    : ''
                            }`}
                            {...formik.getFieldProps('name')}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="formLabel">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={`formField ${
                                formik.touched.email && formik.errors.email
                                    ? 'errorField'
                                    : ''
                            }`}
                            {...formik.getFieldProps('email')}
                        />
                    </div>

                    <div>
                        <label htmlFor="date" className="formLabel">
                            Choose Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            className={`formField ${
                                formik.touched.date && formik.errors.date
                                    ? 'errorField'
                                    : ''
                            }`}
                            {...formik.getFieldProps('date')}
                        />
                    </div>
                    <div>
                        <label htmlFor="time" className="formLabel">
                            Choose Time
                        </label>
                        <select
                            type="time"
                            id="time"
                            name="time"
                            className={`formField ${
                                formik.touched.time && formik.errors.time
                                    ? 'errorField'
                                    : ''
                            }`}
                            {...formik.getFieldProps('time')}>
                            <option value={null}>select time</option>
                            {availableTimes?.map((time) => {
                                return (
                                    <option key={time} value={time}>
                                        {time}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="guests" className="formLabel">
                            Name
                        </label>
                        <input
                            type="number"
                            id="guests"
                            placeholder="1"
                            min="1"
                            max="10"
                            name="guests"
                            className={`formField ${
                                formik.touched.guests && formik.errors.guests
                                    ? 'errorField'
                                    : ''
                            }`}
                            {...formik.getFieldProps('guests')}
                        />
                    </div>

                    <div>
                        <label htmlFor="occasion" className="formLabel">
                            Occasion
                        </label>
                        <select
                            type="occasion"
                            id="occasion"
                            name="occasion"
                            className={`formField ${
                                formik.touched.occasion &&
                                formik.errors.occasion
                                    ? 'errorField'
                                    : ''
                            }`}
                            {...formik.getFieldProps('occasion')}>
                            <option value={null}>select occasion</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>

                    <input
                        disabled={
                            formik.errors.guests ||
                            formik.errors.time ||
                            formik.errors.date ||
                            formik.errors.email ||
                            formik.errors.name
                        }
                        aria-label="On Click"
                        type="submit"
                        value="Confirm My Reservation"
                        className="submitButton"
                    />
                </form>
            </div>
        </section>
    );
};

export default BookingForm;

const submitFormData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 5000);
    });
};
