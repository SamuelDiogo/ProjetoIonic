import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userLogin: User = {};
  public userRegister: User = {};
  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private loading: any,
  ) {}
  
  ngOnInit() {}

  login() {

  }

   async register() {
    await this.presentLoading();

    try {
      await this.authService.register(this.userRegister);
    } catch(error) {
      console.error(error);
    } finally {
      this.loading.dismiss();
    } 
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({message: 'Por favor Aguarde...'});
    return this.loading.present();
  }

}