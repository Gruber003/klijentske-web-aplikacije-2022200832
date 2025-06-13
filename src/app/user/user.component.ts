import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CartModel } from '../../models/cart.model';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-user',
  imports: [NgIf, NgFor, MatButtonModule, MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  cart: CartModel[] = [];
i: number | undefined;

  constructor(private router: Router){
    if (!UserService.getActiveUser()){
      router.navigate(['/']);
      return;
    }
    this.cart = UserService.getActiveUser()!.cart;
  }

  public doChangePassword() {
    const newPassword = prompt('Enter your new Password');
    if (!newPassword) {
      alert('Password field can’t be empty');
      return;
    }

    const success = UserService.changePassword(newPassword);
    alert(success ? 'Password changed successfully' : 'Failed to change password');
  }

public removeFromCart(index: number) {
  const email = localStorage.getItem('active');
  if (!email) return;

  const users = UserService.retrieveUsers();

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      users[i].cart.splice(index, 1);     
      this.cart = [...users[i].cart];    
      localStorage.setItem('users', JSON.stringify(users)); 
    }
  }
}
  static saveUsers(users: UserModel[]): void {
    localStorage.setItem('users', JSON.stringify(users));
}
}