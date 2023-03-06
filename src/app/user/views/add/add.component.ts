import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  validUser:boolean;
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
      this.validUser = true;
    }else{
      this.validUser = false;
      console.log(JSON.stringify(this.addUser.value));
      this.userService.pushUser(JSON.stringify(this.addUser.value)).subscribe(
        result => {
          //console.log(result)
          if(result['success'] == "true"){
            this.added = true;
            this.router.navigate(['']);
          }else{
            if(result['no_data'] == "true"){
              this.error = true;
              if(result['name'] == "false"){
                this.name = true;
              }
              if(result['grade'] <= 0){
                this.grade = true;
              }
            }
          }
        }
      );
    }
  }

}
