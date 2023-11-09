import React, { useEffect } from 'react'

const AddBookingContext = ({bookingDayId, bookingDay, bookings, setBookings, timeSlots, timeSlotId, setTimeSlots, timeSlotStartTime, timeSlotEndTime, updateOnDb, setUpdateOnDb, userName, setUserName, userId, setUserId, booker, inputValue, setInputValue}) => {
 
  const handleAddBooking = async (e) =>
  {
    console.log("inputValue-Add:", inputValue);
    console.log("userName-Add:", userName);
    if(userName !== ""){
      
      e.preventDefault();
      const formData = {
        day: bookingDayId,
        timeSlot: {
          id: timeSlotId,
          startTime: timeSlotStartTime,
          endTime: timeSlotEndTime,
        },
        user: {
          name: inputValue === "" ? userName : inputValue,
        }
      };
      
      try
      {
        const addBookingResponse = await fetch("/booking", { 
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
        setUpdateOnDb(addBookingResponse);
        console.log('formData:', formData )
      }
      catch (error) 
      {
        console.log("error:", error);
      }
      setUserName("");
    }
  }
  
  
  
  return (
    <div>
      {inputValue}
      <form>
        <button onClick={handleAddBooking}>Add booking</button> 
        <input type="text" onChange={(e) => setUserName(e.target.value)}/>
      </form>
    </div>
  )
}

export default AddBookingContext