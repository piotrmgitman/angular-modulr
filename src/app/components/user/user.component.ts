import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers:[UserService]
})
export class UserComponent implements OnInit {
  public username:string;

  constructor(private userService:UserService) {
    this.username = this.userService.getUsername("Jack Reacher");
   }

  ngOnInit() {
  }

}
