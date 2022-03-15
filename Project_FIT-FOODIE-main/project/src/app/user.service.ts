import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userLoggedIn : boolean;
  constructor(private httpClient: HttpClient) {
    this.userLoggedIn = false; //initially set to false
   }

   getUserLoggedIn(){
     return this.userLoggedIn; //invoked whenever we need this value
   }
   setUserLoggedIn(){
     this.userLoggedIn=true;//invoked whenever we logged in succesffuly... 
   }
   setUserLoggedOut(){
     this.userLoggedIn=false;//invoked whenever we logged out..
   }

   showAllUsers(){
     return this.httpClient.get('http://localhost:3000/fetch');
   }

   registerUser(user: any){
     return this.httpClient.post('http://localhost:3000/register',user);
   }

   getUserByEmailAndPassword(loginForm: any){
     return this.httpClient.get('http://localhost:3000/login/'+loginForm.username+"/"+loginForm.password).toPromise();
   }

   
  }
