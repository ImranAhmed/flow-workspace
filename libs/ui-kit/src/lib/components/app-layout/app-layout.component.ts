import { Component, Input, OnInit } from '@angular/core';
import { AppNavigation } from '@flow-workspace/utilities';

@Component({
  selector: 'ui-kit-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent implements OnInit {
  @Input() navigationMenu: AppNavigation[];

  activeApp: AppNavigation;
  activeAppId: string;
  activeUrl: string;

  ngOnInit(): void {
    if (this.navigationMenu) {
      this.activeApp = this.navigationMenu[0];
      this.activeAppId = this.activeApp.id;
    }
  }
}
