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
      parent: 'Task',
      title: 'Task List',
      isButton: false,
      isHome: false,
      custom_url:'/task-management',
    }
  },
  {
    path: '',
    data:{
      parent: 'Task',
      title: 'Task List',
      custom_url:'/task-management',

    },
    children: [
      {
        path: 'add-task',
        // redirectTo:'/task-management/add-task',
        // canActivate: [NgxPermissionsGuard],
        component: AddEditTaskComponent,
        data: {
          parent: 'Task',
          title:'Add Task',
          isButton: false,
          isHome: false,
          custom_url:'/task-management/add-task',
          
        }
      },
      {
        path: 'edit-task',
        // canActivate: [NgxPermissionsGuard],
        
        component: AddEditTaskComponent,
        data: {
          parent: 'Task',
          title:'Edit Task',
          isButton: false,
          isHome: false,
          custom_url:'/task-management/edit-task',
          
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
