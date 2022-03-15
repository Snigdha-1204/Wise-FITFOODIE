import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;
  user:any;
  constructor(private router: Router,private service: UserService) {
    this.username="";
    this.password="";
    // this.user =[{id:1,username:'meghana',email:'19wh1a0522@bvrithyderabad.edu.in',password:'meghana@123'},
    //                 {id:2,username:'snigdha',email:'19wh1a1204@bvrithyderabad.edu.in',password:'snigdha@123'},
    //                 {id:3,username:'hanshitha',email:'19wh1a1201@bvrithyderabad.edu.in',password:'hanshitha@123'}
    //               ];
   }

  ngOnInit(): void {
  }
 
  async loginSubmit(loginForm : any){
    await this.service.getUserByEmailAndPassword(loginForm).then((result:any)=>{console.log(result);this.user = result});
    this.service.setUserLoggedIn();
    console.log("Data fetched: ", this.user);
    if(this.user != null){
      this.router.navigate(['sidemenu']);
    }
    else{
      alert('Invalid login');
    }
  }
  // loginSubmit2(loginForm : any){
  //   if(loginForm.username=== 'hr' && loginForm.password === 'hr'){
  //    this.service.setUserLoggedIn();
  //    this.router.navigate(['sidemenu']);
  //   //  alert("login successful");
  //   }
  //   else{
  //     // alert("Invalid");
  //    this.user.forEach((element:any)=>{
  //      console.log(element.username);
  //      this.service.setUserLoggedIn();
  //    if(element.username === this.username){
  //      alert('Welcome to home page..');
  //    }
  //   });
  //   }
  //    }
}