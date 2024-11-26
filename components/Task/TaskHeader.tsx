import { Bell, BellIcon } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SignInButton, useAuth } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'
import { SignOutButton, useUser } from '@clerk/clerk-react'

export function TaskHeader() {
    const { isSignedIn } = useAuth();
    const { user } = useUser();
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Explore Task</h1>
      <div className="flex items-center gap-4">
      </div>
      <div className=" flex items-center gap-2">
        <Button variant="ghost" size="icon" className="w-10 h-10">
          <BellIcon />
        </Button>
        {isSignedIn ? (
          <>
            <UserButton afterSignOutUrl="/" />
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

