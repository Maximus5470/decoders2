import EventCard from "@/components/EventCard";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {CalendarDays} from "lucide-react";

export default function Home() {
  const featuredEvents = [
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
  ];

  return (
    <div className="min-h-[700px] bg-primary">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1800&auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary/50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-gray-300">
            Create Unforgettable Events
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Your all-in-one platform for managing and discovering amazing events
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/events">
              <Button size="lg" className="flex items-center gap-2 animate-float">
                <CalendarDays className="w-5 h-5" />
                Explore Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-primary/100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-white font-bold mb-8 animate-slide-up">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event, index) => (
              <div key={event.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
