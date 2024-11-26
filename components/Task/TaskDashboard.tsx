"use client"

import { TaskHeader } from "@/components/Task/TaskHeader"
import { TaskCard } from "@/components/Task/TaskCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Search } from 'lucide-react'

export function TaskDashboard() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <TaskHeader />

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search Task"
            className="pl-10"
          />
        </div>
        <Select>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="design">UI/UX Design</SelectItem>
            <SelectItem value="development">Development</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort By: Deadline" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="deadline">Sort By: Deadline</SelectItem>
            <SelectItem value="progress">Sort By: Progress</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Time Limit</h2>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <TaskCard
          title="Creating Awesome Mobile Apps"
          category="UI/UX Design"
          progress={90}
          timeLeft="1 Hour"
          teamSize={5}
          imageSrc="/placeholder.svg"
        />
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">New Task</h2>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <TaskCard
          title="Creating Mobile App Design"
          category="UI/UX Design"
          progress={75}
          timeLeft="3 Days Left"
          teamSize={5}
          imageSrc="/placeholder.svg"
        />
      </section>
    </div>
  )
}

