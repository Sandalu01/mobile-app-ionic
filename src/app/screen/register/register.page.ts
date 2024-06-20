import { Component, OnInit } from '@angular/core';
import { UserServiceService} from 'src/app/services/user-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email!:string;
  password!:string;
  name!:string;

  constructor(private userservice:UserServiceService,private route:Router) { }

  ngOnInit() {
  }
  Create(){
    if(this.email && this.password && this.name){
      
      console.log(this.email);
      console.log(this.password);
      console.log(this.name);

      this.userservice.Register(this.email,this.password).then(registerdata=>{
        this.userservice.createuser(this.email,this.name).then(createdata=>{
          console.log(createdata);
          alert("registered successfully");
          this.route.navigateByUrl("/dashboard");

        }).catch(error=>{
          console.log(error);
          alert("can't stored user in database");
          
        })
      }).catch(error=>{
        console.log(error);
        alert("registered unsuccessfully");
      })

    }
    else{
    alert("Please enter both email and password");

  }
}
}
