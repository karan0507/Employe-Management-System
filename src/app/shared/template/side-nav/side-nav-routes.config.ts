import { SideNavInterface } from "../../interfaces/side-nav.type";
export const ROUTES: SideNavInterface[] = [
  {
    path: "/dashboard/home",
    title: "Dashboard",
    iconType: "nzIcon",
    iconTheme: "outline",
    icon: "dashboard",
    permission: 'view_dashboard',
    submenu: [],
  },
  {
    path: "/home",
    title: "Voter",
    iconType: "nzIcon",
    iconTheme: "outline",
    icon: "audit",
    permission: '',
    submenu: [],
  },
  {
    path: "/team-management",
    title: "Team Management",
    iconType: "nzIcon",
    iconTheme: "outline",
    icon: "dashboard",
    permission: '',
    submenu: [],
  },
  {
    path: "/task-management",
    title: "Task Management",
    iconType: "nzIcon",
    iconTheme: "outline",
    icon: "dashboard",
    permission: '',
    submenu: [],
  },
  {
    path: "/profile",
    title: "More",
    iconType: "nzIcon",
    iconTheme: "outline",
    icon: "dashboard",
    permission: '',
    submenu: [],
  }
];
