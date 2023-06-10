import { Routes } from '@angular/router';

export const CommonLayout_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    {
        path: 'posts',
        loadChildren: () => import('../../posts/posts.module').then(m => m.PostsModule),
    },
    {
        path: 'profile',
        loadChildren: () => import('../../profile/profile.module').then(m => m.ProfileModule),
    },
    {
        path: 'home',
        loadChildren: () => import('../../home/home.module').then(m => m.HomeModule),
    },
    {
        path: 'voter',
        loadChildren: () => import('../../voter/voter.module').then(m => m.VoterModule),
    },
    {
        path: 'task-management',
        loadChildren: () => import('../../task-management/task-management.module').then(m => m.TaskManagementModule),
    },
    {
        path: 'team-management',
        loadChildren: () => import('../../team/team.module').then(m => m.TeamModule),
    },
];