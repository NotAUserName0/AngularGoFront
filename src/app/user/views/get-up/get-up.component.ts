import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-get-up',
  templateUrl: './get-up.component.html',
  styleUrls: ['./get-up.component.css']
})
export class GetUpComponent implements OnChanges{

  @Input() user:User;
  error:boolean;
  name:boolean;
  grade:boolean;

  usr = new FormGroup({
    name: new FormControl( 'n' ,Validators.required),
    grade: new FormControl( 'n' ,Validators.required)
  });


  constructor(private userService : UserService, private router:Router){}

  ngOnChanges(changes: SimpleChanges): void {
    try{
      this.usr.controls.name.setValue(this.user.name);
      let gr = this.user.grade.toString();
      this.usr.controls.grade.setValue(gr);
    }catch(e : any){

    }
  }

  enviar(){

    if(this.usr.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fill all data!',
        confirmButtonColor: 'Red',
      });
    }else{
      this.userService.modUser(this.user.ID, JSON.stringify(this.usr.value)).subscribe(
        result => {
           console.log(result)
           if(result['success']){
            Swal.fire({
              icon: 'success',
              title: 'Modified!',
              timer: 2000,
              showCancelButton: false,
              showConfirmButton: false
            });
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
        }, (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Same data, change it please!',
            confirmButtonColor: 'Red',
          });

        }
      );
    }
  }








}
