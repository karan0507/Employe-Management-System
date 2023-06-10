import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AddEditTaskComponent } from './add-edit-task/add-edit-task.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [NgxPermissionsGuard],
    
    component: TaskListComponent,
    data: {
      parent: 'Task List',
      isButton: false,
      isHome: false,
      custom_url:'/task-management',
    }
  },
  {
    path: '',
    children: [
      {
        path: 'add-task',
        // redirectTo:'/task-management/add-task',
        // canActivate: [NgxPermissionsGuard],
        component: AddEditTaskComponent,
        data: {
          parent: 'Task List',
          title:'Add Task',
          isButton: false,
          isHome: false,
          custom_url:'/task-management/add-task',
          
        }
      },
      {
        path: 'edit-task',
        // canActivate: [NgxPermissionsGuard],
        redirectTo:'/task-management/edit-task',
        component: AddEditTaskComponent,
        data: {
          parent: 'Task List',
          title:'Edit Task',
          isButton: false,
          isHome: false,
          
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskManagementRoutingModule { }
