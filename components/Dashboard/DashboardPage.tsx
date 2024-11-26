'use client'

import { MentorCard } from "./MentorCard"
import { TaskCard } from "./TaskCard"
import { TaskToday } from "./TaskToday"
import { Calendar } from "./Calendar"
import { Activity } from "./Activity"
import { RunningTask } from "./RunningTask"
import { Button } from "../ui/button"
import { BellIcon } from "lucide-react"
import { UserButton, SignInButton, SignOutButton, useAuth, useUser } from "@clerk/nextjs"
import { DashboardHeader } from "./DashboardHeader"

export default function DashboardPage() {
  const mentors = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ab25d972f2bea071d3f5693865104e55b02ea1e0e7b10723c1c96b5f1852395?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be",
      name: "Curious George",
      specialty: "UI UX Design",
      taskCount: 40,
      rating: 4.7,
      reviews: 750,
      isFollowed: false
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a95053512abceb812ae3ffc30a7396f835444bb6bfc1c89db56e1e2b99fef7b?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be",
      name: "Abraham Lincoln",
      specialty: "3D Design", 
      taskCount: 32,
      rating: 4.9,
      reviews: 510,
      isFollowed: true
    }
  ]

  const upcomingTasks = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1d73f00387b43f442f35bf4e2d8f2d462c7a2ba290bcfb79cdc56e4ff7180e66?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be",
      title: "Creating Mobile App Design",
      category: "UI UX Design",
      progress: 75,
      daysLeft: 3,
      teamImages: ["https://cdn.builder.io/api/v1/image/assets/TEMP/df626edf83390850fe700d18eb38b461d70c91584824b9a16c29d913b05eec96?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be"]
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e5e4c3e63efe0d7d7dec600ad596dbfda370e4a482d308eb86c49c332bd793f?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be",
      title: "Creating Perfect Website",
      category: "Web Developer",
      progress: 85,
      daysLeft: 4,
      teamImages: ["https://cdn.builder.io/api/v1/image/assets/TEMP/8004274971b3c838d6a734aa44316f0ed2afcf2d3810d2aa20cc98198458650e?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be"]
    }
  ]

  const taskToday = {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9dca9dae67f073619bebb0501603125aff53c19bbf3062f1fa4cd54bf4aee322?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be",
    title: "Creating Awesome Mobile Apps",
    category: "UI UX Designer",
    progress: 90,
    timeLeft: "1 Hour",
    teamImages: ["https://cdn.builder.io/api/v1/image/assets/TEMP/796b930ce09a373307a17b6137d444da5fed4776e76c5067b70f69c509970860?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be"],
    tasks: [
      { number: 1, description: "Understanding the tools in Figma" },
      { number: 2, description: "Understand the basics of making designs" },
      { number: 3, description: "Design a mobile application with figma" }
    ]
  }

  return (
    <main className="h-screen overflow-y-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main Content - Left Side */}
        <div className="lg:col-span-2 space-y-4">
          <DashboardHeader />
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <RunningTask currentTasks={65} totalTasks={100} />
            </div>
            <div className="md:col-span-2">
              <Activity
                chartData={{
                  labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
                  values: [30, 40, 45, 50, 45]
                }}
              />
            </div>
          </div>

          {/* Monthly Mentors */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Monthly Mentors</h2>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7d3f2383d8db9611a9566be2d7b0c23590c4e3eace1c6eda5d60063255db3c5?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be"
                    alt="Previous"
                    className="w-4 h-4"
                  />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/12c38de7cc915e855bcd2b9220fd6e066150c558613982457d974d8f56cc3bf3?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be"
                    alt="Next"
                    className="w-4 h-4"
                  />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mentors.map((mentor, index) => (
                <MentorCard key={index} {...mentor} />
              ))}
            </div>
          </section>

          {/* Upcoming Tasks */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Upcoming Task</h2>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7d3f2383d8db9611a9566be2d7b0c23590c4e3eace1c6eda5d60063255db3c5?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be"
                    alt="Previous"
                    className="w-4 h-4"
                  />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/12c38de7cc915e855bcd2b9220fd6e066150c558613982457d974d8f56cc3bf3?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be"
                    alt="Next"
                    className="w-4 h-4"
                  />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {upcomingTasks.map((task, index) => (
                <TaskCard key={index} {...task} />
              ))}
            </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <aside className="bg-neutral-100 p-4 rounded-lg">
          <Calendar
            currentMonth="July"
            currentYear={2022}
            selectedDate={10}
          />
          <div className="mt-4">
            <TaskToday {...taskToday} />
          </div>
        </aside>
      </div>
    </main>
  )
}