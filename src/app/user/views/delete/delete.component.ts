import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
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
        this.aux = result['no_data']
        if(this.aux == 'true'){
          this.data = true
        }else{
          this.users = result
        }

      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error getting data!',
        });
      })
  }

  delUser(){
  if(this.delUsr.valid){
    this.userService.delUser(this.delUsr.value.user['ID']).subscribe(
      result => {
        if(result.success){
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            timer: 2000,
            showCancelButton: false,
            showConfirmButton: false
          });
          this.router.navigate(['']);
        }
      }
      , (error) =>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Verify data!',
          confirmButtonColor: 'Red',
        });
      }
      );
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Not a valid option!',
      confirmButtonColor: 'Red',
    });
  }

  }

}
