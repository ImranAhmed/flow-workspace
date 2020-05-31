import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';
import { AppLayoutComponent, UiKitModule } from '@flow-workspace/ui-kit';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [ClarityModule, UiKitModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  fit('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should contain app layout', () => {
    const dir = fixture.debugElement.query(By.directive(AppLayoutComponent));

    const layout = dir.injector.get(AppLayoutComponent);

    expect(layout).toBeDefined();
  });
});
