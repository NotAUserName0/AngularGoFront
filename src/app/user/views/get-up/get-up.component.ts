import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-get-up',
  templateUrl: './get-up.component.html',
  styleUrls: ['./get-up.component.css']
})
export class GetUpComponent implements OnChanges{

  @Input() user:User;
  invalid:boolean;
  error:boolean;
  name:boolean;
  grade:boolean;

  usr = new FormGroup({
    name: new FormControl( '' ,Validators.required),
    grade: new FormControl( '' ,Validators.required)
  });


  constructor(private userService : UserService, private router:Router){}

  ngOnChanges(changes: SimpleChanges): void {
    try{
      //console.log(this.user);
      this.usr.controls.name.setValue(this.user.name);
      let gr = this.user.grade.toString();
      this.usr.controls.grade.setValue(gr);
    }catch(e : any){
      console.log(e);
    }
  }

  enviar(){
    //console.log(JSON.stringify(this.usr.value));
    if(this.usr.invalid){
      this.invalid = true;
    }else{
      this.userService.modUser(this.user.ID, JSON.stringify(this.usr.value)).subscribe(
        result => {
           console.log(result)
           if(result['success']){
            alert("Modificado!");
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
