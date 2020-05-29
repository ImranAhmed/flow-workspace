import { Component, Input, OnInit } from '@angular/core';
import { User } from '@flow-workspace/common';

@Component({
  selector: 'ui-kit-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User;

  ngOnInit(): void {}
}
