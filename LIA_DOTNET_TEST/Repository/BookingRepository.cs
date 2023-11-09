using LIA_DOTNET_TEST.Database;
using LIA_DOTNET_TEST.Interfaces;
using LIA_DOTNET_TEST.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;

namespace LIA_DOTNET_TEST.Repository
{
    public class BookingRepository : IBookingRepository
    {
        public void Seed()
        {
            using Context context = new();

            ICollection<TimeSlot> timeSlots = ProduceTimeSlots();

            TimeSlot timeSlot = timeSlots.FirstOrDefault();

            ICollection<Booking> bookings = ProduceBookings(timeSlot);


            context.TimeSlots.AddRange(timeSlots);
            context.Bookings.AddRange(bookings);

            context.SaveChanges();
        }

        public ICollection<Booking> GetAllBookings()
        {
            using Context context = new();
            return context.Bookings.Include(ts => ts.User).Include(ts => ts.TimeSlot).ToList();
        }

        public ICollection<TimeSlot> GetAllTimeSlots()
        {
            using Context context = new();
            return context.TimeSlots.ToList();
        }


        private static ICollection<TimeSlot> ProduceTimeSlots()
        {
            return new List<TimeSlot>()
                {
                    new TimeSlot()
                    {
                         StartTime = new TimeSpan(9, 0,0),
                         EndTime = new TimeSpan(12, 0,0),
                    },
                    new TimeSlot()
                    {
                         StartTime = new TimeSpan(12, 0,0),
                         EndTime = new TimeSpan(14, 0,0),
                    },
                    new TimeSlot()
                    {
                         StartTime = new TimeSpan(14, 0,0),
                         EndTime = new TimeSpan(16, 0,0),
                    },
                    new TimeSlot()
                    {
                         StartTime = new TimeSpan(16, 0,0),
                         EndTime = new TimeSpan(20, 0,0),
                    },
                   
                };
        }

        private static ICollection<Booking> ProduceBookings(TimeSlot timeSlot)
        {
            return new List<Booking>()
            {
                new Booking()
                {
                    Day= 1,
                    User = new User()
                    {
                        Name = "Sean Connery"
                    },
                    TimeSlot = timeSlot
                }
            };
        }

        public static Booking CreateBooking(AddBooking addBooking) 
        { 
            using Context context = new();
			var newBooking = new Booking()
            {
                Day = addBooking.Day,
                TimeSlot = context.TimeSlots.FirstOrDefault(x => x.Id == addBooking.TimeSlot.Id),
				User = (context.User.FirstOrDefault(x => x.Name == addBooking.User.Name) != null) 
				     ? context.User.FirstOrDefault(x => x.Name == addBooking.User.Name) 
				     : new User() { Name = addBooking.User.Name }
			};
            try 
            {
                context.Bookings.Add(newBooking);
                context.SaveChanges();
                return newBooking;
            }
            catch (Exception ex) { }

            return null!;
		}
        public static ActionResult UpdateBooking(Booking booking) 
        {
            using Context context = new();
            var updateBooking = context.Bookings.Find(booking.Id);
            if (updateBooking != null) 
            {
                updateBooking.TimeSlot = context.TimeSlots.FirstOrDefault(x => x.Id == booking.TimeSlot.Id);
                updateBooking.Day = booking.Day;
                updateBooking.User = context.User.FirstOrDefault(x => x.Name == booking.User.Name);
            }
            try 
            { 
                context.Entry(updateBooking!).State = EntityState.Modified;
                context.SaveChanges();
                return new OkResult();
            }
            catch (Exception ex) { }
			return null!;
		}

        public static ActionResult DeleteBooking(int bookingId) 
        {
            try 
            {
                using Context context = new();
                var selectedBooking = context.Bookings.FirstOrDefault(x => x.Id == bookingId);
                context.Bookings.Remove(selectedBooking!);
                context.SaveChanges();
                return new OkResult();
            }
            catch (Exception ex) { }

			return null!;
		}
	}
}
