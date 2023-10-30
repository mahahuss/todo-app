import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { User } from './user.model'
@Injectable({
    providedIn:'root'
})
export class ToDoService {
    url:string="https://localhost:7203/"

    constructor(private http:HttpClient){}

    login(username:string, password:string){

        return this.http.get(this.url+"Login/"+username+"/"+password,);
    }
}
