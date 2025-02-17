"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { QRCodeSVG } from "qrcode.react";
import {Calendar, Copy, ExternalLink, MapPin, Share2} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {formatDate} from "@/lib/utils";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  organizer: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard = ({event}:EventCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const eventUrl = `http://localhost:3000/events/${event.id}`;

  const handleCardClick = () => {
    router.push(`/events/${event.id}`);
  };

  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  return (
    <>
      <div
        className="group h-[425px] relative rounded-xl overflow-hidden transition-all duration-500 card-hover cursor-pointer glass-effect min-w-1/4"
        onClick={handleCardClick}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none" />

        <div className="aspect-video relative overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 group-hover:opacity-70 transition-opacity duration-500" />
          <Button
            variant="secondary"
            size="sm"
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 glass-effect hover:text-primary text-white"
            onClick={handleShareClick}
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>

        <div className="p-6 relative z-10">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-white transition-colors duration-300">
              {event.title}
            </h3>
            <ExternalLink className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <p className="text-gray-300 text-md mb-4 line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">
            {event.description}
          </p>

          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 glass-effect px-3 py-1.5 rounded-full border border-primary/10 group-hover:border-primary/20 transition-all duration-300 text-gray-300 group-hover:text-white">
              <Calendar className="w-4 h-4 text-white" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center gap-2 glass-effect px-3 py-1.5 rounded-full border border-primary/10 group-hover:border-primary/20 transition-all duration-300 text-gray-300 group-hover:text-white">
              <MapPin className="w-4 h-4 text-white" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="glass-effect !text-white animate-fade-in border-primary/10">
          <DialogHeader>
            <DialogTitle className="text-white font-semibold">Share Event</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col items-center gap-6 py-4">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <QRCodeSVG
                value={eventUrl}
                size={200}
                level="H"
                bgColor="#ffffff"
                fgColor="#000000"
              />
            </div>

            <div className="flex flex-col items-center gap-4 w-full">
              <p className="text-sm text-gray-300 break-all text-center font-bold">
                <span className={`underline underline-offset-2`}>Event Link</span>: <span className="text-white font-normal">{eventUrl}</span>
              </p>

              <div className="flex gap-3 mt-2">
                <Button
                  asChild
                  variant="secondary"
                  className="animate-slide-up glass-effect text-white hover:text-primary flex"
                  style={{ animationDelay: "0.1s" }}
                >
                  <Link href={`/events/${event.id}`}>
                    View Details
                  </Link>
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    navigator.clipboard.writeText(eventUrl);
                  }}
                  className="animate-slide-up glass-effect text-white hover:text-primary flex"
                  style={{ animationDelay: "0.2s" }}
                >
                  <Copy />
                  Copy Link
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
export default EventCard
