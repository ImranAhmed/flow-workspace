import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ClarityModule, ClrVerticalNav } from '@clr/angular';
import { AppNavigation } from '@flow-workspace/utilities';
import { AppLayoutComponent } from './app-layout.component';

const getNavigationMenu = (): AppNavigation[] => {
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
      ],
    },
  ];
};

describe('AppLayoutComponent', () => {
  let component: AppLayoutComponent;
  let fixture: ComponentFixture<AppLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppLayoutComponent],
      imports: [BrowserAnimationsModule, ClarityModule, RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain main container', () => {
    const elements = fixture.nativeElement.querySelectorAll('clr-main-container.main-container');
    expect(elements.length).toBe(1);
  });

  describe('header', () => {
    it('should contain header', () => {
      const elements = fixture.nativeElement.querySelectorAll('clr-header.header-6');
      expect(elements.length).toBe(1);
    });

    it('should contain branding', () => {
      const elements = fixture.nativeElement.querySelectorAll('div.branding');
      expect(elements.length).toBe(1);
    });

    it('should contain header-actions', () => {
      const elements = fixture.nativeElement.querySelectorAll('div.header-actions');
      expect(elements.length).toBe(1);
    });
  });

  describe('without navigation', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(AppLayoutComponent);
      component = fixture.componentInstance;
      component.navigationMenu = null;
      fixture.detectChanges();
    });

    it('should match snapshot', () => {
      expect(fixture).toMatchSnapshot();
    });

    it('should not contain content container', () => {
      const elements = fixture.nativeElement.querySelectorAll('div.content-container');
      expect(elements.length).toBe(0);
    });
  });

  describe('with navigation', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(AppLayoutComponent);
      component = fixture.componentInstance;
      component.navigationMenu = getNavigationMenu();
      fixture.detectChanges();
    });

    it('should match snapshot', () => {
      expect(fixture).toMatchSnapshot();
    });

    it('should contain container', () => {
      const elements = fixture.nativeElement.querySelectorAll('div.content-container');
      expect(elements.length).toBe(1);
    });

    it('should contain vertival nav', () => {
      const dir = fixture.debugElement.query(By.directive(ClrVerticalNav));

      const nav = dir.injector.get(ClrVerticalNav);

      expect(nav).toBeDefined();
      expect(nav.collapsible).toBeTruthy();
      expect(nav.hasNavGroups).toBeTruthy();
      expect(fixture.nativeElement.querySelectorAll('clr-vertical-nav.nav-trigger--bottom').length).toBe(1);
    });
  });
});
