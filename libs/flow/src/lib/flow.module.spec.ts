import { async, TestBed } from '@angular/core/testing';
import { FlowModule } from './flow.module';

describe('FlowModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FlowModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FlowModule).toBeDefined();
  });
});
