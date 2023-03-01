import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{
  users:User[];
  data:boolean;
  aux:any;
  errorMsg:any;

  constructor(private userService : UserService){}

  ngOnInit():void{
    this.getUsers();
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

}
