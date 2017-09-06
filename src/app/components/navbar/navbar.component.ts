import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers:[UserService]
})
export class NavbarComponent implements OnInit {
  public username:string;

  constructor(private userService:UserService) { 
    this.username = this.userService.getUsername("Jack Reacher");
  }

  ngOnInit() {
  }

}
