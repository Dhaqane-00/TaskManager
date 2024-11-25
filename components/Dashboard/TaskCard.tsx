import { Card, CardContent } from "../ui/card"
import { Progress } from "../ui/progress"
import { TaskCardProps } from "./types"

export function TaskCard({
  image,
  title,
  category,
  progress,
  daysLeft,
  teamImages
}: TaskCardProps) {
  return (
    <Card className="w-[328px] min-w-[240px]">
      <CardContent className="p-6">
        <img
          src={image}
          alt={title}
          className="w-full rounded-xl aspect-[2.54] object-cover"
        />
        <div className="mt-4">
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          <p className="text-xs text-slate-600 mt-1">{category}</p>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-base">
            <span className="text-gray-900">Progress</span>
            <span className="text-indigo-500">{progress}%</span>
          </div>
          <Progress value={progress} className="mt-2" />
        </div>
        <div className="flex justify-between mt-4 text-base text-gray-900">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/db9787935072b5a1b332a4e42a34776ea03b0bd3d18108d3b9e302694f4195b3?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be"
              alt=""
              className="w-6 h-6"
            />
            <span>{daysLeft} Days Left</span>
          </div>
          <div className="flex -space-x-2">
            {teamImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}