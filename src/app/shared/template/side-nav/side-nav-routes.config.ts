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
  }
];
