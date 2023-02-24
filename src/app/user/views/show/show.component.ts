import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  users : User[];
  data:boolean;
  aux:any;

  constructor(private userService : UserService){}

  ngOnInit(): void {
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

      }
    )
  }

}
