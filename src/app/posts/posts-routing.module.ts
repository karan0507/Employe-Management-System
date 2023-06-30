import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
    {
        path: 'post-detail',
        // canActivate: [NgxPermissionsGuard],
        component: PostDetailComponent,
        data: {
            parent: 'Dashboard',
            title:'Post Detail',
            home:{isVisible:true, url:'/dashboard/home'}
        }
    },
    // {
    //     path: 'commounication-history',
    //     // canActivate: [NgxPermissionsGuard],
    //     component: CommunicationHistoryComponent,
    //     data: {
    //         parent: 'Commounication History ',
    //         isButton:true,
    //         url:'/profile',
    //     }
    // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
