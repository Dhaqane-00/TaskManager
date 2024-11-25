import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { ActivityProps } from "./types"

export function Activity({ chartData }: ActivityProps) {
  return (
    <Card className="bg-neutral-100">
      <CardContent className="p-5">
        <div className="flex justify-between items-center">
          <h2 className="text-base font-semibold text-gray-900">Activity</h2>
          <Button variant="ghost" className="text-xs font-medium">
            This Week
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/af86620a83cf3675e2000631a177c0ce2c39297a9124001493f8c84e8da51d71?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be"
              alt=""
              className="ml-2 w-3 h-3"
            />
          </Button>
        </div>
        <div className="relative mt-5 min-h-[130px] px-16 pb-14">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3402a0625957874db384688a23ff4442bd1989026950202c4a0377f5c274744?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd2ae9021a197c179f2f8e748a4b4e1f6bf2a39550ed8476af05ba3b331d4c99?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be"
            alt=""
            className="relative z-10 w-[84px] aspect-[1.79]"
          />
          <div className="relative z-10 mt-3 ml-9 w-4">
            <div className="w-4 h-4 bg-white rounded-full border-4 border-indigo-500 shadow-[0px_4px_4px_rgba(0,0,0,0.1)]" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}