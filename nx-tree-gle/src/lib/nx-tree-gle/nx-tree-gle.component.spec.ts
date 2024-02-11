import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NxTreeGleComponent } from './nx-tree-gle.component';

describe('NxTreeGleComponent', () => {
  let component: NxTreeGleComponent;
  let fixture: ComponentFixture<NxTreeGleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NxTreeGleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NxTreeGleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
