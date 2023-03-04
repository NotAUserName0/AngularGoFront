import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ShowComponent } from './views/show/show.component';
import { AddComponent } from './views/add/add.component';
import { DeleteComponent } from './views/delete/delete.component';
import { UpdateComponent } from './views/update/update.component';
import { ShowOneComponent } from './views/show-one/show-one.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetUpComponent } from './views/get-up/get-up.component';


@NgModule({
  declarations: [
    ShowComponent,
    AddComponent,
    DeleteComponent,
    UpdateComponent,
    ShowOneComponent,
    GetUpComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
