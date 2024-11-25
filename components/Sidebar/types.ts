export interface NavItemProps {
    icon: string;
    label: string;
    path: string;
    onClick?: () => void;
  }
  
  export interface SidebarProps {
    onNavigate?: (path: string) => void;
  }
  
  export interface HelpCenterProps {
    title: string;
    description: string;
    buttonText: string;
    onHelpClick?: () => void;
  }