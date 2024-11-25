import { Card, CardContent, CardHeader } from "../ui/card"

import { MentorCardProps } from "./types"
import { Button } from "../ui/button"

export function MentorCard({
  image,
  name,
  specialty,
  taskCount,
  rating,
  reviews,
  isFollowed
}: MentorCardProps) {
  return (
    <Card className="w-[328px] min-w-[240px]">
      <CardContent className="p-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img
              src={image}
              alt={`${name}'s profile`}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="text-base font-semibold text-gray-900">{name}</h3>
              <p className="text-xs text-slate-600">{specialty}</p>
            </div>
          </div>
          <Button 
            variant={isFollowed ? "ghost" : "link"}
            className={isFollowed ? "text-slate-600" : "text-indigo-500"}
          >
            {isFollowed ? 'Followed' : '+ Follow'}
          </Button>
        </div>
        <div className="flex justify-between mt-5 text-sm text-gray-900">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd78a240b748f0e6d74741b4af86fdedb4e2780f845d0fa70e16fbe5171d41c4?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be"
              alt=""
              className="w-6 h-6"
            />
            <span>{taskCount} Task</span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd33bf96843575f71157d73204bff244190c31065dcc17b1f45c0cfdafb5d15f?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be"
              alt=""
              className="w-6 h-6 rounded-sm"
            />
            <span>{rating} ({reviews} Reviews)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}