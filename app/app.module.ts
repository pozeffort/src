import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { SignUpPageComponent } from './Components/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { ForgetPasswordPageComponent } from './Components/forget-password-page/forget-password-page.component';



const appRoutes:Routes=[

{path:'',component:LoginPageComponent},

{path:'SignUp',component:SignUpPageComponent},

{path:'ForgetPassword',component:ForgetPasswordPageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpPageComponent,
    LoginPageComponent,
    ForgetPasswordPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
