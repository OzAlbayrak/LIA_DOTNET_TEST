using LIA_DOTNET_TEST.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LIA_DOTNET_TEST.Interfaces
{
    public interface IBookingRepository
    {
        public ICollection<Booking> GetAllBookings();
        public ICollection<TimeSlot> GetAllTimeSlots();

        // Add AddBooking
        //public Booking CreateBooking(AddBooking addBooking);
        //public ActionResult UpdateBooking(int bookingId);
        //public ActionResult DeleteBooking(int bookingId);
    }
}
