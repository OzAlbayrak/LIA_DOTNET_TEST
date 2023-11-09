import React, { useState, useEffect } from 'react'
import AddBookingContext from './AddBookingContext'
import UpdateBookingContext from './UpdateBookingContext'

const BookingTimeSlot = ({bookingDayId, bookingDay, bookings, setBookings, timeSlots, setTimeSlots, timeSlotId, timeSlotStartTime, timeSlotEndTime, updateOnDb, setUpdateOnDb, userName, setUserName, userId, setUserId, booker, inputValue, setInputValue}) => {
  //const [changeBooking, setChangeBooking] = useState("");
  
  return (
    <div key={`${bookingDay}_${timeSlotStartTime}_${timeSlotEndTime}`} className="booking-item">
      <span className="time-slot">
          {timeSlotStartTime} - {timeSlotEndTime}
      </span>
      {console.log("inputValue-Boking:", inputValue)}
      {booker ? 
          //<span className="username">{booker?.user?.name}</span>
          <UpdateBookingContext
            bookingDayId={bookingDayId} 
            bookingDay={bookingDay} 
            bookings={bookings} 
            setBookings={setBookings} 
            timeSlots={timeSlots}
            setTimeSlots={setTimeSlots}
            timeSlotId={timeSlotId} 
            timeSlotStartTime={timeSlotStartTime}
            timeSlotEndTime={timeSlotEndTime}
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
        : 
          //<button>Add booking</button>
          <AddBookingContext
          bookingDayId={bookingDayId} 
          bookingDay={bookingDay} 
          bookings={bookings} 
          setBookings={setBookings} 
          timeSlots={timeSlots}
          setTimeSlots={setTimeSlots}
          timeSlotId={timeSlotId} 
          timeSlotStartTime={timeSlotStartTime}
          timeSlotEndTime={timeSlotEndTime}
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
      }
    </div>
  )
}

export default BookingTimeSlot