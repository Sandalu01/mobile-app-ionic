import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private navController: NavController,private router:Router) {

  }

  ngOnInit() {

    
      // this.navController.navigateForward("./login");
      // this.router.navigateByUrl("/login");
      setTimeout(() => {
        this.router.navigateByUrl("/login");
      }, 1000);
      this.navController.navigateForward("./login");
    
  }

}
