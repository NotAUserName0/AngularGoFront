import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  added:boolean;
  error:boolean;
  name:boolean;
  grade:boolean;

  constructor(private userService : UserService, private router:Router){}

  addUser = new FormGroup({
    name : new FormControl( '' ,Validators.required),
    grade : new FormControl( '' ,Validators.required)
  })

  userAdd(){
    if(this.addUser.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You didn´t complete the form!',
        confirmButtonColor: 'Red',
      });
    }else{
      this.userService.pushUser(JSON.stringify(this.addUser.value)).subscribe(
        result => {
          if(result['success'] === "true"){
            this.added = true;
            Swal.fire({
              icon: 'success',
              title: 'Registrado!',
              timer: 2000,
              showCancelButton: false,
              showConfirmButton: false
            });
            this.router.navigate(['']);
          }else{
            if(result['no_data'] == "true"){ //error from server when not all data arrived
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Verify data!',
              });
            }
          }
        }, (error) => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Nothing added!',
          });
        }
      );
    }
  }


  main(){
    console.log("change");
  }

}



