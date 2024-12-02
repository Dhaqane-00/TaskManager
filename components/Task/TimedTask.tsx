'use client'

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

interface TaskProps {
  task: {
    id: number
    title: string
    deadline: Date
    priority: string
    description: string
  }
}

export function TimedTask({ task }: TaskProps) {
  const [timeLeft, setTimeLeft] = useState<string>("")

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = task.deadline.getTime() - now

      const hours = Math.floor(distance / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`)

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft("EXPIRED")
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [task.deadline])

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'low':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Card className="w-[300px] p-4 flex flex-col gap-2">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold">{task.title}</h3>
        <Badge className={getPriorityColor(task.priority)}>
          {task.priority}
        </Badge>
      </div>
      <p className="text-sm text-gray-600">{task.description}</p>
      <div className="mt-2">
        <p className="text-sm font-medium">Time Remaining:</p>
        <p className={`text-lg font-bold ${timeLeft === "EXPIRED" ? "text-red-600" : "text-blue-600"}`}>
          {timeLeft}
        </p>
      </div>
    </Card>
  )
} 