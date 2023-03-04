import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-get-up',
  templateUrl: './get-up.component.html',
  styleUrls: ['./get-up.component.css']
})
export class GetUpComponent implements OnChanges{

  @Input() user:User;

  usr = new FormGroup({});


  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
    try{
      console.log(this.user);
      this.usr.addControl('name',new FormControl(this.user.name,Validators.required));
      this.usr.addControl('grade',new FormControl(this.user.grade,Validators.required));
    }catch(e : any){
      console.log("iniciado");
    }
  }

  enviar(){
    console.log(this.usr.value);
  }








}
