import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { CalendarProps } from "./types"

export function Calendar({
  currentMonth,
  currentYear,
  selectedDate
}: CalendarProps) {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

  return (
    <Card>
      <CardContent className="px-5 pt-6 pb-3.5 text-center">
        <div className="flex justify-between items-center text-sm font-semibold text-gray-900">
          <Button variant="ghost" size="icon" className="w-5 h-5 p-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/65f7f73e99ed93fa4f23148c41ffd66ad79c2a76eebfd921d72054621c288c02?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be"
              alt="Previous month"
              className="w-full h-full"
            />
          </Button>
          <span>{currentMonth} {currentYear}</span>
          <Button variant="ghost" size="icon" className="w-5 h-5 p-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6b0d362d1f5448a276069f30250d1d755937255605994cd6d221d3069527aec?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be"
              alt="Next month"
              className="w-full h-full"
            />
          </Button>
        </div>
        <div className="flex mt-8 text-xs font-medium">
          <div className="flex flex-1 gap-5">
            {days.map((day, index) => (
              <div key={index} className="w-8 text-center">
                <div className="text-gray-900">{day}</div>
                <div
                  className={`mt-3 h-8 rounded-full flex items-center justify-center
                    ${index === 4 ? 'bg-indigo-500 text-white font-semibold' : 'bg-neutral-100 text-gray-900'}`}
                >
                  {selectedDate + index}
                </div>
              </div>
            ))}
          </div>
          <div className="w-10 bg-gray-900 rounded-3xl h-[72px]" />
        </div>
      </CardContent>
    </Card>
  )
}