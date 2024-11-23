export interface NavItemProps {
    icon: string;
    label: string;
    path: string;
    isActive?: boolean;
  }
  
  export type NavItemType = NavItemProps;
  
  export interface HelpCenterProps {
    title: string;
    description: string;
    buttonText: string;
  }