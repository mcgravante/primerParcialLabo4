import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/clases/user';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: string = '';
  public password: string = '';
  public isAdmin: boolean = false;


  constructor(private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  CompletarCamposAdmin() {
    this.user = "admin@gmail.com";
    this.password = "123456";
    this.isAdmin = true;
  }

  CompletarCamposEmpleado() {
    this.user = "empleado@gmail.com";
    this.password = "123456";
    this.isAdmin = false;
  }

  Entrar() {
    if (this.user == "admin@gmail.com") {
      this.toastr.success('Te logueaste como admin');
      let usuario: User = new User(this.user, this.password, this.isAdmin);
      localStorage.setItem('user', JSON.stringify(usuario));
      NavBarComponent.updateUserStatus.next(true);
      this.router.navigate(['/bienvenido']);
    }
    else if (this.user == "empleado@gmail.com") {
      this.toastr.success('Te logueaste como empleado');
      let usuario: User = new User(this.user, this.password, this.isAdmin);
      localStorage.setItem('user', JSON.stringify(usuario));
      NavBarComponent.updateUserStatus.next(true);
      this.router.navigate(['/bienvenido']);
    }
    else {
      this.toastr.error('Algo salió mal');
    }
  }
}
