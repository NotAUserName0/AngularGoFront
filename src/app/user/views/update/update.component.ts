import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  users : User[];
  aux:any;
  data:boolean;
  errorMsg:any;
  name:boolean;
  grade:boolean;
  userID:any;

  constructor(private userService : UserService, private router : Router){}

  ngOnInit():void{
    this.getUsers()
  }

  getUsers(){

    this.userService.getPosts().subscribe(
      result => {

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
        console.log(error);
        this.errorMsg = error;
      }

    )
  }

  guardarDato(user:User){
    this.userID = user;
    document.getElementById('up').style.visibility='visible';
  }

}
