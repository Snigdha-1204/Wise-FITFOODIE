import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit {
  users:any;

  constructor(private service: UserService) { 
    
  }

  ngOnInit(): void {
    this.service.showAllUsers().subscribe((result)=>{this.users=result;});
  }

}
