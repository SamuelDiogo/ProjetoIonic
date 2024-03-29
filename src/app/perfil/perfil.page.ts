import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }
  async logout1(){
    try{
      await this.authService.logout();
    }catch(error){
      console.error(error);
    }
  }
}
