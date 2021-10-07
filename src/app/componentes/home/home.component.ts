import { Component, OnInit } from '@angular/core';
import { DatosGitService } from 'src/app/servicios/datos-git.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public html_url: string;
  public public_repos: number;
  public avatar_url: string;
  public login: string;

  constructor(private datosGitService: DatosGitService) { }

  ngOnInit(): void {
    this.datosGitService.getDatosGit().subscribe((datos: any) => {
      this.html_url = datos.html_url;
      this.public_repos = datos.public_repos;
      this.avatar_url = datos.avatar_url;
      this.login = datos.login;
    }
    )
  }

}
