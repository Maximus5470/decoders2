import {Calendar, MapPin, User} from "lucide-react";
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const Page = async ({params}: { params: Promise<{ id: string }> }) => {
  const events = [
    {
      id: "1",
      title: "Tech Conference 2025",
      description: "Join us for the biggest tech conference of the year",
      date: "2025-06-15",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60",
      organizer: "TechCorp",
      longDescription: "Experience the future of technology at our flagship conference. Network with industry leaders, attend workshops, and discover the latest innovations that are shaping our digital world.",
      schedule: [
        {time: "09:00 AM", activity: "Registration & Breakfast"},
        {time: "10:00 AM", activity: "Keynote Speech"},
        {time: "11:30 AM", activity: "Technical Workshops"},
        {time: "01:00 PM", activity: "Lunch Break"},
        {time: "02:00 PM", activity: "Panel Discussions"},
        {time: "04:00 PM", activity: "Networking Session"},
      ],
    },
    // ... (other events)
  ];
  const id = (await params).id;
  const event = events.find((event) => event.id === id);

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-900 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-red-500">Event Not Found</h1>
          <p className="mt-4 text-gray-400">The event you&#39;re looking for doesn&#39;t exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-12 bg-gray-900 animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-8">
        <div className="absolute inset-0">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"/>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-white animate-slide-up">{event.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-white animate-slide-up" style={{animationDelay: "0.1s"}}>
              <div className="flex items-center gap-2 bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4"/>
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <MapPin className="w-4 h-4"/>
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <User className="w-4 h-4"/>
                <span>{event.organizer}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <Card className="p-6 bg-gray-800 text-white animate-slide-up" style={{animationDelay: "0.2s"}}>
              <h2 className="text-2xl font-semibold mb-4">About This Event</h2>
              <p className="text-gray-400">{event.longDescription}</p>
            </Card>

            <Card className="p-6 bg-gray-800 text-white animate-slide-up" style={{animationDelay: "0.3s"}}>
              <h2 className="text-2xl font-semibold mb-4">Schedule</h2>
              <div className="space-y-4">
                {event.schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <div className="font-medium min-w-[100px]">{item.time}</div>
                    <div className="text-gray-400">{item.activity}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 bg-gray-800 text-white animate-slide-up" style={{animationDelay: "0.4s"}}>
              <h2 className="text-xl font-semibold mb-4">Registration</h2>
              <form className="space-y-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Register Now</Button>
                <p className="text-sm text-gray-400 text-center">
                  Secure your spot at this amazing event!
                </p>
              </form>
            </Card>

            <Card className="p-6 bg-gray-800 text-white animate-slide-up" style={{animationDelay: "0.5s"}}>
              <h2 className="text-xl font-semibold mb-4">Location</h2>
              <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src={`https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-s+555555(${-122.4194},${37.7749})/${-122.4194},${37.7749},12/800x400@2x?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2V5c2g4MW4wMDAwMnJvNm04NjZ2ZDl2In0.example`}
                  alt="Event location map"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-sm text-gray-400">{event.location}</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page;