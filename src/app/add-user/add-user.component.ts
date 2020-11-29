import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UserService } from '../services/userservices';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent  {

  users: User | undefined;

constructor(private userService:UserService){

}

  addUser(myform:any){

   let data=myform.value;

   this.users=new User(0,data.UserName,data.UserType,data.UserPassword);
   let observable:Observable<User>= this.userService.addUser(this.users);
   observable.subscribe(
     (users:User)=>this.users=users,
     err=>console.log("err is "+err.message)
   )
   console.log("received="+data.UserName+" "+data.UserType+" "+data.UserPassword);
   myform.reset();
  }
}
