import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { array } from '@storybook/addon-knobs';
import { AppLayoutComponent } from './app-layout.component';

const getNavigationMenu = (): any[] => {
  return [
    {
      appName: 'App A',
      id: 'app-a',
      icon: 'objects',
      href: '',
      navigation: [
        {
          name: 'Section A',
          id: 'section-a',
          icon: 'scatter-plot',
          href: '',
          children: [
            {
              name: 'Section A1',
              id: 'section-a1',
              href: 'section-a1',
            },
            {
              name: 'Section A2',
              id: 'section-a2',
              href: '',
            },
          ],
        },
        {
          name: 'Section B',
          id: 'section-b',
          icon: 'box-plot',
          href: '',
          children: [
            {
              name: 'Section B1',
              id: 'section-b1',
              href: '',
            },
            {
              name: 'Section B2',
              id: 'section-b2',
              href: '',
            },
          ],
        },
      ],
    },
  ];
};

const getModuleMetadata = () => {
  return {
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      ClarityModule,
      RouterModule.forRoot([], { useHash: true }),
    ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  };
};
export default {
  title: 'AppLayoutComponent',
};

export const withoutNavigation = () => ({
  moduleMetadata: getModuleMetadata(),
  component: AppLayoutComponent,
  props: {
    navigationMenu: array('navigationMenu', null),
  },
});
export const withNavigation = () => ({
  moduleMetadata: getModuleMetadata(),
  component: AppLayoutComponent,
  props: {
    navigationMenu: array('navigationMenu', getNavigationMenu()),
  },
});
