import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReservationPage from './pages/ReservationPage.js';
import ConfirmationPage from './pages/ConfirmationPage.js';

const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const updateTimes = (state, date) => {
    console.log('updated date', state, date);
    return state;
};

const Main = () => {
    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        initializeTimes()
    );

    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
                path="/reservations"
                element={
                    <ReservationPage
                        availableTimes={availableTimes}
                        updateTimes={dispatch}
                    />
                }></Route>
            <Route path="/confirmed" element={<ConfirmationPage />}></Route>
        </Routes>
    );
};

export default Main;
