import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToDoService } from '../to-do-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  url: string = "https://localhost:7203/"
  LogForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private service: ToDoService, private router: Router, private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.url + "login/" + this.LogForm.value.username + "/" + this.LogForm.value.password);
    var link = this.url + "login/" + this.LogForm.value.username + "/" + this.LogForm.value.password;

    this.service.login(this.LogForm.value.username!, this.LogForm.value.password!).subscribe(res => {
      console.log(res);

    })
    // this.router.navigate(['/app-todo-list']);




  }

}
