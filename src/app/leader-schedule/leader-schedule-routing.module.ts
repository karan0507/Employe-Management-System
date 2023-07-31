import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderTaskListComponent } from './leader-task-list/leader-task-list.component';
import { AddLeaderTaskComponent } from './add-leader-task/add-leader-task.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [NgxPermissionsGuard],
    
    component: LeaderTaskListComponent,
    data: {
      parent: 'Leader Schedule',
      title: 'Leader Schedule List',
      isButton: false,
      isHome: false,
      custom_url:'/leader-schedule',
    }
  },
  {
    path: '',
    data:{
      parent: 'Leader Schedule',
      custom_url:'/leader-schedule',
    },
    children: [
      {
        path: 'add-leader-task',
        // redirectTo:'/task-management/add-task',
        // canActivate: [NgxPermissionsGuard],
        component: AddLeaderTaskComponent,
        data: {
          parent: 'Leader Schedule',
          title:'Add Leader Task',
          isButton: false,
          isHome: false,
          custom_url:'/leader-schedule/add-leader-task',
          
        }
      },
      // {
      //   path: 'edit-task',
      //   component: AddEditTaskComponent,
      //   data: {
      //     parent: 'Task',
      //     title:'Edit Task',
      //     isButton: false,
      //     isHome: false,
      //     custom_url:'/task-management/edit-task',
          
      //   }
      // },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderScheduleRoutingModule { }
