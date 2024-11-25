export interface MentorCardProps {
    image: string;
    name: string;
    specialty: string;
    taskCount: number;
    rating: number;
    reviews: number;
    isFollowed?: boolean;
  }
  
  export interface TaskCardProps {
    image: string;
    title: string;
    category: string;
    progress: number;
    daysLeft: number;
    teamImages: string[];
  }
  
  export interface TaskTodayProps {
    image: string;
    title: string;
    category: string;
    progress: number;
    timeLeft: string;
    teamImages: string[];
    tasks: Array<{
      number: number;
      description: string;
    }>;
  }
  
  export interface CalendarProps {
    currentMonth: string;
    currentYear: number;
    selectedDate: number;
  }
  
  export interface ActivityProps {
    chartData: {
      labels: string[];
      values: number[];
    };
  }
  
  export interface RunningTaskProps {
    currentTasks: number;
    totalTasks: number;
  }