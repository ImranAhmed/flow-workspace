import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClarityModule } from '@clr/angular';
import { AppLayoutComponent } from './app-layout.component';

describe('AppLayoutComponent', () => {
  let component: AppLayoutComponent;
  let fixture: ComponentFixture<AppLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppLayoutComponent],
      imports: [ClarityModule, RouterTestingModule],
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

  describe('Without Navigation', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(AppLayoutComponent);
      component = fixture.componentInstance;
      component.navigationMenu = null;
      fixture.detectChanges();
    });

    it('should not contain', () => {
      const elements = fixture.nativeElement.querySelectorAll('div.content-container');
      expect(elements.length).toBe(0);
    });
  });
});
