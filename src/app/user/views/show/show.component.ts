import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
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
        if(this.aux == 'true'){
          this.data = true
          Swal.fire({
            icon: 'question',
            title: 'Oops...',
            text: 'Nothing to see here!',
          });
        }else{
          this.users = result
        }

      }, (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error,
          confirmButtonColor: 'Red',
        });
      }

    )
  }

}
