import { async, TestBed } from '@angular/core/testing';
import { SwapClearModule } from './swap-clear.module';

describe('SwapClearModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SwapClearModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SwapClearModule).toBeDefined();
  });
});
