import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { __values } from 'tslib';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{
  users:User[];
  data:boolean = false;
  aux:any;
  errorMsg:any;

  constructor(private userService : UserService, private router:Router){}

  delUsr = new FormGroup({
    user : new FormControl('',Validators.required)
  })

  ngOnInit():void{
    this.getUsers();
  }

  getUsers(){

    this.userService.getPosts().subscribe(
      result => {
        //console.log(result['no_data'])
        this.aux = result['no_data']
        //console.log(this.aux)
        if(this.aux == 'true'){
          //console.log("No data")
          this.data = true
        }else{
          //console.log(result)
          this.users = result
        }

      }, (error) => {
        //console.log(error);
        this.errorMsg = error;
      }

    )
  }

  delUser(){
    //console.log(this.delUsr.valid);
  if(this.delUsr.valid){
    this.userService.delUser(this.delUsr.value.user['ID']).subscribe(
      result => {
        if(result.success){
          alert("Eliminado: "+this.delUsr.value.user['ID'] + ", Nombre" + this.delUsr.value.user['name'])
          this.router.navigate(['']);
        }
      }
      , (error) =>{
        //console.log(error);
        alert("Datos invalidos");
      }
      );
  }else{
    alert("Selecciona una opcion valida")
  }

  }

}
