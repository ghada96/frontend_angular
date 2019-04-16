import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isConnect : boolean;
  isSubscribe : boolean;
  isLogout : boolean ;

  constructor(private _router: Router) { }

  ngOnInit() {
    let router = this._router.url;
    if (router === '/connect') {
      this.isSubscribe = true ;
      this.isConnect = false ;
      this.isLogout = false ;
    } else if (router === '/subscribe') {
      this.isSubscribe = false ;
      this.isConnect = true ;
      this.isLogout = false ;
    } else if ((router === '/')) {
      this.isSubscribe = true ;
      this.isConnect = true ;
      this.isLogout = false ;
    } else {
      this.isSubscribe = false ;
      this.isConnect = false ;
      this.isLogout = true ;
    }

  }

}
