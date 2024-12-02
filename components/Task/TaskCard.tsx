import Image from "next/image"
import { Clock } from 'lucide-react'
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"

interface TaskCardProps {
  title: string
  category: string
  progress: number
  timeLeft: string
  teamMembers: {
    id: number
    name: string
    designation: string
    image: string
  }[]
  imageSrc: string
}

export function TaskCard({ title, category, progress, timeLeft, teamMembers, imageSrc }: TaskCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid md:grid-cols-[240px,1fr] gap-6">
          <Image
            src={imageSrc}
            alt={`${title} Preview`}
            width={240}
            height={160}
            className="rounded-lg object-cover w-full h-40"
          />
          <div className="space-y-4">
            <div>
              <CardTitle className="mb-2">{title}</CardTitle>
              <span className="text-sm text-muted-foreground">{category}</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span className="text-primary">{progress}%</span>
              </div>
              <Progress value={progress} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {timeLeft}
              </div>
              <div className="flex">
                <AnimatedTooltip items={teamMembers} />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

