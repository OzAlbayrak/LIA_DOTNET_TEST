import React, {useState} from 'react'
import BookingTimeSlot from './BookingTimeSlot'

const BookingDay = ({bookingDayId, bookingDay, bookingDayName, bookings, setBookings, timeSlots, setTimeSlots, updateOnDb, setUpdateOnDb, userName, setUserName, userId, setUserId}) => {
    const [inputValue, setInputValue] = useState("");
  return (
    <div key={bookingDayId} className="booking-row">
        <div className="booking-title">{bookingDayName}</div>

        <div className="timeslot-list">
            {timeSlots?.map(({ id, startTime, endTime }) => {
                const booker = bookingDay?.find(({ timeSlot }) => timeSlot.startTime === startTime && timeSlot.endTime === endTime);
                
                return (
                    <BookingTimeSlot
                        key={id}
                        bookingDayId={bookingDayId} 
                        bookingDay={bookingDay} 
                        bookings={bookings} 
                        setBookings={setBookings} 
                        timeSlotId={id}
                        timeSlotStartTime={startTime}
                        timeSlotEndTime={endTime}
                        setTimeSlots={setTimeSlots}
                        updateOnDb={updateOnDb}
                        setUpdateOnDb={setUpdateOnDb} 
                        userName={userName} 
                        setUserName={setUserName} 
                        userId={userId} 
                        setUserId={setUserId}
                        booker={booker}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                    />
                );
            })}
        </div>
    </div>
    
  )
}

export default BookingDay