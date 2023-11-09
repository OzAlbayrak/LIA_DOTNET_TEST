using LIA_DOTNET_TEST.Data;
using LIA_DOTNET_TEST.Interfaces;
using LIA_DOTNET_TEST.Models;
using LIA_DOTNET_TEST.Repository;
using Microsoft.AspNetCore.Mvc;

namespace LIA_DOTNET_TEST.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BookingController : ControllerBase
    {

        readonly IBookingRepository _bookingRepository;

        public BookingController(IBookingRepository bookingRepository)
        {
            _bookingRepository = bookingRepository;
        }

        [HttpGet]
        public ActionResult<ICollection<Booking>> GetAll()
        {
            try
            {
                ICollection<Booking> bookings = _bookingRepository.GetAllBookings();

                return Ok(bookings);
            }
            catch (Exception exception)
            {

                return BadRequest(new { exception.Message });
            }

        }


        [HttpGet("timeslots")]
        public ActionResult<ICollection<TimeSlot>> GetTimeSlots()
        {
            try
            {
                ICollection<TimeSlot> timeSlots = _bookingRepository.GetAllTimeSlots();

                return Ok(timeSlots);
            }
            catch (Exception exception)
            {

                return BadRequest(new { exception.Message });
            }

        }

		[HttpPost]
		public ActionResult<Booking> CreateBooking(AddBooking addBooking)
		{
			try
			{
				var newBooking = BookingRepository.CreateBooking(addBooking);

				return Ok(newBooking);
			}
			catch (Exception exception)
			{

				return BadRequest(new { exception.Message });
			}

		}

		[HttpPut]
		public ActionResult<Booking> UpdateBooking(Booking updateBooking)
		{
			try
			{
				var updatedBooking = BookingRepository.UpdateBooking(updateBooking);

				return Ok(updatedBooking);
			}
			catch (Exception exception)
			{

				return BadRequest(new { exception.Message });
			}

		}

		[HttpDelete("{Id}")]
		public ActionResult DeleteBooking(int id)
		{
			try
			{
				var deletedBooking = BookingRepository.DeleteBooking(id);

				return Ok(deletedBooking);
			}
			catch (Exception exception)
			{

				return BadRequest(new { exception.Message });
			}

		}
	}
}