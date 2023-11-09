import React from 'react'

const UpdateBookingContext = ({bookingDayId, bookingDay, bookings, setBookings, timeSlots, timeSlotId, setTimeSlots, timeSlotStartTime, timeSlotEndTime, updateOnDb, setUpdateOnDb, userName, setUserName, userId, setUserId, booker, inputValue, setInputValue}) => {
  //const [changeBooking, setChangeBooking] = useState(booker.id);
  const handleRemoveBooking = async () =>
  {
    try
    {
      console.log('booker:', booker.id )
      const removeBookingResponse = await fetch("/booking/" + booker.id, { 
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(booker.id)
      });
      setUpdateOnDb(removeBookingResponse);
    }
    catch (error) 
    {
      console.log("error:", error);
    }
  }
  
  const changeRemoveBooking = async () =>
  { 
    

    setInputValue(booker.user.name);
    console.log("inputValue:", inputValue);
    
    //handleRemoveBooking();
    
  }
  
  return (
    <div>
        <button onClick={changeRemoveBooking}>Change booking</button>
        <button onClick={handleRemoveBooking}>Delete booking</button>
        {booker.user.name}
    </div>
  )
}

export default UpdateBookingContext