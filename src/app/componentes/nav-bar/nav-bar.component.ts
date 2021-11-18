import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { User } from 'src/app/clases/user';
import { AuthGuard } from 'src/app/servicios/auth.guard';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isLogged: boolean = false;
  esAdmin: boolean = false;
  esEmp: boolean = false;

  public static updateUserStatus: Subject<boolean> = new Subject();


  constructor(private router: Router) {
    NavBarComponent.updateUserStatus.subscribe(res => {
      let user: any = JSON.parse(localStorage.getItem('user'));
      if (user) {
        this.isLogged = true;
        if (user.isAdmin) {
          this.esAdmin = true;
          this.esEmp = false;
        } else {
          this.esAdmin = false;
          this.esEmp = true;
        }
      }
      else {
        this.isLogged = false;
        this.esAdmin = false;
        this.esEmp = false;
      }

    })

  }

  ngOnInit(): void {
    let user: User = JSON.parse(localStorage.getItem('user'));

    if (user) {
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }

  }

  logOut() {
    this.isLogged = false;
    localStorage.removeItem('user')
    this.router.navigate(['/login']);
  }
}
