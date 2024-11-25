import { Card, CardContent, CardHeader } from "../ui/card"
import { Progress } from "../ui/progress"
import { Button } from "../ui/button"
import { TaskTodayProps } from "./types"

export function TaskToday({
  image,
  title,
  category,
  progress,
  timeLeft,
  teamImages,
  tasks
}: TaskTodayProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-semibold text-gray-900">Task Today</h2>
          <Button variant="ghost" size="icon" className="w-5 h-5 p-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cff07f9b5881ce4b262e97d8bcf088f0ebaa9d8abb0b9332bf9c67c9e823fe33?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be"
              alt="More options"
              className="w-full h-full"
            />
          </Button>
        </div>
        <img
          src={image}
          alt={title}
          className="mt-5 w-full rounded-xl aspect-[2.02] object-cover"
        />
        <div className="mt-5">
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-xs text-slate-600">{category}</p>
        </div>
        <div className="mt-5">
          <div className="flex justify-between text-base">
            <span className="text-gray-900">Progress</span>
            <span className="text-indigo-500">{progress}%</span>
          </div>
          <Progress value={progress} className="mt-2" />
        </div>
        <div className="flex justify-between mt-5 text-base text-gray-900">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/04c3ea235d1eb83e17ce4786dfcbbe95bd84513759119696c4d388ddd7d9dbb6?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be"
              alt=""
              className="w-6 h-6"
            />
            <span>{timeLeft}</span>
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
        <hr className="my-8 border-neutral-100" />
        <div className="flex gap-10 items-center">
          <h4 className="text-base font-semibold text-gray-900">Detail Task</h4>
          <span className="text-xs text-slate-600">{category}</span>
        </div>
        {tasks.map((task) => (
          <div key={task.number} className="flex items-center gap-3 mt-5">
            <span className="flex items-center justify-center w-9 h-9 bg-neutral-100 rounded-xl font-semibold text-sm">
              {task.number}
            </span>
            <p className="text-sm font-medium text-gray-900 leading-5">
              {task.description}
            </p>
          </div>
        ))}
        <Button className="w-full mt-14 bg-indigo-500 text-white">
          Go To Detail
        </Button>
      </CardContent>
    </Card>
  )
}