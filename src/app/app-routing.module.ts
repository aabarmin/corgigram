import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorgiComponent } from './corgi/corgi.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full' 
  },
  {
    path: 'corgis',
    component: CorgiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
