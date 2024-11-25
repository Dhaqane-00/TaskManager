export interface NavItemProps {
    icon: string;
    label: string;
    isActive?: boolean;
    onClick?: () => void;
    path?: string;
  }
  
  export interface SidebarProps {
    onNavigate?: (path: string) => void;
    activeItem?: string;
  }
  
  export interface HelpCenterProps {
    title: string;
    description: string;
    buttonText: string;
    onHelpClick?: () => void;
  }