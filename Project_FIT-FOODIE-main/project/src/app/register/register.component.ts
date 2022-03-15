import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:any;
  user:any;
  uname: string | undefined;
  UserId: string | undefined;
  email: string | undefined;
  password: string | undefined;

  constructor(private httpClient: HttpClient,private router:Router,private service:UserService) { 
    this.user = {_id:'',uname:'',email:'',password:''};
  }

  ngOnInit(): void {
    console.log('Data received...');
  }
  registerUser(){
    this.service.registerUser(this.user).subscribe();
    this.router.navigate(['login']);
  }
}
