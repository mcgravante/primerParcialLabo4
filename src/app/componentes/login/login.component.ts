import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() isLogged: boolean = false;

  @Output() seLogueo: EventEmitter<any> = new EventEmitter<any>();

  public user: string = '';
  public password: string = '';

  constructor(private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  CompletarCamposAdmin() {
    this.user = "admin@gmail.com";
    this.password = "123456";
  }

  CompletarCamposEmpleado() {
    this.user = "empleado@gmail.com";
    this.password = "123456";
  }

  Entrar() {
    if (this.user == "admin@gmail.com") {
      this.toastr.success('Te logueaste como admin');
      this.isLogged = true;
      this.router.navigate(['/bienvenido']);
    }
    else if (this.user == "empleado@gmail.com") {
      this.toastr.success('Te logueaste como empleado');
      this.isLogged = true;
      this.router.navigate(['/bienvenido']);
    }
    else {
      this.toastr.error('Algo salió mal');
    }
  }
}
