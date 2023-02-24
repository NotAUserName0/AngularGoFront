import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './views/add/add.component';
import { DeleteComponent } from './views/delete/delete.component';
import { ShowOneComponent } from './views/show-one/show-one.component';
import { ShowComponent } from './views/show/show.component';
import { UpdateComponent } from './views/update/update.component';

const routes: Routes = [

  {path:'',component: ShowComponent},
  {path:'add',component: AddComponent},
  {path:'delete',component: DeleteComponent},
  {path:'update',component: UpdateComponent},
  {path:'showOne',component: ShowOneComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
