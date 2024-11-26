'use client'

import { Button } from "../ui/button"
import { BellIcon } from "lucide-react"
import { UserButton, SignInButton, SignOutButton, useAuth, useUser } from "@clerk/nextjs"

export function DashboardHeader() {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  return (
    <header className="flex justify-between items-center">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">
          Hi, {isSignedIn ? user?.username || 'there' : 'Guest'}
        </h1>
        <p className="text-sm text-slate-600">Let's finish your task today!</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="w-10 h-10">
          <BellIcon />
        </Button>
        {isSignedIn ? (
          <>
            <UserButton afterSignOutUrl="/" />
            <SignOutButton>
              <Button variant="ghost">Sign Out</Button>
            </SignOutButton>
          </>
        ) : (
          <SignInButton mode="modal">
            <Button variant="outline">Sign In</Button>
          </SignInButton>
        )}
      </div>
    </header>
  )
} 