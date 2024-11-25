export interface NavItemProps {
    icon: string;
    label: string;
    path: string;
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