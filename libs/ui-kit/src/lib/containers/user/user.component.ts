import { Component } from '@angular/core';
import { User } from '@flow-workspace/common';

@Component({
  selector: 'ui-kit-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  user: User = {
    name: 'Imran Ahmed',
  };
}
