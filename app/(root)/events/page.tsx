import EventCard from '@/components/EventCard';
import React from 'react'

const Page = () => {
  const allEvents = [
    {
      id: "1",
      title: "Tech Conference 2025",
      description: "Join us for the biggest tech conference of the year",
      date: "2025-06-15",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60",
      organizer: "TechCorp",
    },
    {
      id: "2",
      title: "Music Festival",
      description: "A three-day music extravaganza featuring top artists",
      date: "2025-07-20",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop&q=60",
      organizer: "Festival Productions",
    },
    {
      id: "3",
      title: "Food & Wine Expo",
      description: "Experience the finest cuisines and wines from around the world",
      date: "2025-08-10",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop&q=60",
      organizer: "Culinary Arts Association",
    },
    {
      id: "4",
      title: "Startup Summit",
      description: "Connect with entrepreneurs and investors",
      date: "2025-09-05",
      location: "Boston, MA",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=60",
      organizer: "Startup Network",
    },
    {
      id: "5",
      title: "Art Exhibition",
      description: "Contemporary art showcase featuring international artists",
      date: "2025-10-15",
      location: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&auto=format&fit=crop&q=60",
      organizer: "Art Gallery International",
    },
  ];

  return (
    <section className="min-h-screen bg-primary py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold text-white">All Events</h1>
            <p className="text-muted-foreground mt-2">
              Discover and join amazing events happening around you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allEvents.map((event) => (
              <EventCard key={event.id} event={event}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Page
