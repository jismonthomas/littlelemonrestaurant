import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReservationPage from './pages/ReservationPage.js';

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/reservations" element={<ReservationPage />}></Route>
        </Routes>
    );
};

export default Main;
