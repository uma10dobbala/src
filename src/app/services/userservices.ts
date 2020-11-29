import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable()
export class UserService{
  [x: string]: any;

baseUrl="http://localhost:8585/"

constructor(private http:HttpClient){

}

    addUser(users:User):Observable<User>
    {
        const url=this.baseUrl+"/signUp";
        let requestData={userName:users.UserName,userType:users.UserType,userPassword:users.UserPassword};
        let observable:Observable<User>=this.http.post<User>(url,requestData);
        return observable;
    }



}