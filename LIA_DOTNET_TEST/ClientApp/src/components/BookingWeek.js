import React from 'react'
import BookingDay from './BookingDay'

const BookingWeek = ({weekDays, bookings, setBookings, timeSlots, setTimeSlots, updateOnDb, setUpdateOnDb, userName, setUserName, userId, setUserId}) => {
  return (
    <div>
        {weekDays.map((dayName, i) => {
            const bookingDayId = i + 1 ;
            const bookingDay = bookings[bookingDayId] || [];
            return (
                <BookingDay 
                    key={bookingDayId}
                    bookingDayId={bookingDayId}
                    bookingDay={bookingDay}
                    bookingDayName={dayName}
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
            );
        })}
    </div>
  )
}

export default BookingWeek