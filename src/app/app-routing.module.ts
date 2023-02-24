import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageFoundComponent } from './mainComponents/no-page-found/no-page-found.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [

  {path:'', redirectTo:'user',pathMatch:'full'},
  {path:'user',component:UserComponent,loadChildren:()=>import('./user/user.module').then(res=>res.UserModule)},
  {path:'**', component: NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
