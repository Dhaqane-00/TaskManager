import { Bell } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function TaskHeader() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Explore Task</h1>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
        </Button>
        <Image
          src="/placeholder.svg"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </header>
  )
}

