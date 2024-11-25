import { Card, CardContent } from "../ui/card"
import { RunningTaskProps } from "./types"

export function RunningTask({
  currentTasks,
  totalTasks
}: RunningTaskProps) {
  return (
    <Card className="bg-gray-900">
      <CardContent className="p-5">
        <h2 className="text-base font-semibold text-white">Running Task</h2>
        <div className="mt-4 text-3xl font-semibold text-white">
          {currentTasks}
        </div>
        <div className="flex gap-5 mt-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/720683b91e16c2241f6630241a0516d345a5c72380ffac6f373ed90c24e44295?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be"
            alt=""
            className="w-[68px] aspect-square"
          />
          <div>
            <div className="text-xl font-semibold text-white">
              {totalTasks}
            </div>
            <div className="mt-1 text-sm font-medium text-slate-400">
              Task
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}