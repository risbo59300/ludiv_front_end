import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth: any;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.isAuth$.subscribe(
      (bool: boolean)=>{
        this.isAuth = bool;
      }
    )
  }

  logout(){
    this.authService.logout();
  }

}
