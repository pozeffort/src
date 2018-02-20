import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-forget-password-page',
  templateUrl: './forget-password-page.component.html',
  styleUrls: ['./forget-password-page.component.css']
})
export class ForgetPasswordPageComponent implements OnInit {

  constructor(private router2:Router) { }

  ngOnInit() {
  }

onforgetpagesubmit()
{
	this.router2.navigate(['']);

}

oncancel2()
{

this.router2.navigate(['']);
	
}

}
