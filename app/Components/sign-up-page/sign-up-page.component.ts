import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  constructor(private router1:Router ) { }

  ngOnInit() {
  }

signUpSubmit()
{

this.router1.navigate(['']);	


}

oncancel()
{

this.router1.navigate(['']);	

}



}
