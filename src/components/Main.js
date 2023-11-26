import BookingPage from "./pages/booking/BookingPage";
import HomePage from "./pages/home/HomePage";
import { Route, Routes } from "react-router-dom";

function Main() {
    return (
    <main>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
            {/* <Route path="/confirmed" element={<ConfirmedBooking/> } /> */}
        </Routes>
    </main>
    );
  }

export default Main;
