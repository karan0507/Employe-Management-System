import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
    {
        path: 'post-detail/:post-id',
        // canActivate: [NgxPermissionsGuard],
        component: PostDetailComponent,
        data: {
            title: 'Post Detail',
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
