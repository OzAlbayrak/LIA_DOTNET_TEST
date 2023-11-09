import React, { useEffect, useState } from "react";
import { groupBy } from "./utils/utils";
import "./custom.css";
import Week from "./components/BookingWeek"

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function App() {
  const [bookings, setBookings] = useState({});
  const [timeSlots, setTimeSlots] = useState([]);
  const [updateOnDb, setUpdateOnDb] = useState(false);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    (async () => {
      try {
        let [bookings, timeSlots] = await Promise.all([fetch("/booking").then((response) => response.json()), fetch("/booking/timeslots").then((response) => response.json())]);
        setBookings(groupBy(bookings, "day"));
        setTimeSlots(timeSlots);
        console.log("bookings",bookings)
      } catch (error) {
        console.error(error);
      }
    })();
  }, [updateOnDb]);

  const handleAddBooking = () => {};

  return (
    <div className="booking-table">
      <Week 
        weekDays={weekDays}
        bookings={bookings}
        setBookings={setBookings}
        timeSlots={timeSlots}
        setTimeSlots={setTimeSlots}
        updateOnDb={updateOnDb}
        setUpdateOnDb={setUpdateOnDb}
        userName={userName}
        setUserName={setUserName}
        userId={userId}
        setUserId={setUserId}  
      />
    </div>
  );
}
