import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-subchild',
  templateUrl: './subchild.component.html',
  styleUrls: ['./subchild.component.css']
})
export class SubchildComponent implements OnInit {

  constructor(UserService: UserService) { }

  ngOnInit() {
  }

}
