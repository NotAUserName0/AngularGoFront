import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-one',
  templateUrl: './show-one.component.html',
  styleUrls: ['./show-one.component.css']
})
export class ShowOneComponent {

  user : User;
  data:boolean;
  aux:any;

  searUsr = new FormGroup({
    user: new FormControl('',Validators.required)
  })

  constructor(private userService : UserService){}

  ngOnInit(): void {

  }

  serUser(){

    if(this.searUsr.valid){
      this.userService.getUser(this.searUsr.value.user).subscribe(
        result => {
          console.log(result)
          this.user = result

          Swal.fire({
            icon: 'success',
            title: 'Found it!',
            html: '<p> User: '+this.user.name +' <br> Grade: '+this.user.grade+'</p>',
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'ID does not exist!',
          });
        }

      );
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter some ID!',
      });
    }

  }

}
