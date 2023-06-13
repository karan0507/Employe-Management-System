import { SideNavInterface } from "../../interfaces/side-nav.type";
export const ROUTES: SideNavInterface[] = [
  // {
  //   path: "/dashboard/home",
  //   title: "Dashboard",
  //   iconType: "nzIcon",
  //   iconTheme: "outline",
  //   icon: "dashboard",
  //   permission: 'view_dashboard',
  //   submenu: [],
  // },
  {
    path: "/voter",
    title: "Voter",
    iconType: "nzIcon",
    iconTheme: "outline",
    icon: "user-add",
    permission: '',
    submenu: [],
  },
  {
    path: "/team-management",
    title: "Team Management",
    iconType: "nzIcon",
    iconTheme: "outline",
    icon: "team",
    permission: '',
    submenu: [],
  },
  {
    path: "/task-management",
    title: "Task Management",
    iconType: "nzIcon",
    iconTheme: "outline",
    icon: "solution",
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
