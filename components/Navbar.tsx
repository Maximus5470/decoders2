import React from 'react'
import {auth, signIn, signOut} from "@/auth";
import Link from 'next/link';
import {Button} from './ui/button';
import {CalendarDays, LayoutDashboard, LogIn, LogOut, Plus} from 'lucide-react';

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="flex justify-between items-center px-4 bg-gray-800 text-white">
      <nav className={"w-full"}>
        <div className="flex h-16 items-center px-4">
          <Link href="/" className="text-xl font-extrabold mr-6">
            10x Club
          </Link>

          <div className="flex-1 flex items-center justify-center space-x-4">
            <Button variant={"ghost"} asChild className={"flex items-center space-x-[-5px] mx-0"}>
              <Link href="/events" className="flex items-center space-x-1 hover:text-primary">
                <CalendarDays className="h-4 w-4"/>
                <span>Events</span>
              </Link>
            </Button>

            {session && (
              <>
                <Button variant={"ghost"} asChild className={"flex items-center space-x-[-5px] mx-0"}>
                  <Link href="/dashboard" className="flex items-center space-x-1 hover:text-primary">
                    <LayoutDashboard className="h-4 w-4"/>
                    <span>Dashboard</span>
                  </Link>
                </Button>

                <Button variant={"ghost"} asChild className={"flex items-center space-x-[-5px] mx-0"}>
                  <Link href="/create-event" className="flex items-center space-x-1 hover:text-primary">
                    <Plus className="h-4 w-4"/>
                    <span>Create Event</span>
                  </Link>
                </Button>
              </>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {session && session?.user ? (
              <>
                <span>{session.user.name}</span>
                <form action={async () => {
                  "use server";
                  await signOut({redirectTo: "/"})
                }}>
                  <Button
                    variant="ghost"
                    type={"submit"}
                    className="flex items-center space-x-[-5px] "
                  >
                    <LogOut className="h-4 w-4"/>
                    <span>Sign Out</span>
                  </Button>
                </form>
              </>
            ) : (
              <form action={async () => {
                "use server";
                await signIn("google")
              }}>
                <Button
                  variant="default"
                  type={"submit"}
                  className="flex items-center space-x-2"
                >
                  <LogIn className="h-4 w-4"/>
                  <span>Sign In</span>
                </Button>
              </form>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Navbar