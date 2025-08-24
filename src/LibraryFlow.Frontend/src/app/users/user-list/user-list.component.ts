import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model'; // Verifique o caminho
import { UserService } from '../../services/user.service'; // Verifique o caminho

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }
}
