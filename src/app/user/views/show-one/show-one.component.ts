import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-show-one',
  templateUrl: './show-one.component.html',
  styleUrls: ['./show-one.component.css']
})
export class ShowOneComponent {

  user : User;
  data:boolean;
  aux:any;
  errorMsg:any;
  searUsr = new FormGroup({
    user: new FormControl('',Validators.required)
  })

  constructor(private userService : UserService){}

  ngOnInit(): void {

  }

  serUser(){
    console.log(this.searUsr.value.user)
    this.userService.getUser(this.searUsr.value.user).subscribe(
      result => {
        console.log(result)
        this.errorMsg = false;
        this.user = result
        document.getElementById('name').innerHTML = this.user.name;
        document.getElementById('grade').innerHTML = this.user.grade.toString();
      },
      (error) => {
        this.errorMsg = true;
      }

    );
  }

}
