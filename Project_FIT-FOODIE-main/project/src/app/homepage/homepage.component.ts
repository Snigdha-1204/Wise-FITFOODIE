import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Element } from '@angular/compiler';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  user:any;
  username: string;
  password: string;
  imageUrl: string;
  imageUrl2: string;
  imageUrl3: string;
  logo:string;

  constructor(private service:UserService,private router: Router) {
    this.username='';
    this.password='';
    this.user=[{}];
    this.imageUrl='/assets/Images/diet.jpg'
    this.imageUrl2='/assets/Images/yoga.jpg'
    this.imageUrl3='/assets/Images/fitness.jpg'
    this.logo = '/assets/Images/logo.JPG'
   }

  ngOnInit(): void {
  }
  async loginSubmit(loginForm:any){
    if(loginForm.username==='hr' && loginForm.password==='hr'){
      this.service.setUserLoggedIn();
      this.router.navigate(['login']);
    }
    else{
      this.user.forEach((element:any)=> {
        console.log(element.username);
        this.service.setUserLoggedIn();
        if(element.username===this.username){
          alert('Welcome to home page');
        }
        
      });
    }
  }
}
